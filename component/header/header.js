class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
    `
  }
}

customElements.define("app-header", Header);
