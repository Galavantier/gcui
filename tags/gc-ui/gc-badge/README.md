# gc-badge

gc-badge is a simple badge component.  It takes two opts as tranclusions, base and badge.  Badge will be positioned at the lower right-hand
corner of its base.

### Opts
* base - The element that the badge uses to position itself.
* badge - The content inside the badge

### Example
```
<gc-badge base="The Answer" badge="{bestNumber}"></gc-badge>
...
let bestNumber = 42;
```

### TODO
* User-defined Color
* Nice styling for the badge