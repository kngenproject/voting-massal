// sw.js — VoteKu PWA Service Worker
const CACHE_NAME   = "voteku-v3";
const STATIC_CACHE = "voteku-static-v3";
const FONT_CACHE   = "voteku-fonts-v3";

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon/icon-192.png",
  "./icon/icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(STATIC_CACHE).then((cache) =>
      Promise.allSettled(
        PRECACHE_URLS.map((url) => cache.add(url).catch(() => console.warn("[SW] Gagal cache:", url)))
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  const VALID = [CACHE_NAME, STATIC_CACHE, FONT_CACHE];
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => !VALID.includes(k)).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  const { request } = e;
  const url = new URL(request.url);

  if (request.method !== "GET") return;
  if (url.hostname.includes("firestore.googleapis.com")) return;
  if (url.hostname.includes("firebaseio.com")) return;
  if (url.hostname.includes("googleapis.com") && !url.hostname.includes("fonts")) return;
  if (url.hostname.includes("gstatic.com") && !url.hostname.includes("fonts")) return;

  if (url.hostname.includes("fonts.googleapis.com") || url.hostname.includes("fonts.gstatic.com")) {
    e.respondWith(cacheFirst(request, FONT_CACHE));
    return;
  }

  if (request.mode === "navigate") {
    e.respondWith(
      fetch(request)
        .then((res) => {
          const clone = res.clone();
          caches.open(STATIC_CACHE).then((c) => c.put(request, clone));
          return res;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match("./index.html"))
        )
    );
    return;
  }

  if (url.origin === self.location.origin) {
    e.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  e.respondWith(networkFirst(request, CACHE_NAME));
});

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const res = await fetch(request);
    if (res.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, res.clone());
    }
    return res;
  } catch {
    return new Response("Offline.", { status: 503 });
  }
}

async function networkFirst(request, cacheName) {
  try {
    const res = await fetch(request);
    if (res.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, res.clone());
    }
    return res;
  } catch {
    const cached = await caches.match(request);
    return cached || new Response("Offline.", { status: 503 });
  }
}

self.addEventListener("push", (e) => {
  if (!e.data) return;
  const data = e.data.json();
  e.waitUntil(
    self.registration.showNotification(data.title || "VoteKu", {
      body: data.body || "Ada pembaruan polling!",
      icon: "./icon/icon-192.png",
      badge: "./icon/icon-192.png",
      data: { url: data.url || "./" },
    })
  );
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: "window" }).then((cs) => {
      const target = e.notification.data?.url || "./";
      const match = cs.find((c) => c.url === target && "focus" in c);
      return match ? match.focus() : clients.openWindow(target);
    })
  );
});
