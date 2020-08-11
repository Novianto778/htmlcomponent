import Awesomes from "./awesomes.js";
class Main extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <main>
      <main-awesomes></main-awesomes>
    </main>
    `;
  }
}

customElements.define("app-main", Main);
export default Main;
