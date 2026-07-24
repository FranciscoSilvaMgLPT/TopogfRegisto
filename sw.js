self.addEventListener('fetch', (event) => {
  // Apenas permite que o service worker funcione de forma básica
  event.respondWith(fetch(event.request));
});