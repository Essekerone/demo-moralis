module.exports = {
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-typescript",
      {
        "allExtensions": true
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-proposal-object-rest-spread"
  ]
}
