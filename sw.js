importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/683dcbf1adae38bbecd0.js",
    "revision": "44b7d9cb4d3ec347154e292a1652c185"
  },
  {
    "url": "/_nuxt/9e81e2ec1dc1f1ee06a2.js",
    "revision": "de0a4c4a07888958b5798a3e275b4930"
  },
  {
    "url": "/_nuxt/c0e1ae9ce49306cf96ba.js",
    "revision": "4810a08af5c59befe0178ebbf4401662"
  },
  {
    "url": "/_nuxt/e40a76d941f7e82ef3e7.js",
    "revision": "e3f8791fd80f0976fcfa0f8128961ade"
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
