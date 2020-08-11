class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="jumbotron">
      <h1 class="jumbotron-title">Welcome To Indonesia</h1>
      <button class="btn">Explore</button>
    </div>
    `;
  }
}

customElements.define("app-jumbotron", Jumbotron);
export default Jumbotron;
