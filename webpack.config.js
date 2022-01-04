const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CopyPlugin = require('copy-webpack-plugin'),
  CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  LiveReloadPlugin = require('webpack-livereload-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  path = require('path')
const { ESBuildMinifyPlugin } = require('esbuild-loader')

if (process.env.NODE_ENV) {
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
          loader: 'pug-loader',
          test: /\.pug$/i
        },
        {
          exclude: [/node_modules/],
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
        new CopyPlugin({
          patterns: [
            { from: 'source/assets/image/football-coach' },
            { from: 'source/assets/image/stuff-made' }
          ]
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
          chunks: 'all',
          vendor: {
            chunks: 'all',
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/
          }
        }
      }
    },
    output: {
      assetModuleFilename: './[hash][ext][query]',
      clean: true,
      filename: './[name].[contenthash].js',
      path: path.join(__dirname, 'build')
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({ template: './source/template/index.pug' }),
      new LiveReloadPlugin({ appendScriptTag: true }),
      new BundleAnalyzerPlugin({
        analyzerMode: process.env.NODE_STATS || 'disabled'
      })
    ],
    resolve: {
      alias: {
        Icon: path.resolve(__dirname, 'source/assets/icon'),
        Image: path.resolve(__dirname, 'source/assets/image'),
        Javascript: path.resolve(__dirname, 'source/javascript'),
        Stylesheet: path.resolve(__dirname, 'source/stylesheet'),
        Svg: path.resolve(__dirname, 'source/assets/svg')
      }
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
        },
        {
          loader: 'pug-loader',
          test: /\.pug$/i
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
          chunks: 'all',
          vendor: {
            chunks: 'all',
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/
          }
        }
      }
    },
    output: {
      clean: true,
      filename: './[name].[contenthash].js',
      path: path.join(__dirname, 'build')
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: 'source/assets/image/football-coach' },
          { from: 'source/assets/image/stuff-made' }
        ]
      }),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({ template: './source/template/index.pug' }),
      new LiveReloadPlugin({ appendScriptTag: true })
    ],
    resolve: {
      alias: {
        Icon: path.resolve(__dirname, 'source/assets/icon'),
        Image: path.resolve(__dirname, 'source/assets/image'),
        Javascript: path.resolve(__dirname, 'source/javascript'),
        Stylesheet: path.resolve(__dirname, 'source/stylesheet'),
        Svg: path.resolve(__dirname, 'source/assets/svg')
      }
    },
    stats: 'errors-warnings',
    target: 'web'
  }
}
