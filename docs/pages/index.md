
![Crystal Lighting Engine](./images/Crystal_Logo.png ":no-zoom")

<center>Efficient, robust and easy to use 2D lighting engine.</center>
<center>Developed and maintained by Mozart Junior (@foxyofjungle).</center>

<p align="center">
    Get it on: <a href="https://foxyofjungle.itch.io/crystal-2d-lighting-engine">Itch.io</a>
</p>

## Introduction

You don't need a lighting system. But a good lighting system will make your game look **positively more appealing**. Making your own system can work, but there will be those features that only a good lighting system has. And **that's why Crystal exists**, to deliver all of this to you, **effortlessly, intuitively and efficiently**!  

This documentation teaches from basic to advanced, in a simple way. Everything you need to know is explained here.


## Features

The ultimate 2D lighting & shadows with depth + PBR support solution for GameMaker. All this in a package of less than 500 kbytes!

<div id="custom-lists-page">

- Flexible systems allows you to use from basic to advanced without compromising performance;
- Easy to use and fully customizable, you have control of literally everything, every visual aspect (artist-friendly);
    - MVP easily achievable;
- Free updates and individual customer support;
- You don't need to know how it works internally, everything you need is exposed;
- Ideal for both 2D pixel-art and HD/high resolution games. Platformer, Top-Down, RPG, Isometric, etc.
- Deferred Rendering;
    - Render unlimited number of lights, shadows and materials;
        - Your hardware is the limit.
    - Between 5.000 - 10.000 lights at the same time without slow down!*
    - Unlike other lighting systems that use multiple surfaces for a few lights.
- Take control of the final rendering and use your own shaders to apply the effects you want! (Very Easy)
- Fast performance;
    - Culling is used to render and calculate only on-screen lights, shadow casters and materials;
    - Disable lights, shadows and materials outside of camera view (optional);
    - Easily disable features you don't want;
    - VRAM friendly too;
    - Very fast shader compilation;
    - Render resolution adjustable;
        - Also adjust the individual resolution of each pass easily: Lights, Normals, Emissive, Reflections, Materials, etc.
- HDR (High Dynamic Range)!
    - Use this to have extremely beautiful and contrasting lights!
    - Bloom light support;
    - Optional;
- Lights collision!
    - Inspired by Rayman Legends and Among US, you can detect collision (get pixel color & intensity) with lights to create interesting mechanics.
- Rotated Cameras!
    - Supports rotation, zoom, 2D cameras + orthographic 2D cameras (matrix);
- Light penetration (edge lighting);
    - Useful for Terraria style lighting;
- Fast GPU vertex shadows;
    - Soft + hard shadows (customizable smoothness);
    - Animated shadow casters;
    - Shadow depth adjustable (per-occluder + per-light);
    - Shadow length adjustable (per-occluder + per-light);
    - Shadow penumbra adjustable (per-light);
    - Shadow umbra adjustable (per-light);
    - Dynamic shadows (moving objects);
    - Static shadows (e.g. scenario);
        - Prevents freezing when adding or removing multiple static shadows;
    - Transformed and non-transformed shadow casters (for optimization);
    - Functions to create circular, rectangular, from bounding boxes, path and others shadow casters;
    - Create shadow casters using objects and code;
    - Activate and deactivate shadow casters without having to destroy them;
    - Self-shadows support;
- Sprite shadows;
    - Normal mode + with perspective;
    - Offset + angle + alpha + depth;
    - Vertex buffer mode allows you to render multiple shadows in a single batch;
    - Blur support;
    - Render resolution support;
    - Dynamic + static;
    - Animation support;
- Depth is supported for everything, including lights, shadows, materials etc. It is possible to place everything on specific layers and depth!
- Powerful Debug UI:
    - As a bonus, there is a compact UI script where you can edit and test stuff in-game!
- Lights are objects with Variable Definitions - useful for modularization in the room editor;
- 8 Light Possibilities (ultra customizable):
    - Point;
        - With natural/cozy look;
    - Spot;
        - Ultra customizable cone light;
        - Width, corner and tilt support;
        - 3D cookie projection sprite support (gobo);
    - Sprite:
        - Use any sprite as light, with animation support. Useful for light projected from a window or trees, for example.
        - Supports normal maps and BRDF too.
    - Directional (Sun):
        - Supports rotation, shadows, infinite lights and more;
    - Shape (Free Form):
        - Define points using paths! Visually edit the shape of the light in the room editor;
        - Inner and outer colors;
        - Self-adjusting corners with precision amount;
        - Supports shadows too;
    - Basic light:
        - Ultra efficient sprite light;
        - Allows you to draw whatever you want in the Draw event;
    - Line;
        - Ambient;
        - Color overlay support, with intensity;
        - Also allows you to use customized hue/saturation/brightness using a single sprite!
- Define per-light shader complexity (for performance control);
    - Basic;
    - Blinn-Phong;
    - BRDF (PBR);
        - Uses Disney's GGX implementation;
- Light Blend Modes:
    - Multiply;
    - Multiply Normalized;
    - Multiply Linear;
    - Add;
- Materials (optional) - with animation support + fast realtime GPU baking + multiple per-instance materials:
    - Albedo;
    - Normal Map (supports rotation and scaling);
    - Metallic;
    - Roughness;
    - Ambient Occlusion;
    - Emissive (with natural blending!);
    - Unlit (with black color + alpha support - useful for UI)
    - Reflections: useful for crystals, water, floor, etc;
        - +SSR (Screen-space reflections) - optional;
            - Sets a sprite as the sky too - animation support.
        - Back sprite rendering support;
- Layer Materials:
    - Support for all materials listed above ^;
    - Render a layer as if it were a light, emission, and others;
    - Renderize a range of layers into a single surface too;
    - Tilesets support or any layer type: place normal map sprites, materials and other stuff easily;
    - Particles support: drag and drop a particle system into the room and it will emit bloom. It works via code too! :D
- Layer effects (customizable):
    - Automatic normal map generator for layers;
    - Outline/edge normal map generator;
    - Create your own layer effects;
- Spine support;
    - Materials, including normal maps, also work;
    - Also works with delta time, rotation, scale, etc;
- Box2D (built-in GM physics) support;
- Works with online games;
- Efficient: no surface will be created, until you use something (example: there will be nothing related to normal map in memory/VRAM, if you don't use it);
    - Automatically deletes surfaces from the renderer when not in use;
    - This is true for everything, including materials, lights, emission, etc;
    - No memory leaks;
- Emissive particles via custom pass (beyond the layers);
- No need to "Separate Texture Page" from anything;
    - Optimizing texture swaps and batch breaks.
- Direct access to all render passes;
    - Get the lighting surface and others, for special effects.
    - Draw your own custom things in each pass easily.
        - With support for your custom shaders, blend modes and so on.
        - Just call crystal_submit().
- Dithering (for retro aesthetic);
    - Optional - you can even disable it at compile time;
- Define how the light and shadow will be lit on the layer;
    - Allowing lights and shadows not to reach the sky, for example and more advanced effects.
- Day and Night cycle easy-to-use with LUTs;
    - Both manual (your own time) and automatic (you can control everything);
        - It is possible to set the clock speed, being able to have 24-minute days, for example.
    - Set the time using 24h-like values and it will be reflected smoothly!
    - Customize literally any hue/saturation/contrast as efficiently and quickly as possible;
    - Use curves to define when the lights should turn off/on!
        - This feature also allows you to extrapolate the intensity of the lights, as well as the intensity of the ambient light.
    - Supports Strip, Grid and Hald LUTs!
    - Delta time support (optional);
- Support lights on during the day (no need to darken the image to see them);
- UI pass: Support for emissive materials for User Interface;
- Light Cookie Generator;
    - Allows you to create light masks from images, super customizable;
    - .IES (Illuminating Engineering Society) files support!
    - Industry standard lighting format IESNA LM-63 (2019, 2002 and 1995).
- Modular: It was developed for the end user in an intuitive way;
- Function to calculate VRAM usage;
- Purposeful compatibility with Post-Processing FX (works independently)
    - Also works with other libraries like Scribble, Input and so on;
    - Compatible with my other libraries;
- Easy migration from other lighting systems;
- Cross-platform;
    - HTML5 is not supported. Use WASM instead;
    - Frequently tested on Windows, mobile devices (Android), and GX.Games/Opera GX.
    - GLSL ES shaders;
- Super well written and well documented code;
- Documentation available + Discord server for help;

</div>

* Note that using lights with shadows will have an added cost regardless, this is expected. Performance also depends on other factors such as hardware.


## FAQ

### What platforms does Crystal support?
Crystal has been designed to be compatible with every possible platform, except HTML5.
Please note that there may be some unusual issues on platforms that I don't test often, so always report bugs if you find one, so I can take a look and fix it. The project uses pure GML logic and GLSL ES shaders, with no extra dependency.

### Is it difficult to import into an existing project?
No, the Quick Start guide session demonstrates how simple and worthwhile the process is. All you need to do is import the .yymps file, create a renderer and put the light objects in the room. Please read this documentation, this way it will be even simpler to implement. If in doubt, ask on our Discord server.

### What is the performance?
Crystal is designed to use the maximum performance that GameMaker runtime can offer. Note that overall in-game performance, including how many lights with shadows, materials, and other things you can render at the same time, will depend on your hardware.

### Where do I see the Release Notes?
The file is available in every Crystal example project. There is also a copy on the store page. Note that the .yymps package file does not include the Release Notes.

### How can I contribute?
You can make suggestions on our <a href="https://discord.gg/4azKEdMNze" target="_blank">Discord</a>. If you want to support my work, you can do so through [Ko-fi](https://ko-fi.com/foxyofjungle), [Patreon](https://www.patreon.com/foxyofjungle), or by <a href="https://foxyofjungle.itch.io/" target="_blank">purchasing other assets</a>. We kindly thank you! :)

### Who created Crystal?
Crystal was made and is maintained by [Mozart Junior](https://x.com/foxyofjungle), indie proactive game developer, programmer and tech artist. Using the engine since 2012. He has released some [small games](https://gx.games/pt-br/studios/e4a32324-c32a-47b4-a5e6-98ff8be15b5c/) and [open-source projects](https://github.com/FoxyOfJungle) and has won some game jams. He understands how every piece of the GameMaker engine works and has done a lot of work with it. He also loves music and animals, especially felines.

## Help

If you have any questions about how to implement Crystal in your project, or want to report a bug, <a href="https://discord.gg/4azKEdMNze">join our Discord group by clicking here</a>. Be welcome!
