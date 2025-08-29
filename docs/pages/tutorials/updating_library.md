
## How to Update Crystal <!-- {docsify-ignore} -->

A quick guide on how to update Crystal from one version to another.  

> Before updating the library, ALWAYS make backups.

> KEEP IN MIND: When deleting the Crystal folder, if you used the root parent objects directly, this will cause lights to be removed from rooms. This is why you MUST NOT use the objects directly in the room, only the children of them.


### 1. Read the Release Notes

WHENEVER there is a new update, read the Release Notes (from the website or the offline "ReleaseNotes" file), this will avoid headaches and subsequent questions that are answered in the Release Notes. It contains all the modifications, bug fixes and new features.

Remember: you are not obligated to update Crystal whenever there is a new version.

Always tell if something broke, after reading all the Release Notes and made some changes (if any) on your own and it still didn't work.

### 2. Back up your settings

If you have settings to save in the `__cle_Settings` script, copy it.

### 3. Delete the folder completely

You need to destroy the entire `CrystalLightingEngine` folder to avoid any future errors. So, avoid saving any other files to the Crystal folder.

### 4. Import the new version

Import the new .yymps file.  

### 5. Restore old settings

Restore your old settings from `__cle_Settings` by pasting it.

### 6. Restore lights parent

For example, if you have `objPointLight`, you should set the parent to `__cle_objPointLight` again, since deleting the library from the project removes the parent.

I know this can be annoying sometimes, that's why I only release stable versions of Crystal, and in the future, lights that are objects may change to constructors in the new runtime probably. Don't worry, this change will be easy to handle if it happens.

You now have the updated Crystal version, with awesome new stuff :)


