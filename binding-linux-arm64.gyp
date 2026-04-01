{
  "targets": [
    {
      "target_name": "gles3",
      "sources": [ "src/node-gles3.cpp" ],
      "include_dirs": [
        "src", "src/include"
      ],
      "cflags": ["-Wno-unused-variable", "-Wno-unused-parameter"],
      "libraries": [
        "-lGLEW", "-lGL"
      ]
    },
    {
      "target_name": "glfw3",
      "sources": [ "src/node-glfw3.cpp" ],
      "include_dirs": [
        "src", "src/include"
      ],
      "cflags": ["-Wno-unused-variable", "-Wno-unused-parameter"],
      "libraries": [
        "-lglfw", "-lGL", "-ldl", "-lpthread"
      ]
    },
    {
      "target_name": "audio",
      "sources": [ "src/node-audio.cpp" ],
      "defines": [],
      "cflags": ["-std=c++11", "-Wall", "-pedantic", "-Wno-unused-variable", "-Wno-unused-parameter"],
      "cflags!": [ "-fno-exceptions" ],
      "cflags_cc!": [ "-fno-exceptions" ],
      "include_dirs": [
        "<!(node -p \"require('node-addon-api').include_dir\")",
        "src"
      ],
      "libraries": [
        "-ldl", "-lpthread"
      ]
    }
  ]
}
