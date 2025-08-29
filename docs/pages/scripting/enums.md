
You don't need to memorize the information below, during the use of Crystal, Feather itself displays this as well. It is for informational purposes only.

## Crystal Enumerators <!-- {docsify-ignore} -->

```gml
// This is used to indicate which Crystal pass you are accessing.
enum CRYSTAL_PASS {
	LIGHT,
	NORMALS,
	MATERIAL,
	EMISSIVE,
	REFLECTIONS,
	COMBINE,
}

// This is used in Crystal_MaterialLayer(), to differentiate the type of Material you are processing.
enum CRYSTAL_MATERIAL {
	METALLIC,
	ROUGHNESS,
	AO,
	MASK,
}

// This is used to differentiate each type of light object.
enum CRYSTAL_LIGHT {
	BASIC,
	DIRECT,
	SHAPE,
	SPRITE,
	SPOT,
	POINT
}

// This is used to differentiate between a static and dynamic shadow.
enum CRYSTAL_SHADOW {
	STATIC,
	DYNAMIC,
}

// This is used in a Crystal_ShadowGroup(), to differentiate between standard (dynamic) sprites and vertex buffer-generated sprites (that can be baked - static).
enum CRYSTAL_SHADOW_MODE {
	SPRITE,
	SPRITE_BAKED,
}
```


## Crystal Macros <!-- {docsify-ignore} -->

### Lit Type

The Macros below change the drawing behavior of lights and shadows, in relation to `depth`.

Lights have the variable `litType`, and shadows have `shadowLitType`, which both can be set to one of the macros below.  

For example, if you use `LIT_EQUAL`, only things that are at the **same depth** as the light or shadow will be affected by the light or shadow. The nomenclature below describes exactly how the light or shadow will look. This can be useful for some situations like preventing shadows from passing through the sky in a platformer game, etc.

> The default is `LIT_LESS_EQUAL` for both. Only change this if you know what you are doing, as it can cause confusion.

```
LIT_LESS_EQUAL
LIT_LESS
LIT_GREATER_EQUAL
LIT_GREATER
LIT_EQUAL
LIT_NOT_EQUAL
LIT_ALWAYS
```

### Light Shader

These macros are used in the following lights: Point, Spot, Direct, Shape and Sprite. The Basic light does not use this. The `shaderType` variable changes the light shader with the macros below.
```
LIGHT_SHADER_BASIC -> Only Essentials
LIGHT_SHADER_PHONG -> Essentials + Phong lighting
LIGHT_SHADER_BRDF -> Essentials + BRDF (PBR) lighting
```


### Light Shadow Shader

These macros are used in shadow-casting lights. They control what kind of shadows the lights will cast.

```
LIGHT_SHADOW_SHADER_BASIC -> Draw basic vertex shadows only
LIGHT_SHADOW_SHADER_SMOOTH -> Draw smooth vertex shadows only
LIGHT_SHADOW_SHADER_SPRITE -> Draw sprite shadows only
LIGHT_SHADOW_SHADER_SPRITE_BASIC -> Draw both sprite and basic vertex shadows
LIGHT_SHADOW_SHADER_SPRITE_SMOOTH -> Draw both sprite and smooth vertex shadows
```

Soft shadows are more demanding on the GPU.

Note that drawing more shadow types naturally affects performance. By default, all lights draw only smooth vertex shadows (`LIGHT_SHADOW_SHADER_SMOOTH`). Whenever you enable shadows on a light, it will draw all visible shadows (and if culling is disabled, it will draw literally every single shadow caster).



### Shadow Transformation

The macros below are used to define the type of transformation that `Crystal_Shadow()` uses to generate the vertices. This is used to optimize generation performance.
```
SHADOW_SOFT_TRANSFORMED
SHADOW_HARD_TRANSFORMED
SHADOW_SOFT_NO_TRANSFORM -> No per-vertex rotation, but scaling is still supported
SHADOW_HARD_NO_TRANSFORM -> No per-vertex rotation, but scaling is still supported
```

Soft shadows are more demanding on the CPU.
