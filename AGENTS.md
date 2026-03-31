## Overview

Read ARCHITECTURE.md.

We will now implement a polyfill to make a three.js project work seamlessly with node-gles3.

The goal is to create completely plug-and-play experience when the user wants to integrate a three.js project, running it in node-gles3 without modification. 

Because node-gles3 already successfully emulates a WebGL2 environment, it provides exactly the graphics pipeline that three.js needs to render 3D scenes. However, three.js is fundamentally designed with the assumption that it is running inside a web browser, which means we have to bridge the gap between node.js and the browser environment.

At its core, three.js is a wrapper around WebGL. When we initialize a WebGLRenderer in three.js, we can manually pass it an existing WebGL context rather than letting three.js create its own HTML canvas.

Since node-gles3 creates a native window and exposes a standard WebGL2 context, we simply hand that context over to three.js. Once three.js has the context, it can compile shaders, push geometry to the GPU, and render frames just as it would in Chrome or Firefox.

If we can set up the scaffolding to fake a minimal browser environment--mocking the DOM, handling inputs, manually loading textures, etc--node-gles3 will be an excellent foundation for running heavy three.js applications natively on a desktop via node.js.

## The Polyfill
To get a typical three.js script running, we will need to mock or route several browser-specific features that don't exist in plain node.js. In this first iteration, we will focus on four:

### 1. The Global DOM (window and document)
three.js frequently checks for window or document (e.g., to check screen resolution or append elements). You will need to create mock objects for these globally in your node script before importing three.js.

### 2. The Animation Loop (requestAnimationFrame)
Browsers use requestAnimationFrame to sync the rendering loop with the monitor's refresh rate. In node-gles3, the windowing system (GLFW) handles the render loop. You will either need to polyfill requestAnimationFrame to tie into the GLFW loop, or manually call your render() function inside a custom while loop or setInterval.

### 3. Texture Loading
Normally, three.js uses the browser's Image object or <img> tags to load textures (TextureLoader). In node.js, these don't exist. You will need to use a library like canvas or a native image decoding library (like pngjs or jpeg-js) to load image data from your file system into memory, and then feed that raw pixel data into a three.js DataTexture.

### 4. Input Controls (Mouse/Keyboard)
If your project relies on things like OrbitControls, be aware that these utilities listen for browser-specific DOM events (mousedown, mousemove, touchstart, etc.). node-gles3 intercepts native OS inputs via GLFW. To use standard three.js controls, you have to write a translation layer that catches GLFW input events and broadcasts them as fake DOM events so the three.js controls understand them.


