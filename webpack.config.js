const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: [
    './frontend/scripts/main.ts',
    './frontend/styles/main.scss',
  ],
  output: {
    path: path.resolve(__dirname, 'frontend-dist'),
    filename: '[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts','.js','.vue','.json',],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          'vue-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './',
              name: '[name].css',
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './frontend/fonts/', to: './fonts/' },
        { from: './frontend/videos/', to: './videos/' },
        { from: './frontend/images/', to: './images/' },
      ],
    }),
  ],
}
