class Videos extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <div class="videos-component main-part">
    <div class="section-title">
      <h3>Videos</h3>
    </div>
    <section>
      <div class="row">
        <div class="col-left">
          <iframe
            class="videos-embed"
            src="https://www.youtube.com/embed/Zpo4CCYjDb4"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-right">
          <iframe
            class="videos-embed"
            src="https://www.youtube.com/embed/ojQbArbuN4E"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  </div>
    `
  }
}

customElements.define("main-videos", Videos)
export default Videos;