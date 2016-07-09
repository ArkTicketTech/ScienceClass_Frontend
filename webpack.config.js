var webpack = require('webpack');
module.exports = {
  debug: false,
  entry: './js/main.js',
  output: {
    path: './dist',
    filename: 'base.bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style!css!postcss!less'}
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __API_ROOT__: JSON.stringify(process.env.API_ROOT || 'http://localhost:8080')
    })
  ],
  postcss: function () {
    return [require('autoprefixer'), require('precss')];
  }
}
