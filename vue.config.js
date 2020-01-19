module.exports = {
  "lintOnSave": false,
  productionSourceMap: false,
  "transpileDependencies": [
    "vuetify"
  ],
  /*devServer: {
    port: 7003,
    open: true,
    // 代理配置
    proxy: {
      '/api': {
        secure: false,
        // 解决跨域问题, 在本地虚拟一个服务器接受请求，
        // 并代理发送请求
        changeOrigin: true,
        // 目标host
        target: 'http://localhost:9010',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },*/
};

