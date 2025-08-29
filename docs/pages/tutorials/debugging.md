
## Debugging Crystal <!-- {docsify-ignore} -->

You can display a full Debug UI to test Crystal in real-time. This includes viewing in-game shadows, pass surfaces, toggling settings on and off, creating and editing lights, and even saving and loading them. All with the goal of speeding up your workflow.

![Console](/./images/DebugUI.png)

To display the UI, all you need to do is call the following function:

```gml
crystal_debug_show(true, id, renderer);
```

| Name | Type | Description |  
|-----------|:-----------:|-----------:|  
| show | Bool | If true, the UI will be created. If false, the existing UI will be destroyed. |  
| originInstance | Id.Instance | The origin instance to find Crystal constructors to inspect. Example: id, to find from self instance. |  
| classInstance | Struct | The struct returned from a constructor/class. Let it blank/undefined if you want the Debug UI to search it for you, in the current object/context. | 
| isOpened | Struct | If true, the UI starts opened. |  
| startMaximized | Struct | Windows will appear maximized. |  

There are several options in the UI that you can experiment with to learn how to use Crystal and help you add lights.