const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', ''), // FIXME
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.[hash:6].js',
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      // FIXME
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
  ],
};
