const filesToCache = [
    './',
    './index.html',
    './manifest.json',
    './style.css',
    './view/home/home.html',
    './view/home/home.js',
    './view/scanner.html',
    './view/splash/splash.html',
    './app.js',
    './img/android-chrome-192x192.png',
    './favicon.ico',
    './js/angular.js',
    './js/angular-ui-router.js'
];

const staticCacheName = 'AGVcache';

self.addEventListener('install', event =>{
    console.log('service worker installing....');
    event.waitUntil(
        caches.open(staticCacheName)
        .then(cache => {
            return cache.addAll(filesToCache);
            console.log(cache);
        })
        .catch(err => {
            console.error('cache all failed ', err);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('service worker activating...');
});

self.addEventListener('fetch', event => {
    console.log('Fetching: ', event.request.url);
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if(response) {
                console.log('Found ', event.request.url, ' in cache');
            return response || fetch(event.request);
            }
            console.log('network request for ', event.request.url);
        })
        .catch(err => {
            console.log(err);
        })
    )
});
