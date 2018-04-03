const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { jsRules, cssRules, scssRules, imageRules, rawLoaderRules } = require('./webpack/commonModuleRules');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: {
    bundle: ['./src/js/index.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('develop')
    }),
  ],
  module: {
    rules: [
      jsRules(true),
      cssRules,
      scssRules,
      imageRules,
      rawLoaderRules
    ]
  },
  devServer: {
    contentBase: './dist',
    overlay: {
      warnings: false,
      errors: true
    }
  }
};