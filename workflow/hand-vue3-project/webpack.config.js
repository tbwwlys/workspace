//webpack 工程化的配置文件
const path = require('path')
// console.log(path.resolve(__dirname, './src/main.js'))
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader-plugin')
module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    // 工艺流程
    output: {
        path: path.resolve(__dirname, 'dist'), // 打包出口
        filename: 'js/[name].js' // 打包完的静态资源文件名
    },
    module: {
        rules: [
            {
              test: /\.vue$/,
              use: [
                'vue-loader'
              ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
            title: '手搭 Vue 开发环境'
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        port: 8888,
        
    }
    
}