<gc-inputlist>
  <div if="{multiselect}" class="tags" name="region">
  </div>
    <gc-input placeholder="{opts.placeholder}" name="input" on-valuechange="{updateList}"></gc-input>
    <ul id="search-results" class="list hidden"></ul>
  <script type="babel">
    //riot.observable(this);
    
    
    // Make sure there's a list to be used
    this.on('before-mount', () => {
      if (!opts.list) {
        console.error('opts.list not found. Check your opts or use gc-input instead.');
        this.unmount(true);
      } else if (!opts.list.every(object => object.hasOwnProperty(opts.key) || typeof object === 'string')) {
        // GTFO.
        console.error('You did a bad thing.');
        console.error('gc-inputlist expects an array of strings, or an array of objects with a valid opts.key passed in.');
        this.unmount(true);
      }
      
      // Is multiselect on?
      this.update({
        multiselect: (opts.multiselect == "true" ? true : false)
      });
    });
  
    this.on('mount', () => {
      // Add Listeners
      this.ul = document.getElementById('search-results');
      this.ul.addEventListener('click', this.clicked);
      this.region.addEventListener('click', this.clicked);
      // Make a searchable list
      if (typeof opts.list[0] === 'string') {
        this.searchableList = opts.list;
      } else {
        this.searchableList = opts.list.map(object => {
          return object[opts.key];
        });
      }
      // Make the list unique.
      this.searchableList = Array.from(new Set(this.searchableList));
      // Update default value of input
      this.tags.input.update({
        value: this.searchableList[parseInt(opts.defaultvalue) || 0]
      });
      // Set Width -- this should definitely get changed later
      this.region.style.width = this.input.firstChild.clientWidth;
    });

    // @TODO Tab?
    this.updateList = (value, tag, keyCode) => {
      if (this.multiselect === true) {
        if (keyCode === 13) {
          this.addTag(value);
        } else if (keyCode === 8 && value.length === 0) {
          this.deleteTag();
        } else if (document.querySelector('.tags .tag')) {
          document.querySelector('.tags .tag:last-of-type').classList.remove('highlight');
        }
      }
      
      if (value) {
        let searchableList = this.searchableList;
        let results = searchableList.filter(word => {
          return word.toLowerCase().indexOf(value.toLowerCase()) > -1;
        });

        if (results.length > 0 && value.length > 0) {
          this.updateView(value, results);
        } else {
          this.clearResults();
        }
        
      // @TODO placeholder?
      } else {
        this.clearResults();
      }
    }
    
    this.clearResults = () => {
      this.ul.className = "term-list hidden";
      this.ul.innerHTML = '';
    }
    
    // @TODO make rgxTerm match case with original
    this.updateView = (searchTerm, results) => {
      this.clearResults();
      for (var i = 0; i < results.length
        && i < (!isNaN(parseInt(opts.listlimit)) ? parseInt(opts.listlimit) : 5); i++) {
        let li = document.createElement('li'),
          rgxTerm = new RegExp(searchTerm, 'i'),
          result = results[i].replace(rgxTerm, '<strong>' + searchTerm + '</strong>');
        li.innerHTML = result;
        this.ul.appendChild(li);
        if (this.ul.className !== "term-list") {
          this.ul.className = "term-list";
        }
      }
    }
    
    // LI element clicked
    this.clicked = (e) => {
      if (e.target.tagName === 'LI') {
        this.tags.input.update({value : e.target.innerText});
        this.input.querySelector('input').focus();
        this.clearResults();
      } else if (e.toElement.classList.contains('tag')) {
        this.deleteTag(e.toElement);
      }
    }
    
    this.testeroo = () => {
      console.log('testeroo!');
    }
    
    this.addTag = (value) => {
      if (value.length > 0 && value !== ' ') {
        this.region.insertAdjacentHTML('beforeend', '<div class="tag">' + value + '</div>');
      }
    }
    
    // @TODO consider refactoring
    this.deleteTag = (el) => {
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
    }
  </script>
</gc-inputlist>