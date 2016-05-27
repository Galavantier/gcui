<gc-badge>
  <div class="content">
      {base}
    <div class="badge">
      {badge}
    </div>
  </div>
  
  <script type="babel">
    // Set Mutable Attributes
    this.on('before-mount', () => {
      this.update({
        base: opts.base || '',
        badge: opts.badge || ''
      });
    });
  </script>
</gc-badge>