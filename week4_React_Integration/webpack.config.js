const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { jsRules, cssRules, scssRules, imageRules, rawLoaderRules } = require('./webpack/commonModuleRules');
// const webpackResolve = require('./webpack/webpack.resolve');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: {
    bundle: ['./src/index.js'],
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
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      static: path.resolve(__dirname, 'src/static/'),
      theme: path.resolve(__dirname, 'src/theme/'),
    },
    extensions: [
      '.js',
      '.jsx'
    ],
    modules: [
      path.resolve(__dirname, 'src/'),
      path.resolve(__dirname, 'node_modules/'),
    ]
  },
  devServer: {
    compress: true,
    contentBase: './dist',
    overlay: {
      warnings: false,
      errors: true
    }
  }
};