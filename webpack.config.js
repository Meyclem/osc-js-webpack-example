const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './client/app.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      'osc-js': path.resolve(__dirname, 'node_modules/osc-js/lib/osc.browser.js'),
    },
  },
}
