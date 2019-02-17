var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: SRC_DIR + '/app',
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app/',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ogg|mp4|wav|mpe?g)$/i,
        use: 'file-loader'
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    port: 9000
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/index.html', to: '../index.html' },
      { from: 'src/server.js', to: '../server.js' },
    ],)
  ]
};