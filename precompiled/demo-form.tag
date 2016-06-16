<demo-form>
  <div class="form-container">
    <div class="dates">
      <gc-input name="startdate" placeholder="Start Date" pikaday="true" label="Start Date" on-focuschange="{getValue}"></gc-input>
      <gc-input name="enddate" placeholder="Start Date" pikaday="true" label="End Date" on-focuschange="{getValue}"></gc-input>
    </div>
    <div class="flex-container">
      <div class="item">
        <gc-inputlist name="testeroo" placeholder="test" list="{this.dummyData}" key="venue" multiselect="true"></gc-inputlist>
      </div>
      <div class="item">
        <gc-input name="type" on-valuechange="{error}" placeholder="Product Type"></gc-input>
      </div>
      <div class="item">
        <gc-input name="venue" on-valuechange="{updateName}" on-focuschange="{updateName}"
          placeholder="Event"></gc-input>
      </div>
      <div class="item">
        <gc-input name="title" placeholder="Product Title"></gc-input>
      </div>
    </div>
    <div class="button">
      <gc-button name="button" type="submit" text="Search" on-buttonclick="{onSearchPmus}"></gc-button>
    </div>
  </div>
  <gc-modal name="mainModal" title="Test">Oh, hello there</gc-modal>
  
  <script type="babel">
    this.cityArray = ['Las Vegas', 'Los Angeles', 'Miami', 'New York', 'San Diego', 'Scottsdale'];
    this.dummyData = [
      {"venue":"Drai's Nightclub", "city":"Las Vegas", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"},
      {"venue":"Drai's Nightclub", "city":"Las Vegas", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"},
      {"venue":"XS Nightclub", "city":"Las Vegas", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"},
      {"venue":"LA Club", "city":"Los Angeles", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"},
      {"venue":"Fontainebleau", "city":"Miami", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"},
      {"venue":"Fontainebleau", "city":"Miami", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"},
      {"venue":"Blop Blap", "city":"New York", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"},
      {"venue":"Desert Nightlife", "city":"Scottsdale", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"},
      {"venue":"Scorpion Club", "city":"Scottsdale", "capacity":"6", "table": "Back Wall Table", "total": "2891.00", "base": "2000.00", "gratuity": "400.00 (20%)"}
    ];
    
    this.getValue = (value) => {
      console.log(value);
    }

    this.error = (value, tag) => {
      //- if (value) {
      //-   tag.error = 'Sorry, I don\'t do anything.';
      //- } else {
      //-   tag.error = null;
      //- }
    }
    
    this.onSearchPmus = (e) => {
      let test = this.tags.testeroo.getVal.call();
      if (test == 'show modal') {
        this.tags.mainModal.update ({
          showModal : true
        });
      }
    }
    
  

  </script>
</demo-form>