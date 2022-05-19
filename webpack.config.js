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
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
};
