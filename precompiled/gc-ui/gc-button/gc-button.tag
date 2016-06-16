<gc-button>
  <button name="{opts.name || generic-button}" value="{opts.value}" type="{opts.type || button}"
    disabled="{disabled}" onclick={buttonClicked}>{text || 'Click Me'}</button>
  
  <script type="babel">
    this.on('before-mount', () => {
      this.update({
        disabled: (opts.disabled == "true" ? opts.disabled : false),
        text: opts.text || ''
      });
    });
    
    this.buttonClicked = (e) => {
      if (typeof(opts.onButtonclick) === 'function') {
        opts.onButtonclick(e);
      }
    }
  </script>  
</gc-button>