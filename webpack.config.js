const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devServer: {
    host: '0.0.0.0',//your ip address
    contentBase: './dist',
    headers: {'Access-Control-Allow-Origin': '*'},
    historyApiFallback: {
      index: 'http://localhost:8080/index.html'
    },
    allowedHosts: [
      '.shawwn.com'
    ],
  }
}

module.exports = config;
