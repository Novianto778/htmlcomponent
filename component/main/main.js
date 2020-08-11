import Awesomes from "./awesomes.js";
import Videos from "./videos.js";
import Story from "./story.js";

class Main extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <main>
      <main-awesomes></main-awesomes>
      <main-videos></main-videos>
      <main-story></main-story>
    </main>
    `;
  }
}

customElements.define("app-main", Main);
export default Main;
