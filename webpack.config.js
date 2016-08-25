'use strict';
// const webpack = require('webpack');
// const debug = process.env.NODE_ENV !== "production";

module.exports = {
  entry: 'entry.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015','stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties','transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  }
};//end of module.exports
