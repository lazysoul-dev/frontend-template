const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: [
    './frontend/scripts/main.js',
    './frontend/styles/main.scss',
  ],
  output: {
    path: path.resolve(__dirname, 'frontend-dist'),
    filename: '[name].js',
    clean: true,
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
  ],
}
