#!/bin/bash
#
# Build script for aarch64 Linux
#
# Prerequisites:
#   sudo apt install libglew-dev libglfw3-dev libgl1-mesa-dev nodejs npm
#
# Usage:
#   npm install --ignore-scripts   # Install deps without building
#   ./build-aarch64.sh             # Build for aarch64
#

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "=== Building node-gles3 for aarch64 Linux ==="

# Check for required system libraries
check_lib() {
    if ! ldconfig -p | grep -q "$1"; then
        echo "ERROR: $1 not found. Install with: sudo apt install $2"
        exit 1
    fi
}

check_lib libGLEW libglew-dev
check_lib libglfw libglfw3-dev
check_lib libGL libgl1-mesa-dev

# Ensure GLFW header exists for gen.js
GLFW_HEADER="node_modules/native-graphics-deps/include/GLFW/glfw3.h"
if [ ! -f "$GLFW_HEADER" ]; then
    echo "GLFW header not found in native-graphics-deps, copying from system..."
    mkdir -p node_modules/native-graphics-deps/include/GLFW
    cp /usr/include/GLFW/glfw3.h "$GLFW_HEADER"
fi

# Generate bindings
echo "=== Generating bindings ==="
node tools/gen.js

# Swap binding.gyp with aarch64 version
echo "=== Swapping binding.gyp for aarch64 build ==="
if [ -f binding.gyp ]; then
    mv binding.gyp binding-original.gyp
fi
cp binding-linux-arm64.gyp binding.gyp

# Build native modules
echo "=== Compiling native modules ==="
node-gyp rebuild

# Restore original binding.gyp
echo "=== Restoring original binding.gyp ==="
mv binding.gyp binding-linux-arm64.gyp.bak
if [ -f binding-original.gyp ]; then
    mv binding-original.gyp binding.gyp
fi

echo ""
echo "=== Build complete ==="
echo "Built modules: gles3, glfw3, audio"
echo "Note: openvr, spout, realsense are not available on aarch64"
