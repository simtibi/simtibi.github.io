importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05a04dd496f7b7ddac83.js",
    "revision": "a5b4f3447f5698d31f5fed88021c663e"
  },
  {
    "url": "/_nuxt/2f2abd82d1cd734d6c94.js",
    "revision": "4dc50d3d65d60a3d5b0a928da45eddfa"
  },
  {
    "url": "/_nuxt/58559082aa4266c5f3ad.js",
    "revision": "97b32431f8523e0e139871ffbd3e6d59"
  },
  {
    "url": "/_nuxt/725bba4d2bd3f18e9db0.js",
    "revision": "5121f29cab923707d4ca82e20af310e9"
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
