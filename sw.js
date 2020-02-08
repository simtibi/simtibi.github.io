importScripts('/simtibi.github.io/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/simtibi.github.io/_nuxt/87eb68dfaee298c1f4e8.js",
    "revision": "d6cb4952a547491e54731b2f9303558b"
  },
  {
    "url": "/simtibi.github.io/_nuxt/9e81e2ec1dc1f1ee06a2.js",
    "revision": "de0a4c4a07888958b5798a3e275b4930"
  },
  {
    "url": "/simtibi.github.io/_nuxt/bed26a910be2e8f90789.js",
    "revision": "1c6dbadcce7333d7f3d7db151f13f41e"
  },
  {
    "url": "/simtibi.github.io/_nuxt/c0e1ae9ce49306cf96ba.js",
    "revision": "4810a08af5c59befe0178ebbf4401662"
  }
], {
  "cacheId": "simtibi.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/simtibi.github.io/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/simtibi.github.io/.*'), workbox.strategies.networkFirst({}), 'GET')
