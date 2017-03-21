const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    resolve(__dirname, '..', 'src', 'index.jsx'),
  ],

  output: {
    path: resolve(__dirname, '..', 'build'),
    filename: '[name].js',
    publicPath: '/',
  },

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, '..', 'build'),
    publicPath: '/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..', 'src', 'index.ejs'),
      title: 'react-template',
    }),
  ],

  performance: {
    hints: false,
  },

  devtool: 'cheap-module-eval-source-map',
};
