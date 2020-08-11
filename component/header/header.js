class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="header-component">
    <nav>
      <div class="container">
        <h1 class="header-logo" href="">Indonesia</h1>
        <ul class="menu-container">
          <li><a href="">Awesomes</a></li>
          <li><a href="">Video</a></li>
          <li><a href="">Story</a></li>
          <li><a href="">About Us</a></li>
        </ul>
        <div class="hamburger-menu">
          <i class="fa fa-bars fa-2x"></i>
        </div>
      </div>
    </nav>
  </header>
    `
  }
}

customElements.define("app-header", Header);
