# gc-input
gc-input is a riot component wrapper for a standard HTML input element.  It takes label, name, type, placeholder, value, 
disabled, pikaday, on-valuechange, and on-focuschange as optional params.  This element is made from 3 html components: div, label,
and input.

### Opts
* label - If you would like an accompanying label for the input, give it a text value here
* name - The name gc-input will use to refer to its input.  If blank will default to 'generic-input'
* placeholder - A placeholder for the input
* type - Input type
* pikaday - Boolean if input should use pikaday
* value - The default text inside the input
* disabled - A boolean value if it should be disabled
* on-focuschange - A callback function that gc-input will fire when focus has changed from it.  It will pass along the value 
of the input, and a reference to itself.
* on-valuechange - A callback function that gc-input will fire onkeyup.  It will pass along the value of the input,
a reference to itself, and the keycode used.

### Example
```
<gc-input name="firstname" type="text" placeholder="Your First Name" on-focuschange="{getName}"></gc-input>
...
this.getName = (value, tag) => {
  if (value) {
    if (value !== 'Miles') {
    tag.error = 'You have a terrible name.';
    } else {
      tag.error = null;
      console.log('Hello, ' + value);
    }
  }
}
```

### TODO
* Consider passing along the entire event and let the parent decide what it wants / needs.