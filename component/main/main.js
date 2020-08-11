import Awesomes from "./awesomes.js";
import Videos from "./videos.js";
class Main extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <main>
      <main-awesomes></main-awesomes>
      <main-videos></main-videos>
    </main>
    `;
  }
}

customElements.define("app-main", Main);
export default Main;
