<gc-card>
  <!-- NOTE TO SELF, THIS COMPONENT CAN AND SHOULD PROBABLY BE BROKEN DOWN -->
  <div class="card">
    <div class="face front">
      <div class="flex-container">
        <div class="card-title item">
          <h2>{opts.title} for {opts.capacity}</h2>
          <div class="card-venue">{opts.subtitle}</div>
          <div class="card-date">{opts.date}</div>
        </div>
        <div class="details item">
          <a href="#" onclick={toggleFlip}></a>
        </div>
      </div>
      <div class="item image">
        <img src="{opts.url}" />
      </div>
      <div class="card-pricing item">
        <hr>
        Estimated Total: ${opts.total}
      </div>
      <div class="button">
        <gc-button name="button" type="submit" text="Add To Cart" on-buttonclick="{addToCart}"></gc-button>
      </div>
    </div> <!-- FRONT -->
    <div class="face back">
      <div class="flex-container">
        <div class="card-title item">
          <h2>{opts.title} for {opts.capacity}</h2>
          <div class="card-venue">{opts.subtitle}</div>
          <div class="card-date">{opts.date}</div>
        </div>
        <div class="details item">
          <a href="#" onclick={toggleFlip}></a>
        </div>
      </div>
      <div class="flex-container breakdown">
        <!-- this will get refactored into loop -->
        <div class="label item">Capacity</div>
        <div class="value item">{opts.capacity}</div>
        
        <div class="label item">Cost</div>
        <div class="value item">${opts.base}</div>
        
        <div class="label item">Service Gratuity</div>
        <div class="value item">${opts.gratuity}</div>
        
        <div class="label item">Sales Tax</div>
        <div class="value item">${opts.tax}</div>
        
        <div class="label item">Service Charge</div>
        <div class="value item">${opts.service}</div>
        
        <div class="label item">Concierge Package</div>
        <div class="value item">${opts.package}</div>
        
        <div class="label item">Rate Guarantee</div>
        <div class="value item">${opts.guarantee}</div>
      </div>
      <div class="card-pricing item">
        <hr>
        Estimated Total: ${opts.total}
      </div>
      <div class="button">
        <gc-button name="buttonback" type="submit" text="Add To Cart" on-buttonclick="{addToCart}"></gc-button>
      </div>
    </div> <!-- BACK -->
  </div>
  <script type="babel">
    // TODO: FIX THIS QUICK AND DIRTY PATH HACK

    let button = this.tags.button;
    let buttonBack = this.tags.buttonback;
    this.selected = false;
    
    this.toggleFlip = (e) => {
      e.path[4].classList.toggle('flip');
    }
    
    this.addToCart = (e) => {
      e.path[4].classList.toggle('selected');
      this.selected = !this.selected;
      if (this.selected) {
        button.update({
          text: "Remove From Cart"
        });
        buttonBack.update({
          text: "Remove From Cart"
        });
      } else {
        button.update({
          text: "Add To Cart"
        });
        buttonBack.update({
          text: "Add To Cart"
        });
      }
    }
  </script>
</gc-card>