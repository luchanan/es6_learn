var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");//用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用
//var HtmlWebpackPlugin = require('html-webpack-plugin');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");//css作为单独文件，而不是插到html <style>中
module.exports = {
  plugins: [
      new CommonsChunkPlugin("commons.js", ["./es6js/main.js"])
  ],
  entry:{
    "main":"./es6js/main.js"
  },
  output: {
    path: __dirname,//打包输出的路径
    filename: "es5js/[name].js",//打包后的名字,[name]表示用上面的文件名作为输入文件名
  },
  module: {
    ////加载器配置
    loaders: [
      {
        test: path.join(__dirname, 'es6'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
}