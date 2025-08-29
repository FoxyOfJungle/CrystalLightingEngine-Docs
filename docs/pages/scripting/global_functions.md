
## Global Functions List <!-- {docsify-ignore} -->

These features are available globally, meaning you can call from anywhere.  


## crystal_set_renderer()

When you use `.Apply()` from some constructors (shadows, materials, etc), they are sent to the last renderer created. This function sets the current global renderer in use. Generally you don't need to use this function every time, since the `.Apply()` function already allows this, only if you have more than one `Crystal_Renderer()` and want to change it globally.  

```gml
crystal_set_renderer(renderer);
```

| Name | Type | Description |  
|-----------|:-----------:|-----------:|  
| renderer | Struct.Crystal_Renderer | The new Crystal_Renderer struct. |  

Example:

```gml
// create two renderers (example)
renderer1 = new Crystal_Renderer();
renderer2 = new Crystal_Renderer();

// create shadow
shadow = new Crystal_Shadow(id, CRYSTAL_SHADOW.STATIC);
shadow.AddMesh(new Crystal_ShadowMesh().FromEllipse(8, 4, true, 8));

crystal_set_renderer(renderer1); // using renderer1
shadow.Apply();

crystal_set_renderer(renderer2); // using renderer2
shadow.Apply();
```

<br>


## crystal_get_renderer()

Get current Crystal_Renderer() struct.  

```gml
crystal_get_renderer() -> Struct.Crystal_Renderer;
```

<br>


## crystal_pass_submit()

I would say this is one of the most useful and unique features of Crystal. 

This function sends a function that will be executed at the end of a pass. Useful for drawing custom things within each pass.  

> Be careful when setting shaders, as it can change the behavior of some passes (see below). Blendmodes are free to use.

Notes on each pass: 

**Normals:** Using `shader_set()` will remove the current Normal shader. So you can use your own, and `mat_normal_` functions to set it again.  
**Emissive:** Using `shader_set()` will remove the current Emissive shader. So you can use your own, and `mat_emission_` functions to set it again.  

All other passes are fine to use `shader_set()`.

If you change the depth, blendmode, alpha, color or something else, this will affect the next function to be called, so you should reset if you don't want this to happen.

You should call this function at each step (in any event), as the renderer always resets the passes at each frame. You may want to declare the function/method only once in the Create Event, for performance reasons.

```gml
crystal_pass_submit(pass, function);
```

| Name | Type | Description |  
|-----------|:-----------:|-----------:|  
| pass | Enum.CRYSTAL_PASS | Pass enum, defines in which pass to render. |  
| function | Method,Function | The function to be executed. |  

Example:

```gml
// Create Event
drawMethod = function() {
    mat_emission_set_intensity(1.8); // if above Bloom's threshold (e.g: 1.5), it will glow
    draw_set_color(c_orange);
    draw_text(mouse_x, mouse_y, "Emissive Text");
    draw_set_color(c_white);
    mat_emission_set_intensity(1); // reset emission value (if needed)
}

// Step or Draw event
crystal_pass_submit(CRYSTAL_PASS.EMISSIVE, drawMethod);
```

Note that in the example above we don't use `mat_emission_begin`, since the default shader is already emissive. But if you switch shaders, you must reset the shader back to emissive.

<br>
