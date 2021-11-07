const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test:/\.css$/,
        use: ['style-loader',
						{loader:'css-loader', options:{importLoaders:1}},
						'postcss-loader']
      }
    ]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000
  },
  plugins: [
    new Dotenv()
  ]
};
