class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div class="container">
        <div class="about-us-container">
          <h3>Indonesia</h3>
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            mollitia consequatur voluptatem, quas natus dolore?
          </p>
        </div>
        <div class="newsletter-container">
          <h3>Newsletter Subcription</h3>
          <input type="text">
          <button>Subscribe</button>
          <div class="icon">
            <i class="fa fa-instagram"></i>
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-youtube"></i>
          </div>
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define("app-footer", Footer)
export default Footer;