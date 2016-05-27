<gc-nav>
  <header>
    <div class="navbar" name="navbar">
      <ul class="nav">
        <yield></yield>
      </ul>
    </div>
  </header>
  
  <script type="babel">
    // Add scroll listener
    this.on('mount', () => {
      window.addEventListener('scroll', this.scrolled);
    });
    
    this.scrolled = (e) => {
      if (window.pageYOffset > 40) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
    }
  </script>
</gc-nav>