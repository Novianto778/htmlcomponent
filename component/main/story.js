class Story extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="story-component main-part">
    <div class="section-title">
      <h3>Story</h3>
    </div>
    <section>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="image-container">
              <img id="img" src="images/review-img-1.png" alt="" />
            </div>
            <p id="name">Sarah Yang</p>
            <p id="job">International Model</p>
            <p id="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur rem molestiae quam natus, necessitatibus maiores,
              aliquam minus nihil neque eaque, adipisci pariatur officiis
              accusantium consectetur ab nisi odio! Totam, excepturi.
            </p>
            <div class="button-container">
              <button class="prev-btn">
                <i class="fa fa-chevron-left"></i>
              </button>
              <button class="next-btn">
                <i class="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
    `;
  }
}

customElements.define("main-story", Story);
export default Story;
