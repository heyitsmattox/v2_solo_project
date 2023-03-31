/*
importing HTMLWebpackPlugin that we installed earlier
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*
path is a node build in package that handles file paths
in a node project
*/
const path = require('path');

module.exports = {
  // mode: process.env.NODE_ENV,
  mode: 'development',
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  target: 'web',
  // devServer: {
  //   host: 'localhost',
  //   port: '8080',
  //   static: {
  //     directory: path.join(__dirname, 'dist')
  //   },
  //   open: true,
  //   hot: true,
  //   liveReload: true
  // },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        // test: /\.(js|jsx)$/,
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
            ],
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client', './public/index.html'),
    }),
  ],
};
