<demo-results>
  <div class="search-results">
    <ul>
      <gc-pmlist each="{pmu, li in this.line_items}" pmdata="{pmu}"></gc-pmlist>
    </ul>
    
    <ul>
      <gc-listview hideheader="true"><yield to="title">Test Title</yield><yield to="content">Test Content</yield>
    </ul>
     <!-- <gc-card title="Stage Table" capacity="4" subtitle="Drai's Nightclub" date="04/27/2016"
    url="https://www.galavantier.com/sites/default/files/DNC9.jpg" total="2891.00"
    base="2000.00" gratuity="400.00 (20%)" tax="163.00 (8.15%)" service="80.00 (4%)" package="199.00"
    guarantee="49.00"></gc-card> -->
  </div>
  
  <script type="babel">
    this.on('before-mount', () => {
      opts.callback(this);
    });
    this.on('mount', () => {
      this.on('data_loaded', (line_items) => {
        this.line_items = line_items;
        this.update(this.line_items);
      });
    });
    
  </script>
</demo-results>