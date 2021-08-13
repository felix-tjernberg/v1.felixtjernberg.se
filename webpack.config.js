const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { ESBuildMinifyPlugin } = require('esbuild-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ThreeMinifierPlugin = require('@yushijinhun/three-minifier-webpack')
const path = require('path')

let devtool = process.env.NODE_ENV ? false : 'source-map'
let mode = process.env.NODE_ENV || 'development'
let target = process.env.NODE_ENV ? 'browserslist' : 'web'

const threeMinifier = new ThreeMinifierPlugin()

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    hot: true
  },
  devtool: devtool,
  entry: {
    index: path.join(__dirname, 'source', 'index.js')
  },
  mode: mode,
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
      // {
      //   loader: 'html-loader',
      //   test: /\.html$/i
      // },
      // {
      //   exclude: /node_modules/,
      //   test: /\.js$/i,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       cacheDirectory: true,
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // }
    ]
  },
  optimization: {
    minimizer: [
      // '...', // Uncomment this and comment ESBuildMinifyPlugin to save 3% of build weight
      new ESBuildMinifyPlugin({
        target: 'es2015'
      }),
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.cleanCssMinify,
        minimizerOptions: { level: 2 }
      })
    ],
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },
  output: {
    assetModuleFilename: 'image/[hash][ext][query]',
    clean: true,
    filename: './javascript/[name].[contenthash].js',
    path: path.join(__dirname, 'build')
  },
  plugins: [
    // threeMinifier, // Uncomment this and plugins key in resolve to save 200kb
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: './source/index.html' })
  ],
  resolve: {
    alias: {
      image: './image',
      javascript: './javascript',
      stylesheet: './stylesheet',
      svg: './svg'
    }
    // plugins: [threeMinifier.resolver]
  },
  stats: 'errors-warnings',
  target: target
}
