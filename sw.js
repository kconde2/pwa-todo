/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */


importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.setConfig({
  debug: false
});

workbox.core.skipWaiting();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "db.example.json",
    "revision": "1bc5c2219b4237520102317f194f04a4"
  },
  {
    "url": "db.json",
    "revision": "bb7fd994ec21d94e73098097c50ab42b"
  },
  {
    "url": "index.html",
    "revision": "d67e3d67f7184fb14cf07453d7ca3321"
  },
  {
    "url": "js/app.js",
    "revision": "2f2af49483b3be03d0f6bf42042460b4"
  },
  {
    "url": "js/components/TodoItem/TodoItem.js",
    "revision": "aa06a2590af98282b5bc3a380e11a97e"
  },
  {
    "url": "js/services/connection.js",
    "revision": "67ed6382c7b486f492dbb7e6417c29e5"
  },
  {
    "url": "js/services/db.js",
    "revision": "28ca16e2d7e02b1964a528ef74bb137a"
  },
  {
    "url": "js/services/utils.js",
    "revision": "435ba73d84b2f5bab1faefec9d679057"
  },
  {
    "url": "manifest.json",
    "revision": "24a9605e527b740c47763bd52efba2ae"
  },
  {
    "url": "node_modules/idb/build/cjs/async-iterators.js",
    "revision": "b176eb26e432b2fe568b9b25b73378de"
  },
  {
    "url": "node_modules/idb/build/cjs/chunk.js",
    "revision": "b122de2064c0c38b6db060862355a64d"
  },
  {
    "url": "node_modules/idb/build/cjs/index.js",
    "revision": "4225c7b263c894247bd402ea580b9f23"
  },
  {
    "url": "node_modules/idb/build/esm/async-iterators.js",
    "revision": "7545047ce7bf014ff279593d6a5638ac"
  },
  {
    "url": "node_modules/idb/build/esm/chunk.js",
    "revision": "c425e70eed99680fd3f14b1f70580f8a"
  },
  {
    "url": "node_modules/idb/build/esm/index.js",
    "revision": "1744c78524339333fc1a296a8d11baf9"
  },
  {
    "url": "node_modules/idb/build/iife/index-min.js",
    "revision": "cf188533af67d7a27e45cd74bc4d2199"
  },
  {
    "url": "node_modules/idb/build/iife/with-async-ittr-min.js",
    "revision": "76e830e6efc03795ec70efb0fa3c6773"
  },
  {
    "url": "node_modules/idb/package.json",
    "revision": "1299b599c4cf4fbc2c5fcd2acabce6bc"
  },
  {
    "url": "node_modules/idb/rollup.config.js",
    "revision": "2a0469f09378735c3451f73471608a6b"
  },
  {
    "url": "node_modules/idb/test/index.html",
    "revision": "a29b5a1864a5b83881153a8d8c2a33d3"
  },
  {
    "url": "node_modules/idb/test/tsconfig.json",
    "revision": "b06b82a6447801e1f905e6bc2530aa21"
  },
  {
    "url": "node_modules/idb/tsconfig.json",
    "revision": "a2eb039d7cc58fb6ce93eb2525374cd7"
  },
  {
    "url": "node_modules/idb/tslint.json",
    "revision": "e1ea7461185b802f2fdf7a5be0660eaf"
  },
  {
    "url": "node_modules/idb/with-async-ittr-cjs.js",
    "revision": "78790be05afaaec9b30440a4ee831383"
  },
  {
    "url": "node_modules/idb/with-async-ittr.js",
    "revision": "2834dc6a281fb7a011cf518dd1772e54"
  },
  {
    "url": "node_modules/lit-element/lib/css-tag.js",
    "revision": "88a7776dc45a2f5f5a2a99b144d49075"
  },
  {
    "url": "node_modules/lit-element/lib/decorators.js",
    "revision": "aa875a7b763b574cfce40b684b733eb3"
  },
  {
    "url": "node_modules/lit-element/lib/updating-element.js",
    "revision": "2276cf333bd0a08bd8ae34783f36aa4c"
  },
  {
    "url": "node_modules/lit-element/lit-element.js",
    "revision": "72433c8e2d5d81583b7af68bad4822d6"
  },
  {
    "url": "node_modules/lit-element/package.json",
    "revision": "97f2f7ddd25141ec60f1bd87ace027c0"
  },
  {
    "url": "node_modules/lit-html/directives/async-append.js",
    "revision": "20e3f940ebfcbf1fd1c3ff930140478c"
  },
  {
    "url": "node_modules/lit-html/directives/async-replace.js",
    "revision": "7732ef7434ee0095decce950f416bff8"
  },
  {
    "url": "node_modules/lit-html/directives/cache.js",
    "revision": "8aa0c9b2096899239e163a0727362c6f"
  },
  {
    "url": "node_modules/lit-html/directives/class-map.js",
    "revision": "13fd443f5b030395790886e21fa7ef6b"
  },
  {
    "url": "node_modules/lit-html/directives/guard.js",
    "revision": "ad09d68d2035c335d3be91e78a390ec7"
  },
  {
    "url": "node_modules/lit-html/directives/if-defined.js",
    "revision": "0b45cc46b88bc39118f14369e7f9141e"
  },
  {
    "url": "node_modules/lit-html/directives/repeat.js",
    "revision": "a3ed38e564c97093741ed7fe6ab53d1d"
  },
  {
    "url": "node_modules/lit-html/directives/style-map.js",
    "revision": "52f71857303971de342219f86e1be27c"
  },
  {
    "url": "node_modules/lit-html/directives/unsafe-html.js",
    "revision": "ff818bc767837badf6765e48c3903154"
  },
  {
    "url": "node_modules/lit-html/directives/until.js",
    "revision": "ee1eb6e410fa9920673890aece12b517"
  },
  {
    "url": "node_modules/lit-html/lib/async-append.js",
    "revision": "e72ae444630172678a2ce51dbf52beb6"
  },
  {
    "url": "node_modules/lit-html/lib/async-replace.js",
    "revision": "08d3c1a2322c52e2689758fb0bd6c912"
  },
  {
    "url": "node_modules/lit-html/lib/default-template-processor.js",
    "revision": "e96dc25c4a6ab961d383723b243bacb1"
  },
  {
    "url": "node_modules/lit-html/lib/directive.js",
    "revision": "1d0d4dd4117349ba63339aee90963f44"
  },
  {
    "url": "node_modules/lit-html/lib/dom.js",
    "revision": "45322140ad6ad2789e8ebeb95eec59f3"
  },
  {
    "url": "node_modules/lit-html/lib/lit-extended.js",
    "revision": "d24daec20065370d69db1eea3ca14252"
  },
  {
    "url": "node_modules/lit-html/lib/modify-template.js",
    "revision": "19cd46629fac6601423169f538f5b5ba"
  },
  {
    "url": "node_modules/lit-html/lib/part.js",
    "revision": "ffd11b35ced31f865d8381f3585892df"
  },
  {
    "url": "node_modules/lit-html/lib/parts.js",
    "revision": "ffdc54cd7f09acb476c53d96c99b0a99"
  },
  {
    "url": "node_modules/lit-html/lib/render-options.js",
    "revision": "b135ca8c29cdf7d1e3d0761b692e1663"
  },
  {
    "url": "node_modules/lit-html/lib/render.js",
    "revision": "e22a39942d0d752076163c996cf8fc56"
  },
  {
    "url": "node_modules/lit-html/lib/repeat.js",
    "revision": "8472ee5fdd935aa72259321a05f9471f"
  },
  {
    "url": "node_modules/lit-html/lib/shady-render.js",
    "revision": "6f7e199cd1cf7c2ae9bf6eba7a8c12c7"
  },
  {
    "url": "node_modules/lit-html/lib/template-factory.js",
    "revision": "dcdc52b73ba1f464ece3387ab1ce1b8d"
  },
  {
    "url": "node_modules/lit-html/lib/template-instance.js",
    "revision": "6c9495fce172762a92590b384bb4d3c3"
  },
  {
    "url": "node_modules/lit-html/lib/template-processor.js",
    "revision": "da7fb57119a10d43468d581552ceee39"
  },
  {
    "url": "node_modules/lit-html/lib/template-result.js",
    "revision": "692e28fbf475a700fcb68ebecfe37741"
  },
  {
    "url": "node_modules/lit-html/lib/template.js",
    "revision": "aa4ec6a7762d526e15f7c34b4e06c9c4"
  },
  {
    "url": "node_modules/lit-html/lib/unsafe-html.js",
    "revision": "68d76f033adbaf4fea06ad13cf0980ce"
  },
  {
    "url": "node_modules/lit-html/lib/until.js",
    "revision": "5c149fcee4354ebda36af2e9bb63a79a"
  },
  {
    "url": "node_modules/lit-html/lit-html.js",
    "revision": "b0f1b842794a5026a27829356f2a26ce"
  },
  {
    "url": "node_modules/lit-html/package.json",
    "revision": "e44d41cd250a22a29b02f7d38006166c"
  },
  {
    "url": "node_modules/lit-html/polyfills/template_polyfill.js",
    "revision": "0f0860f25b55c688dd6f1bd5685a824c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
