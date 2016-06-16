<gc-pmlist>
  <gc-listview name="list" hideheader="false">
    <yield to="title">
      <div class="header-info">
        <div class="header-item-pricing">
          <div class="price">
            {cost}
          </div>
          <div class="subtext">
            *estimated total
          </div>
        </div>
        <div class="header-item-photo">
          <img src="https://www.galavantier.com/sites/default/files/styles/venue_slider_image/public/XS-Nightclub-Las-Vegas-1.jpg" />
        </div>
        <div class="header-item-main">
          <div class="title">
            Dance Floor Table for {capacity}<br/>
            XS Nightclub
          </div>
          <div class="subtext">
          June 16, 2016 at 10:00pm
          </div>
        </div>
        
        <div class="header-item-button">
          <!-- used parent because button is technically child of gc-listview -->
          <gc-button name="addbutton" type="submit" text="+" on-buttonclick="{parent.addToCart}"></gc-button>
        </div>
      </div>
    </yield>
    <yield to="content">
      <div class="content-info" each={pmuList}>
        <div class="label"> {label} </div>
        <div class="value"> {value} </div>
      </div>
    <yield>
  </gc-listview>
  <script type="babel">
    this.selected = false;
    this.pmuList = [];
    
    this.on('before-mount', () => {
      this.parseData(opts.pmdata);
    });
    
    this.parseData = (pmu) => {
      let baseCost;
      let pmuInfo;
      pmu.forEach(lic => {
        if (lic.field_debit_type === 'Cost') {
          baseCost = parseFloat(lic.field_amount) / 100;
          this.pmuList.push({label: lic.field_debit_type, value: '$' + baseCost.toFixed(2)});
        } else if (lic.field_debit_type === 'Capacity') {
          this.capacity = parseInt(lic.field_amount);
          this.pmuList.push({label: lic.field_debit_type, value: lic.field_amount});
        }
      });
      
      let fees = pmu.filter(lic => {
        if (lic.field_debit_type === 'Tax' || lic.field_debit_type === 'Fee') {
          return lic;
        }
      }).map(fee => {
        if (fee.field_fee_type === 'percent') {
          this.pmuList.push({label: fee.field_sub_type, 
            value: '$' + (baseCost * (parseFloat(fee.field_amount) / 100)).toFixed(2)});
          return  baseCost * (parseFloat(fee.field_amount) / 100);
        } else {
          this.pmuList.push({label: fee.field_sub_type, 
            value: '$' + (parseFloat(fee.field_amount) / 100).toFixed(2)});
          return parseFloat(fee.field_amount) / 100;
        }
      }).reduce((prev, curr) => {
        return prev + curr;
      });
      this.total = baseCost + fees;
      
      this.update({
        pmuList : this.pmuList
      });
    }
    
    this.addToCart = (e) => {
      this.selected = !this.selected;
      this.tags.list.update({
        selected : this.selected
      });
    }
    
    this.on('mount', () => {
      this.update({
        cost : '$' + this.total.toFixed(2),
        capacity : this.capacity,
        pmuList : this.pmuList
      });
    });
  </script>
</gc-pmlist>