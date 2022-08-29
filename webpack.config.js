const path = require('path');


module.exports = {
  mode: 'production',
  entry: './cli.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    fallback: {
        "fs": false,
        "tty": false,
        "stream": false,
        "assert": false,
        "path": false,
        "crypto": false,
        "process": false,
        "child_process": false
    },
  }
  
};
