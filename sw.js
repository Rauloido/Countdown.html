const CACHE_NAME = 'countdown-cache-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './icons/icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((resp) => resp || fetch(event.request)));
});
const CACHE_NAME = 'countdown-cache-v1';
const ASSETS = [
  './Untitled-1.html',
  './manifest.json',
  './icons/icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});
