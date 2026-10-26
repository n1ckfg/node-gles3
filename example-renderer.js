/**
 * glTF Mesh Renderer (node-gles3 port)
 * ====================================
 * Progressive OpenGL 3.3 / WebGL2 BVH Ray-Tracer for a Single Loaded Triangle Mesh
 *
 * Ported from renderer.html:
 * Loads a binary glTF (default: meshes/elephant.glb, or pass a .glb path via CLI,
 * including Draco-compressed .glb files) and traces it on an analytic shadow-catching
 * ground plane under a sun-and-sky rig. A median-split BVH is built on the CPU,
 * packed into RGBA32F textures, and traversed per pixel in GLSL; each frame adds one
 * jittered sample (sub-pixel AA, solar-disc soft shadow, cosine AO) to a running
 * HDR accumulation buffer, which is ACES tone-mapped for display.
 *
 * Controls:
 * - Left-click + drag: Orbit camera
 * - Resize window: Automatically resizes accumulation buffer and re-frames mesh
 * - ESC: Quit
 */

const fs = require("fs");
const path = require("path");
const gl = require("./gles3.js");
const glfw = require("./glfw3.js");
const glutils = require("./glutils.js");

const PI = Math.PI;
const DEFAULT_MODEL_PATH = path.join(__dirname, "meshes", "elephant.glb");

// Orbit camera (degrees) & framing
const CAM_VFOV_DEG = 30.0;
const CAM_FRAME_FILL = 0.80;
const SUN_AZIMUTH_REL_DEG = 58.0;
const SUN_ELEVATION_DEG = 46.0;
const MESH_DEFAULT_ALBEDO = [0.18, 0.18, 0.18];

const MAX_SPP = 256;
const TEX_W = 2048;

let camYawDeg = -142.0;
let camPitchDeg = 11.0;

// ============================================================================
// 1. VECTOR & MATRIX UTILITIES
// ============================================================================

function clamp(x, lo, hi) {
	return x < lo ? lo : x > hi ? hi : x;
}

function cross3(a, b) {
	return [
		a[1] * b[2] - a[2] * b[1],
		a[2] * b[0] - a[0] * b[2],
		a[0] * b[1] - a[1] * b[0],
	];
}

function normalize3(v) {
	const l = Math.hypot(v[0], v[1], v[2]) || 1.0;
	return [v[0] / l, v[1] / l, v[2] / l];
}

// Column-major 4x4 matrices, as stored by glTF
function mat4Identity() {
	return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}

function mat4Mul(a, b) {
	const out = new Array(16);
	for (let c = 0; c < 4; c++) {
		for (let r = 0; r < 4; r++) {
			let s = 0;
			for (let k = 0; k < 4; k++) s += a[k * 4 + r] * b[c * 4 + k];
			out[c * 4 + r] = s;
		}
	}
	return out;
}

function mat4FromTrs(t, q, s) {
	const [x, y, z, w] = q;
	const [sx, sy, sz] = s;
	return [
		(1 - 2 * (y * y + z * z)) * sx, 2 * (x * y + z * w) * sx, 2 * (x * z - y * w) * sx, 0,
		2 * (x * y - z * w) * sy, (1 - 2 * (x * x + z * z)) * sy, 2 * (y * z + x * w) * sy, 0,
		2 * (x * z + y * w) * sz, 2 * (y * z - x * w) * sz, (1 - 2 * (x * x + y * y)) * sz, 0,
		t[0], t[1], t[2], 1,
	];
}

// Cofactor matrix of the upper 3x3: transforms normals correctly under non-uniform scale
function normalMatrix(m) {
	const a = [m[0], m[1], m[2]];
	const b = [m[4], m[5], m[6]];
	const c = [m[8], m[9], m[10]];
	return [cross3(b, c), cross3(c, a), cross3(a, b)];
}

// ============================================================================
// 2. BINARY glTF (.glb) LOADER (WITH DRACO SUPPORT)
// ============================================================================

const GLTF_COMPONENTS = {
	5120: ["getInt8", 1, 127],
	5121: ["getUint8", 1, 255],
	5122: ["getInt16", 2, 32767],
	5123: ["getUint16", 2, 65535],
	5125: ["getUint32", 4, 0],
	5126: ["getFloat32", 4, 0],
};
const GLTF_TYPE_SIZES = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT4: 16 };

function readAccessor(gltf, bin, index) {
	const acc = gltf.accessors[index];
	const n = GLTF_TYPE_SIZES[acc.type];
	const out = new Float32Array(acc.count * n);
	if (acc.bufferView === undefined) return { data: out, n };
	if (acc.sparse) console.warn("glTF sparse accessors are not supported; using base values");

	const bv = gltf.bufferViews[acc.bufferView];
	const [getter, size, normMax] = GLTF_COMPONENTS[acc.componentType];
	const stride = bv.byteStride || size * n;
	const base = bin.byteOffset + (bv.byteOffset || 0) + (acc.byteOffset || 0);
	const dv = new DataView(bin.buffer);
	const norm = acc.normalized && normMax > 0;
	for (let i = 0; i < acc.count; i++) {
		const o = base + i * stride;
		for (let c = 0; c < n; c++) {
			let v = dv[getter](o + c * size, true);
			if (norm) v = Math.max(v / normMax, -1.0);
			out[i * n + c] = v;
		}
	}
	return { data: out, n };
}

/**
 * Parse a .glb buffer into a flat triangle soup in world space:
 * { positions, normals, colors } — each a Float32Array of 9 floats per triangle.
 * Node transforms are applied, colors are linear (COLOR_0 x baseColorFactor), and
 * missing normals are rebuilt from area-weighted face normals.
 */
function parseGlb(buffer) {
	const buf = Buffer.isBuffer(buffer) ? buffer : Buffer.from(buffer);
	const arrayBuffer = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
	const dv = new DataView(arrayBuffer);
	if (dv.getUint32(0, true) !== 0x46546c67) throw new Error("not a binary glTF (.glb) file");

	let gltf = null;
	let bin = null;
	let off = 12;
	while (off + 8 <= dv.byteLength) {
		const len = dv.getUint32(off, true);
		const type = dv.getUint32(off + 4, true);
		if (type === 0x4e4f534a) {
			gltf = JSON.parse(Buffer.from(arrayBuffer, off + 8, len).toString("utf8"));
		} else if (type === 0x004e4942) {
			bin = new Uint8Array(arrayBuffer, off + 8, len);
		}
		off += 8 + len;
	}
	if (!gltf) throw new Error("glb has no JSON chunk");

	const outP = [];
	const outN = [];
	const outC = [];

	function emitPrimitive(prim, world) {
		if ((prim.mode ?? 4) !== 4) return;
		const attrs = prim.attributes;
		if (attrs.POSITION === undefined) return;

		let pos, nrm, col, idx;
		if (prim.extensions && prim.extensions.KHR_draco_mesh_compression) {
			const decoded = glutils.geomFromGLTF(buf);
			pos = decoded.vertices;
			nrm = decoded.normals || null;
			col = decoded.colors ? { data: decoded.colors, n: 4 } : null;
			idx = decoded.indices;
		} else {
			pos = readAccessor(gltf, bin, attrs.POSITION).data;
			nrm = attrs.NORMAL !== undefined ? readAccessor(gltf, bin, attrs.NORMAL).data : null;
			col = attrs.COLOR_0 !== undefined ? readAccessor(gltf, bin, attrs.COLOR_0) : null;
			if (prim.indices !== undefined) {
				idx = readAccessor(gltf, bin, prim.indices).data;
			}
		}

		const vCount = pos.length / 3;
		if (!idx) {
			idx = new Float32Array(vCount);
			for (let i = 0; i < vCount; i++) idx[i] = i;
		}

		const mat = prim.material !== undefined && gltf.materials ? gltf.materials[prim.material] : null;
		const pbr = mat && mat.pbrMetallicRoughness;
		const factor = pbr && pbr.baseColorFactor
			? pbr.baseColorFactor
			: (mat || col) ? [1, 1, 1, 1] : [...MESH_DEFAULT_ALBEDO, 1];
		if (pbr && pbr.baseColorTexture) console.warn("glTF base color textures are ignored; using baseColorFactor");

		// World-space positions & normals
		const wp = new Float32Array(vCount * 3);
		for (let i = 0; i < vCount; i++) {
			const x = pos[i * 3], y = pos[i * 3 + 1], z = pos[i * 3 + 2];
			for (let r = 0; r < 3; r++) wp[i * 3 + r] = world[r] * x + world[4 + r] * y + world[8 + r] * z + world[12 + r];
		}
		const wn = new Float32Array(vCount * 3);
		if (nrm) {
			const nm = normalMatrix(world);
			for (let i = 0; i < vCount; i++) {
				const v = normalize3([
					nm[0][0] * nrm[i * 3] + nm[1][0] * nrm[i * 3 + 1] + nm[2][0] * nrm[i * 3 + 2],
					nm[0][1] * nrm[i * 3] + nm[1][1] * nrm[i * 3 + 1] + nm[2][1] * nrm[i * 3 + 2],
					nm[0][2] * nrm[i * 3] + nm[1][2] * nrm[i * 3 + 1] + nm[2][2] * nrm[i * 3 + 2],
				]);
				wn.set(v, i * 3);
			}
		} else {
			for (let t = 0; t + 2 < idx.length; t += 3) {
				const a = idx[t] * 3, b = idx[t + 1] * 3, c = idx[t + 2] * 3;
				const fn = cross3(
					[wp[b] - wp[a], wp[b + 1] - wp[a + 1], wp[b + 2] - wp[a + 2]],
					[wp[c] - wp[a], wp[c + 1] - wp[a + 1], wp[c + 2] - wp[a + 2]]
				);
				for (const k of [a, b, c]) {
					wn[k] += fn[0];
					wn[k + 1] += fn[1];
					wn[k + 2] += fn[2];
				}
			}
			for (let i = 0; i < vCount; i++) wn.set(normalize3([wn[i * 3], wn[i * 3 + 1], wn[i * 3 + 2]]), i * 3);
		}

		for (let t = 0; t + 2 < idx.length; t += 3) {
			for (let k = 0; k < 3; k++) {
				const vi = idx[t + k];
				outP.push(wp[vi * 3], wp[vi * 3 + 1], wp[vi * 3 + 2]);
				outN.push(wn[vi * 3], wn[vi * 3 + 1], wn[vi * 3 + 2]);
				for (let ch = 0; ch < 3; ch++) {
					const cv = col ? col.data[vi * col.n + ch] : 1.0;
					outC.push(cv * factor[ch]);
				}
			}
		}
	}

	function visit(nodeIndex, parent) {
		const node = gltf.nodes[nodeIndex];
		const local = node.matrix
			? node.matrix.slice()
			: mat4FromTrs(node.translation || [0, 0, 0], node.rotation || [0, 0, 0, 1], node.scale || [1, 1, 1]);
		const world = mat4Mul(parent, local);
		if (node.mesh !== undefined) {
			for (const prim of gltf.meshes[node.mesh].primitives) emitPrimitive(prim, world);
		}
		for (const child of node.children || []) visit(child, world);
	}

	const scene = gltf.scenes ? gltf.scenes[gltf.scene ?? 0] : null;
	const roots = scene ? scene.nodes : (gltf.nodes || []).map((_, i) => i);
	for (const r of roots) visit(r, mat4Identity());
	if (outP.length === 0) throw new Error("glb contains no triangle meshes");

	return {
		positions: new Float32Array(outP),
		normals: new Float32Array(outN),
		colors: new Float32Array(outC),
	};
}

/** Center over the origin, rest on Y = 0 and scale to unit bounding radius (in place). */
function normalizeMeshToStudio(mesh) {
	const p = mesh.positions;
	const lo = [Infinity, Infinity, Infinity];
	const hi = [-Infinity, -Infinity, -Infinity];
	for (let i = 0; i < p.length; i += 3) {
		for (let c = 0; c < 3; c++) {
			lo[c] = Math.min(lo[c], p[i + c]);
			hi[c] = Math.max(hi[c], p[i + c]);
		}
	}
	const shift = [0.5 * (lo[0] + hi[0]), lo[1], 0.5 * (lo[2] + hi[2])];
	const midY = 0.5 * (hi[1] - lo[1]);
	let radius = 0;
	for (let i = 0; i < p.length; i += 3) {
		p[i] -= shift[0];
		p[i + 1] -= shift[1];
		p[i + 2] -= shift[2];
		radius = Math.max(radius, Math.hypot(p[i], p[i + 1] - midY, p[i + 2]));
	}
	const s = 1.0 / Math.max(radius, 1e-12);
	for (let i = 0; i < p.length; i++) p[i] *= s;
	return mesh;
}

// ============================================================================
// 3. TRIANGLE BVH CONSTRUCTION & TEXTURE PACKING
// ============================================================================

/**
 * Median-split BVH in depth-first order (a node's left child is always node + 1).
 * Node texels: [bmin.xyz, leaf ? triStart : rightChild], [bmax.xyz, leaf ? triCount : -(axis + 1)].
 * Triangle texels: v0, e1, e2. Attribute texels: n0, n1, n2, c0, c1, c2.
 */
function buildBvhTextures(mesh, leafSize = 4) {
	const P = mesh.positions;
	const triCount = P.length / 9;
	const cen = new Float32Array(triCount * 3);
	const tlo = new Float32Array(triCount * 3);
	const thi = new Float32Array(triCount * 3);
	for (let t = 0; t < triCount; t++) {
		for (let c = 0; c < 3; c++) {
			const a = P[t * 9 + c], b = P[t * 9 + 3 + c], d = P[t * 9 + 6 + c];
			cen[t * 3 + c] = (a + b + d) / 3;
			tlo[t * 3 + c] = Math.min(a, b, d);
			thi[t * 3 + c] = Math.max(a, b, d);
		}
	}

	const nodes = [];
	const order = [];
	function build(ids) {
		const node = nodes.length;
		const bmin = [Infinity, Infinity, Infinity];
		const bmax = [-Infinity, -Infinity, -Infinity];
		const cmin = [Infinity, Infinity, Infinity];
		const cmax = [-Infinity, -Infinity, -Infinity];
		for (const t of ids) {
			for (let c = 0; c < 3; c++) {
				bmin[c] = Math.min(bmin[c], tlo[t * 3 + c]);
				bmax[c] = Math.max(bmax[c], thi[t * 3 + c]);
				cmin[c] = Math.min(cmin[c], cen[t * 3 + c]);
				cmax[c] = Math.max(cmax[c], cen[t * 3 + c]);
			}
		}
		const rec = { bmin, bmax, a: 0, b: 0 };
		nodes.push(rec);
		if (ids.length <= leafSize) {
			rec.a = order.length;
			rec.b = ids.length;
			for (const t of ids) order.push(t);
			return node;
		}
		const ext = [cmax[0] - cmin[0], cmax[1] - cmin[1], cmax[2] - cmin[2]];
		const axis = ext[0] >= ext[1] && ext[0] >= ext[2] ? 0 : ext[1] >= ext[2] ? 1 : 2;
		ids.sort((i, j) => cen[i * 3 + axis] - cen[j * 3 + axis]);
		const half = ids.length >> 1;
		build(ids.slice(0, half));
		rec.a = build(ids.slice(half));
		rec.b = -(axis + 1);
		return node;
	}
	build(Array.from({ length: triCount }, (_, i) => i));

	function packed(texels) {
		const h = Math.max(1, Math.ceil(texels / TEX_W));
		return { data: new Float32Array(TEX_W * h * 4), w: TEX_W, h };
	}

	const nodeTex = packed(nodes.length * 2);
	nodes.forEach((n, i) => {
		nodeTex.data.set([n.bmin[0], n.bmin[1], n.bmin[2], n.a, n.bmax[0], n.bmax[1], n.bmax[2], n.b], i * 8);
	});

	const triTex = packed(triCount * 3);
	const attrTex = packed(triCount * 6);
	order.forEach((t, k) => {
		const v = (i, c) => P[t * 9 + i * 3 + c];
		triTex.data.set([
			v(0, 0), v(0, 1), v(0, 2), 0,
			v(1, 0) - v(0, 0), v(1, 1) - v(0, 1), v(1, 2) - v(0, 2), 0,
			v(2, 0) - v(0, 0), v(2, 1) - v(0, 1), v(2, 2) - v(0, 2), 0,
		], k * 12);
		for (let i = 0; i < 3; i++) {
			attrTex.data.set([...mesh.normals.subarray(t * 9 + i * 3, t * 9 + i * 3 + 3), 0], k * 24 + i * 4);
			attrTex.data.set([...mesh.colors.subarray(t * 9 + i * 3, t * 9 + i * 3 + 3), 0], k * 24 + 12 + i * 4);
		}
	});

	return { nodeTex, triTex, attrTex, triCount, nodeCount: nodes.length };
}

// ============================================================================
// 4. ORBIT CAMERA & AUTOMATIC FRAMING
// ============================================================================

function buildCameraBasis() {
	const yaw = camYawDeg * PI / 180;
	const pitch = camPitchDeg * PI / 180;
	const forward = [Math.sin(yaw) * Math.cos(pitch), -Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch)];
	// Right-handed: screen-right = forward x worldUp (matches three.js PerspectiveCamera)
	const right = normalize3(cross3(forward, [0, 1, 0]));
	const up = cross3(right, forward);
	return { forward, right, up };
}

/** Fit every vertex inside CAM_FRAME_FILL of the frustum and center the silhouette. */
function frameCameraToMesh(positions, aspect) {
	const { forward, right, up } = buildCameraBasis();
	const tanV = Math.tan(CAM_VFOV_DEG * PI / 360) * CAM_FRAME_FILL;
	const tanH = tanV * aspect;
	const lo = [Infinity, Infinity, Infinity];
	const hi = [-Infinity, -Infinity, -Infinity];
	for (let i = 0; i < positions.length; i += 3) {
		for (let c = 0; c < 3; c++) {
			lo[c] = Math.min(lo[c], positions[i + c]);
			hi[c] = Math.max(hi[c], positions[i + c]);
		}
	}
	let target = [0.5 * (lo[0] + hi[0]), 0.5 * (lo[1] + hi[1]), 0.5 * (lo[2] + hi[2])];
	let dist = 3.0;
	for (let iter = 0; iter < 4; iter++) {
		let dMax = -Infinity;
		for (let i = 0; i < positions.length; i += 3) {
			const rx = positions[i] - target[0], ry = positions[i + 1] - target[1], rz = positions[i + 2] - target[2];
			const x = rx * right[0] + ry * right[1] + rz * right[2];
			const y = rx * up[0] + ry * up[1] + rz * up[2];
			const z = rx * forward[0] + ry * forward[1] + rz * forward[2];
			dMax = Math.max(dMax, Math.max(Math.abs(x) / tanH, Math.abs(y) / tanV) - z);
		}
		dist = dMax;
		let sxMin = Infinity, sxMax = -Infinity, syMin = Infinity, syMax = -Infinity;
		for (let i = 0; i < positions.length; i += 3) {
			const rx = positions[i] - target[0], ry = positions[i + 1] - target[1], rz = positions[i + 2] - target[2];
			const z = dist + rx * forward[0] + ry * forward[1] + rz * forward[2];
			const sx = (rx * right[0] + ry * right[1] + rz * right[2]) / z;
			const sy = (rx * up[0] + ry * up[1] + rz * up[2]) / z;
			sxMin = Math.min(sxMin, sx); sxMax = Math.max(sxMax, sx);
			syMin = Math.min(syMin, sy); syMax = Math.max(syMax, sy);
		}
		const ox = 0.5 * (sxMax + sxMin) * dist;
		const oy = 0.5 * (syMax + syMin) * dist;
		target = [0, 1, 2].map((c) => target[c] + right[c] * ox + up[c] * oy);
	}
	return {
		pos: [0, 1, 2].map((c) => target[c] - forward[c] * dist),
		forward,
		right,
		up,
		tanHalfV: Math.tan(CAM_VFOV_DEG * PI / 360),
	};
}

/** World-space unit vector toward the sun, orbiting with the camera yaw. */
function sunDirection() {
	const az = (camYawDeg + 180 + SUN_AZIMUTH_REL_DEG) * PI / 180;
	const el = SUN_ELEVATION_DEG * PI / 180;
	return [Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)];
}

// ============================================================================
// 5. GLSL: BVH TRAVERSAL, SUN & SKY SHADING, PROGRESSIVE ACCUMULATION
// ============================================================================

const VS_FULLSCREEN = `#version 330
void main() {
	float x = float((gl_VertexID & 1) << 2) - 1.0;
	float y = float((gl_VertexID & 2) << 1) - 1.0;
	gl_Position = vec4(x, y, 0.0, 1.0);
}
`;

const FS_TRACE = `#version 330

const float PI = 3.14159265358979323846;
const float INV_PI = 0.3183098861837907;
const float T_INF = 1e30;
const int TEX_W_SHIFT = 11;
const int TEX_W_MASK = 2047;
const int STACK_SIZE = 40;

const int KIND_MISS = 0;
const int KIND_GROUND = 1;
const int KIND_MESH = 2;

const float SUN_TAN_RADIUS = 0.038416; // tan(2.2 deg)
const vec3 SUN_RADIANCE = vec3(3.55, 3.20, 2.70);
const vec3 SKY_ZENITH_RAD = vec3(0.30, 0.40, 0.58);
const vec3 SKY_HORIZON_RAD = vec3(0.66, 0.64, 0.62);
const vec3 GROUND_ALBEDO = vec3(0.46, 0.43, 0.39);
const float GROUND_ROUGHNESS = 0.92;
const float GROUND_FADE_START = 2.4;
const float GROUND_FADE_END = 7.5;
const float MESH_ROUGHNESS = 0.58;
const float MESH_F0 = 0.035;
const float AO_MAX_DIST = 0.55;

uniform sampler2D u_nodeTex;
uniform sampler2D u_triTex;
uniform sampler2D u_attrTex;
uniform sampler2D u_accumTex;
uniform vec2 u_res;
uniform int u_frame;
uniform vec3 u_camPos;
uniform vec3 u_camF;
uniform vec3 u_camR;
uniform vec3 u_camU;
uniform float u_tanHalfV;
uniform vec3 u_sunDir;
out vec4 outAccum;

// ---------- Random numbers (PCG hash) ----------
uint rngState;

uint pcgHash(uint v) {
	uint s = v * 747796405u + 2891336453u;
	uint w = ((s >> ((s >> 28u) + 4u)) ^ s) * 277803737u;
	return (w >> 22u) ^ w;
}

float rand01() {
	rngState = pcgHash(rngState);
	return float(rngState) * (1.0 / 4294967296.0);
}

// ---------- Math & microfacet BRDF ----------
float saturate(float x) {
	return clamp(x, 0.0, 1.0);
}

vec3 schlickFresnel(float cosTheta, vec3 f0) {
	float c = 1.0 - saturate(cosTheta);
	float c2 = c * c;
	return f0 + (1.0 - f0) * (c2 * c2 * c);
}

float ggxIsotropicD(float nDotH, float roughness) {
	float alpha = max(roughness * roughness, 0.0012);
	float a2 = alpha * alpha;
	float c2 = saturate(nDotH);
	c2 *= c2;
	float denom = c2 * (a2 - 1.0) + 1.0;
	return a2 / max(PI * denom * denom, 1e-10);
}

float smithGgxG(float nDotV, float nDotL, float roughness) {
	float alpha = max(roughness * roughness, 0.0012);
	float a2 = alpha * alpha;
	float nv = clamp(nDotV, 1e-4, 1.0);
	float nl = clamp(nDotL, 1e-4, 1.0);
	float gv = nl * sqrt(nv * nv * (1.0 - a2) + a2);
	float gl = nv * sqrt(nl * nl * (1.0 - a2) + a2);
	return 0.5 / max(gv + gl, 1e-8);
}

float orenNayarDiffuse(vec3 n, vec3 v, vec3 l, float nDotL, float nDotV, float roughness) {
	float sigma2 = (roughness * 0.65) * (roughness * 0.65);
	float aOn = 1.0 - 0.5 * (sigma2 / (sigma2 + 0.33));
	float bOn = 0.45 * (sigma2 / (sigma2 + 0.09));
	vec3 vPerp = v - n * nDotV;
	vec3 lPerp = l - n * nDotL;
	float cosPhiDiff = max(0.0, dot(vPerp, lPerp) / max(length(vPerp) * length(lPerp), 1e-5));
	float sinThetaI = sqrt(max(0.0, 1.0 - nDotL * nDotL));
	float sinThetaR = sqrt(max(0.0, 1.0 - nDotV * nDotV));
	float sinAlpha = max(sinThetaI, sinThetaR);
	float tanBeta = min(sinThetaI / max(nDotL, 1e-4), sinThetaR / max(nDotV, 1e-4));
	return aOn + bOn * cosPhiDiff * sinAlpha * tanBeta;
}

// Cook-Torrance GGX specular + Oren-Nayar diffuse, times N.L
vec3 cookTorranceBrdf(vec3 n, vec3 v, vec3 l, vec3 albedo, float roughness, vec3 f0) {
	vec3 h = normalize(v + l);
	float nDotL = saturate(dot(n, l));
	float nDotV = clamp(dot(n, v), 1e-4, 1.0);
	float nDotH = saturate(dot(n, h));
	float vDotH = saturate(dot(v, h));
	vec3 f = schlickFresnel(vDotH, f0);
	vec3 spec = ggxIsotropicD(nDotH, roughness) * smithGgxG(nDotV, nDotL, roughness) * nDotL * f;
	vec3 diff = (1.0 - f) * albedo * INV_PI * nDotL * orenNayarDiffuse(n, v, l, nDotL, nDotV, roughness);
	return diff + spec;
}

// Branchless Duff et al. (2017) tangent frame
void orthonormalBasis(vec3 n, out vec3 t, out vec3 b) {
	float s = n.z >= 0.0 ? 1.0 : -1.0;
	float a = -1.0 / (s + n.z);
	float bb = n.x * n.y * a;
	t = vec3(1.0 + s * n.x * n.x * a, s * bb, -s * n.x);
	b = vec3(bb, s + n.y * n.y * a, -n.y);
}

// ---------- BVH traversal ----------
vec4 fetchTexel(sampler2D tex, int i) {
	return texelFetch(tex, ivec2(i & TEX_W_MASK, i >> TEX_W_SHIFT), 0);
}

bool hitAabb(vec3 ro, vec3 invD, vec3 bmin, vec3 bmax, float tMax, out float tNear) {
	vec3 ta = (bmin - ro) * invD;
	vec3 tb = (bmax - ro) * invD;
	vec3 tLo = min(ta, tb);
	vec3 tHi = max(ta, tb);
	tNear = max(max(tLo.x, tLo.y), max(tLo.z, 0.0));
	float tFar = min(min(tHi.x, tHi.y), tHi.z);
	return tNear <= tFar && tNear < tMax;
}

struct MeshHit {
	float t;
	int tri;
	vec2 bary;
};

MeshHit traceMesh(vec3 ro, vec3 rd, float tMax, bool anyHit) {
	MeshHit h;
	h.t = tMax;
	h.tri = -1;
	h.bary = vec2(0.0);

	vec3 dSign = mix(vec3(-1.0), vec3(1.0), greaterThanEqual(rd, vec3(0.0)));
	vec3 invD = 1.0 / (dSign * max(abs(rd), vec3(1e-9)));

	float tRoot;
	if (!hitAabb(ro, invD, fetchTexel(u_nodeTex, 0).xyz, fetchTexel(u_nodeTex, 1).xyz, h.t, tRoot)) return h;

	int stack[STACK_SIZE];
	float stackT[STACK_SIZE];
	int sp = 0;
	int node = 0;
	for (int iter = 0; iter < 8192; iter++) {
		vec4 na = fetchTexel(u_nodeTex, node * 2);
		vec4 nb = fetchTexel(u_nodeTex, node * 2 + 1);
		int count = int(nb.w);
		if (count > 0) {
			int start = int(na.w);
			for (int k = 0; k < count; k++) {
				int ti = start + k;
				vec3 v0 = fetchTexel(u_triTex, ti * 3).xyz;
				vec3 e1 = fetchTexel(u_triTex, ti * 3 + 1).xyz;
				vec3 e2 = fetchTexel(u_triTex, ti * 3 + 2).xyz;
				// Moller-Trumbore
				vec3 p = cross(rd, e2);
				float det = dot(e1, p);
				if (abs(det) < 1e-14) continue;
				float invDet = 1.0 / det;
				vec3 s = ro - v0;
				float u = dot(s, p) * invDet;
				if (u < 0.0 || u > 1.0) continue;
				vec3 q = cross(s, e1);
				float v = dot(rd, q) * invDet;
				if (v < 0.0 || u + v > 1.0) continue;
				float t = dot(e2, q) * invDet;
				if (t > 1e-5 && t < h.t) {
					h.t = t;
					h.tri = ti;
					h.bary = vec2(u, v);
					if (anyHit) return h;
				}
			}
		} else {
			int l = node + 1;
			int r = int(na.w);
			float tl;
			float tr;
			bool hl = hitAabb(ro, invD, fetchTexel(u_nodeTex, l * 2).xyz, fetchTexel(u_nodeTex, l * 2 + 1).xyz, h.t, tl);
			bool hr = hitAabb(ro, invD, fetchTexel(u_nodeTex, r * 2).xyz, fetchTexel(u_nodeTex, r * 2 + 1).xyz, h.t, tr);
			if (hl && hr) {
				bool leftFirst = tl <= tr;
				if (sp < STACK_SIZE) {
					stack[sp] = leftFirst ? r : l;
					stackT[sp] = leftFirst ? tr : tl;
					sp++;
				}
				node = leftFirst ? l : r;
				continue;
			}
			if (hl) { node = l; continue; }
			if (hr) { node = r; continue; }
		}
		// Pop the nearest still-relevant deferred node
		bool found = false;
		while (sp > 0) {
			sp--;
			if (stackT[sp] < h.t) {
				node = stack[sp];
				found = true;
				break;
			}
		}
		if (!found) break;
	}
	return h;
}

// ---------- Scene: mesh + Y = 0 ground plane ----------
struct SurfHit {
	int kind;
	float t;
	vec3 pos;
	vec3 posOffset;
	vec3 n;
	vec3 ng;
	vec3 albedo;
	float roughness;
	float f0;
};

SurfHit traceScene(vec3 ro, vec3 rd) {
	SurfHit s;
	s.kind = KIND_MISS;
	s.n = vec3(0.0, 1.0, 0.0);
	s.ng = s.n;
	s.albedo = GROUND_ALBEDO;
	s.roughness = GROUND_ROUGHNESS;
	s.f0 = 0.03;

	float tGround = (rd.y < -1e-9 && ro.y > 0.0) ? -ro.y / rd.y : T_INF;
	MeshHit mh = traceMesh(ro, rd, tGround, false);
	s.t = mh.t;

	if (mh.tri >= 0) {
		s.kind = KIND_MESH;
		int ti = mh.tri;
		float w1 = mh.bary.x;
		float w2 = mh.bary.y;
		float w0 = 1.0 - w1 - w2;
		vec3 p = ro + rd * mh.t;

		vec3 v0 = fetchTexel(u_triTex, ti * 3).xyz;
		vec3 e1 = fetchTexel(u_triTex, ti * 3 + 1).xyz;
		vec3 e2 = fetchTexel(u_triTex, ti * 3 + 2).xyz;
		vec3 nv0 = fetchTexel(u_attrTex, ti * 6).xyz;
		vec3 nv1 = fetchTexel(u_attrTex, ti * 6 + 1).xyz;
		vec3 nv2 = fetchTexel(u_attrTex, ti * 6 + 2).xyz;
		vec3 ns = normalize(w0 * nv0 + w1 * nv1 + w2 * nv2);
		vec3 ng = normalize(cross(e1, e2));
		// Face the shading normal toward the viewer, then the geometric normal toward it
		if (dot(ns, rd) > 0.0) ns = -ns;
		if (dot(ng, ns) < 0.0) ng = -ng;

		// Hanika (2021) shadow-terminator fix: lift secondary-ray origins onto the
		// curved surface implied by the vertex normals.
		vec3 lift = vec3(0.0);
		vec3 nA = dot(nv0, ns) < 0.0 ? -nv0 : nv0;
		vec3 nB = dot(nv1, ns) < 0.0 ? -nv1 : nv1;
		vec3 nC = dot(nv2, ns) < 0.0 ? -nv2 : nv2;
		lift -= w0 * min(dot(p - v0, nA), 0.0) * nA;
		lift -= w1 * min(dot(p - (v0 + e1), nB), 0.0) * nB;
		lift -= w2 * min(dot(p - (v0 + e2), nC), 0.0) * nC;

		s.pos = p;
		s.posOffset = p + lift + ng * 2e-4;
		s.n = ns;
		s.ng = ng;
		s.albedo = w0 * fetchTexel(u_attrTex, ti * 6 + 3).xyz
		         + w1 * fetchTexel(u_attrTex, ti * 6 + 4).xyz
		         + w2 * fetchTexel(u_attrTex, ti * 6 + 5).xyz;
		s.roughness = MESH_ROUGHNESS;
		s.f0 = MESH_F0;
	} else if (tGround < T_INF) {
		s.kind = KIND_GROUND;
		s.pos = ro + rd * tGround;
		s.pos.y = 0.0;
		s.posOffset = s.pos + vec3(0.0, 1e-4, 0.0);
	}
	return s;
}

// ---------- Sun & sky ----------
// Analytic split-sum DFG term (Karis 2014; same constants as three.js DFGApprox)
vec2 dfgApprox(float nDotV, float roughness) {
	const vec4 c0 = vec4(-1.0, -0.0275, -0.572, 0.022);
	const vec4 c1 = vec4(1.0, 0.0425, 1.04, -0.04);
	vec4 r = roughness * c0 + c1;
	float a004 = min(r.x * r.x, exp2(-9.28 * nDotV)) * r.x + r.y;
	return vec2(-1.04, 1.04) * a004 + r.zw;
}

vec3 evaluateStudioBackdrop(vec3 rd) {
	float y = saturate(rd.y);
	float w = pow(smoothstep(0.0, 0.85, y), 0.8);
	return mix(SKY_HORIZON_RAD, SKY_ZENITH_RAD, w);
}

// Cosine-convolved sky + ground bounce (already divided by PI)
vec3 skyAmbient(vec3 n) {
	vec3 skyAvg = 0.5 * (SKY_ZENITH_RAD + SKY_HORIZON_RAD);
	vec3 groundBounce = GROUND_ALBEDO * (SUN_RADIANCE * max(u_sunDir.y, 0.0) * INV_PI + skyAvg);
	return mix(groundBounce, skyAvg, 0.5 + 0.5 * n.y);
}

vec3 renderSample(vec3 ro, vec3 rd) {
	vec3 backdrop = evaluateStudioBackdrop(rd);
	SurfHit s = traceScene(ro, rd);
	if (s.kind == KIND_MISS) return backdrop;

	// Soft sun shadow: one ray jittered across the solar disc
	float sunVis = 0.0;
	if (dot(s.n, u_sunDir) > 0.0 && dot(s.ng, u_sunDir) > -0.2) {
		vec3 st;
		vec3 sb;
		orthonormalBasis(u_sunDir, st, sb);
		float r = sqrt(rand01()) * SUN_TAN_RADIUS;
		float phi = 2.0 * PI * rand01();
		vec3 l = normalize(u_sunDir + r * cos(phi) * st + r * sin(phi) * sb);
		sunVis = traceMesh(s.posOffset, l, T_INF, true).tri < 0 ? 1.0 : 0.0;
	}

	// Cosine-weighted ambient occlusion with smooth distance falloff
	vec3 tb;
	vec3 bb;
	orthonormalBasis(s.n, tb, bb);
	float r1 = rand01();
	float r2 = rand01();
	float rad = sqrt(r1);
	float phi = 2.0 * PI * r2;
	vec3 aoDir = rad * cos(phi) * tb + rad * sin(phi) * bb + sqrt(max(0.0, 1.0 - r1)) * s.n;
	float ao = pow(smoothstep(0.0, AO_MAX_DIST, traceMesh(s.posOffset, aoDir, AO_MAX_DIST, false).t), 0.75);

	vec3 v = -rd;
	vec3 f0 = vec3(s.f0);
	vec3 direct = cookTorranceBrdf(s.n, v, u_sunDir, s.albedo, s.roughness, f0) * SUN_RADIANCE * sunVis;
	vec3 fres = schlickFresnel(saturate(dot(s.n, v)), f0);
	vec3 ambient = s.albedo * skyAmbient(s.n) * (1.0 - fres) * ao;
	vec2 dfg = dfgApprox(saturate(dot(s.n, v)), s.roughness);
	vec3 envDir = normalize(mix(reflect(rd, s.n), s.n, s.roughness * s.roughness));
	vec3 envSpec = evaluateStudioBackdrop(envDir) * (f0 * dfg.x + dfg.y) * ao;
	vec3 surf = direct + ambient + envSpec;

	// Fade the infinite ground into the backdrop so the horizon line disappears
	if (s.kind == KIND_GROUND) {
		float fade = smoothstep(GROUND_FADE_START, GROUND_FADE_END, length(s.pos.xz));
		surf = mix(surf, backdrop, fade);
	}
	return surf;
}

void main() {
	ivec2 ip = ivec2(gl_FragCoord.xy);
	rngState = pcgHash(uint(ip.x) * 1973u + uint(ip.y) * 9277u + uint(u_frame) * 26699u) | 1u;

	// Jittered sub-pixel position (progressive anti-aliasing)
	vec2 px = vec2(ip) + vec2(rand01(), rand01());
	float uHalf = u_tanHalfV * u_res.x / u_res.y;
	float uu = (px.x / u_res.x * 2.0 - 1.0) * uHalf;
	float vv = (px.y / u_res.y * 2.0 - 1.0) * u_tanHalfV;
	vec3 rd = normalize(u_camF + uu * u_camR + vv * u_camU);

	vec3 c = renderSample(u_camPos, rd);
	vec4 prev = u_frame > 0 ? texelFetch(u_accumTex, ip, 0) : vec4(0.0);
	outAccum = prev + vec4(c, 1.0);
}
`;

const FS_DISPLAY = `#version 330
uniform sampler2D u_accumTex;
uniform vec2 u_res;
out vec4 outFragColor;

vec3 acesFilm(vec3 x) {
	const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
	return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

vec3 linearToSrgb(vec3 m) {
	vec3 hi = 1.055 * pow(max(m, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055;
	vec3 lo = 12.92 * m;
	return clamp(mix(hi, lo, lessThanEqual(m, vec3(0.0031308))), 0.0, 1.0);
}

float hashGrain(ivec2 p) {
	uint n = uint(p.x) * 374761393u + uint(p.y) * 668265263u;
	n = (n ^ (n >> 13u)) * 1274126177u;
	return float((n ^ (n >> 16u)) & 0xffffffu) / 16777215.0;
}

void main() {
	ivec2 ip = ivec2(gl_FragCoord.xy);
	vec4 acc = texelFetch(u_accumTex, ip, 0);
	vec3 hdr = max(acc.rgb / max(acc.a, 1.0), vec3(0.0));

	// cos^4-style lens vignetting
	vec2 uv = (gl_FragCoord.xy / u_res * 2.0 - 1.0) * vec2(1.0, u_res.y / u_res.x);
	float cosLens = 1.0 / sqrt(1.0 + dot(uv * 0.62, uv * 0.62));
	hdr *= 0.50 + 0.50 * pow(cosLens, 3.4);

	vec3 c = linearToSrgb(acesFilm(hdr));
	float grain = (hashGrain(ip) - 0.5) * 2.0 * 0.006 * 1.7;
	outFragColor = vec4(clamp(c + grain * 4.0 * c * (1.0 - c), 0.0, 1.0), 1.0);
}
`;

// ============================================================================
// 6. OPENGL / WEBGL2 ENGINE
// ============================================================================

function compileGlShader(type, src, label) {
	const sh = gl.createShader(type);
	gl.shaderSource(sh, src);
	gl.compileShader(sh);
	if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
		const log = gl.getShaderInfoLog(sh);
		gl.deleteShader(sh);
		throw new Error(`Shader compile error (${label}):\n${log}`);
	}
	return sh;
}

function createGlProgram(vsSrc, fsSrc, label) {
	const vs = compileGlShader(gl.VERTEX_SHADER, vsSrc, `${label}:VS`);
	const fs = compileGlShader(gl.FRAGMENT_SHADER, fsSrc, `${label}:FS`);
	const prog = gl.createProgram();
	gl.attachShader(prog, vs);
	gl.attachShader(prog, fs);
	gl.linkProgram(prog);
	gl.deleteShader(vs);
	gl.deleteShader(fs);
	if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
		const log = gl.getProgramInfoLog(prog);
		gl.deleteProgram(prog);
		throw new Error(`Program link error (${label}):\n${log}`);
	}
	return prog;
}

function createFloatTex2D(w, h, data) {
	const tex = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, tex);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, w, h, 0, gl.RGBA, gl.FLOAT, data);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	return tex;
}

function createSingleFbo(tex) {
	const fbo = gl.createFramebuffer();
	gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
	const st = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
	if (st !== gl.FRAMEBUFFER_COMPLETE) {
		throw new Error(`Incomplete FBO: 0x${st.toString(16)}`);
	}
	gl.bindFramebuffer(gl.FRAMEBUFFER, 0);
	return fbo;
}

function initEngine() {
	gl.disable(gl.DEPTH_TEST);
	gl.disable(gl.BLEND);
	const vao = gl.createVertexArray();
	gl.bindVertexArray(vao);

	return {
		vao,
		progTrace: createGlProgram(VS_FULLSCREEN, FS_TRACE, "trace"),
		progDisplay: createGlProgram(VS_FULLSCREEN, FS_DISPLAY, "display"),
		uniformCache: new Map(),
		sceneTex: null,
		accum: null,
		accumW: 0,
		accumH: 0,
	};
}

function uLoc(eng, prog, name) {
	const key = `${eng.progTrace === prog ? "t" : "d"}:${name}`;
	if (!eng.uniformCache.has(key)) eng.uniformCache.set(key, gl.getUniformLocation(prog, name));
	return eng.uniformCache.get(key);
}

function uploadSceneTextures(eng, bvh) {
	if (eng.sceneTex) {
		for (const t of eng.sceneTex) gl.deleteTextures(t);
	}
	eng.sceneTex = [bvh.nodeTex, bvh.triTex, bvh.attrTex].map((p) => createFloatTex2D(p.w, p.h, p.data));
}

function ensureAccumTargets(eng, w, h) {
	if (eng.accum && eng.accumW === w && eng.accumH === h) return;
	if (eng.accum) {
		for (const a of eng.accum) {
			gl.deleteFramebuffers(a.fbo);
			gl.deleteTextures(a.tex);
		}
	}
	eng.accum = [0, 1].map(() => {
		const tex = createFloatTex2D(w, h, null);
		return { tex, fbo: createSingleFbo(tex) };
	});
	eng.accumW = w;
	eng.accumH = h;
}

/** Add one sample per pixel into the accumulation buffer, then tone-map it to the window. */
function renderFrame(eng, w, h, frame, cam, sunDir) {
	gl.bindVertexArray(eng.vao);
	const src = eng.accum[frame & 1];
	const dst = eng.accum[(frame + 1) & 1];

	gl.bindFramebuffer(gl.FRAMEBUFFER, dst.fbo);
	gl.viewport(0, 0, w, h);
	const pt = eng.progTrace;
	gl.useProgram(pt);
	["u_nodeTex", "u_triTex", "u_attrTex"].forEach((name, i) => {
		gl.activeTexture(gl.TEXTURE0 + i);
		gl.bindTexture(gl.TEXTURE_2D, eng.sceneTex[i]);
		gl.uniform1i(uLoc(eng, pt, name), i);
	});
	gl.activeTexture(gl.TEXTURE3);
	gl.bindTexture(gl.TEXTURE_2D, src.tex);
	gl.uniform1i(uLoc(eng, pt, "u_accumTex"), 3);
	gl.uniform2f(uLoc(eng, pt, "u_res"), w, h);
	gl.uniform1i(uLoc(eng, pt, "u_frame"), frame);
	gl.uniform3f(uLoc(eng, pt, "u_camPos"), cam.pos[0], cam.pos[1], cam.pos[2]);
	gl.uniform3f(uLoc(eng, pt, "u_camF"), cam.forward[0], cam.forward[1], cam.forward[2]);
	gl.uniform3f(uLoc(eng, pt, "u_camR"), cam.right[0], cam.right[1], cam.right[2]);
	gl.uniform3f(uLoc(eng, pt, "u_camU"), cam.up[0], cam.up[1], cam.up[2]);
	gl.uniform1f(uLoc(eng, pt, "u_tanHalfV"), cam.tanHalfV);
	gl.uniform3f(uLoc(eng, pt, "u_sunDir"), sunDir[0], sunDir[1], sunDir[2]);
	gl.drawArrays(gl.TRIANGLES, 0, 3);

	gl.bindFramebuffer(gl.FRAMEBUFFER, 0);
	gl.viewport(0, 0, w, h);
	const pd = eng.progDisplay;
	gl.useProgram(pd);
	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, dst.tex);
	gl.uniform1i(uLoc(eng, pd, "u_accumTex"), 0);
	gl.uniform2f(uLoc(eng, pd, "u_res"), w, h);
	gl.drawArrays(gl.TRIANGLES, 0, 3);
}

// ============================================================================
// 7. GLFW WINDOW, ORBIT CONTROLS & PROGRESSIVE RENDER LOOP
// ============================================================================

if (!glfw.init()) {
	console.error("Failed to initialize GLFW");
	process.exit(-1);
}

glfw.defaultWindowHints();
glfw.windowHint(glfw.CONTEXT_VERSION_MAJOR, 3);
glfw.windowHint(glfw.CONTEXT_VERSION_MINOR, 3);
glfw.windowHint(glfw.OPENGL_FORWARD_COMPAT, 1);
glfw.windowHint(glfw.OPENGL_PROFILE, glfw.OPENGL_CORE_PROFILE);

const window = glfw.createWindow(1120, 546, "glTF Mesh Renderer");
if (!window) {
	console.error("Failed to open GLFW window");
	glfw.terminate();
	process.exit(-1);
}
glfw.makeContextCurrent(window);
gl.glewInit();
glfw.swapInterval(1);

const glEngine = initEngine();
let mesh = null;
let frame = 0;
let cam = null;
let bufW = 0;
let bufH = 0;

function resetAccumulation() {
	frame = 0;
	if (mesh && bufW > 0 && bufH > 0) {
		cam = frameCameraToMesh(mesh.positions, bufW / Math.max(1, bufH));
	}
}

function loadModel(filepath) {
	console.log(`Loading ${filepath}...`);
	const raw = fs.readFileSync(filepath);
	mesh = normalizeMeshToStudio(parseGlb(raw));
	const bvh = buildBvhTextures(mesh);
	uploadSceneTextures(glEngine, bvh);
	console.log(`Loaded ${path.basename(filepath)}: ${bvh.triCount} triangles, ${bvh.nodeCount} BVH nodes`);
	const dim = glfw.getFramebufferSize(window);
	bufW = Math.max(1, dim[0]);
	bufH = Math.max(1, dim[1]);
	resetAccumulation();
}

// Mouse orbit interaction
let isDragging = false;
let lastCursorX = 0;
let lastCursorY = 0;
let dragStartX = 0;
let dragStartY = 0;
let dragStartYaw = camYawDeg;
let dragStartPitch = camPitchDeg;

glfw.setCursorPosCallback(window, (win, px, py) => {
	lastCursorX = px;
	lastCursorY = py;
	if (isDragging) {
		camYawDeg = dragStartYaw - (px - dragStartX) * 0.35;
		camPitchDeg = clamp(dragStartPitch + (py - dragStartY) * 0.25, -5, 80);
		resetAccumulation();
	}
});

glfw.setMouseButtonCallback(window, (win, button, action, mods) => {
	if (button === 0) {
		if (action === 1) {
			isDragging = true;
			dragStartX = lastCursorX;
			dragStartY = lastCursorY;
			dragStartYaw = camYawDeg;
			dragStartPitch = camPitchDeg;
		} else if (action === 0) {
			isDragging = false;
		}
	}
});

const modelPath = process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_MODEL_PATH;
loadModel(modelPath);

let t = glfw.getTime();
let fps = 60;

function animate() {
	if (glfw.windowShouldClose(window) || glfw.getKey(window, glfw.KEY_ESCAPE)) {
		shutdown();
		return;
	}
	setImmediate(animate);

	const t1 = glfw.getTime();
	const dt = t1 - t;
	if (dt > 0) fps += 0.1 * ((1 / dt) - fps);
	t = t1;

	const dim = glfw.getFramebufferSize(window);
	const w = Math.max(1, dim[0]);
	const h = Math.max(1, dim[1]);
	if (w !== bufW || h !== bufH) {
		bufW = w;
		bufH = h;
		resetAccumulation();
	}

	ensureAccumTargets(glEngine, bufW, bufH);
	if (frame < MAX_SPP) {
		renderFrame(glEngine, bufW, bufH, frame, cam, sunDirection());
		frame++;
	} else {
		// Re-display converged accumulation buffer without adding more samples
		gl.bindVertexArray(glEngine.vao);
		const converged = glEngine.accum[frame & 1];
		gl.bindFramebuffer(gl.FRAMEBUFFER, 0);
		gl.viewport(0, 0, bufW, bufH);
		const pd = glEngine.progDisplay;
		gl.useProgram(pd);
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, converged.tex);
		gl.uniform1i(uLoc(glEngine, pd, "u_accumTex"), 0);
		gl.uniform2f(uLoc(glEngine, pd, "u_res"), bufW, bufH);
		gl.drawArrays(gl.TRIANGLES, 0, 3);
	}

	glfw.setWindowTitle(
		window,
		`glTF Mesh Renderer — ${bufW} × ${bufH} · ${Math.min(frame, MAX_SPP)}/${MAX_SPP} spp · ${fps.toFixed(0)} fps`
	);

	glfw.swapBuffers(window);
	glfw.pollEvents();
}

function shutdown() {
	glfw.destroyWindow(window);
	glfw.terminate();
	process.exit(0);
}

animate();
