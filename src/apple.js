(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
riot.tag2('demo-form', '<div class="form-container"> <div class="dates"> <gc-input name="startdate" placeholder="Start Date" pikaday="true" label="Start Date" on-focuschange="{getValue}"></gc-input> <gc-input name="enddate" placeholder="Start Date" pikaday="true" label="End Date" on-focuschange="{getValue}"></gc-input> </div> <div class="flex-container"> <div class="item"> <gc-inputlist name="testeroo" placeholder="test" list="{this.dummyData}" key="venue" multiselect="true"></gc-inputlist> </div> <div class="item"> <gc-input name="type" on-valuechange="{error}" placeholder="Product Type"></gc-input> </div> <div class="item"> <gc-input name="venue" on-valuechange="{updateName}" on-focuschange="{updateName}" placeholder="Event"></gc-input> </div> <div class="item"> <gc-input name="title" placeholder="Product Title"></gc-input> </div> </div> <div class="button"> <gc-button name="button" type="submit" text="Search" on-buttonclick="{onSearchPmus}"></gc-button> </div> </div> <gc-modal name="mainModal" title="Test">Oh, hello there</gc-modal>', '', '', function(opts) {
'use strict';

var _this = this;

this.cityArray = ['Las Vegas', 'Los Angeles', 'Miami', 'New York', 'San Diego', 'Scottsdale'];
this.dummyData = [{ "venue": "Drai's Nightclub", "city": "Las Vegas", "capacity": "6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)" }, { "venue": "Drai's Nightclub", "city": "Las Vegas", "capacity": "6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)" }, { "venue": "XS Nightclub", "city": "Las Vegas", "capacity": "6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)" }, { "venue": "LA Club", "city": "Los Angeles", "capacity": "6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)" }, { "venue": "Fontainebleau", "city": "Miami", "capacity": "6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)" }, { "venue": "Fontainebleau", "city": "Miami", "capacity": "6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)" }, { "venue": "Blop Blap", "city": "New York", "capacity": "6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)" }, { "venue": "Desert Nightlife", "city": "Scottsdale", "capacity": "6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)" }, { "venue": "Scorpion Club", "city": "Scottsdale", "capacity": "6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)" }];

this.getValue = function (value) {
  console.log(value);
};

this.error = function (value, tag) {
  //- if (value) {
  //-   tag.error = 'Sorry, I don\'t do anything.';
  //- } else {
  //-   tag.error = null;
  //- }
};

this.onSearchPmus = function (e) {
  var test = _this.tags.testeroo.getVal.call();
  if (test == 'show modal') {
    _this.tags.mainModal.update({
      showModal: true
    });
  }
};
});
riot.tag2('demo-results', '<div class="search-results"> <ul> <gc-pmlist each="{pmu, li in this.line_items}" pmdata="{pmu}"></gc-pmlist> </ul> </div>', '', '', function(opts) {
'use strict';

var _this = this;

this.on('before-mount', function () {
  opts.callback(_this);
});
this.on('mount', function () {
  _this.on('data_loaded', function (line_items) {
    _this.line_items = line_items;
    _this.update(_this.line_items);
  });
});
});
riot.tag2('demo-search', '<gc-nav name="navbar"> <li><gc-badge base="Revew Your Quote" badge="1"></gc-badge></li> <li><a href="/user/logout">Logout</a></li> </gc-nav> </gc-nav> <demo-form></demo-form> <demo-results callback="{tagCallback}"></demo-results>', '', '', function(opts) {
'use strict';

this.tagCallback = function (resultsTag) {

  var request = new XMLHttpRequest();
  request.open('GET', 'results.json', true);
  request.onload = function () {
    if (request.status === 200) {
      var data = JSON.parse(request.responseText);
      resultsTag.trigger('data_loaded', data.line_items);
    }
  };
  request.send();
};
});
riot.tag2('gc-badge', '<div class="content"> {base} <div class="badge"> {badge} </div> </div>', '', '', function(opts) {
'use strict';

var _this = this;

// Set Mutable Attributes
this.on('before-mount', function () {
  _this.update({
    base: opts.base || '',
    badge: opts.badge || ''
  });
});
});
riot.tag2('gc-button', '<button name="{opts.name || generic-button}" value="{opts.value}" type="{opts.type || button}" __disabled="{disabled}" onclick="{buttonClicked}">{text || \'Click Me\'}</button>', '', '', function(opts) {
'use strict';

var _this = this;

this.on('before-mount', function () {
  _this.update({
    disabled: opts.disabled == "true" ? opts.disabled : false,
    text: opts.text || ''
  });
});

this.buttonClicked = function (e) {
  if (typeof opts.onButtonclick === 'function') {
    opts.onButtonclick(e);
  }
};
});
riot.tag2('gc-card', '<div class="card"> <div class="face front"> <div class="flex-container"> <div class="card-title item"> <h2>{opts.title} for {opts.capacity}</h2> <div class="card-venue">{opts.subtitle}</div> <div class="card-date">{opts.date}</div> </div> <div class="details item"> <a href="#" onclick="{toggleFlip}"></a> </div> </div> <div class="item image"> <img riot-src="{opts.url}"> </div> <div class="card-pricing item"> <hr> Estimated Total: ${opts.total} </div> <div class="button"> <gc-button name="button" type="submit" text="Add To Cart" on-buttonclick="{addToCart}"></gc-button> </div> </div> <div class="face back"> <div class="flex-container"> <div class="card-title item"> <h2>{opts.title} for {opts.capacity}</h2> <div class="card-venue">{opts.subtitle}</div> <div class="card-date">{opts.date}</div> </div> <div class="details item"> <a href="#" onclick="{toggleFlip}"></a> </div> </div> <div class="flex-container breakdown"> <div class="label item">Capacity</div> <div class="value item">{opts.capacity}</div> <div class="label item">Cost</div> <div class="value item">${opts.base}</div> <div class="label item">Service Gratuity</div> <div class="value item">${opts.gratuity}</div> <div class="label item">Sales Tax</div> <div class="value item">${opts.tax}</div> <div class="label item">Service Charge</div> <div class="value item">${opts.service}</div> <div class="label item">Concierge Package</div> <div class="value item">${opts.package}</div> <div class="label item">Rate Guarantee</div> <div class="value item">${opts.guarantee}</div> </div> <div class="card-pricing item"> <hr> Estimated Total: ${opts.total} </div> <div class="button"> <gc-button name="buttonback" type="submit" text="Add To Cart" on-buttonclick="{addToCart}"></gc-button> </div> </div> </div>', '', '', function(opts) {
'use strict';

var _this = this;

// TODO: FIX THIS QUICK AND DIRTY PATH HACK

var button = this.tags.button;
var buttonBack = this.tags.buttonback;
this.selected = false;

this.toggleFlip = function (e) {
  e.path[4].classList.toggle('flip');
};

this.addToCart = function (e) {
  e.path[4].classList.toggle('selected');
  _this.selected = !_this.selected;
  if (_this.selected) {
    button.update({
      text: "Remove From Cart"
    });
    buttonBack.update({
      text: "Remove From Cart"
    });
  } else {
    button.update({
      text: "Add To Cart"
    });
    buttonBack.update({
      text: "Add To Cart"
    });
  }
};
});
riot.tag2('gc-input', '<div class="{input-content: true, error: error}"> <label name="label">{opts.label || \'\'} <input class="{error: error}" type="{opts.type || \'text\'}" name="{opts.name || \'generic-input\'}" placeholder="{opts.placeholder}" __disabled="{disabled}" value="{value}" __required="{required}" onkeyup="{valueChanged}"> </label> <div class="error-text" show="{this.error}"> {this.error} </div> </div>', '', '', function(opts) {
'use strict';

var _this = this;

// Set Mutable Attributes
this.on('before-mount', function () {
  _this.update({
    pikaday: opts.pikaday == "true" ? opts.pikaday : false,
    value: opts.value || '',
    disabled: opts.disabled == "true" ? opts.disabled : false,
    required: opts.required || false,
    name: opts.name || 'generic-input'
  });
});

// Add listeners
this.on('mount', function () {
  var name = opts.name || 'generic-input';
  _this[name].addEventListener('focus', _this.focusChanged);
  _this[name].addEventListener('blur', _this.focusChanged);

  if (_this.pikaday) {
    var picker = new Pikaday({
      field: _this[name]
    });
  }
});

// Input Value Changed
this.valueChanged = function (e) {
  _this.update({
    value: e.target.value
  });

  if (typeof opts.onValuechange === 'function') {
    opts.onValuechange(e.target.value, _this, e.keyCode);
  }
};

// Focus Changed
this.focusChanged = function (e) {
  if (_this.disabled) {
    return false;
  }
  _this.update({
    value: e.target.value
  });
  if (typeof opts.onFocuschange === 'function') {
    opts.onFocuschange(e.target.value, _this);
  }
};
});
riot.tag2('gc-inputlist', '<div if="{multiselect}" class="tags" name="region"> </div> <gc-input label="{opts.label}" placeholder="{opts.placeholder}" name="input" on-valuechange="{updateList}"></gc-input> <ul name="searchresults" class="list hidden"></ul>', '', '', function(opts) {
'use strict';

var _this = this;

// Make sure there's a list to be used
this.on('before-mount', function () {
  _this.name = opts.name || 'gc-inputlist';
  if (!opts.list) {
    console.error('opts.list not found. Check your opts or use gc-input instead.');
    _this.unmount(true);
  } else if (!opts.list.every(function (object) {
    return object.hasOwnProperty(opts.key) || typeof object === 'string';
  })) {
    // GTFO.
    console.error('You did a bad thing.');
    console.error('gc-inputlist expects an array of strings, or an array of objects with a valid opts.key passed in.');
    _this.unmount(true);
  }

  // Is multiselect on?
  _this.update({
    multiselect: opts.multiselect == "true" ? true : false
  });
});

this.on('mount', function () {
  // Add Listeners
  _this.ul = _this.searchresults;
  _this.ul.addEventListener('click', _this.clicked);
  _this.region.addEventListener('click', _this.clicked);
  _this.input.addEventListener('click', _this.clicked);
  // Make a searchable list
  if (typeof opts.list[0] === 'string') {
    _this.searchableList = opts.list;
  } else {
    _this.searchableList = opts.list.map(function (object) {
      return object[opts.key];
    });
  }
  // Make the list unique.
  _this.searchableList = Array.from(new Set(_this.searchableList));
  // Update default value of input
  if (opts.autoupdate != false) {
    _this.tags.input.update({
      value: _this.searchableList[parseInt(opts.defaultvalue) || 0]
    });
  }
  // Set Width -- this should definitely get changed later
  _this.region.style.width = _this.input.firstChild.clientWidth;
});

// @TODO Tab?
this.updateList = function (value, tag, keyCode) {
  if (_this.multiselect === true) {
    if (keyCode === 13) {
      _this.addTag(value);
    } else if (keyCode === 8 && value.length === 0) {
      _this.deleteTag();
    } else if (document.querySelector('.tags .tag')) {
      document.querySelector('.tags .tag:last-of-type').classList.remove('highlight');
    }
  }

  if (value) {
    var searchableList = _this.searchableList;
    var results = searchableList.filter(function (word) {
      return word.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });

    if (results.length > 0 && value.length > 0) {
      _this.updateView(value, results);
    } else {
      _this.clearResults();
    }
  } else {
    _this.clearResults();
  }
};

this.clearResults = function () {
  _this.ul.className = "term-list hidden";
  _this.ul.innerHTML = '';
};

// @TODO make rgxTerm match case with original
this.updateView = function (searchTerm, results) {
  _this.clearResults();
  for (var i = 0; i < results.length && i < (!isNaN(parseInt(opts.listlimit)) ? parseInt(opts.listlimit) : 100); i++) {
    var li = document.createElement('li'),
        rgxTerm = new RegExp(searchTerm, 'i'),
        result = results[i].replace(searchTerm, '<strong>' + searchTerm + '</strong>');
    li.innerHTML = result;
    _this.ul.appendChild(li);
    if (_this.ul.className !== "term-list") {
      _this.ul.className = "term-list";
    }
  }
};

this.clicked = function (e) {
  // List was clicked
  if (e.target.tagName === 'LI') {
    _this.tags.input.update({ value: e.target.innerText });
    _this.input.querySelector('input').focus();
    // Let parent know something was clicked
    if (typeof opts.onListclick === 'function') {
      opts.onListclick(_this.getVal(), _this);
    }

    _this.clearResults();
    // Tag was clicked
  } else if (e.toElement.classList.contains('tag')) {
      _this.deleteTag(e.toElement);
    } else {
      _this.tags.input.value.length < 1 ? _this.updateView('', _this.searchableList) : _this.updateList(_this.tags.input.value);
    }
};

this.getVal = function () {
  var tagArray = [];
  document.querySelectorAll('.tags .tag').forEach(function (div) {
    tagArray.push(div.innerText);
  });

  if (tagArray.length > 0) {
    return tagArray;
  } else {
    return _this.tags.input.value;
  }
};

this.addTag = function (value) {
  if (value.length > 0 && value !== ' ') {
    _this.region.insertAdjacentHTML('beforeend', '<div class="tag">' + value + '</div>');
  }
};

// @TODO consider refactoring
this.deleteTag = function (el) {
  // User clicked on an element
  if (el) {
    if (el.classList.contains('highlight')) {
      el.parentNode.removeChild(el);
    } else {
      if (document.querySelector('.tags .tag.highlight')) {
        document.querySelector('.tags .tag.highlight').classList.remove('highlight');
      }
      el.classList.add('highlight');
    }
    // User hit delete while inside textbox
  } else if (document.querySelector('.tags .tag')) {
      if (document.querySelector('.tags .tag:last-of-type.highlight')) {
        document.querySelector('.tags').removeChild(document.querySelector('.tags .tag:last-of-type.highlight'));
      } else {
        if (document.querySelector('.tags .tag.highlight')) {
          document.querySelector('.tags .tag.highlight').classList.remove('highlight');
        }
        document.querySelector('.tags .tag:last-of-type').classList.add('highlight');
      }
    }
};
});
riot.tag2('gc-listview', '<li class="{selected : selected}"> <input type="checkbox" checked> <h2 class="{hide : hideheader}"><yield from="title"></yield></h2> <div class="content"> <yield from="content"></yield> </div> </li>', '', '', function(opts) {
"use strict";

var _this = this;

this.on('before-mount', function () {
  _this.update({
    hideheader: opts.hideheader == "true" ? opts.hideheader : false
  });
});
});
riot.tag2('gc-loader', '<div name="bar"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="{width}" height="{height}" viewbox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"> <animate attributename="opacity" attributetype="XML" values="0.2; 1; .2" begin="0s" dur="{speed}" repeatcount="indefinite"></animate> <animate attributename="height" attributetype="XML" values="10; 20; 10" begin="0s" dur="{speed}" repeatcount="indefinite"></animate> <animate attributename="y" attributetype="XML" values="10; 5; 10" begin="0s" dur="{speed}" repeatcount="indefinite"></animate> </rect> <rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2"> <animate attributename="opacity" attributetype="XML" values="0.2; 1; .2" begin="0.15s" dur="{speed}" repeatcount="indefinite"></animate> <animate attributename="height" attributetype="XML" values="10; 20; 10" begin="0.15s" dur="{speed}" repeatcount="indefinite"></animate> <animate attributename="y" attributetype="XML" values="10; 5; 10" begin="0.15s" dur="{speed}" repeatcount="indefinite"></animate> </rect> <rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2"> <animate attributename="opacity" attributetype="XML" values="0.2; 1; .2" begin="0.3s" dur="{speed}" repeatcount="indefinite"></animate> <animate attributename="height" attributetype="XML" values="10; 20; 10" begin="0.3s" dur="{speed}" repeatcount="indefinite"></animate> <animate attributename="y" attributetype="XML" values="10; 5; 10" begin="0.3s" dur="{speed}" repeatcount="indefinite"></animate> </rect> </svg> </div> <div name="circle"> <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="{width}" height="{height}" viewbox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve"> <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path> <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z"> <animatetransform attributetype="xml" attributename="transform" type="rotate" from="0 20 20" to="360 20 20" dur="{speed}" repeatcount="indefinite"></animatetransform> </path> </svg> </div>', '', '', function(opts) {
'use strict';

var _this = this;

//@TODO Investigate Console Error
// Set Mutable Attributes
this.on('before-mount', function () {
  _this.update({
    height: opts.height || '30px',
    width: opts.width || '24px',
    speed: opts.speed || '0.9s',
    type: opts.type || 'bar'
  });
});

// Determine which to show
this.on('mount', function () {
  if (_this.type == 'bar') {
    _this.circle.style.display = 'none';
  } else {
    _this.bar.style.display = 'none';
  }
});
});
riot.tag2('gc-modal', '<div class="mask {show : showModal}" name="mask"></div> <div class="modal {show : showModal}" name="modal"> <h2>{opts.title || \'\'}</h2> <gc-button class="close" name="closebtn" text="X" on-buttonclick="{close}"></gc-button> <div class="content"> <yield></yield> </div> </div>', '', '', function(opts) {
"use strict";

var _this = this;

// Set Mutable Attributes
this.on('before-mount', function () {
  _this.modal.style.top = window.pageYOffset.toString() + "px";
  _this.update({
    showModal: opts.showmodal == "true" ? opts.showmodal : false
  });
});

this.close = function () {
  _this.update({
    showModal: false
  });
};
});
riot.tag2('gc-nav', '<header> <div class="navbar" name="navbar"> <ul class="nav"> <yield></yield> </ul> </div> </header>', '', '', function(opts) {
'use strict';

var _this = this;

// Add scroll listener
this.on('mount', function () {
  window.addEventListener('scroll', _this.scrolled);
});

this.scrolled = function (e) {
  if (window.pageYOffset > 40) {
    _this.navbar.classList.add('scrolled');
  } else {
    _this.navbar.classList.remove('scrolled');
  }
};
});
riot.tag2('gc-pmlist', '<gc-listview name="list" hideheader="false"> <yield to="title"> <div class="header-info"> <div class="header-item-pricing"> <div class="price"> {cost} </div> <div class="subtext"> *estimated total </div> </div> <div class="header-item-photo"> <img src="https://www.galavantier.com/sites/default/files/styles/venue_slider_image/public/XS-Nightclub-Las-Vegas-1.jpg"> </div> <div class="header-item-main"> <div class="title"> Dance Floor Table for {capacity}<br> XS Nightclub </div> <div class="subtext"> June 16, 2016 at 10:00pm </div> </div> <div class="header-item-button"> <gc-button name="addbutton" type="submit" text="+" on-buttonclick="{parent.addToCart}"></gc-button> </div> </div> </yield> <yield to="content"> <div class="content-info" each="{pmuList}"> <div class="label"> {label} </div> <div class="value"> {value} </div> </div> <yield> </gc-listview>', '', '', function(opts) {
'use strict';

var _this = this;

this.selected = false;
this.pmuList = [];

this.on('before-mount', function () {
  _this.parseData(opts.pmdata);
});

this.parseData = function (pmu) {
  var baseCost = void 0;
  var pmuInfo = void 0;
  pmu.forEach(function (lic) {
    if (lic.field_debit_type === 'Cost') {
      baseCost = parseFloat(lic.field_amount) / 100;
      _this.pmuList.push({ label: lic.field_debit_type, value: '$' + baseCost.toFixed(2) });
    } else if (lic.field_debit_type === 'Capacity') {
      _this.capacity = parseInt(lic.field_amount);
      _this.pmuList.push({ label: lic.field_debit_type, value: lic.field_amount });
    }
  });

  var fees = pmu.filter(function (lic) {
    if (lic.field_debit_type === 'Tax' || lic.field_debit_type === 'Fee') {
      return lic;
    }
  }).map(function (fee) {
    if (fee.field_fee_type === 'percent') {
      _this.pmuList.push({ label: fee.field_sub_type,
        value: '$' + (baseCost * (parseFloat(fee.field_amount) / 100)).toFixed(2) });
      return baseCost * (parseFloat(fee.field_amount) / 100);
    } else {
      _this.pmuList.push({ label: fee.field_sub_type,
        value: '$' + (parseFloat(fee.field_amount) / 100).toFixed(2) });
      return parseFloat(fee.field_amount) / 100;
    }
  }).reduce(function (prev, curr) {
    return prev + curr;
  });
  _this.total = baseCost + fees;

  _this.update({
    pmuList: _this.pmuList
  });
};

this.addToCart = function (e) {
  _this.selected = !_this.selected;
  _this.tags.list.update({
    selected: _this.selected
  });
};

this.on('mount', function () {
  _this.update({
    cost: '$' + _this.total.toFixed(2),
    capacity: _this.capacity,
    pmuList: _this.pmuList
  });
});
});
},{}]},{},[1]);
