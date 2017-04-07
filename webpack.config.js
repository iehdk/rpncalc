const path = require('path')

const config = {
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: 'http://localhost:8080/dist/'
  },
  devServer: {
    contentBase: './dist',
    publicPath: 'http://localhost:8080/dist/'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ],
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}

module.exports = config
