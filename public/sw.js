if (!self.define) {
  let e,
    s = {}
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script")
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (n, i) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href
    if (s[c]) return
    let t = {}
    const r = (e) => a(e, c),
      o = { module: { uri: c }, exports: t, require: r }
    s[c] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (i(...e), t))
  }
}
define(["./workbox-5f5b08d6"], function (e) {
  "use strict"
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/669-b4a56b7adf507d17.js",
          revision: "b4a56b7adf507d17",
        },
        {
          url: "/_next/static/chunks/framework-a87821de553db91d.js",
          revision: "a87821de553db91d",
        },
        {
          url: "/_next/static/chunks/main-e380ed469c5a0a07.js",
          revision: "e380ed469c5a0a07",
        },
        {
          url: "/_next/static/chunks/pages/_app-5f7dcc67ab314f9b.js",
          revision: "5f7dcc67ab314f9b",
        },
        {
          url: "/_next/static/chunks/pages/_error-0a004b8b8498208d.js",
          revision: "0a004b8b8498208d",
        },
        {
          url: "/_next/static/chunks/pages/checkout-a9a91c82fbd7e7d8.js",
          revision: "a9a91c82fbd7e7d8",
        },
        {
          url: "/_next/static/chunks/pages/index-6a5a2bc52401b215.js",
          revision: "6a5a2bc52401b215",
        },
        {
          url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",
          revision: "99442aec5788bccac9b2f0ead2afdd6b",
        },
        {
          url: "/_next/static/chunks/webpack-9b312e20a4e32339.js",
          revision: "9b312e20a4e32339",
        },
        {
          url: "/_next/static/css/103cc9467df2dceb.css",
          revision: "103cc9467df2dceb",
        },
        {
          url: "/_next/static/css/69c50ac1e77e3b93.css",
          revision: "69c50ac1e77e3b93",
        },
        {
          url: "/_next/static/css/f64bedc8050aaca3.css",
          revision: "f64bedc8050aaca3",
        },
        {
          url: "/_next/static/iHy8iNeQ4jTyAbeKcfPtN/_buildManifest.js",
          revision: "d4f614740b7cd09fba2c90b2fec34b04",
        },
        {
          url: "/_next/static/iHy8iNeQ4jTyAbeKcfPtN/_middlewareManifest.js",
          revision: "fb2823d66b3e778e04a3f681d0d2fb19",
        },
        {
          url: "/_next/static/iHy8iNeQ4jTyAbeKcfPtN/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/media/bt_add_to_cart.fb1463ea.svg",
          revision: "71145515323e376971e1802aa000b90e",
        },
        {
          url: "/_next/static/media/flechita.1c152575.svg",
          revision: "5d3b853e10a449f36ca6a3f9e8ea95a6",
        },
        {
          url: "/_next/static/media/icon_close.e791344b.png",
          revision: "e9796d47eb72b46bcaa1f27a41a0ff4b",
        },
        {
          url: "/_next/static/media/icon_menu.b70fc14a.svg",
          revision: "23ae2bbff5a3a0e37d238045dd321760",
        },
        {
          url: "/_next/static/media/icon_shopping_cart.665a6046.svg",
          revision: "cd2cb126a70d30fd14c927571fd1920e",
        },
        {
          url: "/_next/static/media/logo_yard_sale.ab5a49e4.svg",
          revision: "4db98c8925bc0ef833d3a32307652a83",
        },
        { url: "/favicon.ico", revision: "c30c7d42707a47a3f4591831641e50dc" },
        {
          url: "/icon-192x192.png",
          revision: "95ed92d6a4cc0e3385ed04d24b99b963",
        },
        {
          url: "/icon-256x256.png",
          revision: "a0430b3f0e45d3717ef46cd49d699348",
        },
        {
          url: "/icon-384x384.png",
          revision: "884e5cf09d30ef5b85a09a7e1783061b",
        },
        {
          url: "/icon-512x512.png",
          revision: "18e33e434dc7bb15b94b779873e2cdb3",
        },
        { url: "/manifest.json", revision: "360332f2c8c03250436f8a6ea47843bd" },
        { url: "/vercel.svg", revision: "4b4f1876502eb6721764637fe5c41702" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith("/api/")
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    )
})
