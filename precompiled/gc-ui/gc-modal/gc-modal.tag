<gc-modal>
  <div class="mask {show : showModal}" name="mask"></div>
  <div class="modal {show : showModal}" name="modal">
    <h2>{opts.title || ''}</h2>
    <gc-button class="close" name="closebtn" text="X" on-buttonclick="{close}"></gc-button>
    <div class="content">
      <yield></yield>
    </div>
  </div>
  <script type="babel">
    
    // Set Mutable Attributes
    this.on('before-mount', () => {
      this.modal.style.top = window.pageYOffset.toString() + "px";
      this.update({
        showModal: (opts.showmodal == "true" ? opts.showmodal : false),
      });
    });
    
    this.close = () => {
      this.update({
        showModal : false
      });
    }
    
  </script>
</gc-modal>