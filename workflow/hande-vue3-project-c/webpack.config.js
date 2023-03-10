const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.stylus$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(png|gif|jpg|svg|jpeg)$/,
                use: [
                    'file-loader',
                    'url-loader'
                ]
            },
            {
                // es6+ 转成 目标运行设备可执行的代码
                test: /\.js$/,
                exclude: /node_modules/,    // 不需要转译的文件 提升编译时间
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
            title: '手写 Vue 开发环境'
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port: 8888 
    }
}