module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  devServer: {
    proxy: {
      "/api": {
        // target: "http://192.168.8.101:8000",
        target: "http://localhost:8000",
        timeout: 6000,
        secure: false,
        ws:true,
        changeOrigin: true
      }
    }
  }
}