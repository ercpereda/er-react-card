var commonConfig = require('./webpack.common');
var webpackMerge = require('webpack-merge');
var path = require('path');
var CopyPlugin = require('copy-webpack-plugin');

var config = webpackMerge(commonConfig, {

  entry: './src/main.js',
  
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'main.js',
  },

  devServer: {
    inline: true,
    port: 8080
  },

  plugins: [
    new CopyPlugin([
      { from: 'src/index.html' },
      { from: 'src/img_avatar.png' },
      { from: 'src/img_avatar2.png' }
    ])
  ]

}); 

module.exports = config;
