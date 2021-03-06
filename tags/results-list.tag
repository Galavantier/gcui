<results-list>
  <h1>Results</h1>
  <ul>
    <li each={p in opts.people}>{p.first} {p.last}</li>
  </ul>
  
  <script>
    this.on('mount', function() {
      console.log('event fired')
      opts.callback(this)
    })
    
    this.on('data_loaded', function(peeps) {
      opts.people = peeps
      this.update()
    })
  </script>
</results-list>