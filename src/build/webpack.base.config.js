var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var config = require('./config');
var utils = require('./utils');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var projectRoot = path.resolve(__dirname, '../');
var env = process.env.NODE_ENV;
var isProduction = env === 'production';
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap);
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap);
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd;

var vendorName = 'vendor';
var entries = getEntries('./src/page/*.js');
var chunks = Object.keys(entries);
var webpackConfig = {
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: env === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.less', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '../src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.cssLoaders({
            sourceMap: isProduction
              ? config.build.productionSourceMap
              : config.dev.cssSourceMap,
            extract: env === 'production'
          }),
          transformToRequire: {
            video: 'src',
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '../src')
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env === 'production'
        ? config.build.env
        : config.dev.env
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: vendorName,
      minChunks: 3
    }),
  ]
};

chunks.forEach(function(chunk) {
  var config = {
    filename: chunk + '.html',
    template: './src/' + chunk + '.html',
    inject: isProduction,
    chunksSortMode: 'dependency'
  };
  if (chunk in entries) {
    config.chunks = [vendorName, chunk];
  }
  webpackConfig.plugins.push(new HtmlWebpackPlugin(config));
});

module.exports = webpackConfig;

// 获取所有入口文件
function getEntries(globPath) {
   var files = glob.sync(globPath);
   var entries = {};

   files.forEach(function(filepath) {
     var name = filepath.replace(/(.*\/)*([^.]+).*/ig, '$2');
     if (name && !entries[name]) {
       entries[name] = filepath;
     }
   });

   return entries;
}
