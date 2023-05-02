this.addEventListener('install', () => {
  console.log('installing service worker....');
});

this.addEventListener('activate', () => {
  console.log('Activating service worker....');
});

this.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));
});
