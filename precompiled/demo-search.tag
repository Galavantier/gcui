<demo-search>
  <gc-nav name="navbar">
    <li><gc-badge base="Revew Your Quote" badge="1" /></li>
    <li><a href="/user/logout">Logout</a></li>
  </gc-nav>
  </gc-nav>
  <demo-form></demo-form>
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