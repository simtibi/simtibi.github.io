importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01a860d788aeac7e9d60.js",
    "revision": "348a5242207105c26ed7c02d1f7bfd03"
  },
  {
    "url": "/_nuxt/58559082aa4266c5f3ad.js",
    "revision": "97b32431f8523e0e139871ffbd3e6d59"
  },
  {
    "url": "/_nuxt/67f4b497c0c105b84e9f.js",
    "revision": "aa723652ce49700d1029c49c0ae2a10a"
  },
  {
    "url": "/_nuxt/c7a2de7bb205c81224c3.js",
    "revision": "8824050e4763abbdccc9369648e20ca4"
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
