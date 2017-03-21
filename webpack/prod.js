const { resolve } = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: resolve(__dirname, '..', 'src', 'index.jsx'),
    vendor: [
      'react',
      'react-dom',
      'normalize.css',
      'styled-components',
    ],
  },

  output: {
    path: resolve(__dirname, '..', 'build'),
    filename: '[chunkhash].[name].js',
    publicPath: '/',
  },

   plugins: [
    new CleanWebpackPlugin(['build']),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: [
        'vendor',
        'manifest'
      ],
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..' ,'src', 'index.ejs'),
      title: 'react-template',
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],

  devtool: 'source-map',
};
