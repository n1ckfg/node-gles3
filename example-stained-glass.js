#!/usr/bin/env node
// stained_glass: a LICHEN patch for node-gles3, made by tools/patch-to-gles3.mjs from
// /Users/nick/GitHub/GRASS_ETC/LICHEN/workflows/stained_glass.json
// on 2026-10-29T02:02:08.416Z. Don't edit it: convert the patch again.
//
// Modules: AdderMultiplier, Brcosa, BufferSmear, ColorEncoder, Edges, GridGuys, Monitor, RuttEtra, Sharpen, UnrealBloom, VHSC
// Shows Monitor 0 fullscreen; Escape quits.
//
//   node this.js [--windowed | --hidden] [--frames <n>] [--capture <file.png>] [--dump <dir>]
//                [--fixed <fps>] [--seed <n>] [--density <d>]
// (see tools/patch-to-gles3.mjs in LICHEN for what each does)
//
// It needs node-gles3, found in $NODE_GLES3, beside this file, or at
// /Users/nick/GitHub/node-gles3
// A Camera reads the webcam through ffmpeg; $LICHEN_CAMERA replaces its input arguments.

"use strict";
const CFG = {"title":"stained_glass","patch":{"nodes":[{"id":0,"uid":"b1f08cff","type":"Monitor","x":1111.6453772622435,"y":518.3247755500354,"params":{"4786":20,"c3ae":1440,"7fda":1080},"collapsed":false},{"id":8,"uid":"01d95e88","type":"VHSC","x":644.9216789485345,"y":437.48040909824465,"params":{"4b63":2.25,"bc86":156.04000000000002,"14c9":0.008},"collapsed":false},{"id":10,"uid":"4bc92c10","type":"RuttEtra","x":206.17848055291904,"y":160.93391024280635,"params":{"9dbc":1.078,"0515":4.42,"b956":2,"48fe":1,"74b6":80,"dab3":-0.020000000000000056,"aea2":0.020000000000000018},"collapsed":false},{"id":11,"uid":"4b57bbb0","type":"GridGuys","x":309.2371385676885,"y":-82.83454145228268,"params":{"3947":1,"6789":0.19999999999999996,"b05d":40,"0a47":111.08666666666667,"61ca":0.03},"collapsed":false},{"id":12,"uid":"8cea39bc","type":"AdderMultiplier","x":432.279751584148,"y":489.53987000306483,"params":{"1288":0.62,"8436":1.3399999999999999,"ac2e":0.6599999999999999},"collapsed":false},{"id":14,"uid":"cd55eb84","type":"ColorEncoder","x":1078.3034152077794,"y":38.022570666611216,"params":{"4704":6.283,"4ca6":5.026066666666667,"0132":4.189,"83af":1},"collapsed":false},{"id":15,"uid":"a75885fd","type":"BufferSmear","x":452.4389143126605,"y":166.09423034903585,"params":{"4279":1,"9252":1,"5e1c":0.05607624451066834},"collapsed":false},{"id":16,"uid":"a75885fd","type":"BufferSmear","x":198.43891431266047,"y":472.09423034903585,"params":{"4279":1.6666666666666665,"9252":0.2803812225533417,"5e1c":0.8466666666666667},"collapsed":false},{"id":20,"uid":"3b37efdd","type":"Sharpen","x":660.484459540557,"y":741.8502913191967,"params":{"1390":16,"b6d6":5,"843d":1},"collapsed":false},{"id":21,"uid":"68c08c2a","type":"Edges","x":722.1640154090815,"y":128.6829418026891,"params":{"2731":0.15999999999999992,"8a1f":0},"collapsed":false},{"id":22,"uid":"45d56d73","type":"Brcosa","x":855.1983515960949,"y":412.5678844703644,"params":{"1459":1.7800000000000002,"7213":0,"0924":1},"collapsed":false},{"id":23,"uid":"ed0095c2","type":"UnrealBloom","x":878.1770096647609,"y":648.4014804382518,"params":{"9ad4":0.5266666666666666,"a808":1.5,"2b74":0.5},"collapsed":false}],"connections":[{"fromId":11,"fromPort":"3616","toId":10,"toPort":"870d"},{"fromId":11,"fromPort":"3616","toId":15,"toPort":"477c"},{"fromId":10,"fromPort":"0f5b","toId":16,"toPort":"477c"},{"fromId":16,"fromPort":"3e6c","toId":12,"toPort":"3a2a"},{"fromId":12,"fromPort":"6288","toId":8,"toPort":"6da5"},{"fromId":14,"fromPort":"1bc2","toId":12,"toPort":"1565"},{"fromId":15,"fromPort":"3e6c","toId":21,"toPort":"9eb5"},{"fromId":21,"fromPort":"9241","toId":14,"toPort":"87a9"},{"fromId":8,"fromPort":"acd9","toId":20,"toPort":"5c5a"},{"fromId":23,"fromPort":"91b8","toId":0,"toPort":"7ae7"},{"fromId":20,"fromPort":"8bdd","toId":22,"toPort":"ae9e"},{"fromId":22,"fromPort":"4b92","toId":23,"toPort":"5133"}],"controlConnections":[],"nextId":24},"monitorId":0,"canvas":[640,480],"gles3Dir":"/Users/nick/GitHub/node-gles3","pageUrl":"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/index.html","graphUrl":"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/graph.js","pipelineUrl":"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/pipeline.js","registryUrl":"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/moduleRegistry.js","moduleUrls":["file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/MonitorModule.js","file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/VHSCModule.js","file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/RuttEtraModule.js","file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/GridGuysModule.js","file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/AdderMultiplierModule.js","file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/ColorEncoderModule.js","file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/BufferSmearModule.js","file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/SharpenModule.js","file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/EdgesModule.js","file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/BrcosaModule.js","file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/UnrealBloomModule.js"]};
const SOURCES = {
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/graph.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "ConnectionGraph", { enumerable: true, get: () => ConnectionGraph });
class ConnectionGraph {
  constructor() {
    this.nodes = new Map();
    this.connections = [];
    this.controlConnections = [];
    this.sortedOrder = [];
    this.nextId = 0;
  }

  addNode(module) {
    const id = this.nextId++;
    module.id = id;
    this.nodes.set(id, module);
    this.topologicalSort();
    return id;
  }

  removeNode(id) {
    this.nodes.delete(id);
    this.connections = this.connections.filter(
      c => c.fromId !== id && c.toId !== id
    );
    this.disconnectAllControl(id);
    this.topologicalSort();
  }

  connect(fromId, fromPort, toId, toPort) {
    if (this.hasCycle(fromId, toId)) return false;
    // Remove existing connection to this input port
    this.connections = this.connections.filter(
      c => !(c.toId === toId && c.toPort === toPort)
    );
    this.connections.push({ fromId, fromPort, toId, toPort });
    this.topologicalSort();
    return true;
  }

  disconnect(fromId, fromPort, toId, toPort) {
    this.connections = this.connections.filter(
      c => !(c.fromId === fromId && c.fromPort === fromPort &&
             c.toId === toId && c.toPort === toPort)
    );
    this.topologicalSort();
  }

  disconnectAll(nodeId) {
    this.connections = this.connections.filter(
      c => c.fromId !== nodeId && c.toId !== nodeId
    );
    this.topologicalSort();
  }

  getInputConnections(nodeId) {
    return this.connections.filter(c => c.toId === nodeId);
  }

  getOutputConnections(nodeId) {
    return this.connections.filter(c => c.fromId === nodeId);
  }

  connectControl(fromId, fromPort, toId, paramName) {
    // Remove any existing control connection to the same target param
    this.controlConnections = this.controlConnections.filter(
      c => !(c.toId === toId && c.paramName === paramName)
    );
    this.controlConnections.push({ fromId, fromPort, toId, paramName });
  }

  disconnectControl(fromId, fromPort, toId, paramName) {
    this.controlConnections = this.controlConnections.filter(
      c => !(c.fromId === fromId && c.fromPort === fromPort &&
             c.toId === toId && c.paramName === paramName)
    );
  }

  disconnectAllControl(nodeId) {
    this.controlConnections = this.controlConnections.filter(
      c => c.fromId !== nodeId && c.toId !== nodeId
    );
  }

  getControlConnections(nodeId) {
    return this.controlConnections.filter(c => c.toId === nodeId);
  }

  topologicalSort() {
    const adj = new Map();
    const inDegree = new Map();

    for (const id of this.nodes.keys()) {
      adj.set(id, []);
      inDegree.set(id, 0);
    }

    for (const c of this.connections) {
      if (adj.has(c.fromId) && adj.has(c.toId)) {
        adj.get(c.fromId).push(c.toId);
        inDegree.set(c.toId, inDegree.get(c.toId) + 1);
      }
    }

    const queue = [];
    for (const [id, deg] of inDegree) {
      if (deg === 0) queue.push(id);
    }

    const result = [];
    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node);
      for (const neighbor of adj.get(node)) {
        const newDeg = inDegree.get(neighbor) - 1;
        inDegree.set(neighbor, newDeg);
        if (newDeg === 0) queue.push(neighbor);
      }
    }

    this.sortedOrder = result;
  }

  hasCycle(fromId, toId) {
    // Would adding fromId -> toId create a cycle?
    // DFS from toId through existing edges, looking for fromId
    const adj = new Map();
    for (const id of this.nodes.keys()) {
      adj.set(id, []);
    }
    for (const c of this.connections) {
      if (adj.has(c.fromId)) {
        adj.get(c.fromId).push(c.toId);
      }
    }
    // Add proposed edge
    if (!adj.has(fromId)) return false;
    adj.get(fromId).push(toId);

    // DFS from fromId looking for fromId (cycle)
    const visited = new Set();
    const stack = [toId];
    while (stack.length > 0) {
      const current = stack.pop();
      if (current === fromId) return true;
      if (visited.has(current)) continue;
      visited.add(current);
      const neighbors = adj.get(current);
      if (neighbors) {
        for (const n of neighbors) {
          stack.push(n);
        }
      }
    }
    return false;
  }

  // A patch refers to modules, params and ports by id, never by name or port
  // number, so any of them can be renamed or reordered (see Patch IDs in
  // ARCHITECTURE.md). type is only there to make the file readable.
  toJSON() {
    const nodes = [];
    for (const [id, mod] of this.nodes) {
      const params = {};
      for (const param of Object.values(mod.params)) {
        params[param.id] = param.value;
      }
      const node = {
        id,
        uid: mod.constructor.uid,
        type: mod.type,
        x: mod.x,
        y: mod.y,
        params,
        collapsed: mod.collapsed || false
      };
      if (mod.seed) node.seed = mod.seed;
      const state = mod.saveState();
      if (state) node.state = state;
      nodes.push(node);
    }
    const output = (c) => this.nodes.get(c.fromId).outputs[c.fromPort].id;
    return {
      nodes,
      connections: this.connections.map(c => ({
        fromId: c.fromId,
        fromPort: output(c),
        toId: c.toId,
        toPort: this.nodes.get(c.toId).inputs[c.toPort].id
      })),
      controlConnections: this.controlConnections.map(c => ({
        fromId: c.fromId,
        fromPort: output(c),
        toId: c.toId,
        param: this.nodes.get(c.toId).params[c.paramName].id
      })),
      nextId: this.nextId
    };
  }

  fromJSON(data, createModuleFn) {
    this.nodes.clear();
    this.connections = [];
    this.controlConnections = [];
    this.nextId = data.nextId || 0;

    for (const nodeData of data.nodes) {
      const mod = createModuleFn(nodeData.uid, nodeData.id, nodeData.type);
      if (!mod) continue;
      mod.id = nodeData.id;
      mod.x = nodeData.x;
      mod.y = nodeData.y;
      mod.collapsed = nodeData.collapsed || false;
      if (nodeData.params) {
        // A param added since the patch was saved would keep the constructor's
        // draw, so it goes back to its declared value and the patch looks as
        // it did.
        for (const [k, v] of Object.entries(mod.declared ?? {})) {
          if (!(mod.params[k].id in nodeData.params)) mod.setParam(k, v);
        }
        // A value whose param has since been removed is skipped. A value typed
        // past the param's range loads as it was typed.
        for (const [k, param] of Object.entries(mod.params)) {
          if (param.id in nodeData.params) mod.setParam(k, nodeData.params[param.id], false);
        }
      }
      // The saved params replaced the ones the constructor seeded, so the
      // constructor's seed no longer describes them; a patch saved before
      // seeds existed has none to restore.
      mod.seed = nodeData.seed ?? null;
      if (nodeData.state) mod.loadState(nodeData.state);
      this.nodes.set(nodeData.id, mod);
    }

    // Cables are saved with port and param ids. One whose port or param has
    // since been removed is dropped.
    const portIndex = (ports, id) => {
      const i = ports ? ports.findIndex(p => p.id === id) : -1;
      return i < 0 ? null : i;
    };
    for (const c of data.connections) {
      const fromPort = portIndex(this.nodes.get(c.fromId)?.outputs, c.fromPort);
      const toPort = portIndex(this.nodes.get(c.toId)?.inputs, c.toPort);
      if (fromPort === null || toPort === null) {
        console.warn('Dropped a cable whose port no longer exists:', c);
        continue;
      }
      this.connections.push({ fromId: c.fromId, fromPort, toId: c.toId, toPort });
    }

    if (data.controlConnections) {
      for (const c of data.controlConnections) {
        const fromPort = portIndex(this.nodes.get(c.fromId)?.outputs, c.fromPort);
        const params = this.nodes.get(c.toId)?.params ?? {};
        const paramName = Object.keys(params).find(k => params[k].id === c.param);
        if (fromPort === null || !paramName) {
          console.warn('Dropped a cable whose port or param no longer exists:', c);
          continue;
        }
        this.controlConnections.push({ fromId: c.fromId, fromPort, toId: c.toId, paramName });
      }
    }

    this.topologicalSort();
  }
}

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/pipeline.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "ProcessingPipeline", { enumerable: true, get: () => ProcessingPipeline });
const { ConnectionGraph } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/graph.js");

class ProcessingPipeline {
  constructor(glCanvas) {
    this.glCanvas = glCanvas;
    this.graph = new ConnectionGraph();
  }

  processFrame() {
    for (const nodeId of this.graph.sortedOrder) {
      const mod = this.graph.nodes.get(nodeId);
      if (!mod) continue;
      mod.process(this.graph, this.glCanvas);
    }
    // Apply control connections after all modules have processed
    for (const cc of this.graph.controlConnections) {
      const srcMod = this.graph.nodes.get(cc.fromId);
      const dstMod = this.graph.nodes.get(cc.toId);
      if (!srcMod || !dstMod) continue;
      const param = dstMod.params[cc.paramName];
      if (!param) continue;
      const cv = srcMod.getControlValue(cc.fromPort);
      const scaled = param.min + cv * (param.max - param.min);
      // A trigger param fires on the cable's rising edge through its midpoint
      const mid = (param.min + param.max) / 2;
      const fire = param.widget === 'trigger' && param.value < mid && scaled >= mid;
      dstMod.setParam(cc.paramName, scaled);
      if (fire) dstMod.fireTrigger(cc.paramName);
    }
  }
}

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/moduleRegistry.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "registerModule", { enumerable: true, get: () => registerModule });
Object.defineProperty(__exports, "createModule", { enumerable: true, get: () => createModule });
Object.defineProperty(__exports, "createModuleByUid", { enumerable: true, get: () => createModuleByUid });
Object.defineProperty(__exports, "getModuleTypes", { enumerable: true, get: () => getModuleTypes });
Object.defineProperty(__exports, "getRegistry", { enumerable: true, get: () => getRegistry });
const registry = new Map();

// Module uid -> type name. Patches save a module's uid, never its name, so a
// module can be renamed freely (see Patch IDs in ARCHITECTURE.md)
const byUid = new Map();

// Classes whose param and port ids have passed checkIds()
const checked = new WeakSet();

const UID = /^[0-9a-f]{8}$/;
const LOCAL_ID = /^[0-9a-f]{4}$/;

function registerModule(typeName, moduleClass) {
  // Its own uid, so a subclass can't pass with its parent's
  const uid = Object.hasOwn(moduleClass, 'uid') ? moduleClass.uid : undefined;
  if (!UID.test(uid)) throw new Error(`${typeName} needs a static uid of 8 hex digits`);
  if (byUid.has(uid)) throw new Error(`${typeName} has the same uid as ${byUid.get(uid)}`);
  registry.set(typeName, moduleClass);
  byUid.set(uid, typeName);
}

// Params and ports are declared in the constructor, so their ids are checked
// the first time each type is built. They share one namespace per module.
function checkIds(mod) {
  if (checked.has(mod.constructor)) return;
  const ids = new Set();
  const check = (what, id) => {
    if (!LOCAL_ID.test(id)) throw new Error(`${mod.type} ${what} needs an id of 4 hex digits`);
    if (ids.has(id)) throw new Error(`${mod.type} ${what} has the same id as another param or port`);
    ids.add(id);
  };
  for (const [name, param] of Object.entries(mod.params)) check(`param ${name}`, param.id);
  for (const port of mod.inputs) check(`input ${port.name}`, port.id);
  for (const port of mod.outputs) check(`output ${port.name}`, port.id);
  checked.add(mod.constructor);
}

function createModule(typeName, glCanvas, id) {
  const ModClass = registry.get(typeName);
  if (!ModClass) throw new Error(`Unknown module type: ${typeName}`);
  const mod = new ModClass(glCanvas, id);
  checkIds(mod);
  return mod;
}

// For loading a patch. savedType is the name the patch was saved with, only
// to say which module is missing.
function createModuleByUid(uid, glCanvas, id, savedType) {
  if (uid === undefined) {
    throw new Error(`${savedType} has no uid: the patch predates ids, so convert it with tools/convert-workflows.mjs`);
  }
  const typeName = byUid.get(uid);
  if (!typeName) throw new Error(`Unknown module uid: ${uid} (saved as ${savedType})`);
  return createModule(typeName, glCanvas, id);
}

function getModuleTypes() {
  return Array.from(registry.keys());
}

function getRegistry() {
  return registry;
}

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/MonitorModule.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "MonitorModule", { enumerable: true, get: () => MonitorModule });
const { Module } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/Module.js");
const { registerModule } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/moduleRegistry.js");

function isChromium() {
  const ua = navigator.userAgent;
  return /Chrome\//.test(ua) && !/Edg\//.test(ua) || /Chromium\//.test(ua);
}

function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

class MonitorModule extends Module {
  static uid = 'b1f08cff';

  constructor(glCanvas, id) {
    super('Monitor', glCanvas, id);
    this.inputs = [{ id: '7ae7', name: 'in', type: 'video' }];
    this.displayTexture = null;
    this.isFullscreen = false;
    this._extWindow = null;
    this._extCanvas = null;
    this.lastFpsTime = performance.now();
    this.frameCount = 0;
    this.fps = 0;

    // Recording state
    this._recorder = null;
    this._recordingChunks = [];
    this._recordingMimeType = null;
    this._recordingCanvas = null; // Offscreen canvas for single-monitor recording

    // Recording params
    this.params = {
      width: {
        id: 'c3ae', value: 1440,
        min: 640,
        max: 3840,
        step: 160,
        label: 'Width'
      },
      height: {
        id: '7fda', value: 1080,
        min: 480,
        max: 2160,
        step: 120,
        label: 'Height'
      },
      bitrate: {
        id: '4786', value: 20,
        min: 5,
        max: 80,
        step: 5,
        label: 'Bitrate (M)'
      }
    };
  }

  process(graph, glCanvas) {
    const inputFBO = this.getInput(graph, 0);
    this.displayTexture = inputFBO;

    // Calculate FPS
    const now = performance.now();
    this.frameCount++;
    if (now - this.lastFpsTime >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (now - this.lastFpsTime));
      this.frameCount = 0;
      this.lastFpsTime = now;
    }
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }

  /**
   * Attempt to open a fullscreen window on a second screen.
   * Returns true if the second-screen window was opened, false otherwise.
   */
  async trySecondScreenFullscreen(glCanvas) {
    if (!isChromium() || !('getScreenDetails' in window)) return false;

    let screenDetails;
    try {
      screenDetails = await window.getScreenDetails();
    } catch {
      return false;
    }

    const currentScreen = screenDetails.currentScreen;
    const otherScreen = screenDetails.screens.find(s => s !== currentScreen);
    if (!otherScreen) return false;

    this._openExtWindow(otherScreen, glCanvas);
    return true;
  }

  _openExtWindow(targetScreen, glCanvas) {
    // Close any existing external window
    this.closeExtWindow();

    const w = targetScreen.availWidth;
    const h = targetScreen.availHeight;
    const left = targetScreen.availLeft;
    const top = targetScreen.availTop;

    const extWin = window.open(
      '',
      '_blank',
      `left=${left},top=${top},width=${w},height=${h}`
    );
    if (!extWin) return;

    this._extWindow = extWin;

    extWin.document.title = 'LICHEN Monitor';
    extWin.document.body.style.cssText = 'margin:0;padding:0;background:#000;overflow:hidden;';

    const canvas = extWin.document.createElement('canvas');
    // Use params for recording resolution
    canvas.width = this.params.width.value;
    canvas.height = this.params.height.value;
    canvas.style.cssText = 'display:block;width:100%;height:100%;object-fit:contain;';
    extWin.document.body.appendChild(canvas);
    this._extCanvas = canvas;

    // Go fullscreen on the target screen
    canvas.requestFullscreen({ screen: targetScreen }).catch(() => {});

    // Close on ESC (closeExtWindow handles stopping recording)
    extWin.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeExtWindow();
    });

    // Detect if user closes the popup
    extWin.addEventListener('beforeunload', () => {
      if (this.isRecording()) {
        this.stopRecording();
      }
      this._extWindow = null;
      this._extCanvas = null;
    });
  }

  // srcCanvas holds the picture at full size (NodeGraphUI._fullSize)
  _blitToExtWindow(srcCanvas) {
    if (!this._extWindow || this._extWindow.closed || !this._extCanvas || !this.displayTexture) return;

    const canvas = this._extCanvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Letterbox: maintain 640x480 aspect ratio
    const aspect = 640 / 480;
    let dw = canvas.width;
    let dh = canvas.width / aspect;
    if (dh > canvas.height) {
      dh = canvas.height;
      dw = canvas.height * aspect;
    }
    const dx = (canvas.width - dw) / 2;
    const dy = (canvas.height - dh) / 2;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(srcCanvas, dx, dy, dw, dh);
  }

  // srcCanvas holds the picture at full size (NodeGraphUI._fullSize)
  _blitToRecordingCanvas(srcCanvas) {
    if (!this._recordingCanvas || !this.displayTexture) return;

    const canvas = this._recordingCanvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw to fill 1440x1080 (same 4:3 aspect as source)
    ctx.drawImage(srcCanvas, 0, 0, canvas.width, canvas.height);
  }

  /**
   * Save the picture as a PNG at Width x Height, stretched as the recording is.
   * @param {HTMLCanvasElement} srcCanvas - the picture at full size (NodeGraphUI._fullSize)
   */
  saveScreenshot(srcCanvas) {
    const canvas = document.createElement('canvas');
    canvas.width = this.params.width.value;
    canvas.height = this.params.height.value;
    canvas.getContext('2d').drawImage(srcCanvas, 0, 0, canvas.width, canvas.height);
    const filename = `lichen-screenshot-${timestamp()}.png`;
    canvas.toBlob((blob) => {
      if (!blob) {
        console.error('Screenshot failed');
        return;
      }
      downloadBlob(blob, filename);
      console.log(`Downloaded: ${filename}`);
    }, 'image/png');
  }

  closeExtWindow() {
    if (this.isRecording()) {
      this.stopRecording();
    }
    if (this._extWindow && !this._extWindow.closed) {
      this._extWindow.close();
    }
    this._extWindow = null;
    this._extCanvas = null;
  }

  hasExtWindow() {
    return this._extWindow !== null && !this._extWindow.closed;
  }

  /**
   * Start recording the monitor output to video.
   * @param {Object} glCanvas - The p5 WebGL canvas (used when no external window)
   * @param {number} fps - Frame rate for recording (default 30)
   * @returns {boolean} True if recording started successfully
   */
  startRecording(glCanvas, fps = 30) {
    if (this._recorder && this._recorder.state === 'recording') {
      console.warn('Already recording');
      return false;
    }

    // Determine which canvas to capture from
    let canvas = this._extCanvas;
    if (!canvas) {
      // Create offscreen recording canvas for single-monitor mode
      this._recordingCanvas = document.createElement('canvas');
      this._recordingCanvas.width = this.params.width.value;
      this._recordingCanvas.height = this.params.height.value;
      canvas = this._recordingCanvas;
    }
    if (!canvas) {
      console.error('No canvas available for recording');
      return false;
    }

    // Get the media stream from the canvas
    const stream = canvas.captureStream(fps);

    // Determine best available MIME type (prefer MP4, fallback to WebM)
    const mimeTypes = [
      'video/mp4;codecs=avc1.42E01E,mp4a.40.2',
      'video/mp4;codecs=avc1',
      'video/mp4',
      'video/webm;codecs=vp9',
      'video/webm;codecs=vp8',
      'video/webm'
    ];

    let selectedMimeType = null;
    for (const mimeType of mimeTypes) {
      if (MediaRecorder.isTypeSupported(mimeType)) {
        selectedMimeType = mimeType;
        break;
      }
    }

    if (!selectedMimeType) {
      console.error('No supported video MIME type found');
      return false;
    }

    this._recordingMimeType = selectedMimeType;
    this._recordingChunks = [];

    // Get bitrate from params (allow any value set via direct input)
    const bitrate = this.params.bitrate.value * 1000000;//Math.max(100000, Math.round(this.params.bitrate.value));

    try {
      this._recorder = new MediaRecorder(stream, {
        mimeType: selectedMimeType,
        videoBitsPerSecond: bitrate
      });
    } catch (e) {
      console.error('Failed to create MediaRecorder:', e);
      return false;
    }

    this._recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        this._recordingChunks.push(e.data);
      }
    };

    this._recorder.onstop = () => {
      this._downloadRecording();
    };

    this._recorder.onerror = (e) => {
      console.error('MediaRecorder error:', e);
      this._recorder = null;
    };

    this._recorder.start(1000); // Collect data every second
    console.log(`Recording started (${selectedMimeType}, ${(bitrate / 1000000).toFixed(2)} Mbps)`);
    return true;
  }

  /**
   * Stop recording and trigger download.
   */
  stopRecording() {
    if (!this._recorder || this._recorder.state !== 'recording') {
      console.warn('Not currently recording');
      return;
    }
    this._recorder.stop();
    console.log('Recording stopped');
  }

  /**
   * Check if currently recording.
   * @returns {boolean}
   */
  isRecording() {
    return this._recorder && this._recorder.state === 'recording';
  }

  /**
   * Download the recorded video.
   * @private
   */
  _downloadRecording() {
    if (this._recordingChunks.length === 0) {
      console.warn('No recording data to download');
      return;
    }

    const blob = new Blob(this._recordingChunks, { type: this._recordingMimeType });
    const extension = this._recordingMimeType.includes('mp4') ? 'mp4' : 'webm';
    const filename = `lichen-recording-${timestamp()}.${extension}`;
    downloadBlob(blob, filename);

    // Clean up
    this._recordingChunks = [];
    this._recorder = null;
    this._recordingCanvas = null;
    console.log(`Downloaded: ${filename}`);
  }

  dispose() {
    if (this.isRecording()) {
      this._recorder.stop();
      this._recorder = null;
      this._recordingChunks = [];
      this._recordingCanvas = null;
    }
    this.closeExtWindow();
    this.displayTexture = null;
    super.dispose();
  }
}

registerModule('Monitor', MonitorModule);

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/Module.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "Module", { enumerable: true, get: () => Module });
const { vertSrc } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/vert.js");
const { StringSeed } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/stringseed.js");

// A param's seed candidates: its step grid over the whole range (random: true)
// or over a narrower [lo, hi]. toPrecision drops the float drift of lo + i*step.
function seedCandidates(param) {
  const [lo, hi] = Array.isArray(param.random) ? param.random : [param.min, param.max];
  const n = Math.floor((hi - lo) / param.step + 1e-9) + 1;
  return Array.from({ length: n }, (_, i) => parseFloat((lo + i * param.step).toPrecision(12)));
}

class Module {
  constructor(type, glCanvas, id) {
    this.type = type;
    this.id = id;
    this.x = 200;
    this.y = 200;
    // Each port and param declares an id of 4 hex digits, unique within the
    // module, and each subclass a static uid of 8: patches save these in place
    // of names and port numbers (see Patch IDs in ARCHITECTURE.md)
    this.inputs = [];
    this.outputs = [];
    this.params = {};
    this.controlValues = {};
    // Control output name -> a loop of samples, for control input pins (see
    // getControlInput). Knob cables still see only controlValues.
    this.controlSignals = {};
    this.shader = null;
    this.outputFBO = null;
    this.glCanvas = glCanvas;
    this.collapsed = false;
    // Name key into js/historical-info.json; null uses the type, and the info
    // button shows only when an entry has that name
    this.historicalInfo = null;
    // Hex seed the random params were last drawn from; null until randomize()
    this.seed = null;
    // Param name -> value before the first randomize(); null until then
    this.declared = null;
    // Trigger param name -> performance.now() it last fired, for the button flash
    this.triggeredAt = {};
  }

  createShader(fragSrc) {
    this.shader = this.glCanvas.createShader(vertSrc, fragSrc);
  }

  // A framebuffer for full-screen shader passes. Unasked, p5 gives a
  // framebuffer 2x MSAA and a depth buffer in Chrome and Safari, which a quad
  // covering the whole frame never uses, at about nine times the memory and a
  // resolve on every end(). A module that draws geometry, whose edges MSAA
  // smooths, calls glCanvas.createFramebuffer() itself (see Framebuffers in
  // ARCHITECTURE.md).
  createFramebuffer(options = {}) {
    return this.glCanvas.createFramebuffer({ antialias: false, depth: false, ...options });
  }

  createOutputFBO() {
    this.outputFBO = this.createFramebuffer();
  }

  getInput(graph, portIndex) {
    const connections = graph.getInputConnections(this.id);
    const conn = connections.find(c => c.toPort === portIndex);
    if (!conn) return null;
    const srcModule = graph.nodes.get(conn.fromId);
    if (!srcModule || !srcModule.outputFBO) return null;
    return srcModule.outputFBO;
  }

  // Framebuffers are allocated at the graphics' pixel density, so on a retina
  // display gl_FragCoord runs over twice as many pixels as glCanvas.width and
  // glCanvas.height report. Any shader working in gl_FragCoord space -- and any
  // texel step derived from a resolution -- needs these, not the logical size.
  get pixelDensity() {
    return this.outputFBO ? this.outputFBO.density : 1;
  }

  fragResolution() {
    const d = this.pixelDensity;
    return [this.glCanvas.width * d, this.glCanvas.height * d];
  }

  renderQuad() {
    const g = this.glCanvas;
    g.noStroke();
    g.rect(-g.width / 2, -g.height / 2, g.width, g.height);
  }

  process(graph, glCanvas) {
    // Override in subclasses
  }

  // Knobs, cables and module code keep a param within min..max. A number typed
  // into its field may go past them, so the UI sets that, and a patch loads it,
  // with clamp false.
  setParam(name, value, clamp = true) {
    const param = this.params[name];
    if (!param) return;
    param.value = clamp ? Math.max(param.min, Math.min(param.max, value)) : value;
  }

  getControlValue(portIndex) {
    const output = this.outputs[portIndex];
    return this.controlValues[output?.name] ?? 0;
  }

  // What the control output cabled to input pin portIndex carries this frame:
  // { value, signal }, where value is its 0..1 control value and signal its loop
  // of samples, or null if it has none. null when nothing, or a video output, is
  // cabled there. The cable is in graph.connections, so the source has already
  // processed this frame.
  getControlInput(graph, portIndex) {
    const conn = graph.getInputConnections(this.id).find(c => c.toPort === portIndex);
    if (!conn) return null;
    const src = graph.nodes.get(conn.fromId);
    const output = src?.outputs[conn.fromPort];
    if (!output || output.type !== 'control') return null;
    return { value: src.controlValues[output.name] ?? 0, signal: src.controlSignals[output.name] ?? null };
  }

  getParam(name) {
    return this.params[name] ? this.params[name].value : 0;
  }

  // Seeded randomization (StringSeed, js/stringseed.js). Every param with a
  // `random` key is one axis, in declaration order, so axis i always reads
  // slice i of the seed. Omit `seed` to draw a fresh one sized to the axes.
  randomize(seed) {
    const ss = new StringSeed();
    for (const [name, param] of Object.entries(this.params)) {
      if (param.random) ss.addAxis(name, seedCandidates(param));
    }
    if (ss.axes.length === 0) return [];
    // Keep the values the first draw replaces. In a module that draws in its
    // constructor these are the declared ones, which ConnectionGraph.fromJSON
    // puts back for a param added since the patch was saved.
    this.declared ??= Object.fromEntries(Object.entries(this.params).map(([k, p]) => [k, p.value]));
    this.seed = seed ?? StringSeed.generateSeed(ss.requiredSeedBytes());
    const results = ss.resolve(this.seed);
    for (const r of results) this.setParam(r.axis, r.choice);
    return results;
  }

  // A trigger param (widget: 'trigger') fires on a click of its button, or when
  // a control cable driving it rises through 0.5. Modules act in onTrigger().
  fireTrigger(name) {
    this.triggeredAt[name] = performance.now();
    this.onTrigger(name);
  }

  onTrigger(name) {
    // Override in subclasses
  }

  // Text on a trigger param's button
  triggerText(name) {
    return '';
  }

  // What a patch keeps of a node beyond its params, as plain JSON, or null for
  // nothing; it comes back through loadState() on load and duplication
  saveState() {
    return null;
  }

  loadState(state) {
    // Override in subclasses
  }

  dispose() {
    this.outputFBO = null;
    this.shader = null;
  }
}

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/vert.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "vertSrc", { enumerable: true, get: () => vertSrc });
const vertSrc = `
attribute vec3 aPosition;
attribute vec2 aTexCoord;
varying vec2 vTexCoord;

void main() {
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;
  vTexCoord = aTexCoord;
}
`;

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/stringseed.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "StringSeed", { enumerable: true, get: () => StringSeed });
// StringSeed: the SSoT (String Seed of Thought) protocol, ported from the
// StringSeedGenerator project. Misaki & Akiba (2025), arxiv 2510.21150.
//
//   1. Generate a real hex seed from cryptographic randomness.
//   2. Enumerate axes, each a list of 2+ concrete candidates.
//   3. Map the seed to indices: axis i reads the non-overlapping 4-char hex
//      slice i, converts it to an int, and takes it modulo its candidate count.
//
// Every choice is therefore checkable by hand: `echo $((16#<slice> % <n>))`.
// Module.randomize() drives params through this; see ARCHITECTURE.md.

const SLICE_LEN = 4;

class StringSeed {
  constructor() {
    this.axes = [];   // [{ name, candidates }]
  }

  // Lower-case hex from crypto.getRandomValues, two chars per byte
  // (the `openssl rand -hex N` convention)
  static generateSeed(numBytes = 8) {
    const bytes = new Uint8Array(numBytes);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
  }

  // Order matters: an axis's position picks its slice of the seed
  addAxis(name, candidates) {
    if (!Array.isArray(candidates) || candidates.length < 2) {
      throw new Error(`Axis "${name}" must have at least 2 candidates.`);
    }
    this.axes.push({ name, candidates: [...candidates] });
    return this;
  }

  // Bytes generateSeed() needs to give every axis its own slice without wrapping
  requiredSeedBytes() {
    return Math.ceil(this.axes.length * SLICE_LEN / 2);
  }

  // Axis 0 reads chars 0-3, axis 1 chars 4-7, ... A seed too short for the
  // axes wraps, which correlates them, so size seeds with requiredSeedBytes().
  static getSlice(seed, axisIndex) {
    const start = (axisIndex * SLICE_LEN) % seed.length;
    let slice = '';
    for (let i = 0; i < SLICE_LEN; i++) {
      slice += seed[(start + i) % seed.length];
    }
    return slice.toLowerCase();
  }

  static mapToIndex(hexSlice, n) {
    const intValue = parseInt(hexSlice, 16);
    if (isNaN(intValue) || n < 1) return { intValue: 0, index: 0 };
    return { intValue, index: intValue % n };
  }

  // One traceable entry per axis: { axis, hexSlice, intValue, n, index, choice }.
  // Non-hex characters in the seed are ignored.
  resolve(seed) {
    const clean = seed.replace(/[^0-9a-fA-F]/g, '').toLowerCase();

    if (clean.length === 0) {
      // Degenerate seed: every axis falls back to candidate 0
      return this.axes.map(a => ({
        axis: a.name, hexSlice: '0000', intValue: 0,
        n: a.candidates.length, index: 0, choice: a.candidates[0],
      }));
    }

    return this.axes.map((axis, i) => {
      const hexSlice = StringSeed.getSlice(clean, i);
      const { intValue, index } = StringSeed.mapToIndex(hexSlice, axis.candidates.length);
      return {
        axis: axis.name, hexSlice, intValue,
        n: axis.candidates.length, index, choice: axis.candidates[index],
      };
    });
  }
}

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/VHSCModule.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "VHSCModule", { enumerable: true, get: () => VHSCModule });
const { Module } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/Module.js");
const { vhscFrag } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/vhsc.js");
const { registerModule } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/moduleRegistry.js");

class VHSCModule extends Module {
  static uid = '01d95e88';

  constructor(glCanvas, id) {
    super('VHSC', glCanvas, id);
    this.inputs = [{ id: '6da5', name: 'in', type: 'video' }];
    this.outputs = [{ id: 'acd9', name: 'out', type: 'video' }];
    this.params = {
      gamma: { id: '4b63', value: 1.2, min: 0.5, max: 3, step: 0.01, label: 'Gamma' },
      posterizeLevels: { id: 'bc86', value: 90, min: 2, max: 256, step: 1, label: 'Levels' },
      texelSize: { id: '14c9', value: 0.008, min: 0.001, max: 0.05, step: 0.001, label: 'Texel' },
    };
    this.createShader(vhscFrag);
    this.createOutputFBO();
  }

  process(graph, glCanvas) {
    const inputFBO = this.getInput(graph, 0);
    if (!inputFBO) return;
    this.outputFBO.begin();
    glCanvas.clear();
    glCanvas.shader(this.shader);
    this.shader.setUniform('tex0', inputFBO);
    this.shader.setUniform('gamma', this.params.gamma.value);
    this.shader.setUniform('posterizeLevels', this.params.posterizeLevels.value);
    this.shader.setUniform('texelSize', [this.params.texelSize.value, this.params.texelSize.value * 1.375]);
    this.renderQuad();
    this.outputFBO.end();
  }
}

registerModule('VHSC', VHSCModule);

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/vhsc.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "vhscFrag", { enumerable: true, get: () => vhscFrag });
const vhscFrag = `
precision highp float;
varying vec2 vTexCoord;
uniform sampler2D tex0;
uniform float gamma;
uniform float posterizeLevels;
uniform vec2 texelSize;

void main() {
  vec3 centerColor = texture2D(tex0, vTexCoord).rgb;
  vec3 leftColor = texture2D(tex0, vTexCoord - vec2(texelSize.x, 0.0)).rgb;
  vec3 rightColor = texture2D(tex0, vTexCoord + vec2(texelSize.x, 0.0)).rgb;
  vec3 topColor = texture2D(tex0, vTexCoord + vec2(0.0, texelSize.y)).rgb;
  vec3 bottomColor = texture2D(tex0, vTexCoord - vec2(0.0, texelSize.y)).rgb;

  vec3 blurredColor = topColor * 0.10 + leftColor * 0.20 + centerColor * 0.40 + rightColor * 0.20 + bottomColor * 0.10;
  vec3 sharpenedColor = blurredColor * 5.0 - (leftColor + rightColor + topColor + bottomColor);
  vec3 posterizedColor = floor(sharpenedColor * posterizeLevels) / posterizeLevels;

  gl_FragColor = vec4(posterizedColor, 1.0);
}
`;

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/RuttEtraModule.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "RuttEtraModule", { enumerable: true, get: () => RuttEtraModule });
const { Module } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/Module.js");
const { vertSrc } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/vert.js");
const { passthroughFrag } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/passthrough.js");
const { registerModule } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/moduleRegistry.js");
const { PixelReadback } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/slowscanjam/PixelReadback.js");
const { polylinePieces, XYOutputs } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/latk/strokes.js");

const SAMPLE_RATE = 44100;   // of the X and Y outputs, as Latk's
const MAX_DT = 0.1;          // clamp long stalls so a tab switch doesn't jump the beam
// Points per scan line on X and Y. Below a Line Separation of 4 a line has more
// vertices than this, and every few are used: the loop's samples are far sparser
const XY_MAX_COLS = 160;

let nextGeometryId = 0;

// Vertex shader that samples input texture for displacement
const ruttEtraVert = `
precision highp float;

attribute vec3 aPosition;
attribute vec2 aTexCoord;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

uniform sampler2D uInputTex;
uniform float uDepth;
uniform float uHalfWidth;    // half of Line Thickness, in px

varying vec3 vColor;

void main() {
  // Sample input texture for displacement
  vec4 texColor = texture2D(uInputTex, aTexCoord);

  // Calculate brightness
  float brightness = 0.34 * texColor.r + 0.5 * texColor.g + 0.16 * texColor.b;

  // Z displacement
  float z = -brightness * uDepth + uDepth * 0.5;

  // A vertex sits on its line's centre, and its z says which edge of the
  // ribbon it belongs to: -1 the top, 1 the bottom
  vec3 pos = vec3(aPosition.x, aPosition.y + aPosition.z * uHalfWidth, z);

  vColor = texColor.rgb;

  gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(pos, 1.0);
}
`;

const ruttEtraFrag = `
precision highp float;

varying vec3 vColor;
uniform float uOpacity;

void main() {
  gl_FragColor = vec4(vColor * uOpacity, 1.0);
}
`;

// The brightness each vertex reads, one texel a vertex, for X and Y. Texel
// (col, row) samples the input where ruttEtraVert's vertex does, at
// (col, row) x Line Separation / canvas size. Its buffer has density 1, so
// gl_FragCoord counts texels, and row 0 is read back first, as is the top line.
const ruttEtraGridFrag = `
precision highp float;

uniform sampler2D uInputTex;
uniform vec2 uStep;          // Line Separation across the canvas, in uv

void main() {
  vec4 texColor = texture2D(uInputTex, floor(gl_FragCoord.xy) * uStep);
  float brightness = 0.34 * texColor.r + 0.5 * texColor.g + 0.16 * texColor.b;
  gl_FragColor = vec4(vec3(brightness), 1.0);
}
`;

// a x b, both 4 x 4 and column-major
function mat4Mult(a, b) {
  const out = new Float64Array(16);
  for (let c = 0; c < 4; c++) {
    for (let r = 0; r < 4; r++) {
      let sum = 0;
      for (let k = 0; k < 4; k++) sum += a[k * 4 + r] * b[c * 4 + k];
      out[c * 4 + r] = sum;
    }
  }
  return out;
}

// Rutt-Etra scan lines: each row of the input is a line, pushed back by its
// brightness and seen in 3D. Its X and Y outputs carry the lines as one loop of
// XY audio, as Latk's do, to drive Twoscilloscope. That takes most of its time
// on the CPU, so it is done only while X or Y is cabled to something.
class RuttEtraModule extends Module {
  static uid = '4bc92c10';

  constructor(glCanvas, id) {
    super('RuttEtra', glCanvas, id);
    this.inputs = [{ id: '870d', name: 'in', type: 'video' }];
    this.outputs = [
      { id: '0f5b', name: 'out', type: 'video' },
      { id: 'e4df', name: 'x', type: 'control' },
      { id: '2a4e', name: 'y', type: 'control' },
    ];
    this.params = {
      scale: { id: '9dbc', value: 1.0, min: 0.1, max: 4, step: 0.1, label: 'Scale' },
      scanStep: { id: '0515', value: 4, min: 1, max: 20, step: 1, label: 'Line Separation' },
      lineThickness: { id: 'b956', value: 2.0, min: 0.5, max: 10, step: 0.5, label: 'Line Thickness' },
      opacity: { id: '48fe', value: 1.0, min: 0, max: 1, step: 0.05, label: 'Brightness' },
      depth: { id: '74b6', value: 80, min: 0, max: 300, step: 1, label: 'Max Line Depth' },
      rotationX: { id: 'dab3', value: 0.3, min: -1.5, max: 1.5, step: 0.05, label: 'Rotation X' },
      rotationY: { id: 'aea2', value: 0, min: -1.5, max: 1.5, step: 0.05, label: 'Rotation Y' },
      // Loops a second on X and Y. A lower rate gives the lines more samples
      loopHz: { id: '48b1', value: 5, min: 1, max: 100, step: 0.1, label: 'Loop Hz' },
    };

    this.width = glCanvas.width;
    this.height = glCanvas.height;

    // Create p5 shader using our custom vertex shader
    try {
      this.ruttShader = glCanvas.createShader(ruttEtraVert, ruttEtraFrag);
      this.gpuMode = true;
    } catch (e) {
      console.error('RuttEtra: Failed to create GPU shader, using fallback', e);
      this.gpuMode = false;
    }

    // Create passthrough shader and FBO
    this.createShader(passthroughFrag);
    // The scan lines are geometry, so the output keeps p5's MSAA and depth (see Framebuffers in ARCHITECTURE.md)
    this.outputFBO = glCanvas.createFramebuffer();

    // Geometry cache
    this.lastScanStep = -1;
    this.geometry = null;

    // X and Y: the vertices' brightness is read back from the GPU, so the
    // lines on X and Y are a frame or two behind the video's
    this.gridShader = glCanvas.createShader(vertSrc, ruttEtraGridFrag);
    this.gridFBO = null;
    this.readback = new PixelReadback(glCanvas);
    this.reading = null;      // the grid being read back
    this.grid = null;         // the latest grid read: { cols, rows, step, pixels }
    this.xy = new XYOutputs(SAMPLE_RATE);
    this.lastTime = performance.now() / 1000;
  }

  _buildGeometry(scanStep) {
    const w = this.width;
    const h = this.height;
    const halfW = w / 2;
    const halfH = h / 2;

    const cols = Math.floor(w / scanStep);
    const rows = Math.floor(h / scanStep);

    // model() caches GPU buffers under a geometry's gid (see Development
    // Conventions), so the geometry this replaces is freed
    if (this.geometry) this.glCanvas.freeGeometry(this.geometry);

    // Build as a p5.Geometry with triangle strips for each row
    // Each row is a ribbon: top and bottom vertices alternating. Both sit on
    // the line's centre, and ruttEtraVert moves them apart by Line Thickness,
    // so turning it needs no rebuild. Their z, which the shader replaces with
    // the brightness displacement, says which edge each is
    this.geometry = new p5.Geometry(1, 1, function() {
      for (let row = 0; row < rows; row++) {
        const y = row * scanStep - halfH;

        for (let col = 0; col < cols; col++) {
          const x = col * scanStep - halfW;
          const u = (col * scanStep) / w;
          const v = (row * scanStep) / h;

          // Top vertex of ribbon
          this.vertices.push(new p5.Vector(x, y, -1));
          this.uvs.push([u, v]);

          // Bottom vertex of ribbon
          this.vertices.push(new p5.Vector(x, y, 1));
          this.uvs.push([u, v]);
        }
      }

      // Build triangle strip faces for each row
      for (let row = 0; row < rows; row++) {
        const rowStart = row * cols * 2;
        for (let col = 0; col < cols - 1; col++) {
          const i = rowStart + col * 2;
          // Two triangles per quad
          this.faces.push([i, i + 1, i + 2]);
          this.faces.push([i + 1, i + 3, i + 2]);
        }
      }

      this.computeNormals();
    });
    this.geometry.gid = `RuttEtra|${nextGeometryId++}`;
    // On a geometry's first draw, model() finds every edge and turns them all
    // into stroke geometry, though the lines are drawn with noStroke(). Given
    // one edge of its own, it doesn't look for the rest
    this.geometry.edges = [[0, 1]];

    this.cols = cols;
    this.rows = rows;
    this.lastScanStep = scanStep;
  }

  process(graph, glCanvas) {
    const now = performance.now() / 1000;
    const dt = Math.min(Math.max(now - this.lastTime, 0), MAX_DT);
    this.lastTime = now;

    if (this.reading) this._pollReadback();
    const inputFBO = this.getInput(graph, 0);
    const mvp = this._draw(inputFBO, glCanvas);
    const xy = this._xyCabled(graph);
    // Uncabled, nothing is read back, and the grid goes, so cabling X or Y
    // again starts from a blank loop rather than an old picture
    if (!mvp || !xy) this.grid = null;
    else if (!this.reading) this._startGrid(inputFBO, glCanvas);
    if (!xy) return;
    // With no lines, the loop is all blank, so the beam rests unlit in the middle
    const pieces = mvp ? this._linePieces(mvp) : [];
    this.xy.publish(this, pieces, this.width, this.height, dt, this.params.loopHz.value);
  }

  // X or Y cabled to a pin or a knob
  _xyCabled(graph) {
    const fromXY = (c) => c.fromId === this.id && this.outputs[c.fromPort]?.type === 'control';
    return graph.connections.some(fromXY) || graph.controlConnections.some(fromXY);
  }

  // Draws the scan lines into the output, and returns the matrix they were
  // drawn through (projection x model-view, column-major), or null if none were
  _draw(inputFBO, glCanvas) {
    if (!inputFBO) {
      this.outputFBO.begin();
      glCanvas.clear();
      this.outputFBO.end();
      return null;
    }

    const scanStep = Math.round(this.getParam('scanStep'));

    // Rebuild geometry if needed
    if (scanStep !== this.lastScanStep) {
      this._buildGeometry(scanStep);
    }

    if (!this.geometry || !this.gpuMode) {
      // Fallback: passthrough
      this.outputFBO.begin();
      glCanvas.clear();
      glCanvas.shader(this.shader);
      this.shader.setUniform('tex0', inputFBO);
      this.renderQuad();
      this.outputFBO.end();
      return null;
    }

    const scale = this.getParam('scale');
    const depth = this.getParam('depth');
    const opacity = this.getParam('opacity');
    const rotX = this.getParam('rotationX');
    const rotY = this.getParam('rotationY');

    // Render to output FBO
    this.outputFBO.begin();
    glCanvas.clear();
    glCanvas.background(0);

    glCanvas.push();
    glCanvas.scale(scale);
    glCanvas.rotateX(rotX);
    glCanvas.rotateY(rotY);

    // Use our displacement shader
    glCanvas.shader(this.ruttShader);
    this.ruttShader.setUniform('uInputTex', inputFBO);
    this.ruttShader.setUniform('uDepth', depth);
    this.ruttShader.setUniform('uHalfWidth', this.getParam('lineThickness') * 0.5);
    this.ruttShader.setUniform('uOpacity', opacity);

    // Enable additive blending
    glCanvas.blendMode(glCanvas.ADD);
    glCanvas.noStroke();

    // The matrices model() draws through, framebuffer camera included
    const renderer = glCanvas._renderer;
    const mvp = mat4Mult(renderer.uPMatrix.mat4, renderer.uMVMatrix.mat4);

    // Draw the geometry
    glCanvas.model(this.geometry);

    glCanvas.blendMode(glCanvas.BLEND);
    glCanvas.pop();

    this.outputFBO.end();
    return mvp;
  }

  // Read the brightness under every vertex back from the GPU
  _startGrid(input, glCanvas) {
    const { cols, rows } = this;
    const step = this.lastScanStep;
    if (!this.gridFBO) {
      this.gridFBO = this.createFramebuffer({ width: cols, height: rows, density: 1 });
    } else if (this.gridFBO.width !== cols || this.gridFBO.height !== rows) {
      this.gridFBO.resize(cols, rows);
    }
    this.gridFBO.begin();
    glCanvas.clear();
    glCanvas.shader(this.gridShader);
    this.gridShader.setUniform('uInputTex', input);
    this.gridShader.setUniform('uStep', [step / this.width, step / this.height]);
    this.renderQuad();
    this.gridFBO.end();

    // WebGL1 reads at once
    const grid = { cols, rows, step };
    const pixels = this.readback.start(this.gridFBO, cols, rows);
    if (pixels) this.grid = { ...grid, pixels };
    else this.reading = grid;
  }

  // Once a frame, until the grid is in
  _pollReadback() {
    const pixels = this.readback.poll();
    if (pixels === null) return;
    const grid = this.reading;
    this.reading = null;
    if (pixels) this.grid = { ...grid, pixels };
  }

  // Each scan line through its vertices' centres, as pieces in px of the canvas
  // for the X and Y outputs (see latk/strokes.js). Each vertex is pushed back
  // as ruttEtraVert pushes it, by the latest grid's brightness and the current
  // Max Line Depth, then goes through mvp. Clip space y = -1 is the top of the
  // output, since p5's framebuffer camera flips y. A line breaks where it goes
  // behind the camera or past its depth range, and is cut at the canvas edge.
  _linePieces(m) {
    if (!this.grid) return [];
    const { cols, rows, step, pixels } = this.grid;
    const w = this.width, h = this.height;
    const depth = this.getParam('depth');
    const stride = Math.ceil(cols / XY_MAX_COLS);
    const pieces = [];
    const flush = (run) => {
      if (run.length > 1) for (const piece of polylinePieces(run, null, w, h)) pieces.push(piece);
    };

    for (let row = 0; row < rows; row++) {
      const y = row * step - h / 2;
      let run = [];
      for (let c = 0; c < cols + stride - 1; c += stride) {
        const col = Math.min(c, cols - 1);
        const x = col * step - w / 2;
        const z = -pixels[(row * cols + col) * 4] / 255 * depth + depth * 0.5;
        const cx = m[0] * x + m[4] * y + m[8] * z + m[12];
        const cy = m[1] * x + m[5] * y + m[9] * z + m[13];
        const cz = m[2] * x + m[6] * y + m[10] * z + m[14];
        const cw = m[3] * x + m[7] * y + m[11] * z + m[15];
        if (cw > 0 && cz >= -cw && cz <= cw) {
          run.push({ x: (cx / cw + 1) * 0.5 * w, y: (cy / cw + 1) * 0.5 * h });
        } else {
          flush(run);
          run = [];
        }
      }
      flush(run);
    }
    return pieces;
  }

  dispose() {
    if (this.geometry) this.glCanvas.freeGeometry(this.geometry);
    this.geometry = null;
    this.readback.dispose();
    if (this.gridFBO) this.gridFBO.remove();
    this.gridFBO = null;
    super.dispose();
  }
}

registerModule('RuttEtra', RuttEtraModule);

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/passthrough.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "passthroughFrag", { enumerable: true, get: () => passthroughFrag });
const passthroughFrag = `
precision highp float;
varying vec2 vTexCoord;
uniform sampler2D tex0;

void main() {
  gl_FragColor = texture2D(tex0, vTexCoord);
}
`;

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/slowscanjam/PixelReadback.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "PixelReadback", { enumerable: true, get: () => PixelReadback });
// Reads a framebuffer back to the CPU without stalling the main thread, as the
// SlowscanJam app's WebGLEncoder read its signal: readPixels into a pixel
// buffer behind a fence, which poll() checks once a frame. Rows come back top
// first (see Framebuffer Orientation in ARCHITECTURE.md). SlowscanJam reads its
// source picture this way, and Skeleton its mask.
class PixelReadback {
  constructor(glCanvas) {
    this.glCanvas = glCanvas;
    this.pbo = null;
    this.sync = null;
    this.size = 0;
  }

  // Starts reading the w x h RGBA pixels of fbo, a framebuffer of density 1.
  // WebGL1 has no pixel buffers, so there it reads them at once, waiting on the
  // GPU, and returns them. Otherwise it returns null, and poll() brings them.
  start(fbo, w, h) {
    const gl = this.glCanvas.drawingContext;
    if (typeof WebGL2RenderingContext === 'undefined' || !(gl instanceof WebGL2RenderingContext)) {
      fbo.loadPixels();
      return fbo.pixels.slice();
    }
    const prevRead = gl.getParameter(gl.READ_FRAMEBUFFER_BINDING);
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, fbo.framebuffer);
    if (!this.pbo) this.pbo = gl.createBuffer();
    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, this.pbo);
    // Fresh storage each time; reusing it makes Chrome discard the shadow copy
    // it keeps for fenced readbacks
    gl.bufferData(gl.PIXEL_PACK_BUFFER, w * h * 4, gl.STREAM_READ);
    gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, 0);
    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, prevRead);
    this.sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
    gl.flush();
    this.size = w * h * 4;
    return null;
  }

  // The pixels once the GPU has written them, null until then, or false if the
  // read failed. The fence only updates between tasks, so check once a frame.
  poll() {
    const gl = this.glCanvas.drawingContext;
    const r = gl.clientWaitSync(this.sync, 0, 0);
    if (r === gl.TIMEOUT_EXPIRED) return null;
    gl.deleteSync(this.sync);
    this.sync = null;
    if (r === gl.WAIT_FAILED) return false;
    const pixels = new Uint8Array(this.size);
    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, this.pbo);
    gl.getBufferSubData(gl.PIXEL_PACK_BUFFER, 0, pixels);
    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
    return pixels;
  }

  dispose() {
    const gl = this.glCanvas.drawingContext;
    if (this.sync) gl.deleteSync(this.sync);
    if (this.pbo) gl.deleteBuffer(this.pbo);
    this.sync = null;
    this.pbo = null;
  }
}

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/latk/strokes.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "projectFrame", { enumerable: true, get: () => projectFrame });
Object.defineProperty(__exports, "polylinePieces", { enumerable: true, get: () => polylinePieces });
Object.defineProperty(__exports, "Z_OFF", { enumerable: true, get: () => Z_OFF });
Object.defineProperty(__exports, "Z_ON", { enumerable: true, get: () => Z_ON });
Object.defineProperty(__exports, "encodeLoop", { enumerable: true, get: () => encodeLoop });
Object.defineProperty(__exports, "XYOutputs", { enumerable: true, get: () => XYOutputs });
Object.defineProperty(__exports, "findPieces", { enumerable: true, get: () => findPieces });
Object.defineProperty(__exports, "XYInputs", { enumerable: true, get: () => XYInputs });
Object.defineProperty(__exports, "PointStream", { enumerable: true, get: () => PointStream });
// Latk strokes on the canvas: projecting them through the camera, encoding
// them as a loop of XY audio for the Latk module's X and Y outputs, and
// packing them as a point stream for the segment shader. NAPLPS publishes its
// drawing on X and Y outputs of its own the same way (polylinePieces, XYOutputs).
// Twoscilloscope and ESP32 take a loop in on X and Y pins (XYInputs) and find
// its strokes (findPieces).
const { OrbitCamera } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/latk/OrbitCamera.js");

// Cuts the segment a-b to the canvas (Liang-Barsky). Returns null if none of
// it is inside, or [t0, t1], where the inside part starts and ends.
function clipSegment(ax, ay, bx, by, w, h) {
  const dx = bx - ax, dy = by - ay;
  const p = [-dx, dx, -dy, dy];
  const q = [ax, w - ax, ay, h - ay];
  let t0 = 0, t1 = 1;
  for (let i = 0; i < 4; i++) {
    if (p[i] === 0) {
      // parallel to this edge, so all in or all out
      if (q[i] < 0) return null;
      continue;
    }
    const t = q[i] / p[i];
    if (p[i] < 0) t0 = Math.max(t0, t);
    else t1 = Math.min(t1, t);
    if (t0 > t1) return null;
  }
  return [t0, t1];
}

// The current frame of each layer through mvp onto a w x h canvas, as pieces of
// strokes in canvas px: { points, color, key, length, start, lit }. A stroke
// breaks where it goes behind the camera, and is cut where it leaves the canvas.
// start and lit are left for Twoscilloscope's encoder. This is the project() of
// LatkScopeRenderer in Twoscilloscope's example-latk.
function projectFrame(latk, mvp, w, h) {
  const pieces = [];

  for (const layer of latk.layers) {
    const frame = layer.frames[layer.counter];
    if (!frame) continue;

    for (const stroke of frame.strokes) {
      // 8-bit, as ofxLatk keeps them
      const color = [Math.floor(255 * stroke.color[0]), Math.floor(255 * stroke.color[1]), Math.floor(255 * stroke.color[2])];
      const key = (color[0] << 16) | (color[1] << 8) | color[2];
      let open = false; // whether the next segment continues the last piece
      let lastValid = false;
      let lastX = 0, lastY = 0;
      for (const p of stroke.points) {
        // Behind the camera or outside its depth range: break the stroke here.
        const screen = OrbitCamera.project(mvp, p.co[0], p.co[1], p.co[2], w, h);
        const t = screen.valid && lastValid ? clipSegment(lastX, lastY, screen.x, screen.y, w, h) : null;
        if (t) {
          // The canvas is the scope's canvas, and past its edges the audio
          // would clip, so cut the stroke where it leaves the canvas.
          const ax = lastX + (screen.x - lastX) * t[0], ay = lastY + (screen.y - lastY) * t[0];
          const bx = lastX + (screen.x - lastX) * t[1], by = lastY + (screen.y - lastY) * t[1];
          if (!open || t[0] > 0) {
            pieces.push({ points: [{ x: ax, y: ay }], color, key, length: 0, start: 0, lit: 0 });
          }
          const piece = pieces[pieces.length - 1];
          piece.points.push({ x: bx, y: by });
          piece.length += Math.hypot(bx - ax, by - ay);
          open = t[1] === 1;
        } else {
          open = false;
        }
        lastX = screen.x;
        lastY = screen.y;
        lastValid = screen.valid;
      }
    }
  }

  return pieces;
}

// A polyline in px of a w x h canvas, as pieces in the form projectFrame()
// gives, in one colour ([r, g, b], 8-bit), or in none (null), which leaves
// Twoscilloscope to draw it in its default white. It is cut where it leaves the
// canvas, as projectFrame() cuts strokes, and a piece of no length is left out,
// since a canvas strokes nothing there either.
function polylinePieces(points, color, w, h) {
  const key = color ? (color[0] << 16) | (color[1] << 8) | color[2] : -1;
  const pieces = [];
  let open = false; // whether the next segment continues the last piece
  for (let k = 1; k < points.length; k++) {
    const a = points[k - 1], b = points[k];
    const t = clipSegment(a.x, a.y, b.x, b.y, w, h);
    if (!t) {
      open = false;
      continue;
    }
    const ax = a.x + (b.x - a.x) * t[0], ay = a.y + (b.y - a.y) * t[0];
    const bx = a.x + (b.x - a.x) * t[1], by = a.y + (b.y - a.y) * t[1];
    if (!open || t[0] > 0) {
      pieces.push({ points: [{ x: ax, y: ay }], color, key, length: 0, start: 0, lit: 0 });
    }
    const piece = pieces[pieces.length - 1];
    piece.points.push({ x: bx, y: by });
    piece.length += Math.hypot(bx - ax, by - ay);
    open = t[1] === 1;
  }
  return pieces.filter((piece) => piece.length > 0);
}

// XYscope's blanking levels on the Z channel
const Z_OFF = -1;
const Z_ON = 1;

// Pieces from projectFrame() as one loop of n samples of XY audio, as
// Twoscilloscope's example-latk encoded them: the canvas mapped to -1..1 with
// +Y up, a blank sample (Z_OFF) that jumps the beam to the start of each
// piece, then lit samples (Z_ON) at even steps along it. color carries each
// sample's piece colour (0xRRGGBB), or -1 after the last piece. Returns
// { x, y, z, color, pieces, dropped }: the pieces encoded, each with its first
// sample (start) and lit sample count (lit), and how many were left out.
function encodeLoop(pieces, n, w, h) {
  let dropped = 0;

  // Every piece takes a blank sample that jumps the beam to its start, and at
  // least two lit ones, for its ends. If the loop is too short for that, the
  // shortest pieces are left out.
  const maxPieces = Math.floor(n / 3);
  if (pieces.length > maxPieces) {
    // a stable sort, so equal lengths keep their order
    const order = pieces.map((piece, i) => i).sort((a, b) => pieces[b].length - pieces[a].length);
    const keep = new Uint8Array(pieces.length);
    for (let i = 0; i < maxPieces; i++) keep[order[i]] = 1;
    const kept = pieces.filter((piece, i) => keep[i] === 1);
    dropped = pieces.length - kept.length;
    pieces = kept;
  }

  // The rest of the loop is shared out by length, so the beam moves at an
  // even speed, as it does in XYscope's waveforms.
  let totalLength = 0;
  for (const piece of pieces) totalLength += piece.length;
  const spare = n - 3 * pieces.length;

  const x = new Float32Array(n), y = new Float32Array(n), z = new Float32Array(n);
  const color = new Float32Array(n).fill(-1);
  let i = 0;
  let key = -1;
  const write = (px, py, lit) => {
    x[i] = px / w * 2 - 1;
    y[i] = 1 - py / h * 2;
    z[i] = lit ? Z_ON : Z_OFF;
    color[i] = key;
    i++;
  };

  let before = 0; // length of the pieces so far
  for (let k = 0; k < pieces.length; k++) {
    const piece = pieces[k];
    const pts = piece.points;
    // rounded from running totals, so the shares add up to exactly the spare samples
    const after = before + piece.length;
    let share;
    if (totalLength > 0) {
      share = Math.round(spare * after / totalLength) - Math.round(spare * before / totalLength);
    } else {
      share = Math.floor(spare * (k + 1) / pieces.length) - Math.floor(spare * k / pieces.length);
    }
    before = after;

    piece.start = i;
    piece.lit = 2 + share;
    key = piece.key;
    write(pts[0].x, pts[0].y, false);

    // lit samples at even steps along the piece, from its first point to its last
    let seg = 0;
    let segStart = 0; // length along the piece to points[seg]
    let segLength = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
    for (let j = 0; j < piece.lit; j++) {
      const at = piece.length * j / (piece.lit - 1);
      while (seg + 2 < pts.length && segStart + segLength < at) {
        segStart += segLength;
        seg++;
        segLength = Math.hypot(pts[seg + 1].x - pts[seg].x, pts[seg + 1].y - pts[seg].y);
      }
      const t = segLength > 0 ? Math.min(1, Math.max(0, (at - segStart) / segLength)) : 1;
      write(pts[seg].x + (pts[seg + 1].x - pts[seg].x) * t, pts[seg].y + (pts[seg + 1].y - pts[seg].y) * t, true);
    }
  }
  // with nothing to draw, the beam rests blanked in the middle
  key = -1;
  while (i < n) write(w / 2, h / 2, false);

  return { x, y, z, color, pieces, dropped };
}

// A module's X and Y control outputs, as Latk's (see Module System in
// ARCHITECTURE.md). Each frame, publish() encodes the pieces as one loop of
// sampleRate / loopHz samples and sets it as the control signals x and y, both
// carrying the loop's blanking (z) and colours (color). With no pieces the loop
// is all blank, so the beam rests unlit in the middle. A knob cabled to X or Y
// sees where the beam is at this moment, as the loop plays at loopHz, as 0..1.
class XYOutputs {
  constructor(sampleRate = 44100) {
    this.sampleRate = sampleRate;
    this.phase = 0;     // where the beam is in the loop
  }

  publish(mod, pieces, w, h, dt, loopHz) {
    // A whole number of samples, so XYscope plays it back one table entry per sample
    const n = Math.max(2, Math.round(this.sampleRate / Math.max(0.1, loopHz)));
    const loop = encodeLoop(pieces, n, w, h);
    const lanes = { sampleRate: this.sampleRate, z: loop.z, color: loop.color };
    mod.controlSignals.x = { samples: loop.x, ...lanes };
    mod.controlSignals.y = { samples: loop.y, ...lanes };

    this.phase = (this.phase + dt * this.sampleRate / n) % 1;
    const i = Math.floor(this.phase * n);
    mod.controlValues.x = (loop.x[i] + 1) / 2;
    mod.controlValues.y = (loop.y[i] + 1) / 2;
  }
}

// The colour of a loop that brings none: white, where the library
// Oscilloscope's default is amber (hue 50)
const DEFAULT_KEY = 0xffffff;

// The runs of lit samples in a loop's blanking, each with the colour of its
// first sample: { start, lit, key }. start is the blank sample before the run,
// or -1 if the run starts the loop. A loop without blanking is one run, lit
// from end to end.
function findPieces(z, color, n) {
  const keyAt = (i) => (color && color[i] >= 0 ? color[i] : DEFAULT_KEY);
  if (!z) return [{ start: -1, lit: n, key: keyAt(0) }];
  const isLit = (i) => z[i] > (Z_OFF + Z_ON) / 2;
  const pieces = [];
  let i = 0;
  while (i < n) {
    if (!isLit(i)) {
      i++;
      continue;
    }
    const first = i;
    while (i < n && isLit(i)) i++;
    pieces.push({ start: first - 1, lit: i - first, key: keyAt(first) });
  }
  return pieces;
}

// A module's X and Y control input pins, as Twoscilloscope's (see Module
// System in ARCHITECTURE.md). read() makes one loop of the two.
class XYInputs {
  constructor() {
    this.history = [];   // { t, x, y } a frame, while only 0..1 values come in
  }

  // X and Y as one loop: { x, y, z, color, sampleRate }, or null with nothing
  // cabled in. A loop on either pin sets the length, and brings its blanking
  // and colours (X's, if both bring a loop). An unplugged pin stays at 0, the
  // centre. xPort and yPort are the pins' port numbers, and trail the seconds
  // kept of a pin that brings only a 0..1 value each frame.
  read(mod, graph, trail, xPort = 0, yPort = 1) {
    const xIn = mod.getControlInput(graph, xPort);
    const yIn = mod.getControlInput(graph, yPort);
    const looped = [xIn, yIn].find((c) => c && c.signal && c.signal.samples.length >= 2);
    if (looped) {
      this.history = [];
      const { samples, sampleRate, z, color } = looped.signal;
      const n = samples.length;
      return { x: lane(xIn, n), y: lane(yIn, n), z: z ?? null, color: color ?? null, sampleRate };
    }
    if (!xIn && !yIn) {
      this.history = [];
      return null;
    }

    // Only 0..1 values each frame: the last trail seconds of them are the
    // loop, as on a scope with a long persistence
    const now = performance.now() / 1000;
    this.history.push({ t: now, x: xIn ? xIn.value * 2 - 1 : 0, y: yIn ? yIn.value * 2 - 1 : 0 });
    while (now - this.history[0].t > trail) this.history.shift();
    const n = this.history.length;
    return {
      x: Float32Array.from(this.history, (h) => h.x),
      y: Float32Array.from(this.history, (h) => h.y),
      z: null, color: null, sampleRate: n / trail,
    };
  }
}

// One pin's samples over a loop of n: its own loop, stretched to n if it is
// another length, its 0..1 value held across the loop, or 0 when unplugged
function lane(input, n) {
  if (!input) return new Float32Array(n);
  const s = input.signal?.samples;
  if (!s || s.length < 2) return new Float32Array(n).fill(input.value * 2 - 1);
  if (s.length === n) return s;
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const at = i * (s.length - 1) / (n - 1);
    const i0 = Math.min(Math.floor(at), s.length - 2);
    out[i] = s[i0] + (s[i0 + 1] - s[i0]) * (at - i0);
  }
  return out;
}

// What the segment shader draws: four floats a point, x and y in scope units
// (-1..1 across the canvas, +Y up), then the colour of the segment from this
// point to the next, as 0xRRGGBB, or -1 where there is none, then 0.
class PointStream {

  constructor() {
    this.data = new Float32Array(4 * 4096);
    this.count = 0;
  }

  // Empties the stream, with room for count points, and returns its data
  reset(count) {
    if (this.data.length < count * 4) this.data = new Float32Array(Math.max(count, this.data.length / 2) * 4);
    this.count = 0;
    return this.data;
  }

  // A polyline in px of a w x h canvas, its segments in one colour
  addPolyline(points, key, closed, w, h) {
    const s = this.data;
    const total = points.length + (closed ? 1 : 0);
    for (let j = 0; j < total; j++) {
      const p = points[j % points.length];
      const o = this.count++ * 4;
      s[o] = p.x / w * 2 - 1;
      s[o + 1] = 1 - p.y / h * 2;
      s[o + 2] = j < total - 1 ? key : -1;
      s[o + 3] = 0;
    }
  }

  // count samples of a loop from index from, already in scope units, as a
  // polyline in one colour
  addSamples(x, y, from, count, key) {
    const s = this.data;
    for (let j = 0; j < count; j++) {
      const o = this.count++ * 4;
      s[o] = x[from + j];
      s[o + 1] = y[from + j];
      s[o + 2] = j < count - 1 ? key : -1;
      s[o + 3] = 0;
    }
  }

  // Every piece from projectFrame(), as lines
  addPieces(pieces, w, h) {
    let count = 0;
    for (const piece of pieces) count += piece.points.length;
    this.reset(count);
    for (const piece of pieces) this.addPolyline(piece.points, piece.key, false, w, h);
  }

}

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/latk/OrbitCamera.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "OrbitCamera", { enumerable: true, get: () => OrbitCamera });
// The camera the Latk drawing is seen through, from Twoscilloscope's
// example-latk, in place of ofEasyCam.
//
// Twoscilloscope's scope has to project every stroke onto the canvas itself,
// so this camera keeps its own matrices and everything is drawn through them
// by hand, rather than through p5's WEBGL camera. Latk draws the same way. Y is up, as ofxLatk and Latk for Processing
// have it, and at yaw 0 it is in front of the drawing, looking down -Z.
//
// The example's mouse handling is gone: in LICHEN, dragging and the wheel turn
// the module's Yaw, Pitch and Distance knobs, which set yaw, pitch and distance.
class OrbitCamera {

  constructor() {
    this.fov = Math.PI / 3; // 60 degrees, like p5's and oF's
    this.target = [0, 0, 0];
    this.radius = 1;        // of what it's looking at
    this.distance = OrbitCamera.HOME_DISTANCE;
    this.yaw = 0;
    this.pitch = 0;
  }

  // Look at the middle of a box. Its radius is the unit distance is measured in.
  fit(min, max) {
    this.target = [(min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2];
    this.radius = Math.max(1e-6, Math.hypot(max[0] - min[0], max[1] - min[1], max[2] - min[2]) / 2);
  }

  getEye() {
    const cp = Math.cos(this.pitch);
    return [
      this.target[0] + this.distance * cp * Math.sin(this.yaw),
      this.target[1] + this.distance * Math.sin(this.pitch),
      this.target[2] + this.distance * cp * Math.cos(this.yaw)
    ];
  }

  // World -> clip space for a width x height canvas, column-major.
  getModelViewProjectionMatrix(width, height) {
    const eye = this.getEye();
    const t = this.target;
    const normalize = (v) => {
      const l = Math.hypot(v[0], v[1], v[2]) || 1;
      return [v[0] / l, v[1] / l, v[2] / l];
    };
    const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

    // lookAt, with y up
    const f = normalize([t[0] - eye[0], t[1] - eye[1], t[2] - eye[2]]);
    const s = normalize(cross(f, [0, 1, 0]));
    const u = cross(s, f);
    const view = [
      s[0], u[0], -f[0], 0,
      s[1], u[1], -f[1], 0,
      s[2], u[2], -f[2], 0,
      -dot(s, eye), -dot(u, eye), dot(f, eye), 1
    ];

    // perspective
    const near = this.distance * 0.01;
    const far = this.distance + this.radius * 10;
    const g = 1 / Math.tan(this.fov / 2);
    const proj = [
      g / (width / height), 0, 0, 0,
      0, g, 0, 0,
      0, 0, (far + near) / (near - far), -1,
      0, 0, 2 * far * near / (near - far), 0
    ];

    const m = new Array(16);
    for (let c = 0; c < 4; c++) {
      for (let r = 0; r < 4; r++) {
        m[c * 4 + r] = proj[r] * view[c * 4] + proj[4 + r] * view[c * 4 + 1] + proj[8 + r] * view[c * 4 + 2] + proj[12 + r] * view[c * 4 + 3];
      }
    }
    return m;
  }

  // A world point through mvp onto a width x height canvas, in pixels.
  // valid is false behind the camera or outside its depth range.
  static project(m, x, y, z, width, height) {
    const cx = m[0] * x + m[4] * y + m[8] * z + m[12];
    const cy = m[1] * x + m[5] * y + m[9] * z + m[13];
    const cz = m[2] * x + m[6] * y + m[10] * z + m[14];
    const cw = m[3] * x + m[7] * y + m[11] * z + m[15];
    return {
      x: (cx / cw + 1) * 0.5 * width,
      y: (1 - cy / cw) * 0.5 * height,
      valid: cw > 0 && cz / cw >= -1 && cz / cw <= 1
    };
  }

}

// The example's home view, in radii of the drawing: far enough back to see all
// of it (radius / sin(fov / 2) x 1.05), pitched 0.15 rad. Zooming was clamped to
// 0.05 to 50 radii.
OrbitCamera.HOME_DISTANCE = 1 / Math.sin(Math.PI / 6) * 1.05;
OrbitCamera.HOME_PITCH = 0.15;
OrbitCamera.MIN_DISTANCE = 0.05;
OrbitCamera.MAX_DISTANCE = 50;

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/GridGuysModule.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "GridGuysModule", { enumerable: true, get: () => GridGuysModule });
const { Module } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/Module.js");
const { gridguysSimulationFrag } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/gridguys-simulation.js");
const { gridguysRenderFrag } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/gridguys-render.js");
const { registerModule } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/moduleRegistry.js");
const { Target } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/gridguys/target.js");

const PATTERNS = [
  { odds: [0, 0.5, 0, 0.5, 0.5, 0, 0.5, 0], randomize: [] },
  { odds: [null, 1, 1, null, 0, 1, 0, null], randomize: [0, 3, 7] },
  { odds: [0, 0, null, null, null, null, 0, 0], randomize: [2, 3, 4, 5], scale: [1, 1, 0.1, 1, 1, 0.1, 1, 1] },
  { odds: [0, 0.1, 0, 0, 0, null, 0.5, null], randomize: [5, 7] },
  { odds: [0, 0, 0, 0, 0, null, 1, null], randomize: [5, 7], scale: [1, 1, 1, 1, 1, 0.1, 1, 0.1] },
  { odds: [null, 1, null, 0, 0, 0, 0, 0], randomize: [0, 2], scale: [0.1, 1, 0.1, 1, 1, 1, 1, 1] },
  { odds: [null, null, null, null, null, null, null, null], randomize: [0, 1, 2, 3, 4, 5, 6, 7] }
];

class GridGuysModule extends Module {
  static uid = '4b57bbb0';

  constructor(glCanvas, id) {
    super('GridGuys', glCanvas, id);
    this.inputs = [];
    this.outputs = [{ id: '3616', name: 'out', type: 'video' }];
    this.historicalInfo = "GridGuys";
    this.params = {
      blend: { id: '3947', value: 1.0, min: 0, max: 1, step: 0.01, label: 'Blend' },
      delay: { id: '6789', value: 1, min: 0, max: 60, step: 1, label: 'Delay' },
      life: { id: 'b05d', value: 40, min: 1, max: 120, step: 1, label: 'Life' },
      respawn: { id: '0a47', value: 50, min: 1, max: 120, step: 1, label: 'Respawn' },
      chaos: { id: '61ca', value: 0.03, min: 0, max: 1, step: 0.01, label: 'Chaos' }
    };

    // Create both shaders
    this.simulationShader = glCanvas.createShader(
      this._getVertSrc(),
      gridguysSimulationFrag
    );
    this.renderShader = glCanvas.createShader(
      this._getVertSrc(),
      gridguysRenderFrag
    );

    // Create ping-pong framebuffers for simulation state
    this.fboA = this.createFramebuffer();
    this.fboB = this.createFramebuffer();
    this.currentBuffer = 0;

    // Clear both FBOs
    this._clearFBO(this.fboA, glCanvas);
    this._clearFBO(this.fboB, glCanvas);

    this.createOutputFBO();

    // Autonomous target cursor
    this.target = new Target(glCanvas.width, glCanvas.height);

    // Propagation odds: NW, N, NE, W, E, SW, S, SE
    this.odds = [0, 0.5, 0, 0.5, 0.5, 0, 0.5, 0];
    this.setupPattern();

    this.startTime = performance.now();
  }

  _getVertSrc() {
    return `
      precision highp float;
      attribute vec3 aPosition;
      attribute vec2 aTexCoord;
      varying vec2 vTexCoord;
      void main() {
        vTexCoord = aTexCoord;
        vec4 positionVec4 = vec4(aPosition, 1.0);
        positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
        gl_Position = positionVec4;
      }
    `;
  }

  _clearFBO(fbo, glCanvas) {
    fbo.begin();
    glCanvas.clear();
    fbo.end();
  }

  setupPattern() {
    const choose = Math.floor(Math.random() * PATTERNS.length);
    const pattern = PATTERNS[choose];

    for (let i = 0; i < 8; i++) {
      if (pattern.odds[i] === null || pattern.randomize.includes(i)) {
        let val = Math.random();
        if (pattern.scale && pattern.scale[i]) {
          val *= pattern.scale[i];
        }
        this.odds[i] = val;
      } else {
        this.odds[i] = pattern.odds[i];
      }
    }
  }

  resetAll(glCanvas) {
    this._clearFBO(this.fboA, glCanvas);
    this._clearFBO(this.fboB, glCanvas);
    this.setupPattern();
  }

  process(graph, glCanvas) {
    // Update target dimensions and run autonomous movement
    this.target.width = glCanvas.width;
    this.target.height = glCanvas.height;
    this.target.run();

    if (this.target.armResetAll) {
      this.setupPattern();
      this.target.armResetAll = false;
    }

    const time = (performance.now() - this.startTime) / 1000.0;
    const readFBO = this.currentBuffer === 0 ? this.fboA : this.fboB;
    const writeFBO = this.currentBuffer === 0 ? this.fboB : this.fboA;

    // --- SIMULATION PASS ---
    writeFBO.begin();
    glCanvas.clear();
    glCanvas.shader(this.simulationShader);
    this.simulationShader.setUniform('u_state', readFBO);
    // The neighbour taps are texel steps off u_resolution and the target is in
    // the same pixel space, so both follow the framebuffer's physical size
    const density = this.pixelDensity;
    this.simulationShader.setUniform('u_resolution', this.fragResolution());
    this.simulationShader.setUniform('u_target', [this.target.posX * density, -this.target.posY * density]);
    this.simulationShader.setUniform('u_targetClicked', this.target.clicked ? 1.0 : 0.0);
    this.simulationShader.setUniform('u_time', time);
    this.simulationShader.setUniform('u_oddsNW', this.odds[0]);
    this.simulationShader.setUniform('u_oddsN', this.odds[1]);
    this.simulationShader.setUniform('u_oddsNE', this.odds[2]);
    this.simulationShader.setUniform('u_oddsW', this.odds[3]);
    this.simulationShader.setUniform('u_oddsE', this.odds[4]);
    this.simulationShader.setUniform('u_oddsSW', this.odds[5]);
    this.simulationShader.setUniform('u_oddsS', this.odds[6]);
    this.simulationShader.setUniform('u_oddsSE', this.odds[7]);
    this.simulationShader.setUniform('u_delayFrames', this.params.delay.value);
    this.simulationShader.setUniform('u_lifeFrames', this.params.life.value);
    this.simulationShader.setUniform('u_respawnFrames', this.params.respawn.value);
    this.simulationShader.setUniform('u_chaos', this.params.chaos.value);
    this.renderQuad();
    writeFBO.end();

    // Swap buffers
    this.currentBuffer = 1 - this.currentBuffer;

    // --- RENDER PASS ---
    this.outputFBO.begin();
    glCanvas.clear();
    glCanvas.shader(this.renderShader);
    this.renderShader.setUniform('u_state', writeFBO);
    this.renderShader.setUniform('u_resolution', this.fragResolution());
    this.renderShader.setUniform('u_time', time);
    this.renderShader.setUniform('u_blend', this.params.blend.value);
    this.renderQuad();
    this.outputFBO.end();
  }

  dispose() {
    this.fboA = null;
    this.fboB = null;
    this.simulationShader = null;
    this.renderShader = null;
    super.dispose();
  }
}

registerModule('GridGuys', GridGuysModule);

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/gridguys-simulation.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "gridguysSimulationFrag", { enumerable: true, get: () => gridguysSimulationFrag });
const gridguysSimulationFrag = `
precision highp float;
varying vec2 vTexCoord;

uniform sampler2D u_state;
uniform vec2 u_resolution;
uniform vec2 u_target;
uniform float u_targetClicked;
uniform float u_time;

uniform float u_oddsNW;
uniform float u_oddsN;
uniform float u_oddsNE;
uniform float u_oddsW;
uniform float u_oddsE;
uniform float u_oddsSW;
uniform float u_oddsS;
uniform float u_oddsSE;

uniform float u_delayFrames;
uniform float u_lifeFrames;
uniform float u_respawnFrames;
uniform float u_chaos;

// State encoding:
// R: state (0=idle, 0.25=kaboom, 0.5=clicked, 0.75=respawn)
// G: countdown (1.0 to 0.0)
// B: unused
// A: random color value

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
    vec2 uv = vTexCoord;
    vec2 texel = 1.0 / u_resolution;

    vec4 current = texture2D(u_state, uv);
    float state = current.r;
    float countdown = current.g;
    float colorVal = current.a;

    // Initialize color if needed
    if (colorVal < 0.01) {
        colorVal = 0.3 + 0.7 * hash(gl_FragCoord.xy);
    }

    float randVal = hash(gl_FragCoord.xy + vec2(fract(u_time * 7.3), fract(u_time * 11.1)));

    // Target hover check - convert target from centered coords to UV
    vec2 targetUV = (u_target + u_resolution * 0.5) / u_resolution;
    float targetDist = distance(uv, targetUV);
    float cellSize = texel.x;

    // Sample neighbors
    vec4 nw = texture2D(u_state, uv + vec2(-texel.x, texel.y));
    vec4 n  = texture2D(u_state, uv + vec2(0.0, texel.y));
    vec4 ne = texture2D(u_state, uv + vec2(texel.x, texel.y));
    vec4 w  = texture2D(u_state, uv + vec2(-texel.x, 0.0));
    vec4 e  = texture2D(u_state, uv + vec2(texel.x, 0.0));
    vec4 sw = texture2D(u_state, uv + vec2(-texel.x, -texel.y));
    vec4 s  = texture2D(u_state, uv + vec2(0.0, -texel.y));
    vec4 se = texture2D(u_state, uv + vec2(texel.x, -texel.y));

    // Boundaries
    float isTop = step(1.0 - texel.y * 1.5, uv.y);
    float isBottom = step(uv.y, texel.y * 1.5);
    float isLeft = step(uv.x, texel.x * 1.5);
    float isRight = step(1.0 - texel.x * 1.5, uv.x);

    float newState = state;
    float newCountdown = countdown;

    // Decrements per frame
    float decrement = 1.0 / max(u_lifeFrames, 1.0);
    float delayDecrement = 1.0 / max(u_delayFrames, 1.0);
    float respawnDecrement = 1.0 / max(u_respawnFrames, 1.0);

    // STATE MACHINE

    // IDLE state (state < 0.1)
    if (state < 0.1) {
        float triggered = 0.0;

        // Check each clicked neighbor (state between 0.4 and 0.6)
        float nwClicked = step(0.4, nw.r) * step(nw.r, 0.6) * (1.0 - isTop) * (1.0 - isLeft);
        float nClicked  = step(0.4, n.r)  * step(n.r, 0.6)  * (1.0 - isTop);
        float neClicked = step(0.4, ne.r) * step(ne.r, 0.6) * (1.0 - isTop) * (1.0 - isRight);
        float wClicked  = step(0.4, w.r)  * step(w.r, 0.6)  * (1.0 - isLeft);
        float eClicked  = step(0.4, e.r)  * step(e.r, 0.6)  * (1.0 - isRight);
        float swClicked = step(0.4, sw.r) * step(sw.r, 0.6) * (1.0 - isBottom) * (1.0 - isLeft);
        float sClicked  = step(0.4, s.r)  * step(s.r, 0.6)  * (1.0 - isBottom);
        float seClicked = step(0.4, se.r) * step(se.r, 0.6) * (1.0 - isBottom) * (1.0 - isRight);

        // Random rolls for each direction (use fract to prevent precision loss over time)
        float r0 = hash(gl_FragCoord.xy + vec2(fract(u_time * 3.7), 0.1));
        float r1 = hash(gl_FragCoord.xy + vec2(fract(u_time * 5.3), 0.2));
        float r2 = hash(gl_FragCoord.xy + vec2(fract(u_time * 7.1), 0.3));
        float r3 = hash(gl_FragCoord.xy + vec2(fract(u_time * 11.3), 0.4));
        float r4 = hash(gl_FragCoord.xy + vec2(fract(u_time * 13.7), 0.5));
        float r5 = hash(gl_FragCoord.xy + vec2(fract(u_time * 17.1), 0.6));
        float r6 = hash(gl_FragCoord.xy + vec2(fract(u_time * 19.3), 0.7));
        float r7 = hash(gl_FragCoord.xy + vec2(fract(u_time * 23.7), 0.8));

        // Neighbors spread TO us based on their direction odds
        triggered += nwClicked * step(r0, u_oddsSE);
        triggered += nClicked  * step(r1, u_oddsS);
        triggered += neClicked * step(r2, u_oddsSW);
        triggered += wClicked  * step(r3, u_oddsE);
        triggered += eClicked  * step(r4, u_oddsW);
        triggered += swClicked * step(r5, u_oddsNE);
        triggered += sClicked  * step(r6, u_oddsN);
        triggered += seClicked * step(r7, u_oddsNW);

        if (triggered > 0.5) {
            newState = 0.25;  // KABOOM
            newCountdown = mix(0.7, 1.0, randVal * u_chaos + (1.0 - u_chaos));
        }

        // Direct click from target
        if (targetDist < cellSize * 2.5 && u_targetClicked > 0.5) {
            newState = 0.5;  // CLICKED
            newCountdown = 1.0;
        }
    }
    // KABOOM state (0.2 < state < 0.3)
    else if (state > 0.2 && state < 0.3) {
        newCountdown = countdown - delayDecrement;
        if (newCountdown <= 0.05) {
            newState = 0.5;  // -> CLICKED
            newCountdown = mix(0.7, 1.0, randVal * u_chaos + (1.0 - u_chaos));
        }
    }
    // CLICKED state (0.4 < state < 0.6)
    else if (state > 0.4 && state < 0.6) {
        newCountdown = countdown - decrement;
        if (newCountdown <= 0.05) {
            newState = 0.75;  // -> RESPAWN
            newCountdown = mix(0.7, 1.0, randVal * u_chaos + (1.0 - u_chaos));
        }
    }
    // RESPAWN state (state > 0.7)
    else if (state > 0.7) {
        newCountdown = countdown - respawnDecrement;
        if (newCountdown <= 0.05) {
            newState = 0.0;  // -> IDLE
            newCountdown = 0.0;
        }
    }

    gl_FragColor = vec4(newState, newCountdown, 0.0, colorVal);
}
`;

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/gridguys-render.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "gridguysRenderFrag", { enumerable: true, get: () => gridguysRenderFrag });
const gridguysRenderFrag = `
precision highp float;
varying vec2 vTexCoord;

uniform sampler2D u_state;
uniform sampler2D tex0;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_blend;

void main() {
    vec2 uv = vTexCoord;

    vec4 state = texture2D(u_state, uv);
    vec4 inputColor = texture2D(tex0, uv);

    float stateVal = state.r;
    float countdown = state.g;
    float colorVal = state.a;

    vec3 color = vec3(0.0);
    float alpha = 0.0;

    if (stateVal > 0.4 && stateVal < 0.6) {
        // CLICKED state - bright, use countdown for fade
        float gray = 0.5 + 0.5 * colorVal;
        color = vec3(gray);
        alpha = 0.5 + countdown * 0.5;
    } else if (stateVal > 0.2 && stateVal < 0.3) {
        // KABOOM state - pulsing glow
        color = vec3(0.4);
        alpha = 0.3 + countdown * 0.4;
    } else if (stateVal > 0.7) {
        // RESPAWN state - dim
        color = vec3(0.15);
        alpha = countdown * 0.3;
    }

    // Blend GridGuys effect with input video
    vec3 gridguysColor = color * alpha;
    vec3 finalColor = mix(inputColor.rgb, inputColor.rgb + gridguysColor, u_blend);

    gl_FragColor = vec4(finalColor, 1.0);
}
`;

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/gridguys/target.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "Target", { enumerable: true, get: () => Target });
class Target {
  constructor(width = 640, height = 480) {
    this.width = width;
    this.height = height;
    this.speedMin = 0.01;
    this.speedMax = 0.05;
    this.speed = 0.03;
    this.clickOdds = 0.1;
    this.chooseOdds = 0.01;
    this.markTime = 0;
    this.timeInterval = 200;

    this.posX = 0;
    this.posY = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.minDist = 5;
    this.clicked = false;
    this.armResetAll = false;

    this.pickTarget();
  }

  run() {
    this.posX = this._lerp(this.posX, this.targetX, this.speed);
    this.posY = this._lerp(this.posY, this.targetY, this.speed);

    const now = performance.now();
    const dist = this._dist(this.posX, this.posY, this.targetX, this.targetY);

    if (now > this.markTime + this.timeInterval || dist < this.minDist) {
      this.pickTarget();
    }
  }

  pickTarget() {
    this.markTime = performance.now();

    const halfW = this.width / 2;
    const halfH = this.height / 2;

    this.targetX = this._lerp(this.posX, this._random(-halfW, halfW), 0.5);
    this.targetY = this._lerp(this.posY, this._random(-halfH, halfH), 0.5);

    this.speed = this._random(this.speedMin, this.speedMax);
    const r = Math.random();
    if (r < this.clickOdds) this.clicked = !this.clicked;
    if (r < this.chooseOdds) this.armResetAll = true;
  }

  _lerp(a, b, t) {
    return a + (b - a) * t;
  }

  _dist(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  }

  _random(min, max) {
    return min + Math.random() * (max - min);
  }
}

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/AdderMultiplierModule.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "AdderMultiplierModule", { enumerable: true, get: () => AdderMultiplierModule });
const { Module } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/Module.js");
const { adderMultiplierFrag } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/adder-multiplier.js");
const { registerModule } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/moduleRegistry.js");

class AdderMultiplierModule extends Module {
  static uid = '8cea39bc';

  constructor(glCanvas, id) {
    super('AdderMultiplier', glCanvas, id);
    this.inputs = [
      { id: '3a2a', name: 'in1', type: 'video' },
      { id: '1565', name: 'in2', type: 'video' },
    ];
    this.outputs = [{ id: '6288', name: 'out', type: 'video' }];
    this.historicalInfo="Sandin"
    this.params = {
      mode: {
        id: '1288', value: 0, min: 0, max: 3, step: 1, label: 'Mode', widget: 'dropdown',
        valueLabels: ['Add', 'Multiply', 'Difference', 'Screen'],
      },
      mixVal: { id: 'ac2e', value: 0.5, min: 0, max: 1, step: 0.01, label: 'Mix' },
      contrast: { id: '8436', value: 1, min: 0, max: 3, step: 0.01, label: 'Contrast' },
    };
    this.createShader(adderMultiplierFrag);
    this.createOutputFBO();
  }

  process(graph, glCanvas) {
    const input0 = this.getInput(graph, 0);
    const input1 = this.getInput(graph, 1);
    if (!input0) return;
    this.outputFBO.begin();
    glCanvas.clear();
    glCanvas.shader(this.shader);
    this.shader.setUniform('tex0', input0);
    this.shader.setUniform('tex1', input1 || input0);
    this.shader.setUniform('mode', this.params.mode.value);
    this.shader.setUniform('mixVal', this.params.mixVal.value);
    this.shader.setUniform('contrast', this.params.contrast.value);
    this.renderQuad();
    this.outputFBO.end();
  }
}

registerModule('AdderMultiplier', AdderMultiplierModule);

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/adder-multiplier.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "adderMultiplierFrag", { enumerable: true, get: () => adderMultiplierFrag });
const adderMultiplierFrag = `
precision highp float;
varying vec2 vTexCoord;
uniform sampler2D tex0;
uniform sampler2D tex1;
uniform float mode;
uniform float mixVal;
uniform float contrast;

void main() {
  vec4 c0 = texture2D(tex0, vTexCoord);
  vec4 c1 = texture2D(tex1, vTexCoord);
  vec3 a = c0.rgb;
  vec3 b = c1.rgb;
  vec3 result;

  if (mode < 0.5) {
    result = a + b;
  } else if (mode < 1.5) {
    result = a * b;
  } else if (mode < 2.5) {
    result = abs(a - b);
  } else {
    result = 1.0 - (1.0 - a) * (1.0 - b);
  }

  result = mix(a, result, mixVal);
  result = (result - 0.5) * contrast + 0.5;
  result = clamp(result, 0.0, 1.0);
  gl_FragColor = vec4(result, 1.0);
}
`;

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/ColorEncoderModule.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "ColorEncoderModule", { enumerable: true, get: () => ColorEncoderModule });
const { Module } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/Module.js");
const { colorEncoderFrag } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/color-encoder.js");
const { registerModule } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/moduleRegistry.js");

class ColorEncoderModule extends Module {
  static uid = 'cd55eb84';

  constructor(glCanvas, id) {
    super('ColorEncoder', glCanvas, id);
    this.inputs = [{ id: '87a9', name: 'in', type: 'video' }];
    this.outputs = [{ id: '1bc2', name: 'out', type: 'video' }];
    this.historicalInfo="Sandin"
    this.params = {
      phaseR: { id: '4704', value: 0, min: 0, max: 6.283, step: 0.01, label: 'Phase R' },
      phaseG: { id: '4ca6', value: 2.094, min: 0, max: 6.283, step: 0.01, label: 'Phase G' },
      phaseB: { id: '0132', value: 4.189, min: 0, max: 6.283, step: 0.01, label: 'Phase B' },
      frequency: { id: '83af', value: 1, min: 0.1, max: 10, step: 0.01, label: 'Freq' },
    };
    this.createShader(colorEncoderFrag);
    this.createOutputFBO();
  }

  process(graph, glCanvas) {
    const inputFBO = this.getInput(graph, 0);
    if (!inputFBO) return;
    this.outputFBO.begin();
    glCanvas.clear();
    glCanvas.shader(this.shader);
    this.shader.setUniform('tex0', inputFBO);
    this.shader.setUniform('phaseR', this.params.phaseR.value);
    this.shader.setUniform('phaseG', this.params.phaseG.value);
    this.shader.setUniform('phaseB', this.params.phaseB.value);
    this.shader.setUniform('frequency', this.params.frequency.value);
    this.renderQuad();
    this.outputFBO.end();
  }
}

registerModule('ColorEncoder', ColorEncoderModule);

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/color-encoder.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "colorEncoderFrag", { enumerable: true, get: () => colorEncoderFrag });
const colorEncoderFrag = `
precision highp float;
varying vec2 vTexCoord;
uniform sampler2D tex0;
uniform float phaseR;
uniform float phaseG;
uniform float phaseB;
uniform float frequency;

void main() {
  vec4 col = texture2D(tex0, vTexCoord);
  float luma = dot(col.rgb, vec3(0.299, 0.587, 0.114));
  float angle = luma * frequency * 6.28318530718;
  float r = 0.5 + 0.5 * sin(angle + phaseR);
  float g = 0.5 + 0.5 * sin(angle + phaseG);
  float b = 0.5 + 0.5 * sin(angle + phaseB);
  gl_FragColor = vec4(r, g, b, 1.0);
}
`;

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/BufferSmearModule.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "BufferSmearModule", { enumerable: true, get: () => BufferSmearModule });
const { Module } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/Module.js");
const { bufferSmearFrag } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/buffer-smear.js");
const { passthroughFrag } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/passthrough.js");
const { vertSrc } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/vert.js");
const { registerModule } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/moduleRegistry.js");

class BufferSmearModule extends Module {
  static uid = 'a75885fd';

  constructor(glCanvas, id) {
    super('BufferSmear', glCanvas, id);
    this.inputs = [{ id: '477c', name: 'in', type: 'video' }];
    this.outputs = [{ id: '3e6c', name: 'out', type: 'video' }];
    this.params = {
      smearAmount: { id: '9252', value: 0.2, min: 0, max: 5, step: 0.01, label: 'Smear' },
      feedback: { id: '5e1c', value: 0.96, min: 0, max: 1, step: 0.01, label: 'Feedback' },
      zoomSpeed: { id: '4279', value: 1.0, min: 0, max: 5, step: 0.01, label: 'Zoom' },
    };
    this.createShader(bufferSmearFrag);
    this.createOutputFBO();
    this.feedbackFBO = this.createFramebuffer();
    this.copyShader = glCanvas.createShader(vertSrc, passthroughFrag);
    this.startTime = performance.now();
  }

  process(graph, glCanvas) {
    const inputFBO = this.getInput(graph, 0);
    if (!inputFBO) return;

    const time = (performance.now() - this.startTime) / 1000.0;

    this.outputFBO.begin();
    glCanvas.clear();
    glCanvas.shader(this.shader);
    this.shader.setUniform('tex0', inputFBO);
    this.shader.setUniform('tex1', this.feedbackFBO);
    this.shader.setUniform('time', time);
    this.shader.setUniform('smearAmount', this.params.smearAmount.value);
    this.shader.setUniform('feedback', this.params.feedback.value);
    this.shader.setUniform('zoomSpeed', this.params.zoomSpeed.value);
    this.renderQuad();
    this.outputFBO.end();

    // Copy output to feedback for next frame
    this.feedbackFBO.begin();
    glCanvas.clear();
    glCanvas.shader(this.copyShader);
    this.copyShader.setUniform('tex0', this.outputFBO);
    this.renderQuad();
    this.feedbackFBO.end();
  }

  dispose() {
    this.feedbackFBO = null;
    this.copyShader = null;
    super.dispose();
  }
}

registerModule('BufferSmear', BufferSmearModule);

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/buffer-smear.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "bufferSmearFrag", { enumerable: true, get: () => bufferSmearFrag });
const bufferSmearFrag = `
precision highp float;
varying vec2 vTexCoord;
uniform sampler2D tex0;
uniform sampler2D tex1;
uniform float time;
uniform float smearAmount;
uniform float feedback;
uniform float zoomSpeed;

void main() {
  vec2 uv = vTexCoord;

  vec4 camColor = texture2D(tex0, uv);

  // Smearing displacement
  vec2 smearUv = uv;
  smearUv += vec2(
    sin(smearUv.y * 10.0 + time) * 0.005 * smearAmount,
    cos(smearUv.x * 10.0 + time) * 0.005 * smearAmount
  );

  // Slight zoom in for trail effect
  smearUv = (smearUv - 0.5) * (1.0 - zoomSpeed * 0.01) + 0.5;

  vec4 prevColor = texture2D(tex1, smearUv);

  // Mix camera and smeared feedback
  vec4 finalColor = max(camColor, prevColor * feedback);

  gl_FragColor = finalColor;
}
`;

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/SharpenModule.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "SharpenModule", { enumerable: true, get: () => SharpenModule });
const { Module } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/Module.js");
const { sharpenFrag } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/sharpen.js");
const { registerModule } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/moduleRegistry.js");

class SharpenModule extends Module {
  static uid = '3b37efdd';

  constructor(glCanvas, id) {
    super('Sharpen', glCanvas, id);
    this.inputs = [{ id: '5c5a', name: 'in', type: 'video' }];
    this.outputs = [{ id: '8bdd', name: 'out', type: 'video' }];
    this.params = {
      sharpenAmount: { id: 'b6d6', value: 5, min: 1, max: 10, step: 0.1, label: 'Sharpen' },
      posterize: {
        id: '843d', value: 0, min: 0, max: 1, step: 1, label: 'Posterize',
        widget: 'dropdown', valueLabels: ['Off', 'On'],
      },
      posterizeLevels: { id: '1390', value: 8, min: 2, max: 32, step: 1, label: 'Levels' },
    };
    this.createShader(sharpenFrag);
    this.createOutputFBO();
  }

  process(graph, glCanvas) {
    const inputFBO = this.getInput(graph, 0);
    if (!inputFBO) return;
    this.outputFBO.begin();
    glCanvas.clear();
    glCanvas.shader(this.shader);
    this.shader.setUniform('tex0', inputFBO);
    this.shader.setUniform('texelSize', [1.0 / glCanvas.width, 1.0 / glCanvas.height]);
    this.shader.setUniform('sharpenAmount', this.params.sharpenAmount.value);
    this.shader.setUniform('posterize', Math.round(this.params.posterize.value));
    this.shader.setUniform('posterizeLevels', this.params.posterizeLevels.value);
    this.renderQuad();
    this.outputFBO.end();
  }
}

registerModule('Sharpen', SharpenModule);

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/sharpen.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "sharpenFrag", { enumerable: true, get: () => sharpenFrag });
const sharpenFrag = `
precision mediump float;

uniform sampler2D tex0;
uniform vec2 texelSize;
uniform float posterize;
uniform float posterizeLevels;
uniform float sharpenAmount;

varying vec2 vTexCoord;

void main() {
    vec2 uv = vTexCoord.xy;

    vec3 centerColor = texture2D(tex0, uv).xyz;
    vec3 leftColor = texture2D(tex0, uv - vec2(texelSize.x, 0.0)).xyz;
    vec3 rightColor = texture2D(tex0, uv + vec2(texelSize.x, 0.0)).xyz;
    vec3 topColor = texture2D(tex0, uv + vec2(0.0, texelSize.y)).xyz;
    vec3 bottomColor = texture2D(tex0, uv - vec2(0.0, texelSize.y)).xyz;

    // The four neighbours share (sharpenAmount - 1) of negative weight, so the
    // kernel always sums to 1 and flat areas keep their brightness: 1 passes the
    // input through, and the default 5 is the classic 5 / -1 kernel.
    float neighborWeight = (sharpenAmount - 1.0) * 0.25;
    vec3 sharpenedColor = centerColor * sharpenAmount - (leftColor + rightColor + topColor + bottomColor) * neighborWeight;
    vec3 color = sharpenedColor;
    if (posterize > 0.5) {
        color = floor(sharpenedColor * posterizeLevels) / posterizeLevels;
    }

    gl_FragColor = vec4(color, 1.0);
}
`;

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/EdgesModule.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "EdgesModule", { enumerable: true, get: () => EdgesModule });
const { Module } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/Module.js");
const { edgesFrag } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/edges.js");
const { registerModule } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/moduleRegistry.js");

class EdgesModule extends Module {
  static uid = '68c08c2a';

  constructor(glCanvas, id) {
    super('Edges', glCanvas, id);
    this.inputs = [{ id: '9eb5', name: 'in', type: 'video' }];
    this.outputs = [{ id: '9241', name: 'out', type: 'video' }];
    this.params = {
      mode: {
        id: '8a1f', value: 0, min: 0, max: 3, step: 1, label: 'Mode', widget: 'dropdown',
        valueLabels: ['Refine Contour', 'Scharr', 'Quantum Walk', 'Grayscale (debug)'],
      },
      threshold: { id: '2731', value: 0.5, min: 0, max: 1, step: 0.01, label: 'Threshold' },
    };
    this.createShader(edgesFrag);
    this.createOutputFBO();
  }

  process(graph, glCanvas) {
    const inputFBO = this.getInput(graph, 0);
    if (!inputFBO) return;
    this.outputFBO.begin();
    glCanvas.clear();
    glCanvas.shader(this.shader);
    this.shader.setUniform('tex0', inputFBO);
    this.shader.setUniform('texelSize', [1.0 / glCanvas.width, 1.0 / glCanvas.height]);
    this.shader.setUniform('mode', Math.round(this.params.mode.value));
    this.shader.setUniform('threshold', this.params.threshold.value);
    this.renderQuad();
    this.outputFBO.end();
  }
}

registerModule('Edges', EdgesModule);

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/edges.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "edgesFrag", { enumerable: true, get: () => edgesFrag });
const edgesFrag = `
precision mediump float;

uniform sampler2D tex0;
uniform vec2 texelSize;
uniform float mode;
uniform float threshold;

varying vec2 vTexCoord;

// The reference shaders sampled the red channel; LICHEN feeds arbitrary color
// video into this module, so every operator runs on luminance instead.
float lum(vec2 uv) {
  return dot(texture2D(tex0, uv).rgb, vec3(0.299, 0.587, 0.114));
}

// Sobel gradient, used by the refine-contour operator.
vec2 sobel(vec2 uv) {
  float tl = lum(uv + vec2(-texelSize.x, -texelSize.y));
  float tc = lum(uv + vec2(        0.0, -texelSize.y));
  float tr = lum(uv + vec2( texelSize.x, -texelSize.y));
  float ml = lum(uv + vec2(-texelSize.x,         0.0));
  float mr = lum(uv + vec2( texelSize.x,         0.0));
  float bl = lum(uv + vec2(-texelSize.x,  texelSize.y));
  float bc = lum(uv + vec2(        0.0,  texelSize.y));
  float br = lum(uv + vec2( texelSize.x,  texelSize.y));

  float gx = -tl + tr - 2.0 * ml + 2.0 * mr - bl + br;
  float gy = -tl - 2.0 * tc - tr + bl + 2.0 * bc + br;
  return vec2(gx, gy);
}

// Scharr kernels: better rotational symmetry than Sobel on diagonal edges.
vec2 scharr(vec2 uv) {
  float tl = lum(uv + vec2(-texelSize.x, -texelSize.y));
  float tc = lum(uv + vec2(        0.0, -texelSize.y));
  float tr = lum(uv + vec2( texelSize.x, -texelSize.y));
  float ml = lum(uv + vec2(-texelSize.x,         0.0));
  float mr = lum(uv + vec2( texelSize.x,         0.0));
  float bl = lum(uv + vec2(-texelSize.x,  texelSize.y));
  float bc = lum(uv + vec2(        0.0,  texelSize.y));
  float br = lum(uv + vec2( texelSize.x,  texelSize.y));

  float gx = -3.0 * tl + 3.0 * tr - 10.0 * ml + 10.0 * mr - 3.0 * bl + 3.0 * br;
  float gy = -3.0 * tl - 10.0 * tc - 3.0 * tr + 3.0 * bl + 10.0 * bc + 3.0 * br;
  return vec2(gx, gy);
}

// Discrete Laplacian standing in for the quantum-walk edge kernel (arXiv 1411.3958).
float quantumWalk(vec2 uv) {
  float c = lum(uv);
  float n = lum(uv + vec2(0.0,  texelSize.y));
  float s = lum(uv - vec2(0.0,  texelSize.y));
  float e = lum(uv + vec2(texelSize.x, 0.0));
  float w = lum(uv - vec2(texelSize.x, 0.0));
  return -4.0 * c + n + s + e + w;
}

void main() {
  vec2 uv = vTexCoord;
  int m = int(mode + 0.5);
  float edge;

  if (m == 1) {
    // Scharr: hard threshold on gradient magnitude
    edge = step(threshold, length(scharr(uv)));
  } else if (m == 2) {
    // Quantum walk: hard threshold on the Laplacian response
    edge = step(threshold, abs(quantumWalk(uv)));
  } else if (m == 3) {
    // Grayscale (debug): the luminance the operators above run on
    edge = lum(uv);
  } else {
    // Refine Contour: Sobel magnitude through a sigmoid for continuous lines
    float mag = length(sobel(uv));
    edge = 1.0 / (1.0 + exp(-10.0 * (mag - threshold)));
  }

  gl_FragColor = vec4(vec3(edge), 1.0);
}
`;

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/BrcosaModule.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "BrcosaModule", { enumerable: true, get: () => BrcosaModule });
const { Module } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/Module.js");
const { brcosaFrag } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/brcosa.js");
const { registerModule } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/moduleRegistry.js");

class BrcosaModule extends Module {
  static uid = '45d56d73';

  constructor(glCanvas, id) {
    super('Brcosa', glCanvas, id);
    this.inputs = [{ id: 'ae9e', name: 'in', type: 'video' }];
    this.outputs = [{ id: '4b92', name: 'out', type: 'video' }];
    this.params = {
      brightness: { id: '7213', value: 0, min: -1, max: 1, step: 0.01, label: 'Bright' },
      contrast: { id: '0924', value: 1, min: -3, max: 3, step: 0.01, label: 'Contrast' },
      saturation: { id: '1459', value: 1, min: 0, max: 3, step: 0.01, label: 'Sat' },
    };
    this.createShader(brcosaFrag);
    this.createOutputFBO();
  }

  process(graph, glCanvas) {
    const input = this.getInput(graph, 0);
    if (!input) return;
    this.outputFBO.begin();
    glCanvas.clear();
    glCanvas.shader(this.shader);
    this.shader.setUniform('tex0', input);
    this.shader.setUniform('brightness', this.params.brightness.value);
    this.shader.setUniform('contrast', this.params.contrast.value);
    this.shader.setUniform('saturation', this.params.saturation.value);
    this.renderQuad();
    this.outputFBO.end();
  }
}

registerModule('Brcosa', BrcosaModule);

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/brcosa.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "brcosaFrag", { enumerable: true, get: () => brcosaFrag });
const brcosaFrag = `
precision highp float;
varying vec2 vTexCoord;
uniform sampler2D tex0;
uniform float brightness;
uniform float contrast;
uniform float saturation;

void main() {
  vec4 col = texture2D(tex0, vTexCoord);
  vec3 rgb = col.rgb;

  // Negative contrast inverts the input first, so Bright still brightens
  if (contrast < 0.0) rgb = 1.0 - rgb;

  // Brightness
  rgb += brightness;

  // Contrast
  rgb = (rgb - 0.5) * abs(contrast) + 0.5;

  // Saturation
  float luma = dot(rgb, vec3(0.299, 0.587, 0.114));
  rgb = mix(vec3(luma), rgb, saturation);

  gl_FragColor = vec4(clamp(rgb, 0.0, 1.0), col.a);
}
`;

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/UnrealBloomModule.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "UnrealBloomModule", { enumerable: true, get: () => UnrealBloomModule });
const { Module } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/modules/Module.js");
const { unrealbloomHighPassFrag, unrealbloomBlurFrag, unrealbloomCompositeFrag } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/unrealbloom.js");
const { vertSrc } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/vert.js");
const { registerModule } = __require("file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/moduleRegistry.js");

class UnrealBloomModule extends Module {
  static uid = 'ed0095c2';

  constructor(glCanvas, id) {
    super('UnrealBloom', glCanvas, id);
    this.inputs = [{ id: '5133', name: 'in', type: 'video' }];
    this.outputs = [{ id: '91b8', name: 'out', type: 'video' }];
    this.historicalInfo = "UnrealBloom";
    this.params = {
      threshold: { id: '9ad4', value: 0.8, min: 0.0, max: 1.0, step: 0.01, label: 'Threshold' },
      strength: { id: 'a808', value: 1.5, min: 0.0, max: 5.0, step: 0.01, label: 'Strength' },
      radius: { id: '2b74', value: 0.5, min: 0.0, max: 1.0, step: 0.01, label: 'Radius' },
    };

    this.createOutputFBO();

    // Create shaders for the multi-pass pipeline
    this.highPassShader = glCanvas.createShader(vertSrc, unrealbloomHighPassFrag);
    this.blurShader = glCanvas.createShader(vertSrc, unrealbloomBlurFrag);
    this.compositeShader = glCanvas.createShader(vertSrc, unrealbloomCompositeFrag);

    // Mipmap FBO chain (5 levels)
    this.nMips = 5;
    this.renderTargetsHorizontal = [];
    this.renderTargetsVertical = [];
    
    // Level 0 is half res
    let resx = Math.round(glCanvas.width / 2);
    let resy = Math.round(glCanvas.height / 2);

    // Need to use the options object for createFramebuffer in p5.js
    this.renderTargetBright = this.createFramebuffer({ width: resx, height: resy });

    for (let i = 0; i < this.nMips; i++) {
      this.renderTargetsHorizontal.push(this.createFramebuffer({ width: resx, height: resy }));
      this.renderTargetsVertical.push(this.createFramebuffer({ width: resx, height: resy }));
      
      resx = Math.max(1, Math.round(resx / 2));
      resy = Math.max(1, Math.round(resy / 2));
    }
    
    // Clear FBOs initially
    this.renderTargetBright.begin(); glCanvas.clear(); this.renderTargetBright.end();
    for (let i = 0; i < this.nMips; i++) {
      this.renderTargetsHorizontal[i].begin(); glCanvas.clear(); this.renderTargetsHorizontal[i].end();
      this.renderTargetsVertical[i].begin(); glCanvas.clear(); this.renderTargetsVertical[i].end();
    }
  }

  process(graph, glCanvas) {
    const inputFBO = this.getInput(graph, 0);
    if (!inputFBO) return;

    // 1. High Pass: Extract bright areas from the input
    this.renderTargetBright.begin();
    glCanvas.clear();
    glCanvas.shader(this.highPassShader);
    this.highPassShader.setUniform('tex0', inputFBO);
    this.highPassShader.setUniform('threshold', this.params.threshold.value);
    this.renderQuad();
    this.renderTargetBright.end();

    // 2. Blur Mip Chain: Progressively downsample and blur
    let inputTarget = this.renderTargetBright;
    
    for (let i = 0; i < this.nMips; i++) {
      const hTarget = this.renderTargetsHorizontal[i];
      const vTarget = this.renderTargetsVertical[i];

      // Horizontal Pass
      hTarget.begin();
      glCanvas.clear();
      glCanvas.shader(this.blurShader);
      this.blurShader.setUniform('tex0', inputTarget);
      this.blurShader.setUniform('texelSize', [1.0 / hTarget.width, 1.0 / hTarget.height]);
      this.blurShader.setUniform('direction', [1.0, 0.0]);
      this.renderQuad();
      hTarget.end();

      // Vertical Pass
      vTarget.begin();
      glCanvas.clear();
      glCanvas.shader(this.blurShader);
      this.blurShader.setUniform('tex0', hTarget);
      this.blurShader.setUniform('texelSize', [1.0 / vTarget.width, 1.0 / vTarget.height]);
      this.blurShader.setUniform('direction', [0.0, 1.0]);
      this.renderQuad();
      vTarget.end();

      // Next level reads from this level's vertical output
      inputTarget = vTarget;
    }

    // 3. Composite: Combine all mips over the original input
    this.outputFBO.begin();
    glCanvas.clear();
    glCanvas.shader(this.compositeShader);
    this.compositeShader.setUniform('tex0', inputFBO);
    
    for (let i = 0; i < this.nMips; i++) {
      this.compositeShader.setUniform(`blur${i + 1}`, this.renderTargetsVertical[i]);
    }
    
    this.compositeShader.setUniform('strength', this.params.strength.value);
    this.compositeShader.setUniform('radius', this.params.radius.value);
    this.renderQuad();
    this.outputFBO.end();
  }

  dispose() {
    this.renderTargetBright = null;
    this.renderTargetsHorizontal = null;
    this.renderTargetsVertical = null;
    this.highPassShader = null;
    this.blurShader = null;
    this.compositeShader = null;
    super.dispose();
  }
}

registerModule('UnrealBloom', UnrealBloomModule);

},
"file:///Users/nick/GitHub/GRASS_ETC/LICHEN/js/shaders/unrealbloom.js": function (__exports, __meta, __require, __import) {
'use strict';
Object.defineProperty(__exports, "unrealbloomHighPassFrag", { enumerable: true, get: () => unrealbloomHighPassFrag });
Object.defineProperty(__exports, "unrealbloomBlurFrag", { enumerable: true, get: () => unrealbloomBlurFrag });
Object.defineProperty(__exports, "unrealbloomCompositeFrag", { enumerable: true, get: () => unrealbloomCompositeFrag });
const unrealbloomHighPassFrag = `
precision highp float;
varying vec2 vTexCoord;
uniform sampler2D tex0;
uniform float threshold;

float getLuminance(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
  vec3 color = texture2D(tex0, vTexCoord).rgb;
  float brightness = getLuminance(color);
  float soft = 0.1; // smoothness of threshold
  float contribution = smoothstep(threshold - soft, threshold + soft, brightness);
  gl_FragColor = vec4(color * contribution, 1.0);
}
`;

const unrealbloomBlurFrag = `
precision highp float;
varying vec2 vTexCoord;
uniform sampler2D tex0;
uniform vec2 texelSize;
uniform vec2 direction;

void main() {
  vec2 uv = vTexCoord;
  vec3 result = vec3(0.0);
  
  // 9-tap Gaussian weights
  float weight[5];
  weight[0] = 0.227027;
  weight[1] = 0.194594;
  weight[2] = 0.121621;
  weight[3] = 0.054054;
  weight[4] = 0.016216;

  result += texture2D(tex0, uv).rgb * weight[0];
  for(int i = 1; i < 5; i++) {
    // We scale the offset slightly to improve blur spread without needing more taps
    vec2 offset = direction * texelSize * (float(i) * 1.5);
    result += texture2D(tex0, uv + offset).rgb * weight[i];
    result += texture2D(tex0, uv - offset).rgb * weight[i];
  }
  
  gl_FragColor = vec4(result, 1.0);
}
`;

const unrealbloomCompositeFrag = `
precision highp float;
varying vec2 vTexCoord;
uniform sampler2D tex0; // Original
uniform sampler2D blur1; // Mip 1
uniform sampler2D blur2; // Mip 2
uniform sampler2D blur3; // Mip 3
uniform sampler2D blur4; // Mip 4
uniform sampler2D blur5; // Mip 5

uniform float strength;
uniform float radius;

float lerpBloomFactor(float factor) {
  float mirrorFactor = 1.2 - factor;
  return mix(factor, mirrorFactor, radius);
}

void main() {
  vec3 original = texture2D(tex0, vTexCoord).rgb;

  // Typical bloom factors for the 5 mips
  float bloomFactors[5];
  bloomFactors[0] = 1.0;
  bloomFactors[1] = 0.8;
  bloomFactors[2] = 0.6;
  bloomFactors[3] = 0.4;
  bloomFactors[4] = 0.2;
  
  vec3 bloom = vec3(0.0);
  bloom += lerpBloomFactor(bloomFactors[0]) * texture2D(blur1, vTexCoord).rgb;
  bloom += lerpBloomFactor(bloomFactors[1]) * texture2D(blur2, vTexCoord).rgb;
  bloom += lerpBloomFactor(bloomFactors[2]) * texture2D(blur3, vTexCoord).rgb;
  bloom += lerpBloomFactor(bloomFactors[3]) * texture2D(blur4, vTexCoord).rgb;
  bloom += lerpBloomFactor(bloomFactors[4]) * texture2D(blur5, vTexCoord).rgb;

  // Composite: original + bloom * strength
  vec3 result = original + bloom * strength;

  // Soft clamp to prevent harsh clipping
  result = result / (1.0 + result * 0.2);

  gl_FragColor = vec4(result, 1.0);
}
`;

}
};
const CLASSICS = {

};

const WORKERS = {};

const lichenLoader = function lichenLoader(SOURCES, CLASSICS, runClassic) {
  const cache = new Map();
  const load = (url) => {
    if (cache.has(url)) return cache.get(url);
    const ns = {};
    cache.set(url, ns);
    if (url in CLASSICS) {
      runClassic(url, CLASSICS[url]);
      return ns;
    }
    const fn = SOURCES[url];
    if (!fn) throw new Error(`${url} isn't in this bundle`);
    const dynamic = (spec) => new Promise((resolve) => resolve(load(new URL(spec, url).href)));
    fn(ns, { url }, load, dynamic);
    return ns;
  };
  return load;
};
const lichenWebScope = function lichenWebScope(baseUrl) {
  const fs = process.getBuiltinModule('node:fs');
  const { fileURLToPath } = process.getBuiltinModule('node:url');
  globalThis.location = { href: baseUrl, origin: 'null', protocol: 'file:' };
  const netFetch = globalThis.fetch;
  globalThis.fetch = async (input, init) => {
    const href = new URL(typeof input === 'string' ? input : input.url ?? String(input), baseUrl).href;
    if (!href.startsWith('file:')) return netFetch(href, init);
    try {
      return new Response(fs.readFileSync(fileURLToPath(href)), { status: 200 });
    } catch (e) {
      return new Response(null, { status: 404, statusText: e.code });
    }
  };
  globalThis.self ??= globalThis;
};
const lichenRunClassic = function lichenRunClassic(url, src) {
  const vm = process.getBuiltinModule('node:vm');
  const desc = Object.getOwnPropertyDescriptor(globalThis, 'process');
  delete globalThis.process;
  try {
    vm.runInThisContext(src, { filename: url });
  } finally {
    Object.defineProperty(globalThis, 'process', desc);
  }
};
const lichenPageScope = function lichenPageScope(baseUrl, WORKERS) {
  const { Worker: ThreadWorker } = process.getBuiltinModule('node:worker_threads');
  lichenWebScope(baseUrl);

  const element = (tag) => {
    const el = {
      tagName: String(tag).toUpperCase(), style: {}, dataset: {}, children: [], childNodes: [],
      classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
      textContent: '', innerHTML: '', innerText: '', value: '', files: null, parentNode: null,
      appendChild(c) {
        this.children.push(c);
        c.parentNode = this;
        // A script a module adds to the page isn't in the bundle, so it fails
        // as one that couldn't be fetched would
        if (c.tagName === 'SCRIPT' && c.src) {
          console.error(`${c.src} is loaded with a <script> tag, which node-gles3 can't do`);
          setImmediate(() => c.onerror?.({ type: 'error', target: c }));
        }
        return c;
      },
      append(...cs) { for (const c of cs) if (typeof c === 'object') this.appendChild(c); },
      prepend() {}, insertBefore(c) { return c; },
      removeChild(c) { this.children = this.children.filter(x => x !== c); return c; },
      remove() { this.parentNode?.removeChild(this); },
      addEventListener() {}, removeEventListener() {}, dispatchEvent: () => true,
      setAttribute() {}, getAttribute: () => null, removeAttribute() {}, hasAttribute: () => false,
      querySelector: () => null, querySelectorAll: () => [], contains: () => false,
      getBoundingClientRect: () => ({ x: 0, y: 0, left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 }),
      click() {}, focus() {}, blur() {}, getContext: () => null,
    };
    return el;
  };
  globalThis.window = globalThis;
  globalThis.document = {
    body: element('body'), head: element('head'), documentElement: element('html'),
    currentScript: null, activeElement: null, readyState: 'complete', hidden: false,
    createElement: element, createElementNS: (ns, tag) => element(tag), createTextNode: (t) => ({ textContent: t }),
    getElementById: () => null, querySelector: () => null, querySelectorAll: () => [],
    addEventListener() {}, removeEventListener() {},
  };
  Object.assign(globalThis, {
    addEventListener() {}, removeEventListener() {}, devicePixelRatio: 1,
    innerWidth: 1920, innerHeight: 1080,
    requestAnimationFrame: (f) => setTimeout(() => f(performance.now()), 16),
    cancelAnimationFrame: (id) => clearTimeout(id),
  });

  class Worker {
    constructor(url, options = {}) {
      const href = String(url);
      const code = WORKERS[href];
      if (!code) throw new Error(`no bundled worker for ${href}`);
      this.onmessage = null;
      this.onerror = null;
      this._listeners = { message: [], error: [] };
      this._thread = new ThreadWorker(code, { eval: true, workerData: { url: href, baseUrl } });
      this._thread.unref();
      this._thread.on('message', (data) => this._emit('message', { data }));
      this._thread.on('error', (e) => this._emit('error', { message: e.message, error: e }));
    }
    _emit(type, event) {
      const handler = this['on' + type];
      if (handler) handler.call(this, event);
      for (const l of this._listeners[type]) l.call(this, event);
    }
    postMessage(data, transfer) { this._thread.postMessage(data, Array.isArray(transfer) ? transfer : transfer?.transfer); }
    addEventListener(type, l) { this._listeners[type]?.push(l); }
    removeEventListener(type, l) { if (this._listeners[type]) this._listeners[type] = this._listeners[type].filter(x => x !== l); }
    terminate() { this._thread.terminate(); }
  }
  globalThis.Worker = Worker;

  return (url, src) => {
    document.currentScript = { src: url };
    try {
      lichenRunClassic(url, src);
    } finally {
      document.currentScript = null;
    }
  };
};
const lichenP5 = function lichenP5(gl, glm, opts) {
  const { mat4, mat3 } = glm;
  const { width, height, openCapture } = opts;
  let density = opts.density;

  const C = {
    BLEND: 'source-over', ADD: 'lighter', REPLACE: 'copy', MULTIPLY: 'multiply', SCREEN: 'screen',
    EXCLUSION: 'exclusion', REMOVE: 'destination-out', SUBTRACT: 'subtract', DARKEST: 'darken',
    LIGHTEST: 'lighten', DIFFERENCE: 'difference', OVERLAY: 'overlay', HARD_LIGHT: 'hard-light',
    SOFT_LIGHT: 'soft-light', DODGE: 'color-dodge', BURN: 'color-burn',
    UNSIGNED_BYTE: 'unsigned-byte', UNSIGNED_INT: 'unsigned-int', FLOAT: 'float', HALF_FLOAT: 'half-float',
    RGB: 'rgb', RGBA: 'rgba', NEAREST: 'nearest', LINEAR: 'linear', CLAMP: 'clamp', REPEAT: 'repeat', MIRROR: 'mirror',
    POINTS: 0x0000, LINES: 0x0001, LINE_STRIP: 0x0003, LINE_LOOP: 0x0002, TRIANGLES: 0x0004,
    TRIANGLE_STRIP: 0x0005, TRIANGLE_FAN: 0x0006, QUADS: 'quads', QUAD_STRIP: 'quad_strip', TESS: 'tess', CLOSE: 'close',
    NORMAL: 'normal', IMAGE: 'image', CORNER: 'corner', CORNERS: 'corners', CENTER: 'center', RADIUS: 'radius',
    VIDEO: 'video', AUDIO: 'audio', WEBGL: 'webgl', WEBGL2: 'webgl2', P2D: 'p2d',
    PI: Math.PI, TWO_PI: Math.PI * 2, HALF_PI: Math.PI / 2, QUARTER_PI: Math.PI / 4, TAU: Math.PI * 2,
  };

  // --- WebGL2 over node-gles3 ------------------------------------------------
  // node-gles3 takes typed arrays and plain ids where WebGL takes arrays and
  // objects, and has no getParameter() or WebGL-only pixel store flags. ctx is
  // gl with those filled in; modules that use the GL directly get it as
  // drawingContext, and everything here goes through it so the bindings it
  // reports stay true.
  const WEBGL_STORE = { 0x9240: 'flipY', 0x9241: 'premultiply', 0x9243: 'colorspace' };
  const st = {
    flipY: false, premultiply: false, colorspace: 0x9244, unit: 0, tex2D: [], drawFb: null, readFb: null,
    program: null, arrayBuffer: null, renderbuffer: null, vao: null, viewport: [0, 0, 0, 0],
  };
  const f32 = (v) => v instanceof Float32Array ? v : new Float32Array(v);
  const i32 = (v) => v instanceof Int32Array ? v : new Int32Array(v);
  const loc = (l) => l === null || l === undefined || l < 0;
  // node-gles3's functions are read-only, so ctx copies them rather than
  // inheriting them
  const ctx = {};
  for (const k of Object.getOwnPropertyNames(gl)) ctx[k] = gl[k];
  const uniformV = (n, conv) => function (l, data) { if (!loc(l)) gl[n](l, data.length / Number(n[7]), conv(data)); };
  // Rows top first become bottom first, as UNPACK_FLIP_Y_WEBGL asks
  const flipRows = (data, w, h, bpp) => {
    const out = new data.constructor(data.length);
    const row = w * bpp;
    for (let y = 0; y < h; y++) out.set(data.subarray(y * row, (y + 1) * row), (h - 1 - y) * row);
    return out;
  };
  const unpack = (data, w, h, format, type) => {
    if (!data || !ArrayBuffer.isView(data)) return data ?? null;
    const bpp = (format === gl.RGB ? 3 : format === gl.RED ? 1 : format === gl.RG ? 2 : 4) *
      (type === gl.FLOAT ? 4 : type === gl.HALF_FLOAT ? 2 : 1);
    let px = data;
    if (st.premultiply && type === gl.UNSIGNED_BYTE && format === gl.RGBA) {
      px = new Uint8Array(data);
      for (let i = 0; i < px.length; i += 4) {
        const a = px[i + 3] / 255;
        px[i] *= a; px[i + 1] *= a; px[i + 2] *= a;
      }
    }
    if (st.flipY) px = flipRows(new Uint8Array(px.buffer, px.byteOffset, px.byteLength), w * bpp, h, 1);
    return px;
  };
  const sourcePixels = (src) => src?.pixels ?? src?.data ?? null;
  Object.defineProperties(ctx, Object.getOwnPropertyDescriptors({
    UNPACK_FLIP_Y_WEBGL: 0x9240, UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241, CONTEXT_LOST_WEBGL: 0x9242,
    UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243, BROWSER_DEFAULT_WEBGL: 0x9244,
    get drawingBufferWidth() { return Math.round(width * density); },
    get drawingBufferHeight() { return Math.round(height * density); },
    isContextLost: () => false,
    getContextAttributes: () => ({ alpha: true, antialias: true, depth: true, stencil: false, premultipliedAlpha: true, preserveDrawingBuffer: false }),
    getSupportedExtensions: () => ['EXT_color_buffer_float', 'EXT_color_buffer_half_float', 'OES_texture_float_linear', 'OES_texture_half_float_linear', 'EXT_float_blend'],
    getExtension(name) { return ctx.getSupportedExtensions().includes(name) ? {} : null; },
    pixelStorei(p, v) {
      if (p in WEBGL_STORE) st[WEBGL_STORE[p]] = v;
      else gl.pixelStorei(p, Number(v));
    },
    activeTexture(u) { st.unit = u - gl.TEXTURE0; gl.activeTexture(u); },
    bindTexture(target, t) {
      if (target === gl.TEXTURE_2D) st.tex2D[st.unit] = t ?? null;
      gl.bindTexture(target, t ?? 0);
    },
    bindFramebuffer(target, fb) {
      if (target !== gl.READ_FRAMEBUFFER) st.drawFb = fb ?? null;
      if (target !== gl.DRAW_FRAMEBUFFER) st.readFb = fb ?? null;
      gl.bindFramebuffer(target, fb ?? 0);
    },
    bindRenderbuffer(target, rb) { st.renderbuffer = rb ?? null; gl.bindRenderbuffer(target, rb ?? 0); },
    bindBuffer(target, b) { if (target === gl.ARRAY_BUFFER) st.arrayBuffer = b ?? null; gl.bindBuffer(target, b ?? 0); },
    bindVertexArray(v) { st.vao = v ?? null; gl.bindVertexArray(v ?? 0); },
    useProgram(p) { st.program = p ?? null; gl.useProgram(p ?? 0); },
    viewport(x, y, w, h) { st.viewport = [x, y, w, h]; gl.viewport(x, y, w, h); },
    getParameter(p) {
      switch (p) {
        case gl.TEXTURE_BINDING_2D: return st.tex2D[st.unit] ?? null;
        case gl.ACTIVE_TEXTURE: return gl.TEXTURE0 + st.unit;
        case gl.FRAMEBUFFER_BINDING: return st.drawFb;
        case gl.READ_FRAMEBUFFER_BINDING: return st.readFb;
        case gl.RENDERBUFFER_BINDING: return st.renderbuffer;
        case gl.ARRAY_BUFFER_BINDING: return st.arrayBuffer;
        case gl.CURRENT_PROGRAM: return st.program;
        case gl.VERTEX_ARRAY_BINDING: return st.vao;
        case gl.VIEWPORT: return new Int32Array(st.viewport);
        case 0x9240: return st.flipY;
        case 0x9241: return st.premultiply;
        case 0x9243: return st.colorspace;
        case gl.BLEND: case gl.DEPTH_TEST: case gl.CULL_FACE: case gl.SCISSOR_TEST: case gl.STENCIL_TEST:
          return !!gl.isEnabled(p);
        case gl.VERSION: return 'WebGL 2.0 (node-gles3)';
        case gl.SHADING_LANGUAGE_VERSION: return 'WebGL GLSL ES 3.00 (node-gles3)';
        case gl.VENDOR: case gl.RENDERER: return 'node-gles3';
        default: return Number(gl.getInteger64v(p));
      }
    },
    getShaderParameter: (s, p) => p === gl.COMPILE_STATUS || p === gl.DELETE_STATUS ? !!gl.getShaderParameter(s, p) : gl.getShaderParameter(s, p),
    getProgramParameter: (pr, p) => p === gl.LINK_STATUS || p === gl.DELETE_STATUS || p === gl.VALIDATE_STATUS ? !!gl.getProgramParameter(pr, p) : gl.getProgramParameter(pr, p),
    getUniformLocation(p, name) { const l = gl.getUniformLocation(p, name); return l < 0 ? null : l; },
    getAttribLocation: (p, name) => gl.getAttribLocation(p, name),
    deleteTexture: (t) => t && gl.deleteTextures(t),
    deleteFramebuffer: (f) => f && gl.deleteFramebuffers(f),
    deleteRenderbuffer: (r) => r && gl.deleteRenderbuffers(r),
    deleteBuffer: (b) => b && gl.deleteBuffers(b),
    deleteVertexArray: (v) => v && gl.deleteVertexArrays(v),
    texImage2D(...a) {
      if (a.length === 6) {
        const [target, level, internal, format, type, src] = a;
        const w = src.width, h = src.height;
        return gl.texImage2D(target, level, internal, w, h, 0, format, type, unpack(sourcePixels(src), w, h, format, type));
      }
      const [target, level, internal, w, h, border, format, type, data, offset] = a;
      const px = offset ? data.subarray(offset) : data;
      gl.texImage2D(target, level, internal, w, h, border, format, type, unpack(px, w, h, format, type));
    },
    texSubImage2D(...a) {
      if (a.length === 7) {
        const [target, level, x, y, format, type, src] = a;
        return gl.texSubImage2D(target, level, x, y, src.width, src.height, format, type, unpack(sourcePixels(src), src.width, src.height, format, type));
      }
      const [target, level, x, y, w, h, format, type, data, offset] = a;
      const px = offset ? data.subarray(offset) : data;
      gl.texSubImage2D(target, level, x, y, w, h, format, type, unpack(px, w, h, format, type));
    },
    readPixels(x, y, w, h, format, type, dst, offset) {
      gl.readPixels(x, y, w, h, format, type, offset ? dst.subarray(offset) : dst);
    },
    uniform1f(l, x) { if (!loc(l)) gl.uniform1f(l, Number(x)); },
    uniform2f(l, x, y) { if (!loc(l)) gl.uniform2f(l, x, y); },
    uniform3f(l, x, y, z) { if (!loc(l)) gl.uniform3f(l, x, y, z); },
    uniform4f(l, x, y, z, w) { if (!loc(l)) gl.uniform4f(l, x, y, z, w); },
    uniform1i(l, x) { if (!loc(l)) gl.uniform1i(l, Number(x)); },
    uniform2i(l, x, y) { if (!loc(l)) gl.uniform2i(l, x, y); },
    uniform3i(l, x, y, z) { if (!loc(l)) gl.uniform3i(l, x, y, z); },
    uniform4i(l, x, y, z, w) { if (!loc(l)) gl.uniform4i(l, x, y, z, w); },
    uniform1fv: uniformV('uniform1fv', f32), uniform2fv: uniformV('uniform2fv', f32),
    uniform3fv: uniformV('uniform3fv', f32), uniform4fv: uniformV('uniform4fv', f32),
    uniform1iv: uniformV('uniform1iv', i32), uniform2iv: uniformV('uniform2iv', i32),
    uniform3iv: uniformV('uniform3iv', i32), uniform4iv: uniformV('uniform4iv', i32),
    uniformMatrix2fv(l, t, v) { if (!loc(l)) gl.uniformMatrix2fv(l, !!t, f32(v)); },
    uniformMatrix3fv(l, t, v) { if (!loc(l)) gl.uniformMatrix3fv(l, !!t, f32(v)); },
    uniformMatrix4fv(l, t, v) { if (!loc(l)) gl.uniformMatrix4fv(l, !!t, f32(v)); },
  }));

  // --- GLSL ES 1.00 to GLSL 3.30 core ----------------------------------------
  // The modules' shaders are WebGL1 GLSL, which desktop core profiles don't take
  // Names GLSL 3.30 reserves, as built-ins or keywords, that GLSL ES 1.00 leaves
  // free, so a shader may have used them for its own functions and variables
  const RESERVED_330 = new Set(`noise1 noise2 noise3 noise4 round roundEven trunc modf isnan isinf sinh cosh tanh
    asinh acosh atanh floatBitsToInt floatBitsToUint intBitsToFloat uintBitsToFloat outerProduct transpose
    determinant inverse texture textureProj textureLod textureOffset texelFetch texelFetchOffset textureProjOffset
    textureLodOffset textureProjLod textureProjLodOffset textureGrad textureGradOffset textureProjGrad
    textureProjGradOffset textureSize sample in out inout flat smooth noperspective centroid layout patch
    uint uvec2 uvec3 uvec4 switch case default`.split(/\s+/));
  const toCore = (src, stage) => {
    let s = String(src).replace(/^\s*#version[^\n]*\n/, '').replace(/^\s*#extension[^\n]*$/gm, '');
    const es3 = /#version\s+300\s+es/.test(String(src));
    if (!es3) {
      const own = new Set();
      for (const [, name] of s.matchAll(/\b(?:void|float|int|bool|[bi]?vec[234]|mat[234]|sampler2D|samplerCube|struct)\s+(\w+)\s*[(;=,[)]/g)) {
        if (RESERVED_330.has(name)) own.add(name);
      }
      for (const name of own) s = s.replace(new RegExp(`\\b${name}\\b`, 'g'), `lichen_${name}`);
      if (stage === 'vert') {
        s = s.replace(/\battribute\b/g, 'in').replace(/\bvarying\b/g, 'out');
      } else {
        s = s.replace(/\bvarying\b/g, 'in');
        if (/\bgl_Frag(Color|Data)\b/.test(s)) {
          s = s.replace(/\bgl_FragData\s*\[\s*0\s*\]/g, 'lichen_FragColor').replace(/\bgl_FragColor\b/g, 'lichen_FragColor');
          s = 'out vec4 lichen_FragColor;\n' + s;
        }
      }
      s = s.replace(/\btexture2D(Lod)?(EXT)?\s*\(/g, (m, lod) => lod ? 'textureLod(' : 'texture(')
        .replace(/\btextureCube(Lod)?(EXT)?\s*\(/g, (m, lod) => lod ? 'textureLod(' : 'texture(')
        .replace(/\btexture2DProj\s*\(/g, 'textureProj(');
    }
    return '#version 330\n' + s;
  };

  // uniform declarations: name -> { type, array }
  const parseUniforms = (src, into) => {
    const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
    for (const [, type, names] of code.matchAll(/\buniform\s+(?:(?:lowp|mediump|highp)\s+)?(\w+)\s+([^;]+);/g)) {
      for (const part of names.split(',')) {
        const m = part.trim().match(/^(\w+)\s*(\[[^\]]*\])?/);
        if (m) into[m[1]] = { type, array: !!m[2] };
      }
    }
    return into;
  };
  const parseAttributes = (src) => [...String(src).matchAll(/\b(?:attribute|in)\s+(?:(?:lowp|mediump|highp)\s+)?(?:float|vec[234])\s+(\w+)\s*;/g)].map(m => m[1]);

  // --- p5.Vector, p5.Geometry, p5.Image, p5.Texture ---------------------------
  class Vector {
    constructor(x = 0, y = 0, z = 0) { this.x = x; this.y = y; this.z = z; }
    set(x, y, z) { if (x instanceof Vector) ({ x, y, z } = x); this.x = x ?? 0; this.y = y ?? 0; this.z = z ?? 0; return this; }
    copy() { return new Vector(this.x, this.y, this.z); }
    add(v) { this.x += v.x; this.y += v.y; this.z += v.z; return this; }
    sub(v) { this.x -= v.x; this.y -= v.y; this.z -= v.z; return this; }
    mult(s) { this.x *= s; this.y *= s; this.z *= s; return this; }
    div(s) { this.x /= s; this.y /= s; this.z /= s; return this; }
    mag() { return Math.hypot(this.x, this.y, this.z); }
    dot(v) { return this.x * v.x + this.y * v.y + this.z * v.z; }
    cross(v) { return new Vector(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x); }
    normalize() { const m = this.mag(); if (m) this.div(m); return this; }
    array() { return [this.x, this.y, this.z]; }
    static sub(a, b) { return a.copy().sub(b); }
    static add(a, b) { return a.copy().add(b); }
    static cross(a, b) { return a.cross(b); }
  }

  class Geometry {
    constructor(detailX = 1, detailY = 1, callback) {
      this.detailX = detailX; this.detailY = detailY;
      this.vertices = []; this.uvs = []; this.faces = []; this.vertexNormals = [];
      this.vertexColors = []; this.edges = []; this.lineVertices = [];
      this.gid = undefined;
      if (typeof callback === 'function') callback.call(this);
    }
    reset() { this.vertices = []; this.uvs = []; this.faces = []; this.vertexNormals = []; this.vertexColors = []; this.edges = []; return this; }
    computeFaces() {
      const slice = this.detailX + 1;
      for (let y = 0; y < this.detailY; y++) {
        for (let x = 0; x < this.detailX; x++) {
          const a = y * slice + x, b = a + 1, c = (y + 1) * slice + x + 1, d = (y + 1) * slice + x;
          this.faces.push([a, b, d], [d, b, c]);
        }
      }
      return this;
    }
    computeNormals() {
      this.vertexNormals = this.vertices.map(() => new Vector());
      for (const [a, b, c] of this.faces) {
        const va = this.vertices[a], vb = this.vertices[b], vc = this.vertices[c];
        const n = Vector.sub(vb, va).cross(Vector.sub(vc, va));
        for (const i of [a, b, c]) this.vertexNormals[i].add(n);
      }
      for (const n of this.vertexNormals) n.normalize();
      return this;
    }
    _makeTriangleEdges() { return this; }
    _edgesToVertices() { return this; }
    normalize() { return this; }
  }

  class Image {
    constructor(w, h) {
      this.width = w; this.height = h;
      this.pixels = new Uint8ClampedArray(w * h * 4);
      this._modified = true;
    }
    loadPixels() {}
    updatePixels() { this._modified = true; }
    setModified(v) { this._modified = v; }
    get(x, y, w, h) {
      if (x === undefined) return this.get(0, 0, this.width, this.height);
      if (w === undefined) {
        const i = (y * this.width + x) * 4;
        return [...this.pixels.subarray(i, i + 4)];
      }
      const out = new Image(w, h);
      for (let r = 0; r < h; r++) {
        const from = ((y + r) * this.width + x) * 4;
        out.pixels.set(this.pixels.subarray(from, from + w * 4), r * w * 4);
      }
      return out;
    }
    set(x, y, c) { const i = (y * this.width + x) * 4; this.pixels.set(Array.isArray(c) ? c : c.levels, i); }
    resize() { throw new Error('p5.Image.resize() isn\'t supported in node-gles3'); }
  }

  // A GL texture for an image or capture, uploaded again when it changes
  class Texture {
    constructor(src) {
      this.src = src;
      this.glTex = ctx.createTexture();
      this.glMinFilter = gl.LINEAR; this.glMagFilter = gl.LINEAR;
      this.glWrapS = gl.CLAMP_TO_EDGE; this.glWrapT = gl.CLAMP_TO_EDGE;
      this.width = 0; this.height = 0;
      this._apply();
    }
    _apply() {
      ctx.bindTexture(gl.TEXTURE_2D, this.glTex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.glMinFilter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.glMagFilter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this.glWrapS);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this.glWrapT);
    }
    // p5 uploads with UNPACK_PREMULTIPLY_ALPHA_WEBGL on, rows top first
    update() {
      const src = this.src;
      const fresh = src instanceof Image ? src._modified : src._takeFrame?.();
      if (!fresh) return;
      const px = src instanceof Image ? src.pixels : fresh;
      const premul = st.premultiply;
      st.premultiply = true;
      ctx.bindTexture(gl.TEXTURE_2D, this.glTex);
      const data = new Uint8Array(px.buffer, px.byteOffset, px.byteLength);
      if (this.width !== src.width || this.height !== src.height) {
        this.width = src.width; this.height = src.height;
        ctx.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, src.width, src.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
      } else {
        ctx.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, src.width, src.height, gl.RGBA, gl.UNSIGNED_BYTE, data);
      }
      st.premultiply = premul;
      if (src instanceof Image) src._modified = false;
    }
    setInterpolation(down, up) {
      this.glMinFilter = down === C.NEAREST ? gl.NEAREST : gl.LINEAR;
      this.glMagFilter = up === C.NEAREST ? gl.NEAREST : gl.LINEAR;
      this._apply();
    }
    setWrapMode(x, y = x) {
      const wrap = (m) => m === C.REPEAT ? gl.REPEAT : m === C.MIRROR ? gl.MIRRORED_REPEAT : gl.CLAMP_TO_EDGE;
      this.glWrapS = wrap(x); this.glWrapT = wrap(y);
      this._apply();
    }
    bindTexture() { ctx.bindTexture(gl.TEXTURE_2D, this.glTex); return this; }
    unbindTexture() { ctx.bindTexture(gl.TEXTURE_2D, null); }
  }

  // createCapture(VIDEO): frames from opts.openCapture(), which calls back with
  // RGBA rows top first at the size asked
  class Capture {
    constructor(onReady) {
      this.width = 640; this.height = 480;
      this.loadedmetadata = false;
      this.elt = { readyState: 0, srcObject: null, videoWidth: 0, videoHeight: 0 };
      this._frame = null;
      this._fresh = false;
      this._onReady = onReady;
      this._stream = null;
      this._started = false;
    }
    _start() {
      if (this._started) return;
      this._started = true;
      this._stream = openCapture(this.width, this.height, (frame) => {
        this._frame = frame;
        this._fresh = true;
        if (!this.loadedmetadata) {
          this.loadedmetadata = true;
          this.elt.readyState = 4;
          this.elt.videoWidth = this.width; this.elt.videoHeight = this.height;
          this._onReady?.();
        }
      });
    }
    _takeFrame() { if (!this._fresh) return null; this._fresh = false; return this._frame; }
    size(w, h) { this.width = w; this.height = h ?? w * 0.75; this._restart(); }
    _restart() { if (this._stream) { this._stream.stop(); this._started = false; this._start(); } }
    hide() {} show() {} play() {} pause() {} loop() {} noLoop() {} volume() {}
    stop() { this._stream?.stop(); }
    remove() { this._stream?.stop(); }
    get(...a) { return null; }
  }

  // --- Shaders ---------------------------------------------------------------
  const EMPTY = Symbol('empty');
  class Shader {
    constructor(renderer, vertSrc, fragSrc) {
      this._renderer = renderer;
      this._vertSrc = vertSrc; this._fragSrc = fragSrc;
      this._glProgram = 0;
      this._failed = false;
      this.uniforms = {};
      this.samplers = [];
      this.attributes = {};
      this._values = {};
    }
    init() {
      if (this._glProgram || this._failed) return this;
      const compile = (type, src, label) => {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (gl.getShaderParameter(s, gl.COMPILE_STATUS)) return s;
        this._failed = true;
        console.error(`A ${label} shader didn't compile:\n${gl.getShaderInfoLog(s)}\n${src.split('\n').map((l, i) => `${i + 1}: ${l}`).join('\n')}`);
        return null;
      };
      const vs = compile(gl.VERTEX_SHADER, toCore(this._vertSrc, 'vert'), 'vertex');
      const fs = compile(gl.FRAGMENT_SHADER, toCore(this._fragSrc, 'frag'), 'fragment');
      if (!vs || !fs) return this;
      const p = gl.createProgram();
      gl.attachShader(p, vs);
      gl.attachShader(p, fs);
      gl.linkProgram(p);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
        this._failed = true;
        console.error(`A shader didn't link: ${gl.getProgramInfoLog(p)}`);
        return this;
      }
      this._glProgram = p;
      const decls = parseUniforms(this._fragSrc, parseUniforms(this._vertSrc, {}));
      for (const [name, d] of Object.entries(decls)) {
        const location = ctx.getUniformLocation(p, d.array ? `${name}[0]` : name) ?? ctx.getUniformLocation(p, name);
        if (location === null) continue;
        this.uniforms[name] = { name, location, type: d.type, isArray: d.array };
        if (/^(sampler|isampler|usampler)/.test(d.type)) {
          this.uniforms[name].samplerIndex = this.samplers.length;
          this.samplers.push(this.uniforms[name]);
        }
      }
      for (const name of parseAttributes(this._vertSrc)) {
        const location = gl.getAttribLocation(p, name);
        if (location >= 0) this.attributes[name] = { name, location };
      }
      return this;
    }
    // p5 sends a value when it's set; here it waits for the draw, which is the
    // same as far as the shader sees
    setUniform(name, value) { this._values[name] = value; return this; }
    isTextureShader() { return this.init().samplers.length > 0; }
    isLightShader() { return 'uUseLighting' in this.init().uniforms; }
    isNormalShader() { return false; }
    isColorShader() { return 'uMaterialColor' in this.init().uniforms || 'aVertexColor' in this.attributes; }
    isStrokeShader() { return false; }
    copyToContext() { return this; }
    _upload() {
      for (const [name, u] of Object.entries(this.uniforms)) {
        if (u.samplerIndex !== undefined || !(name in this._values)) continue;
        let v = this._values[name];
        if (typeof v === 'boolean') v = v ? 1 : 0;
        const l = u.location;
        switch (u.type) {
          case 'float': if (typeof v === 'number') ctx.uniform1f(l, v); else ctx.uniform1fv(l, v); break;
          case 'vec2': ctx.uniform2fv(l, v); break;
          case 'vec3': ctx.uniform3fv(l, v); break;
          case 'vec4': ctx.uniform4fv(l, v); break;
          case 'int': case 'bool': if (typeof v === 'number') ctx.uniform1i(l, v); else ctx.uniform1iv(l, v.map(Number)); break;
          case 'ivec2': case 'bvec2': ctx.uniform2iv(l, v); break;
          case 'ivec3': case 'bvec3': ctx.uniform3iv(l, v); break;
          case 'ivec4': case 'bvec4': ctx.uniform4iv(l, v); break;
          case 'mat2': ctx.uniformMatrix2fv(l, false, v); break;
          case 'mat3': ctx.uniformMatrix3fv(l, false, v); break;
          case 'mat4': ctx.uniformMatrix4fv(l, false, v); break;
          case 'uint': gl.uniform1ui(l, v); break;
        }
      }
      for (const s of this.samplers) {
        const tex = this._renderer._glTextureOf(this._values[s.name]);
        ctx.activeTexture(gl.TEXTURE0 + s.samplerIndex);
        ctx.bindTexture(gl.TEXTURE_2D, tex);
        ctx.uniform1i(s.location, s.samplerIndex);
      }
      ctx.activeTexture(gl.TEXTURE0);
    }
    // After every draw p5 points each sampler at its empty texture (see Set
    // samplers again before every draw in ARCHITECTURE.md)
    _unbindTextures() { for (const s of this.samplers) this._values[s.name] = EMPTY; }
  }

  // --- Framebuffers and the framebuffer camera -------------------------------
  class Camera {
    constructor(renderer, fbo = null) {
      this._renderer = renderer;
      this.fbo = fbo;
      // p5 flips y for a framebuffer, so its row 0 is the top of the picture
      this.yScale = fbo ? -1 : 1;
      this.projMatrix = new Float32Array(16);
      this.cameraMatrix = new Float32Array(16);
      this._setDefault();
    }
    _size() { return this.fbo ? [this.fbo.width, this.fbo.height] : [width, height]; }
    _setDefault() {
      const [w, h] = this._size();
      this.eyeZ = 800;
      this.perspective(2 * Math.atan(h / 2 / this.eyeZ), w / h, this.eyeZ * 0.1, this.eyeZ * 10);
      this.camera(0, 0, this.eyeZ, 0, 0, 0, 0, 1, 0);
    }
    perspective(fovy, aspect, near, far) {
      const [w, h] = this._size();
      fovy ??= 2 * Math.atan(h / 2 / 800); aspect ??= w / h; near ??= 80; far ??= 8000;
      const f = 1 / Math.tan(fovy / 2), nf = 1 / (near - far);
      this.projMatrix.set([f / aspect, 0, 0, 0, 0, -f * this.yScale, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0]);
      if (this._renderer._curCamera === this) this._renderer.uPMatrix.mat4.set(this.projMatrix);
    }
    ortho(l, r, b, t, near = 0, far) {
      const [w, h] = this._size();
      l ??= -w / 2; r ??= w / 2; b ??= -h / 2; t ??= h / 2; far ??= Math.max(w, h) + 800;
      const x = 2 / (r - l), y = 2 / (t - b) * this.yScale, z = -2 / (far - near);
      this.projMatrix.set([x, 0, 0, 0, 0, -y, 0, 0, 0, 0, z, 0, -(r + l) / (r - l), -(t + b) / (t - b), -(far + near) / (far - near), 1]);
      if (this._renderer._curCamera === this) this._renderer.uPMatrix.mat4.set(this.projMatrix);
    }
    camera(ex, ey, ez, cx = 0, cy = 0, cz = 0, ux = 0, uy = 1, uz = 0) {
      if (ex === undefined) { ex = 0; ey = 0; ez = this.eyeZ; }
      mat4.lookAt(this.cameraMatrix, [ex, ey, ez], [cx, cy, cz], [ux, uy, uz]);
      if (this._renderer._curCamera === this) this._renderer.uMVMatrix.mat4.set(this.cameraMatrix);
    }
  }

  class FramebufferTexture {
    constructor(fbo, property) { this.framebuffer = fbo; this.property = property; }
    rawTexture() { return this.framebuffer[this.property]; }
    get width() { return this.framebuffer.width * this.framebuffer.density; }
    get height() { return this.framebuffer.height * this.framebuffer.density; }
  }

  class Framebuffer {
    constructor(target, o = {}) {
      this.target = target;
      this.gl = ctx;
      this.format = o.format || C.UNSIGNED_BYTE;
      this.channels = o.channels || C.RGBA;
      this.useDepth = o.depth === undefined ? true : o.depth;
      this.depthFormat = o.depthFormat || C.FLOAT;
      this.textureFiltering = o.textureFiltering || C.LINEAR;
      this.antialiasSamples = o.antialias === undefined ? 2 : typeof o.antialias === 'number' ? o.antialias : o.antialias ? 2 : 0;
      this.antialias = this.antialiasSamples > 0;
      this.density = o.density || target.pixelDensity();
      this._autoSized = !(o.width && o.height);
      this.width = o.width && o.height ? o.width : target.width;
      this.height = o.width && o.height ? o.height : target.height;
      this.pixels = [];
      this.color = new FramebufferTexture(this, 'colorTexture');
      this.depth = this.useDepth ? new FramebufferTexture(this, 'depthTexture') : undefined;
      this.defaultCamera = new Camera(target, this);
      this._create();
      target.framebuffers.add(this);
    }
    get _pw() { return Math.trunc(this.width * this.density); }
    get _ph() { return Math.trunc(this.height * this.density); }
    _colorFormat() {
      const rgb = this.channels === C.RGB;
      if (this.format === C.FLOAT) return { internal: rgb ? gl.RGB32F : gl.RGBA32F, format: rgb ? gl.RGB : gl.RGBA, type: gl.FLOAT };
      if (this.format === C.HALF_FLOAT) return { internal: rgb ? gl.RGB16F : gl.RGBA16F, format: rgb ? gl.RGB : gl.RGBA, type: gl.HALF_FLOAT };
      return { internal: rgb ? gl.RGB8 : gl.RGBA8, format: rgb ? gl.RGB : gl.RGBA, type: gl.UNSIGNED_BYTE };
    }
    _create() {
      const w = this._pw, h = this._ph;
      const prevFb = st.drawFb, prevTex = st.tex2D[st.unit];
      const cf = this._colorFormat();
      const filter = this.textureFiltering === C.NEAREST ? gl.NEAREST : gl.LINEAR;
      const texture = (internal, format, type, f) => {
        const t = ctx.createTexture();
        ctx.bindTexture(gl.TEXTURE_2D, t);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, f);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, f);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, internal, w, h, 0, format, type, null);
        return t;
      };
      this.colorTexture = texture(cf.internal, cf.format, cf.type, filter);
      this.framebuffer = ctx.createFramebuffer();
      ctx.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.colorTexture, 0);
      if (this.useDepth) {
        const fmt = this.depthFormat === C.FLOAT ? [gl.DEPTH_COMPONENT32F, gl.FLOAT] : [gl.DEPTH_COMPONENT24, gl.UNSIGNED_INT];
        this.depthTexture = texture(fmt[0], gl.DEPTH_COMPONENT, fmt[1], gl.NEAREST);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture, 0);
      }
      if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
        throw new Error(`a ${w}x${h} ${this.format} framebuffer is incomplete`);
      }
      if (this.antialias) {
        this.aaFramebuffer = ctx.createFramebuffer();
        ctx.bindFramebuffer(gl.FRAMEBUFFER, this.aaFramebuffer);
        this.colorRenderbuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.colorRenderbuffer);
        gl.renderbufferStorageMultisample(gl.RENDERBUFFER, this.antialiasSamples, cf.internal, w, h);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, this.colorRenderbuffer);
        if (this.useDepth) {
          this.depthRenderbuffer = gl.createRenderbuffer();
          gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthRenderbuffer);
          gl.renderbufferStorageMultisample(gl.RENDERBUFFER, this.antialiasSamples,
            this.depthFormat === C.FLOAT ? gl.DEPTH_COMPONENT32F : gl.DEPTH_COMPONENT24, w, h);
          gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depthRenderbuffer);
        }
        gl.bindRenderbuffer(gl.RENDERBUFFER, 0);
      }
      // WebGL starts every texture blank
      for (const fb of [this.framebuffer, this.aaFramebuffer]) {
        if (!fb) continue;
        ctx.bindFramebuffer(gl.FRAMEBUFFER, fb);
        gl.viewport(0, 0, w, h);
        gl.clearColor(0, 0, 0, 0);
        gl.clearDepthf(1);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      }
      gl.viewport(...st.viewport);
      ctx.bindFramebuffer(gl.FRAMEBUFFER, prevFb);
      ctx.bindTexture(gl.TEXTURE_2D, prevTex);
    }
    _delete() {
      ctx.deleteTexture(this.colorTexture);
      ctx.deleteTexture(this.depthTexture);
      ctx.deleteFramebuffer(this.framebuffer);
      ctx.deleteFramebuffer(this.aaFramebuffer);
      ctx.deleteRenderbuffer(this.colorRenderbuffer);
      ctx.deleteRenderbuffer(this.depthRenderbuffer);
      this.depthTexture = this.aaFramebuffer = this.colorRenderbuffer = this.depthRenderbuffer = undefined;
    }
    resize(w, h) {
      this._autoSized = false;
      this.width = w; this.height = h;
      this._delete();
      this._create();
      this.defaultCamera._setDefault();
    }
    pixelDensity(d) {
      if (d === undefined) return this.density;
      this.density = d;
      this._delete();
      this._create();
    }
    autoSized(v) { if (v === undefined) return this._autoSized; this._autoSized = v; }
    remove() {
      this._delete();
      this.target.framebuffers.delete(this);
    }
    _framebufferToBind() { return this.antialias ? this.aaFramebuffer : this.framebuffer; }
    _beforeBegin() {
      ctx.bindFramebuffer(gl.FRAMEBUFFER, this._framebufferToBind());
      ctx.viewport(0, 0, this._pw, this._ph);
    }
    _beforeEnd() {
      if (!this.antialias) return;
      ctx.bindFramebuffer(gl.READ_FRAMEBUFFER, this.aaFramebuffer);
      ctx.bindFramebuffer(gl.DRAW_FRAMEBUFFER, this.framebuffer);
      const w = this._pw, h = this._ph;
      gl.blitFramebuffer(0, 0, w, h, 0, 0, w, h, gl.COLOR_BUFFER_BIT, this.textureFiltering === C.NEAREST ? gl.NEAREST : gl.LINEAR);
      if (this.useDepth) gl.blitFramebuffer(0, 0, w, h, 0, 0, w, h, gl.DEPTH_BUFFER_BIT, gl.NEAREST);
    }
    begin() {
      const r = this.target;
      this.prevFramebuffer = r.activeFramebuffer();
      this.prevFramebuffer?._beforeEnd();
      r.activeFramebuffers.push(this);
      this._beforeBegin();
      r.push();
      r.setCamera(this.defaultCamera);
      r.uMVMatrix.mat4.set(this.defaultCamera.cameraMatrix);
    }
    end() {
      const r = this.target;
      r.pop();
      if (r.activeFramebuffers.pop() !== this) throw new Error('end() called on a framebuffer that isn\'t the active one');
      this._beforeEnd();
      if (this.prevFramebuffer) this.prevFramebuffer._beforeBegin();
      else r._bindCanvas();
    }
    draw(f) { this.begin(); try { f(); } finally { this.end(); } }
    // Rows come back as GL stores them: row 0 is the top of the picture
    loadPixels() {
      const w = this._pw, h = this._ph;
      const prev = st.drawFb;
      const cf = this._colorFormat();
      const n = w * h * 4;
      if (this.pixels?.length !== n || !(this.pixels instanceof (cf.type === gl.UNSIGNED_BYTE ? Uint8Array : Float32Array))) {
        this.pixels = cf.type === gl.UNSIGNED_BYTE ? new Uint8Array(n) : new Float32Array(n);
      }
      ctx.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
      gl.readPixels(0, 0, w, h, gl.RGBA, cf.type === gl.UNSIGNED_BYTE ? gl.UNSIGNED_BYTE : gl.FLOAT, this.pixels);
      ctx.bindFramebuffer(gl.FRAMEBUFFER, prev);
    }
    get(x, y, w, h) {
      this.loadPixels();
      const pw = this._pw, ph = this._ph;
      if (x === undefined) { x = 0; y = 0; w = this.width; h = this.height; }
      if (w === undefined) {
        const i = ((Math.trunc(y * this.density)) * pw + Math.trunc(x * this.density)) * 4;
        return [...this.pixels.subarray(i, i + 4)];
      }
      const d = this.density, img = new Image(Math.trunc(w * d), Math.trunc(h * d));
      for (let r = 0; r < img.height; r++) {
        const from = ((Math.trunc(y * d) + r) * pw + Math.trunc(x * d)) * 4;
        img.pixels.set(this.pixels.subarray(from, from + img.width * 4), r * img.width * 4);
      }
      return img;
    }
    createCamera() { return new Camera(this.target, this); }
  }

  // --- The graphics: glCanvas -------------------------------------------------
  const color = (args) => {
    let a = args.length === 1 && Array.isArray(args[0]) ? args[0] : args;
    if (a[0] && typeof a[0] === 'object' && a[0].levels) return a[0];
    if (typeof a[0] === 'string') {
      const hex = a[0].replace('#', '');
      const full = hex.length <= 4 ? [...hex].map(c => c + c).join('') : hex;
      const v = full.match(/../g).map(h => parseInt(h, 16));
      a = v.length === 3 ? [...v, 255] : v;
    }
    const levels = a.length === 1 ? [a[0], a[0], a[0], 255] : a.length === 2 ? [a[0], a[0], a[0], a[1]] : [a[0], a[1], a[2], a[3] ?? 255];
    return { levels, _array: levels.map(v => v / 255), toString: () => `rgba(${levels.join(',')})` };
  };

  // p5's default fill and texture shader, unlit, premultiplied as p5's are
  const defaultVert = `
attribute vec3 aPosition; attribute vec2 aTexCoord; attribute vec4 aVertexColor;
uniform mat4 uModelViewMatrix; uniform mat4 uProjectionMatrix;
uniform bool uUseVertexColor; uniform vec4 uMaterialColor;
varying vec2 vTexCoord; varying vec4 vColor;
void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
  vTexCoord = aTexCoord;
  vColor = uUseVertexColor ? aVertexColor : uMaterialColor;
}`;
  const defaultFrag = `
precision highp float;
uniform sampler2D uSampler; uniform bool isTexture; uniform vec4 uTint;
varying vec2 vTexCoord; varying vec4 vColor;
void main() {
  gl_FragColor = isTexture ? texture2D(uSampler, vTexCoord) * (uTint / 255.0) : vec4(vColor.rgb, 1.0) * vColor.a;
}`;

  class Graphics {
    constructor() {
      Object.assign(this, C);
      this.width = width; this.height = height;
      this._renderer = this;
      this.GL = ctx;
      this.drawingContext = ctx;
      this.webglVersion = C.WEBGL2;
      this.isP3D = true;
      this.textures = new Map();
      this.framebuffers = new Set();
      this.activeFramebuffers = [];
      this.uMVMatrix = { mat4: new Float32Array(16) };
      this.uPMatrix = { mat4: new Float32Array(16) };
      this.textureMode = C.IMAGE;
      this.curBlendMode = C.BLEND;
      this.curFillColor = [1, 1, 1, 1];
      this.curStrokeColor = [0, 0, 0, 1];
      this._doFill = true; this._doStroke = true;
      this._tex = null;
      this._tint = [255, 255, 255, 255];
      this.userFillShader = undefined;
      this._stack = [];
      this._geometries = new Map();
      this._isBlending = undefined;
      this._cachedBlendMode = undefined;
      this._vao = ctx.createVertexArray();
      this._emptyTexture = null;
      this._defaultCamera = new Camera(this);
      this._curCamera = this._defaultCamera;
      this.uPMatrix.mat4.set(this._defaultCamera.projMatrix);
      this.uMVMatrix.mat4.set(this._defaultCamera.cameraMatrix);
      this._canvas = null;
      this._defaultShader = null;
      this._shape = null;
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.enable(gl.PROGRAM_POINT_SIZE);
      st.premultiply = true;
    }

    pixelDensity(d) {
      if (d === undefined) return density;
      density = d;
    }

    // The canvas itself, for drawing outside any framebuffer
    _bindCanvas() {
      if (!this._canvas) this._canvas = new Framebuffer(this, { antialias: false });
      ctx.bindFramebuffer(gl.FRAMEBUFFER, this._canvas.framebuffer);
      ctx.viewport(0, 0, this._canvas._pw, this._canvas._ph);
    }
    activeFramebuffer() { return this.activeFramebuffers[this.activeFramebuffers.length - 1]; }
    // A module that threw between begin() and end() leaves its framebuffer on
    // the stack; this takes everything off for the next one
    _resetTargets() {
      while (this.activeFramebuffers.length) {
        const fbo = this.activeFramebuffers.pop();
        fbo._beforeEnd();
      }
      this._stack.length = 0;
      this.resetShader();
      this.curBlendMode = C.BLEND;
      this._bindCanvas();
    }
    // Something drew behind p5's back (the display), so nothing cached holds
    _forgetGLState() { this._isBlending = undefined; this._cachedBlendMode = undefined; }

    createShader(vert, frag) { return new Shader(this, vert, frag); }
    createFilterShader() { throw new Error('createFilterShader() isn\'t supported in node-gles3'); }
    createFramebuffer(o) { return new Framebuffer(this, o); }
    shader(s) { s.init(); this.userFillShader = s; }
    resetShader() { this.userFillShader = undefined; }
    setCamera(cam) {
      this._curCamera = cam;
      this.uPMatrix.mat4.set(cam.projMatrix);
    }
    createCamera() { const c = new Camera(this); this.setCamera(c); return c; }
    camera(...a) { this._curCamera.camera(...a); }
    perspective(...a) { this._curCamera.perspective(...a); }
    ortho(...a) { this._curCamera.ortho(...a); }
    color(...a) { return color(a); }

    push() {
      this._stack.push({
        mv: this.uMVMatrix.mat4.slice(), p: this.uPMatrix.mat4.slice(), camera: this._curCamera,
        blend: this.curBlendMode, shader: this.userFillShader, fill: this.curFillColor, stroke: this.curStrokeColor,
        doFill: this._doFill, doStroke: this._doStroke, tex: this._tex, textureMode: this.textureMode, tint: this._tint,
      });
    }
    pop() {
      const s = this._stack.pop();
      if (!s) return;
      this.uMVMatrix.mat4.set(s.mv); this.uPMatrix.mat4.set(s.p); this._curCamera = s.camera;
      this.curBlendMode = s.blend; this.userFillShader = s.shader; this.curFillColor = s.fill; this.curStrokeColor = s.stroke;
      this._doFill = s.doFill; this._doStroke = s.doStroke; this._tex = s.tex; this.textureMode = s.textureMode; this._tint = s.tint;
    }
    translate(x, y = 0, z = 0) { if (typeof x === 'object') ({ x, y, z } = x); mat4.translate(this.uMVMatrix.mat4, this.uMVMatrix.mat4, [x, y, z]); }
    scale(x, y, z) {
      if (typeof x === 'object') ({ x, y, z } = x);
      y ??= x; z ??= x;
      mat4.scale(this.uMVMatrix.mat4, this.uMVMatrix.mat4, [x, y, z]);
    }
    rotate(a, axis = [0, 0, 1]) { mat4.rotate(this.uMVMatrix.mat4, this.uMVMatrix.mat4, a, Array.isArray(axis) ? axis : [axis.x, axis.y, axis.z]); }
    rotateX(a) { mat4.rotateX(this.uMVMatrix.mat4, this.uMVMatrix.mat4, a); }
    rotateY(a) { mat4.rotateY(this.uMVMatrix.mat4, this.uMVMatrix.mat4, a); }
    rotateZ(a) { mat4.rotateZ(this.uMVMatrix.mat4, this.uMVMatrix.mat4, a); }
    applyMatrix(...m) {
      const full = m.length === 16 ? m : [m[0], m[1], 0, 0, m[2], m[3], 0, 0, 0, 0, 1, 0, m[4], m[5], 0, 1];
      mat4.multiply(this.uMVMatrix.mat4, this.uMVMatrix.mat4, full);
    }
    resetMatrix() { this.uMVMatrix.mat4.set(this._curCamera.cameraMatrix); }

    blendMode(mode) { this.curBlendMode = mode; }
    fill(...a) { this.curFillColor = color(a)._array; this._doFill = true; this._tex = null; }
    noFill() { this._doFill = false; }
    stroke(...a) { this.curStrokeColor = color(a)._array; this._doStroke = true; }
    noStroke() { this._doStroke = false; }
    strokeWeight() {} strokeCap() {} strokeJoin() {} smooth() {} noSmooth() {}
    rectMode() {} ellipseMode() {} imageMode() {} colorMode() {}
    noLights() {} lights() {} ambientLight() {} directionalLight() {} pointLight() {}
    tint(...a) { this._tint = color(a).levels; }
    noTint() { this._tint = [255, 255, 255, 255]; }
    texture(img) { this._tex = img; }
    textureMode(m) { this.textureMode = m; }
    textureWrap() {}

    clear(r = 0, g = 0, b = 0, a = 0) {
      const fbo = this.activeFramebuffer();
      if (fbo && fbo.format === C.UNSIGNED_BYTE && !fbo.antialias && a === 0) a = 1e-10;
      gl.clearColor(r * a, g * a, b * a, a);
      gl.clearDepthf(1);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }
    background(...a) {
      const [r, g, b, al] = color(a)._array;
      this.clear(r, g, b, al);
    }

    _emptyTex() {
      if (!this._emptyTexture) this._emptyTexture = new Texture(new Image(1, 1));
      this._emptyTexture.update();
      return this._emptyTexture.glTex;
    }
    // What a sampler uniform's value draws from
    _glTextureOf(v) {
      if (v === undefined || v === null || v === EMPTY) return this._emptyTex();
      if (v instanceof Framebuffer) return v.colorTexture;
      if (v instanceof Graphics2D) return v._fbo.colorTexture;
      if (v instanceof FramebufferTexture) return v.rawTexture();
      if (v instanceof Texture) { v.update(); return v.glTex; }
      if (v === this) { if (!this._canvas) this._bindCanvas(); return this._canvas.colorTexture; }
      if (v instanceof Image || v instanceof Capture) {
        if (v instanceof Capture && !v.loadedmetadata) return this._emptyTex();
        let t = this.textures.get(v);
        if (!t) { t = new Texture(v); this.textures.set(v, t); }
        t.update();
        return t.glTex;
      }
      if (typeof v === 'number') return v;
      if (!this._warnedTexture) console.warn('A shader was given a texture of a kind node-gles3 can\'t draw; it samples blank');
      this._warnedTexture = true;
      return this._emptyTex();
    }

    _geometryBuffers(geom) {
      let b = this._geometries.get(geom.gid);
      if (b) return b;
      const flat = (list, n) => {
        const out = new Float32Array(list.length * n);
        list.forEach((v, i) => {
          if (Array.isArray(v)) out.set(v.slice(0, n), i * n);
          else out.set(n === 2 ? [v.x, v.y] : [v.x, v.y, v.z], i * n);
        });
        return out;
      };
      const uvs = geom.uvs.flat();
      const n = geom.vertices.length;
      const faces = geom.faces.flat();
      b = {
        position: flat(geom.vertices, 3),
        aTexCoord: uvs.length >= n * 2 ? new Float32Array(uvs) : null,
        aNormal: geom.vertexNormals.length === n ? flat(geom.vertexNormals, 3) : null,
        aVertexColor: geom.vertexColors.length >= n * 4 ? new Float32Array(geom.vertexColors.flat()) : null,
        index: n > 65535 ? new Uint32Array(faces) : new Uint16Array(faces),
        count: faces.length,
        vertexColors: geom.vertexColors.length >= n * 4,
        gl: {},
      };
      for (const [name, data] of [['aPosition', b.position], ['aTexCoord', b.aTexCoord], ['aNormal', b.aNormal], ['aVertexColor', b.aVertexColor]]) {
        if (!data) continue;
        const buf = ctx.createBuffer();
        ctx.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
        b.gl[name] = { buf, size: name === 'aTexCoord' ? 2 : name === 'aVertexColor' ? 4 : 3 };
      }
      b.indexBuf = ctx.createBuffer();
      ctx.bindVertexArray(this._vao);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, b.indexBuf);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, b.index, gl.STATIC_DRAW);
      this._geometries.set(geom.gid, b);
      return b;
    }
    freeGeometry(geom) {
      const b = this._geometries.get(geom.gid);
      if (!b) return;
      for (const { buf } of Object.values(b.gl)) ctx.deleteBuffer(buf);
      ctx.deleteBuffer(b.indexBuf);
      this._geometries.delete(geom.gid);
    }

    _fillShader() {
      if (this.userFillShader && !this.userFillShader._failed) return this.userFillShader;
      if (this.userFillShader) return null;
      if (!this._defaultShader) this._defaultShader = new Shader(this, defaultVert, defaultFrag);
      return this._defaultShader.init();
    }

    // p5's _setFillUniforms and _setMatrixUniforms, then blending as
    // _applyColorBlend leaves it, then the draw
    _draw(buffers, draw, useVertexColor) {
      if (!this._doFill) return;
      const s = this._fillShader();
      if (!s || s._failed) return;
      const u = s.uniforms;
      const mv = this.uMVMatrix.mat4, p = this.uPMatrix.mat4;
      const set = (name, v) => { if (u[name]) s._values[name] = v; };
      set('uViewMatrix', this._curCamera.cameraMatrix);
      set('uProjectionMatrix', p);
      set('uModelViewMatrix', mv);
      if (u.uModelViewProjectionMatrix) set('uModelViewProjectionMatrix', mat4.multiply(new Float32Array(16), p, mv));
      if (u.uNormalMatrix) set('uNormalMatrix', mat3.normalFromMat4(new Float32Array(9), mv));
      set('uUseVertexColor', !!useVertexColor);
      set('uMaterialColor', this.curFillColor);
      set('isTexture', !!this._tex);
      if (this._tex) set('uSampler', this._tex);
      set('uTint', this._tint);
      set('uUseLighting', false);
      for (const n of ['uAmbientLightCount', 'uDirectionalLightCount', 'uPointLightCount', 'uSpotLightCount']) set(n, 0);
      set('uViewport', st.viewport);

      ctx.useProgram(s._glProgram);
      s._upload();
      ctx.bindVertexArray(this._vao);
      for (const [name, a] of Object.entries(s.attributes)) {
        const src = buffers[name];
        if (src) {
          ctx.bindBuffer(gl.ARRAY_BUFFER, src.buf);
          gl.enableVertexAttribArray(a.location);
          gl.vertexAttribPointer(a.location, src.size, gl.FLOAT, false, 0, 0);
        } else {
          gl.disableVertexAttribArray(a.location);
        }
      }

      const blending = !!this.userFillShader || this.curBlendMode !== C.BLEND || this.curFillColor[3] < 1;
      if (blending !== this._isBlending) {
        if (blending || (this.curBlendMode !== C.BLEND && this.curBlendMode !== C.ADD)) gl.enable(gl.BLEND);
        else gl.disable(gl.BLEND);
        gl.depthMask(true);
        this._isBlending = blending;
      }
      if (this._cachedBlendMode !== this.curBlendMode) {
        this._applyBlendMode();
        this._cachedBlendMode = this.curBlendMode;
      }
      draw();
      s._unbindTextures();
    }
    _applyBlendMode() {
      const g = gl;
      switch (this.curBlendMode) {
        case C.ADD: g.blendEquation(g.FUNC_ADD); g.blendFunc(g.ONE, g.ONE); break;
        case C.REMOVE: g.blendEquation(g.FUNC_ADD); g.blendFunc(g.ZERO, g.ONE_MINUS_SRC_ALPHA); break;
        case C.MULTIPLY: g.blendEquation(g.FUNC_ADD); g.blendFunc(g.DST_COLOR, g.ONE_MINUS_SRC_ALPHA); break;
        case C.SCREEN: g.blendEquation(g.FUNC_ADD); g.blendFunc(g.ONE, g.ONE_MINUS_SRC_COLOR); break;
        case C.EXCLUSION: g.blendEquationSeparate(g.FUNC_ADD, g.FUNC_ADD); g.blendFuncSeparate(g.ONE_MINUS_DST_COLOR, g.ONE_MINUS_SRC_COLOR, g.ONE, g.ONE); break;
        case C.REPLACE: g.blendEquation(g.FUNC_ADD); g.blendFunc(g.ONE, g.ZERO); break;
        case C.SUBTRACT: g.blendEquationSeparate(g.FUNC_REVERSE_SUBTRACT, g.FUNC_ADD); g.blendFuncSeparate(g.ONE, g.ONE, g.ONE, g.ONE_MINUS_SRC_ALPHA); break;
        case C.DARKEST: g.blendEquationSeparate(g.MIN, g.FUNC_ADD); g.blendFuncSeparate(g.ONE, g.ONE, g.ONE, g.ONE); break;
        case C.LIGHTEST: g.blendEquationSeparate(g.MAX, g.FUNC_ADD); g.blendFuncSeparate(g.ONE, g.ONE, g.ONE, g.ONE); break;
        default: g.blendEquation(g.FUNC_ADD); g.blendFunc(g.ONE, g.ONE_MINUS_SRC_ALPHA);
      }
    }

    model(geom) {
      if (!geom.vertices.length) return;
      const b = this._geometryBuffers(geom);
      this._draw(b.gl, () => {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, b.indexBuf);
        gl.drawElements(gl.TRIANGLES, b.count, b.index instanceof Uint32Array ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT, 0);
      }, b.vertexColors);
    }

    rect(x, y, w, h) {
      h ??= w;
      if (!this._rect) {
        const g = new Geometry(1, 1, function () {
          for (let j = 0; j <= 1; j++) for (let i = 0; i <= 1; i++) { this.vertices.push(new Vector(i, j, 0)); this.uvs.push(i, j); }
        });
        g.computeFaces().computeNormals();
        g.gid = 'rect|1|1';
        this._rect = g;
      }
      const saved = this.uMVMatrix.mat4.slice();
      try {
        mat4.translate(this.uMVMatrix.mat4, this.uMVMatrix.mat4, [x, y, 0]);
        mat4.scale(this.uMVMatrix.mat4, this.uMVMatrix.mat4, [w, h, 1]);
        this.model(this._rect);
      } finally {
        this.uMVMatrix.mat4.set(saved);
      }
    }
    square(x, y, s) { this.rect(x, y, s, s); }
    plane(w = 50, h = w) {
      this.push();
      this.translate(-w / 2, -h / 2);
      this.rect(0, 0, w, h);
      this.pop();
    }
    image(img, x = 0, y = 0, w, h) {
      w ??= img.width; h ??= img.height;
      this.push();
      this.noStroke();
      this._tex = img;
      this._doFill = true;
      this.rect(x, y, w, h);
      this.pop();
    }

    beginShape(mode = C.TESS) { this._shape = { mode, v: [], uv: [], c: [] }; }
    vertex(x, y, z = 0, u, v) {
      if (!this._shape) return;
      if (v === undefined && u !== undefined) { v = u; u = z; z = 0; }
      const s = this._shape;
      s.v.push(x, y, z);
      let uu = u ?? 0, vv = v ?? 0;
      if (this.textureMode === C.IMAGE && this._tex) { uu /= this._tex.width || 1; vv /= this._tex.height || 1; }
      s.uv.push(uu, vv);
      s.c.push(...this.curFillColor);
    }
    endShape() {
      const s = this._shape;
      this._shape = null;
      if (!s || !s.v.length) return;
      const n = s.v.length / 3;
      let order = [...Array(n).keys()];
      let mode = s.mode;
      if (mode === C.QUADS) {
        order = [];
        for (let i = 0; i + 3 < n; i += 4) order.push(i, i + 1, i + 2, i, i + 2, i + 3);
        mode = C.TRIANGLES;
      } else if (mode === C.QUAD_STRIP) {
        order = [];
        for (let i = 0; i + 3 < n; i += 2) order.push(i, i + 1, i + 2, i + 1, i + 3, i + 2);
        mode = C.TRIANGLES;
      } else if (mode === C.TESS || typeof mode !== 'number') {
        mode = C.TRIANGLE_FAN;
      }
      const pick = (src, k) => new Float32Array(order.flatMap(i => src.slice(i * k, i * k + k)));
      const buffers = {};
      for (const [name, data, size] of [['aPosition', pick(s.v, 3), 3], ['aTexCoord', pick(s.uv, 2), 2], ['aVertexColor', pick(s.c, 4), 4]]) {
        this._immediate ??= {};
        const buf = this._immediate[name] ??= ctx.createBuffer();
        ctx.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW);
        buffers[name] = { buf, size };
      }
      this._draw(buffers, () => gl.drawArrays(mode, 0, order.length), true);
    }
  }

  const glCanvas = new Graphics();

  // createGraphics(): a P2D graphics, drawn here with GL into a framebuffer of
  // its own. It has p5's 2D origin, top left with y down, so its rows are top
  // first as a 2D canvas's texture is. Fills, transforms, shapes and image()
  // draw; strokes and text don't.
  class Graphics2D {
    constructor(w, h) {
      this.width = w; this.height = h;
      this._fbo = new Framebuffer(glCanvas, { width: w, height: h, density, depth: false, antialias: 4 });
      this._fill = [255, 255, 255, 255]; this._doFill = true;
      this._matrix = mat4.create();
      this._stack = [];
      this._shape = null;
      this._tint = null;
      this.elt = { width: w * density, height: h * density, style: {} };
      this.canvas = this.elt;
      this.pixels = [];
      this._draw(() => glCanvas.clear(1, 1, 1, 0));
    }
    _draw(f) {
      this._fbo.begin();
      glCanvas.push();
      try {
        glCanvas.resetShader();
        glCanvas.noStroke();
        glCanvas.translate(-this.width / 2, -this.height / 2);
        mat4.multiply(glCanvas.uMVMatrix.mat4, glCanvas.uMVMatrix.mat4, this._matrix);
        if (this._doFill) glCanvas.fill(this._fill); else glCanvas.noFill();
        if (this._tint) glCanvas.tint(this._tint); else glCanvas.noTint();
        f();
      } finally {
        glCanvas.pop();
        this._fbo.end();
      }
    }
    pixelDensity() { return density; }
    background(...a) { const c = color(a).levels; this._draw(() => glCanvas.background(c)); }
    clear() { this._draw(() => glCanvas.clear()); }
    fill(...a) { this._fill = color(a).levels; this._doFill = true; }
    noFill() { this._doFill = false; }
    stroke() {} noStroke() {} strokeWeight() {} strokeCap() {} strokeJoin() {} smooth() {} noSmooth() {}
    tint(...a) { this._tint = color(a).levels; }
    noTint() { this._tint = null; }
    push() { this._stack.push({ m: mat4.clone(this._matrix), fill: this._fill, doFill: this._doFill, tint: this._tint }); }
    pop() { const st = this._stack.pop(); if (st) ({ m: this._matrix, fill: this._fill, doFill: this._doFill, tint: this._tint } = st); }
    translate(x, y) { mat4.translate(this._matrix, this._matrix, [x, y, 0]); }
    scale(x, y = x) { mat4.scale(this._matrix, this._matrix, [x, y, 1]); }
    rotate(a) { mat4.rotateZ(this._matrix, this._matrix, a); }
    resetMatrix() { mat4.identity(this._matrix); }
    rect(x, y, w, h = w) { this._draw(() => glCanvas.rect(x, y, w, h)); }
    square(x, y, s) { this.rect(x, y, s, s); }
    image(img, x = 0, y = 0, w, h) { this._draw(() => glCanvas.image(img, x, y, w, h)); }
    beginShape(mode) { this._shape = { mode, v: [] }; }
    vertex(x, y) { this._shape?.v.push(x, y); }
    endShape() {
      const sh = this._shape;
      this._shape = null;
      if (!sh || !sh.v.length) return;
      this._draw(() => {
        glCanvas.beginShape(sh.mode);
        for (let i = 0; i < sh.v.length; i += 2) glCanvas.vertex(sh.v[i], sh.v[i + 1], 0);
        glCanvas.endShape();
      });
    }
    loadPixels() { this._fbo.loadPixels(); this.pixels = this._fbo.pixels; }
    get(...a) { return this._fbo.get(...a); }
    remove() { this._fbo.remove(); }
    text() { throw new Error('text() isn\'t supported in node-gles3'); }
    textFont() { throw new Error('textFont() isn\'t supported in node-gles3'); }
  }

  // The sketch, as modules reach it through glCanvas._pInst
  const pInst = {
    ...C,
    _glAttributes: { antialias: true, alpha: true, depth: true },
    _renderer: glCanvas,
    width, height,
    createCapture(type, cb) {
      if (type !== C.VIDEO && typeof type !== 'object') throw new Error('createCapture() only takes VIDEO in node-gles3');
      const cap = new Capture(typeof type === 'function' ? type : cb);
      setImmediate(() => cap._start());
      return cap;
    },
    createVideo() { throw new Error('createVideo() isn\'t supported in node-gles3'); },
    createGraphics(w, h, renderer) {
      if (renderer === C.WEBGL) throw new Error('createGraphics(WEBGL) isn\'t supported in node-gles3');
      return new Graphics2D(w, h);
    },
    loadImage(url, ok, err) {
      opts.loadImage(url).then((img) => ok?.(img), (e) => { if (err) err(e); else console.error(e.message); });
      return new Image(1, 1);
    },
    createImage: (w, h) => new Image(w, h),
    createFramebuffer: (o) => new Framebuffer(glCanvas, o),
    color: (...a) => color(a),
    pixelDensity: (d) => glCanvas.pixelDensity(d),
    millis: () => performance.now(),
    registerMethod() {},
  };
  glCanvas._pInst = pInst;

  function p5() { throw new Error('a p5 sketch can\'t be made in node-gles3'); }
  Object.assign(p5, {
    Vector, Geometry, Image, Texture, Shader, Framebuffer, FramebufferTexture, Camera,
    Graphics, instance: pInst, disableFriendlyErrors: true,
    prototype: { registerMethod() {}, registerPreloadMethod() {} },
  });
  Object.assign(p5.prototype, C);

  return { glCanvas, p5, Image, ctx };
};
const lichenMain = function lichenMain(CFG, SOURCES, CLASSICS, WORKERS) {
  const fs = process.getBuiltinModule('node:fs');
  const path = process.getBuiltinModule('node:path');
  const { createRequire } = process.getBuiltinModule('node:module');
  const { spawn } = process.getBuiltinModule('node:child_process');

  const args = process.argv.slice(2);
  const flag = (name) => args.includes(name);
  const option = (name) => { const i = args.indexOf(name); return i < 0 ? undefined : args[i + 1]; };
  const windowed = flag('--windowed');
  const hidden = flag('--hidden');
  const maxFrames = Number(option('--frames') ?? 0);
  const capturePath = option('--capture');
  const dumpDir = option('--dump');
  const densityOption = option('--density');
  const fixedFps = Number(option('--fixed') ?? 0);
  const seed = option('--seed');

  // --fixed steps the clock modules read by exactly one frame per frame, and
  // --seed makes Math.random() repeat, so a render can be made again exactly
  const realNow = performance.now.bind(performance);
  let clock = 0;
  if (fixedFps) performance.now = () => clock;
  const seedRandom = () => {
    if (seed === undefined) return;
    let a = Number(seed) >>> 0;
    // mulberry32
    Math.random = () => {
      a = (a + 0x6D2B79F5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    // and crypto.getRandomValues(), from the same sequence
    Object.defineProperty(globalThis.crypto, 'getRandomValues', {
      configurable: true, writable: true,
      value: (a) => {
        const bytes = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
        for (let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
        return a;
      },
    });
  };

  const here = typeof __dirname === 'string' ? __dirname : process.cwd();
  const gles3Dir = [process.env.NODE_GLES3, here, CFG.gles3Dir].find(d => d && fs.existsSync(path.join(d, 'gles3.js')));
  if (!gles3Dir) {
    console.error(`Can't find node-gles3: set NODE_GLES3 to its folder, or put this script in it (looked in ${[process.env.NODE_GLES3, here, CFG.gles3Dir].filter(Boolean).join(', ')})`);
    process.exit(1);
  }
  const gles3 = createRequire(path.join(gles3Dir, 'index.js'));
  const gl = gles3('./gles3.js');
  const glfw = gles3('./glfw3.js');
  const Window = hidden ? null : gles3('./window.js');
  const glm = gles3('gl-matrix');
  const { PNG } = gles3('pngjs');
  const jpeg = gles3('jpeg-js');

  const runClassic = lichenPageScope(CFG.pageUrl, WORKERS);
  const children = new Set();
  const quit = (code = 0) => {
    for (const c of children) c.kill();
    process.exit(code);
  };
  process.on('unhandledRejection', (e) => console.error('Unhandled:', e?.message ?? e));

  // --hidden renders with no window on screen, as for --capture with no
  // display, so it makes the context itself; otherwise node-gles3's Window
  let win;
  if (hidden) {
    glfw.init();
    glfw.defaultWindowHints();
    glfw.windowHint(glfw.CONTEXT_VERSION_MAJOR, 3);
    glfw.windowHint(glfw.CONTEXT_VERSION_MINOR, 3);
    glfw.windowHint(glfw.OPENGL_FORWARD_COMPAT, 1);
    glfw.windowHint(glfw.OPENGL_PROFILE, glfw.OPENGL_CORE_PROFILE);
    glfw.windowHint(glfw.VISIBLE, 0);
    const window = glfw.createWindow(64, 64, CFG.title, null, null);
    glfw.makeContextCurrent(window);
    gl.glewInit();
    win = { window, frame: 0, dim: [64, 64], render() { this.draw(); glfw.swapBuffers(window); this.frame++; } };
  } else {
    win = new Window({ title: CFG.title, fullscreen: !windowed, sync: 1, width: windowed ? 960 : undefined, height: windowed ? 720 : undefined });
  }

  // The webcam, through ffmpeg: RGBA frames, rows top first, at the size asked
  const openCapture = (w, h, onFrame) => {
    const input = process.env.LICHEN_CAMERA ? process.env.LICHEN_CAMERA.split(/\s+/).filter(Boolean)
      : process.platform === 'darwin' ? ['-f', 'avfoundation', '-framerate', '30', '-i', '0:none']
      : process.platform === 'win32' ? null
      : ['-f', 'v4l2', '-i', '/dev/video0'];
    if (!input) {
      console.warn('Camera: set LICHEN_CAMERA to ffmpeg input arguments for the webcam, e.g. "-f dshow -i video=<name>"');
      return { stop() {} };
    }
    const proc = spawn('ffmpeg', ['-loglevel', 'error', ...input, '-an', '-vf', `scale=${w}:${h}`, '-pix_fmt', 'rgba', '-f', 'rawvideo', 'pipe:1'], { stdio: ['ignore', 'pipe', 'pipe'] });
    children.add(proc);
    const size = w * h * 4;
    let buf = Buffer.alloc(0);
    proc.stdout.on('data', (chunk) => {
      buf = buf.length ? Buffer.concat([buf, chunk]) : chunk;
      while (buf.length >= size) {
        onFrame(new Uint8Array(buf.subarray(0, size)));
        buf = buf.subarray(size);
      }
    });
    proc.stderr.on('data', (d) => console.warn('Camera (ffmpeg):', String(d).trim()));
    proc.on('error', (e) => console.warn(`Camera: can't run ffmpeg (${e.code}), so the Camera outputs nothing`));
    proc.on('exit', () => children.delete(proc));
    return { stop() { proc.kill(); } };
  };
  // An image a module loads by URL, from where the page would fetch it
  const loadImage = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`can't load ${url}: ${res.status}`);
    const bytes = Buffer.from(await res.arrayBuffer());
    const decoded = bytes[0] === 0x89 ? PNG.sync.read(bytes) : jpeg.decode(bytes, { useTArray: true });
    const img = new p5.Image(decoded.width, decoded.height);
    img.pixels.set(decoded.data);
    return img;
  };

  // The Monitor, built alone from its node first, since its Width and Height
  // set the pixel density every framebuffer is made at
  let density = 1;
  const { glCanvas, p5, ctx } = lichenP5(gl, glm, { width: CFG.canvas[0], height: CFG.canvas[1], density, openCapture, loadImage });
  globalThis.p5 = p5;
  const load = lichenLoader(SOURCES, CLASSICS, runClassic);
  const { ConnectionGraph } = load(CFG.graphUrl);
  const { ProcessingPipeline } = load(CFG.pipelineUrl);
  const { createModuleByUid } = load(CFG.registryUrl);
  for (const url of CFG.moduleUrls) load(url);

  const monitorNode = CFG.patch.nodes.find(n => n.id === CFG.monitorId);
  const probe = new ConnectionGraph();
  probe.fromJSON({ nodes: [monitorNode], connections: [], controlConnections: [] },
    (uid, id, type) => createModuleByUid(uid, glCanvas, id, type));
  const monitorProbe = probe.nodes.get(CFG.monitorId);
  const outW = Math.round(monitorProbe.params.width?.value ?? CFG.canvas[0]);
  const outH = Math.round(monitorProbe.params.height?.value ?? CFG.canvas[1]);
  monitorProbe.dispose();
  // The patch renders at the Monitor's size, or past it on one side when the
  // Monitor isn't 4:3, and the picture is stretched to it as a recording is
  density = densityOption ? Number(densityOption) : Math.max(outW / CFG.canvas[0], outH / CFG.canvas[1]);
  glCanvas.pixelDensity(density);

  seedRandom();
  const pipeline = new ProcessingPipeline(glCanvas);
  pipeline.graph.fromJSON(CFG.patch, (uid, id, type) => {
    try {
      return createModuleByUid(uid, glCanvas, id, type);
    } catch (e) {
      console.error(`${type} (node ${id}) can't run here, so it is left out: ${e.message}`);
      glCanvas._resetTargets();
      return null;
    }
  });

  // A module that throws stops there, and the rest of the patch carries on
  for (const mod of pipeline.graph.nodes.values()) {
    const process_ = mod.process;
    mod.process = function (graph, g) {
      if (this._lichenFailed) return;
      try {
        process_.call(this, graph, g);
      } catch (e) {
        this._lichenFailed = true;
        console.error(`${this.type} (node ${this.id}) stopped: ${e.stack ?? e}`);
        glCanvas._resetTargets();
      }
    };
  }
  const monitor = pipeline.graph.nodes.get(CFG.monitorId);
  console.log(`${CFG.title}: ${pipeline.graph.nodes.size} modules, output ${outW}x${outH} (pixel density ${+density.toFixed(4)})`);

  // The final buffer, Monitor Width x Height, and the passes into and out of it.
  // Row 0 of a framebuffer is the top of its picture (see Framebuffer
  // Orientation in ARCHITECTURE.md), so the copy into it flips v and the final
  // buffer is the right way up for GL.
  const prog = (frag) => {
    const compile = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
    const p = gl.createProgram();
    gl.attachShader(p, compile(gl.VERTEX_SHADER, '#version 330\nin vec2 aPosition; out vec2 vUv; uniform float uFlip;\nvoid main() { vUv = vec2(aPosition.x, uFlip > 0.5 ? 1.0 - aPosition.y : aPosition.y); gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0); }'));
    gl.attachShader(p, compile(gl.FRAGMENT_SHADER, frag));
    gl.bindAttribLocation(p, 0, 'aPosition');
    gl.linkProgram(p);
    return p;
  };
  const copyProg = prog('#version 330\nin vec2 vUv; out vec4 color; uniform sampler2D uTex;\nvoid main() { color = texture(uTex, vUv); }');
  const quadVao = gl.createVertexArray();
  gl.bindVertexArray(quadVao);
  const quadBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  gl.bindVertexArray(0);
  const finalFbo = glCanvas.createFramebuffer({ width: outW, height: outH, density: 1, antialias: false, depth: false });

  const drawQuad = (tex, flip) => {
    gl.disable(gl.BLEND);
    gl.disable(gl.DEPTH_TEST);
    ctx.useProgram(copyProg);
    ctx.activeTexture(gl.TEXTURE0);
    ctx.bindTexture(gl.TEXTURE_2D, tex);
    gl.uniform1i(gl.getUniformLocation(copyProg, 'uTex'), 0);
    gl.uniform1f(gl.getUniformLocation(copyProg, 'uFlip'), flip ? 1 : 0);
    ctx.bindVertexArray(quadVao);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    gl.enable(gl.DEPTH_TEST);
    glCanvas._forgetGLState();
  };

  const show = () => {
    const src = monitor?.displayTexture;
    ctx.bindFramebuffer(gl.FRAMEBUFFER, finalFbo.framebuffer);
    ctx.viewport(0, 0, outW, outH);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    if (src && src.colorTexture) drawQuad(src.colorTexture, true);

    // Into the window, letterboxed to the Monitor's aspect
    const [ww, wh] = win.dim;
    const scale = Math.min(ww / outW, wh / outH);
    const vw = Math.round(outW * scale), vh = Math.round(outH * scale);
    ctx.bindFramebuffer(gl.FRAMEBUFFER, null);
    ctx.viewport(0, 0, ww, wh);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    ctx.viewport(Math.floor((ww - vw) / 2), Math.floor((wh - vh) / 2), vw, vh);
    drawQuad(finalFbo.colorTexture, false);
  };

  const savePng = (file) => {
    finalFbo.loadPixels();
    const png = new PNG({ width: outW, height: outH });
    const row = outW * 4;
    for (let y = 0; y < outH; y++) png.data.set(finalFbo.pixels.subarray((outH - 1 - y) * row, (outH - y) * row), y * row);
    fs.writeFileSync(file, PNG.sync.write(png));
    console.log(`Saved ${file}`);
  };
  // Every framebuffer each node holds as <dir>/<id>-<type>-<property>.png,
  // rows as stored: top first
  const dumpOutputs = (dir) => {
    fs.mkdirSync(dir, { recursive: true });
    for (const mod of pipeline.graph.nodes.values()) {
      for (const [prop, fbo] of Object.entries(mod)) {
        if (!(fbo instanceof p5.Framebuffer)) continue;
        fbo.loadPixels();
        const w = fbo._pw, h = fbo._ph;
        const png = new PNG({ width: w, height: h });
        const px = fbo.pixels;
        for (let i = 0; i < w * h * 4; i++) png.data[i] = px instanceof Float32Array ? Math.max(0, Math.min(255, px[i] * 255)) : px[i];
        fs.writeFileSync(path.join(dir, `${mod.id}-${mod.type}-${prop}.png`), PNG.sync.write(png));
      }
    }
    console.log(`Saved every node's framebuffers in ${dir}`);
  };

  win.draw = () => {
    if (fixedFps) clock += 1000 / fixedFps;
    pipeline.processFrame();
    show();
  };
  const frame = () => {
    const start = realNow();
    glfw.pollEvents();
    if (glfw.windowShouldClose(win.window) || glfw.getKey(win.window, glfw.KEY_ESCAPE)) return quit();
    win.render(gl);
    if (maxFrames && win.frame >= maxFrames) {
      if (capturePath) savePng(capturePath);
      if (dumpDir) dumpOutputs(dumpDir);
      return quit();
    }
    // A hidden window has no vsync to wait on, and modules that move by the
    // clock would see frames come far faster than a display shows them
    if (hidden && !fixedFps) setTimeout(frame, Math.max(0, 1000 / 60 - (realNow() - start)));
    else setImmediate(frame);
  };
  frame();
};

lichenMain(CFG, SOURCES, CLASSICS, WORKERS);
