const cacheName = 'LennyFacesPapa';
const cacheAssets = [
  '/',
  'https://lennyfacepapa.me/lennyfaces33_version_01.css',
  'https://lennyfacepapa.me/cookie33_version_01.js',
  'https://lennyfacepapa.me/copy33_version_01.js',
  'https://lennyfacepapa.me/lenny-faces/angry/'
];


self.addEventListener('install', e => {
  console.log('Service Worker: installed');
  e.waitUntil(
    caches.open(cacheName)
    .then(cache => {
      console.log('Service Worker: Caching Files');
      cache.addAll(cacheAssets);
    })
    .then(() => self.skipWaiting())
  );
});


self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});


self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});