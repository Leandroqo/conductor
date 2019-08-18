const webpack = require('webpack')
const path = require('path');
const package = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      modules: path.resolve(__dirname, 'src/modules/'),
      core: path.resolve(__dirname, 'src/core/')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: { plugins: ['react-hot-loader/babel'] }
          },
          'ts-loader'
        ].filter(Boolean)
      },
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.(a?png)$/, use: 'url-loader?limit=10000' },
      {
        test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
        use: 'file-loader'
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          filename: 'vendor.[hash].js',
          priority: -10
        }
      }
    },
    runtimeChunk: true
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, './src'),
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true
    },
    stats: 'minimal',
    clientLogLevel: 'warning'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true
      },
      append: {
        head: `<script src="//cdn.polyfill.io/v3/polyfill.min.js"></script>`
      },
      meta: {
        title: package.name,
        description: package.description,
      }
    })
  ]
}