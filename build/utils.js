var config = require('./config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// var basicLoaders = ['css-loader', 'postcss-loader'];
// var loadersMap = {
//   css: basicLoaders,
//   less: basicLoaders.push('less-loader'),
//   sass: basicLoaders.push('sass-loader?indentedSyntax=true'),
//   scss: basicLoaders.push('sass-loader')
// };

function cssLoaders(options) {
  options = options || {};
  function generateLoaders(loaders) {
    var sourceLoader = loaders.map(function(loader) {
      var extraParamChar;
      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?');
        extraParamChar = '&';
      } else {
        loader = loader + '-loader';
        extraParamChar = '?';
      }
      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '');
    }).join('!');

    // (which is the case during production build)
    if (options.extract) {
        return ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
    } else {
        return ['vue-style-loader', sourceLoader].join('!')
    }
  }

  // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
  return {
    css: generateLoaders(['css']),
    postcss: generateLoaders(['css']),
    less: generateLoaders(['css', 'less']),
    sass: generateLoaders(['css', 'sass?indentedSyntax']),
    scss: generateLoaders(['css', 'sass']),
    stylus: generateLoaders(['css', 'stylus']),
    styl: generateLoaders(['css', 'stylus'])
  };
}

exports.cssLoaders = cssLoaders;