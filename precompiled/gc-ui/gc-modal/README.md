# gc-modal
gc-modal is a modal component.  It takes one opt, title, and the content of the modal is passed in via
``` <yield> ``` The modal comes with a button that will close it, and it can also be controlled by updating
its showModal variable.

### Opts
* title - title text to be displayed at top of the modal

### Example
```
<gc-modal title="Hello">
  This is the body of the modal. You can pass in text, html, 
  or other components!
</gc-modal>

```

### TODO
* ...