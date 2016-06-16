<gc-input>
  <div class="{input-content: true, error: error}">
    <label name="label">{opts.label || ''}
      <input class="{error: error}" type="{opts.type || 'text'}" name="{opts.name || 'generic-input'}"
        placeholder="{opts.placeholder}" disabled="{disabled}" value="{value}" required="{required}" 
        onkeyup={valueChanged} />
    </label>
    <div class="error-text" show={this.error}> {this.error} </div>
  </div>
  
  <script type="babel">
    
    // Set Mutable Attributes
    this.on('before-mount', () => {
      this.update({
        pikaday: (opts.pikaday == "true" ? opts.pikaday : false),
        value: opts.value || '',
        disabled: (opts.disabled == "true" ? opts.disabled : false),
        required: opts.required || false,
        name: opts.name || 'generic-input'
      });
    });
    
    // Add listeners
    this.on('mount', () => {
      let name = opts.name || 'generic-input';
      this[name].addEventListener('focus',this.focusChanged);
      this[name].addEventListener('blur',this.focusChanged);
      
      if (this.pikaday) {
        let picker = new Pikaday({ 
          field: this[name]
        });
        
      }
    });
    
    // Input Value Changed
    this.valueChanged = (e) => {
      this.update({
        value: e.target.value
      });
      
      if (typeof(opts.onValuechange) === 'function') {
        opts.onValuechange(e.target.value, this, e.keyCode);
      }
    }
    
    // Focus Changed
    this.focusChanged = (e) => {
      if (this.disabled) { return false; }
      this.update({
        value: e.target.value,
      });
      if (typeof(opts.onFocuschange) === 'function') {
        opts.onFocuschange(e.target.value, this);
      }
    }
  </script>
</gc-input>