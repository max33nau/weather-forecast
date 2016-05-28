const webpack = require('webpack');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path = require('path');
const publicPath = path.resolve(__dirname,'../server/src/public');
const Define = webpack.DefinePlugin;

module.exports = {
  entry: './src/app.js',
  output: {
    path: publicPath,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        }),
        new Define({
          WEATHER_API_KEY: JSON.stringify(process.env.WEATHER_API_KEY || ''),
          WEATHER_API_URL: JSON.stringify(process.env.WEATHER_API_URL || '')
        })
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'jshint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader:'style!css'
      },
      {
	      test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css','.scss']
  }
};
