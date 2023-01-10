const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 後台網址
  devServer: {
    proxy: 'https://pay.zaza.one',
  },
});
