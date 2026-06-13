const cache_version = "v2";
const cache_name = `escuelas-${cache_version}`;

const APP_SHELL = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/favicon.svg",
  "/offline.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cache_name).then((cache) => {
      cache.addAll(APP_SHELL);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((nombres) => {
      return Promise.all(
        nombres
          .filter((nombre) => nombre !== cache_name)
          .map((nombre) => caches.delete(nombre))
      );
    })
  );
  self.clients.claim();
});

const sePuedeCachear = (respuesta) =>
  respuesta &&
  respuesta.ok &&
  (respuesta.type === "basic" || respuesta.type === "cors");

const cacheFirst = async (request) => {
  const cacheado = await caches.match(request);

  if (cacheado) {
    return cacheado;
  }

  const respuesta = await fetch(request);

  if (sePuedeCachear(respuesta)) {
    const cache = await caches.open(cache_name);

    cache.put(request, respuesta.clone());
  }

  return respuesta;
};

const networkFirst = async (request) => {
  const cache = await caches.open(cache_name);

  try {
    const respuesta = await fetch(request);
    if (sePuedeCachear(respuesta)) {
      cache.put(request, respuesta.clone());
    }

    return respuesta;
  } catch (error) {
    const cacheado = await caches.match(request);

    if (cacheado) {
      return cacheado;
    }
    throw error;
  }
};

self.addEventListener("fetch", (event) => {
  const { request } = event;

  const url = new URL(request.url);

  if (request.method !== "GET") {
    return;
  }
  if (request.mode === "navigate") {
    event.respondWith(
      networkFirst(request).catch(
        async () =>
          (await caches.match("/index.html")) ||
          (await caches.match("/")) ||
          caches.match("/offline.html")
      )
    );
    return;
  }

  if (url.origin === "http://localhost:3000") {
    event.respondWith(networkFirst(request));
    return;
  }
  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(request));
    return;
  }
});
