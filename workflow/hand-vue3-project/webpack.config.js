const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './index.html'),
          filename: 'index.html',
          title: '手搭 Vue 开发环境'
        }),
        // 添加 VueLoaderPlugin 插件
        // new VueLoaderPlugin()
    ]
}