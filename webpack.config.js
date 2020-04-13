const path = require('path')
const html = require('html-webpack-plugin')
const copy = require('copy-webpack-plugin');

module.exports = () => {
  return {
    context: path.resolve(__dirname, 'src'),
    entry: {
      app: ['./application.js'],
    },
    output: {
      filename: '[name].[hash].js',
      path: __dirname + "/docs",
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        ]
    },
    plugins: []
      .concat(new html({
        filename: 'index.html',
        template: 'index.html',
        inject: 'body',
        hash: true
      }),
      new copy([
        { from: 'assets', to: 'assets' }
      ]))
  }
}