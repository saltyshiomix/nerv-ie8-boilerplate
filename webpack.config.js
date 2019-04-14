const { resolve } = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: resolve('dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'react': 'nervjs',
      'react-dom': 'nervjs',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
    ],
  },
};
