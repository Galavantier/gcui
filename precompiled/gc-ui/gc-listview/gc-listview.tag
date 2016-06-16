<gc-listview>
  <li class="{selected : selected}">
    <input type="checkbox" checked>
    <!-- <i></i> -->
    <h2 class="{hide : hideheader}"><yield from="title" /></h2>
    <div class="content">
      <yield from="content" />
    </div>
  </li>
  <script type="babel">
    this.on('before-mount', () => {
      this.update({
        hideheader: (opts.hideheader == "true" ? opts.hideheader : false)
      });
    });
  </script>
</gc-listview>