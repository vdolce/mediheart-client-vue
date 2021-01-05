module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  devServer: {
    proxy: {
      "/api": {
        // target: "http://192.168.8.101:8000",
        target: `${process.env.VUE_APP_DEV_SERVER}` == 'undefined' || `${process.env.VUE_APP_DEV_SERVER}` == '' ? 'http://localhost:8000' : `${process.env.VUE_APP_DEV_SERVER}`,
        timeout: 6000,
        secure: false,
        ws:true,
        changeOrigin: true
      }
    }
  }
}