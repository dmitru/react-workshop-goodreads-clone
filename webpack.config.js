const path = require('path');

module.exports = {
  context: __dirname,
  entry: ['./src/index.js', 'webpack-dev-server/client?http://localhost:8080'],
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
    contentBase: path.join(__dirname, 'public'),
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
};
