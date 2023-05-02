class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="loader">
      <div class="loader"></div>
    </div>
    <div class="app-bar">
    <div class="app-bar__menu">
        <button id="hamburgerButton">☰</button>
      </div>
      <div class="app-bar__brand">
        <h1>Restaurant Catalogue</h1>
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
          <li><a href="#/home">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li>
            <a
              href="https://www.instagram.com/freedom.tradeitgg/?next=%2F&hl=id"
              >About Us</a
            >
          </li>
        </ul>
      </nav>
    </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
