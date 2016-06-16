# gc-button

gc-button is a riot component wrapper for a standard HTML button element.  It takes name, type, text, disabled, 
and on-buttonclick as optional params.

### Opts
* name - The name gc-button will use to refer to itself.  If blank will default to 'generic-button'
* type - Button type
* text - The default text inside the button
* disabled - A boolean value if it should be disabled
* on-buttonclick - A callback function that the button will execute once clicked.  It passes its entire event info.

### Example
```
<gc-button name="submitbutton" type="submit" text="Submit Form" on-buttonclick="{buttonClicked}"></gc-button>
...
this.buttonClicked = (e) => {
  console.log('This is who got clicked: ' + e.toElement);
}
```

### TODO
* ???
* Consider reimplementing as div