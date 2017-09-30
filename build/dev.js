var path = require('path');
var express = require('express');
var webpack = require('webpack');

var config = require('./config');
var webpackConfig = require('./webpack.dev.config');

var port = process.env.PORT || config.dev.port;
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);

var server = express();
var compiler = webpack(webpackConfig);

server.use(staticPath, express.static('./static'));
server.use(require('connect-history-api-fallback')());
server.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
}));
server.use(require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
}));

server.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  var uri = 'http://localhost:' + port;
  console.log('Listening at ' + uri + '\n');
});
