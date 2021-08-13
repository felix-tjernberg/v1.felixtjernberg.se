const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { ESBuildMinifyPlugin } = require('esbuild-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

if (process.env.NODE_ENV) {
  // Production configuration
  const ThreeMinifierPlugin = require('@yushijinhun/three-minifier-webpack')
  const threeMinifier = new ThreeMinifierPlugin()
  module.exports = {
    devServer: {
      contentBase: path.join(__dirname, 'build')
    },
    devtool: false,
    entry: {
      index: path.join(__dirname, 'source', 'index.js')
    },
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset'
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          loader: 'html-loader',
          test: /\.html$/i
        },
        {
          exclude: /node_modules/,
          test: /\.js$/i,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    optimization: {
      minimizer: [
        '...',
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
      threeMinifier,
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({ template: './source/index.html' })
    ],
    resolve: {
      alias: {
        image: './image',
        javascript: './javascript',
        stylesheet: './stylesheet',
        svg: './svg'
      },
      plugins: [threeMinifier.resolver]
    },
    target: 'browserslist'
  }
} else {
  // Development configuration
  module.exports = {
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      hot: true
    },
    devtool: 'source-map',
    entry: {
      index: path.join(__dirname, 'source', 'index.js')
    },
    mode: 'development',
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
      ]
    },
    optimization: {
      minimizer: [
        new ESBuildMinifyPlugin({
          css: true,
          target: 'es2015'
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
    },
    stats: 'errors-warnings',
    target: 'web'
  }
}
