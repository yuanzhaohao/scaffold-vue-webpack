var path = require('path');

module.exports = {
  dev: {
    env: {
      NODE_ENV: '"development"'
    },
    port: 8777,
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    cssSourceMap: true,
  },

  build: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    productionSourceMap: false,
  }
};
