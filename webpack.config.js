const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'public'),
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
