var path = require('path');
var express = require('express');
var webpack = require('webpack');

var config = require('./config');
var webpackConfig = require('./webpack.dev.config');

var port = process.env.PORT || config.dev.port;

var server = express();
var compiler = webpack(webpackConfig);

server.use('/static', express.static(path.resolve(__dirname, '../static')));
server.use(require('connect-history-api-fallback')());
server.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
}));
server.use(require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
}));
console.log(compiler.outputPath);
// 路由
// server.get('/*.html$/', function(req, res, next) {
//   var page = req.params[0]
//     ? req.params[0] + '.html'
//     : 'index.html';
//   var filepath = path.join(compiler.outputPath, page);
//
//   console.log(filepath);
//   // 使用webpack提供的outputFileSystem
//   compiler.outputFileSystem.readFile(filepath, function(err, result) {
//     if (err) {
//       return next(err);
//     }
//     res.set('content-type', 'text/html');
//     res.send(result);
//     res.end();
//   });
// });

server.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  var uri = 'http://localhost:' + port;
  console.log('Listening at ' + uri + '\n');
});
