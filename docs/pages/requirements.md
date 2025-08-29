
This page contains information on system requirements and compatibility of Crystal.

## Compatibility <!-- {docsify-ignore} -->

Crystal is compatible with the following platforms currently supported by GameMaker:
* Windows, Mac, Ubuntu, Android, iOS, WASM (GX.Games), Playstation 4 & 5, Xbox One, Xbox Series X | S and Nintendo Switch.

It uses only native GML and GLSL ES code, without using any extra dependencies.

> We have tried to support HTML5, but it is unsustainable.


## GameMaker Version <!-- {docsify-ignore} -->

Crystal 1.0+ is compatible with the following versions of GameMaker:
* GameMaker v2024.6.2+ | Runtime v2024.6.1+

GMRT is not yet supported - this may change in the future.

> Crystal does not work on versions **prior to this one**, due to a major update related to depth buffer.

## Runner <!-- {docsify-ignore} -->

Crystal is compatible with both x86, x64 and ARM architectures.
YYC (YoYo Compiler) is also supported.


## Shader Language <!-- {docsify-ignore} -->

Crystal has all shaders written in GLSL ES language (OpenGL for Embedded Systems), which is compatible with all platforms.

<a href="https://en.wikipedia.org/wiki/OpenGL_ES" target="_blank">![GLSL ES](/../images/GLSL_ES.png) </a>


## System Requirements <!-- {docsify-ignore} -->

Crystal works well on low-end devices. However, how much CPU, GPU, and VRAM Crystal uses will depend on the features you demand from Crystal and the device's hardware.

Crystal can't do the magic to get the perfect performance on all devices, don't expect to use all of Crystal's advanced features and expect it to work on a pre 2015 phone. But we assure you it does the best it can within the limits of GameMaker. :)


## Other Assets <!-- {docsify-ignore} -->

Crystal was developed to avoid conflicts with other libraries (such as name clashes), so it should be compatible with all libraries available for GameMaker, including ours.

This also includes Post-Processing FX, Scribble, Input, etc.
