const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
};