class Jumbotran extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero__element">
          <h1 class="hero__title">Restaurant App</h1>
          <p class="hero__subtitle">
            Cari Restaurant terbaikmu pada aplikasi Restaurant App
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('jumbotran-element', Jumbotran);
