importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0548eefdb0006b28845b.js",
    "revision": "8b830c99d7addb484f766a7e6989a42f"
  },
  {
    "url": "/_nuxt/58559082aa4266c5f3ad.js",
    "revision": "97b32431f8523e0e139871ffbd3e6d59"
  },
  {
    "url": "/_nuxt/9275df7f90cd29a7bc71.js",
    "revision": "8a875f1d5f2a0ac6a494e22064c13834"
  },
  {
    "url": "/_nuxt/961d177b4f9aeedca73c.js",
    "revision": "bc6e8b62806c06b438debc2970a4912a"
  }
], {
  "cacheId": "simtibi.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
