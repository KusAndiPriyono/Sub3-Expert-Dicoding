import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import '../styles/detail.scss';
import App from './views/app';
import './components/app-bar';
import './components/jumbotran-element';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

const Loader = {
  show() {
    const loader = document.querySelector('#loader');
    loader.classList.add('open');
  },

  hide() {
    const loader = document.querySelector('#loader');
    loader.classList.remove('open');
  },
};

window.addEventListener('hashchange', () => {
  app.renderPage();
  Loader.show();
  setInterval(() => {
    Loader.hide();
  }, 2000);
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
