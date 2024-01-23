const path = require('path');

module.exports = {
  mode: 'development', // change to 'production' when deploying
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, './src/assets/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
      test: /\.png$/,
        use: 'file-loader',
        },
    ]
  },
};
