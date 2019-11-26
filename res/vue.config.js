module.exports = {
  publicPath: '',
  indexPath: "index.html",
  outputDir: "../www",
  assetsDir: '',
  lintOnSave: false,
  configureWebpack: {
    devtool: 'eval-source-map'
  },
  transpileDependencies: [
    "vuetify"
  ],
  productionSourceMap: false
}