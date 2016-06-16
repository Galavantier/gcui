<demo-search>
    <gc-nav><li>test</li><li>test2</li><li><a href="#">link</a></li><li><gc-badge base="Shopping Cart" badge="42" /></li>
    </gc-nav>
    <demo-form></demo-form>
    <div><gc-loader height="172" width="164" speed=".9" type="bar"></gc-loader></div>
    <demo-results callback={tagCallback}></demo-results>
  <script type="babel">
    this.tagCallback = (resultsTag) => {
      
      let request = new XMLHttpRequest();
      request.open('GET', 'results.json', true);
      request.onload = () => {
        if (request.status === 200) {
          let data = JSON.parse(request.responseText);
          resultsTag.trigger('data_loaded', data.line_items);
        }
      }
      request.send();
    }
  </script>
</demo-search>