const path = require('path');

module.exports = {
  entry: {app: './client/index.js'},
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'static')
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: "babel-loader"
    }]
  }
};
