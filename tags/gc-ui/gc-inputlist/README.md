# gc-inputlist
gc-inputlist is like gc-input, but with the added option of having a list and multiselect.  Since many of gc-input's features
were needed, it actually invokes gc-input.

### Opts
* almost everything that gc-input takes (to be added as need later on)
* multiselect - a boolean value which determines if the user should be able to give multiple answers
* list - gc-list's raison d'être.  it accepts a list of strings, or an array of objects.  note, if you give it an array
of objects, you must give it a key to search.

### Example
```
<gc-inputlist placeholder="City" list="{this.dummyData}" key="city" multiselect="true"></gc-inputlist>
...
this.dummyData = [
  {"venue":"Drai's Nightclub", "city":"Las Vegas", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"},
  {"venue":"Drai's Nightclub", "city":"Las Vegas", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"},
  {"venue":"XS Nightclub", "city":"Las Vegas", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"},
  {"venue":"LA Club", "city":"Los Angeles", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"},
  {"venue":"Fontainebleau", "city":"Miami", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"},
  {"venue":"Fontainebleau", "city":"Miami", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"},
  {"venue":"Blop Blap", "city":"New York", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"},
  {"venue":"Desert Nightlife", "city":"Scottsdale", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"},
  {"venue":"Scorpion Club", "city":"Scottsdale", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"}
];
```

### TODO
* Give it full access to gc-input's opts
* Make list optional or required
* Up / Down to select
* Test