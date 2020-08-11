class Profile extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <aside>
      <div class="row">
        <div class="profile">
          <div class="profile-img">
            <img src="images/novianto.jpg" width="150" height="200" alt="" />
          </div>
          <p>Novianto</p>
          <p>17 Tahun</p>
          <p>Lubuklinggau, Sumsel</p>
          <a href="https://github.com/Novianto778"><button>Github</button></a>
          <div class="box1"></div>
          <div class="box2"></div>
        </div>
      </div>
    </aside>
    `;
  }
}

customElements.define("aside-profile", Profile);
export default Profile;
