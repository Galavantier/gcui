# gc-listview
gc-listview is a generic list component designed to be used within UL tags.  There are two main sections
to this component: 
* title - inside of an H2, this is what the user will initially see
* content - inside of a DIV, this is hidden until the user clicks on the listview element

Title and content are passed in via the ``` <yield> ``` tag, not opts.

The user can toggle between the two views by clicking on the listview element.  gc-listview can also be 
configured to hide the header by passing in the opts hideheader

### Opts
* hideheader - a boolean value that will tell the component to hide the header when content is showing.
will default to false if no value is given.

### Example
```
<gc-listview hideheader="true">
  <yield to="title">Header</yield>
  <yield to="content">This is where the content goes!</yield>
</gc-listview>

```

### TODO
* Test