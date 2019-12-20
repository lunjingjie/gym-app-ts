module.exports = {
  "lintOnSave": false,
  "pwa": {
    "name": "CSDN",
    "themeColor": "#4DBA87",
    "msTileColor": "#000000",
    "appleMobileWebAppCapable": "yes",
    "appleMobileWebAppStatusBarStyle": "black",
    "workboxPluginMode": "InjectManifest",
    "workboxOptions": {
      "swSrc": "./public/registerServiceWorker.ts",
      "importWorkboxFrom": "disabled",
      "exclude": [
        {},
        {},
        {}
      ]
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}