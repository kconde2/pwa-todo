module.exports = {
  "globDirectory": "./",
  "skipWaiting": true,
  "globPatterns": [
    "**/*.{json,jpg,png,html,js,css}",
    "./node_modules/**/*.js",
  ],
  "globIgnores": [
    "images/**/*",
    "package*",
    "yarn.lock",
    "README.md",
    "workbox-config.js"
  ],
  "swDest": "sw.js"
};
