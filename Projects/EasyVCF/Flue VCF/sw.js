var cacheName = "v1.3";
var cacheList = [
    "/",
    "/index.html"
];

//Install
self.addEventListener("install", (event) => {
    //self.skipWaiting();
    console.log("SW installed successfully");
})

//Cache
self.addEventListener("install", (event) => {
    console.log("installed");
    event.waitUntil(caches.open(cacheName)
    .then((cache) => {
        console.log("cached");
        return cache.addAll(cacheList);
    }));
});

//fetch from cache only 
self.addEventListener("fetch", (event) => {
    event.respondWith(caches.match(event.request)
    .then((response) => {
        return response || fetch(event.request);
    }));
});

//stale-while-revalidate
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.open("v1.4").then((cache) => {
            cache.match(event.request).then((response) => {
                event.waitUntil(
                    fetch(event.request).then((networkResponse) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    })
                )
            });
        })
    );
});