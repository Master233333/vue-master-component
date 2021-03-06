const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    'demo': './test/demo.tsx',
  },
  devServer: {
    progress: true,
    port: '4000',
    host: '0.0.0.0',
    stats: 'errors-only',
    disableHostCheck: true,
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        chunks: {
          chunks: 'all',
          name: 'common'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      filename: 'index.html'
    }),
  ],
});
