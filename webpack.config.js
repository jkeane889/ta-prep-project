const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
  filename: 'bundle.js',
  path: DIST_DIR
},
  module : {
    rules : [
      {
        test : /\.js?/,
        include : SRC_DIR,
        loader : 'babel-loader',
      }
    ]
  }
};
