const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    resolve(__dirname, 'src', 'index.jsx'),
  ],

  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/',
  },

  context: resolve(__dirname, 'src'),

  resolve: {
    extensions: ['.jsx', '.js'],
    modules: [
      resolve(__dirname, 'src'),
      'node_modules',
    ],
  },

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              failOnError: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader/useable',
          'css-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.ejs'),
      title: 'template',
    }),
  ],

  performance: {
    hints: false,
  },

  devtool: 'cheap-module-eval-source-map',

}
