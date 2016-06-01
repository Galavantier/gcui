# gc-pmlist
gc-pmlist is a custom gc-listview component designed specifically for pricing matrix units.  it takes an array
of pmus, and parses them them to display itself.

### Opts
* title - title text to be displayed at top of the modal

### Example
```
<gc-pmlist each="{pmu, li in this.line_items}" pmdata="{pmu}"></gc-pmlist>
...
this.on('data_loaded', (line_items) => {
  this.line_items = line_items;
  this.update(this.line_items);
});

```

### TODO
* Limited data is in the array of pmus, so there will have to be some changes once on the live site.
Namely, getting the name of the Venue from its id, and a picture of the venue.
* Could use some CSS edits to make it look more uniform