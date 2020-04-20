importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/188c9e74804db0a3e0e2.js",
    "revision": "0d7a587101325a4a15549f3f1cbeee65"
  },
  {
    "url": "/_nuxt/222a034d117dcd92cacc.js",
    "revision": "d66dfa8a9c632d2e3cc8ab2c386d3e8a"
  },
  {
    "url": "/_nuxt/58559082aa4266c5f3ad.js",
    "revision": "97b32431f8523e0e139871ffbd3e6d59"
  },
  {
    "url": "/_nuxt/a6243951963937d5aad5.js",
    "revision": "9c23108342d7a0da4048086ec1e0ab32"
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
