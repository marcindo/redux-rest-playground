const { resolve, join } = require('path');

module.exports = {
  context: resolve(__dirname, '..', 'src'),

  resolve: {
    extensions: ['.jsx', '.js'],
    modules: [
      resolve(__dirname, '..', 'src'),
      'node_modules',
    ],
  },

  node: {
    fs: 'empty',
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
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]&sourceMap&-minimize',
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include: [join(__dirname, '..', 'src/assets')],
        loader: 'file-loader?name=assets/[name].[ext]',
      },

    ],
  },

  devtool: 'source-map',
};
