const { merge } = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    hot: true,
    port: 9000,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
});
