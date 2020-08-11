class Awesomes extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <div class="awesomes-component main-part">
        <section class="destination">
          <div class="section-title">
            <h2>Awesomes</h2>
          </div>
          <div class="section-content">
            <div class="row">
              <div class="col-left">
                <h3>Indonesia Destination</h3>
                <article>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dignissimos, doloremque aspernatur. Placeat, unde nesciunt
                    pariatur laudantium excepturi laboriosam perspiciatis minima
                    cum voluptatum in fuga harum animi ab, porro, iusto maxime.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum impedit reprehenderit quasi eius vel voluptate?
                  </p>
                </article>
              </div>
              <div class="col-right">
                <img src="images/destination.jpg" alt="" />
                <p>Nusapeninda, Bali</p>
              </div>
            </div>
          </div>
        </section>
        <section class="food">
          <div class="section-content">
            <div class="row">
              <div class="col-left">
                <img src="images/food.jpg" alt="" />
                <p>Ayam dan Ikan Bakar Sambal Merah</p>
              </div>
              <div class="col-right">
                <h3>Indonesia Food</h3>
                <article>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cumque maiores, ipsa pariatur at maxime nulla odio
                    praesentium similique dolore, veniam obcaecati, ullam
                    ratione harum qui doloribus distinctio! Corporis,
                    dignissimos provident?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Distinctio sint iste neque eos! Nisi consectetur officia
                    voluptate quae aut. Fugiat rerum quia aliquam deserunt
                    blanditiis.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section class="culture">
          <div class="section-content">
            <div class="row">
              <div class="col-left">
                <h3>Indonesia Culture</h3>
                <article>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dignissimos, doloremque aspernatur. Placeat, unde nesciunt
                    pariatur laudantium excepturi laboriosam perspiciatis minima
                    cum voluptatum in fuga harum animi ab, porro, iusto maxime.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum impedit reprehenderit quasi eius vel voluptate?
                  </p>
                </article>
              </div>
              <div class="col-right">
                <img src="images/culture.jpg" alt="" />
                <p>Tari Bali</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    `
  }
}

customElements.define("main-awesomes", Awesomes)
export default Awesomes;