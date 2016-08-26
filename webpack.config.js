var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true)
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel',
        query: {
          "presets": ["es2015", "react"]
        }
      }
    ]
  }
};

module.exports = config;
