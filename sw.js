const CACHE = 'sahayak-store-v1';
const ASSETS = ['/', '/index.html', '/404.html', '/manifest.json', '/robots.txt', '/sitemap.xml'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => { self.clients.claim(); });
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request).catch(() => caches.match('/404.html'))));
});
