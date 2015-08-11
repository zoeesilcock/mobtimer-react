var path = require('path');

module.exports = {
  entry: {
    app: ['./src/app.js']
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    loaders: [
    {
      test: /\.scss$/,
      loader: 'style!css!sass!'
    },
    {
      test: /\.js$/,
      loaders: [
        'babel-loader'
      ],
      exclude: path.join(__dirname, 'node_modules')
    } ]
  }
};
