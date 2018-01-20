'use strict';

require('require-yaml');

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 将样式提取到单独的 css 文件中，而不是打包到 js 文件或使用 style 标签插入在 head 标签中
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 删除已生成的文件
var CleanWebpackPlugin = require('clean-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

var CONFIG_DEV = require('./config/dev');

module.exports = {
    /* 输入文件 */
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dev'), // html, css, js 图片等资源文件的输出路径，将所有资源文件放在 dist 目录
        publicPath: 'dev', // html, css, js 图片等资源文件的 server 上的路径
        filename: 'js/[name].js', // 每个入口 js 文件的生成配置
        chunkFilename: 'js/[id].js'
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
        },
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [{
                test: /\.css$/,
                loaders: [{
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'style-loader'
                    }
                ]
            },
            /* 用来解析vue后缀的文件 */
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                options: {
                    // postcss: [require('autoprefixer')({
                    //     browsers: ['last 2 versions']
                    // })],
                    // loaders: {
                    //     css: ExtractTextPlugin.extract({
                    //         use: ['css-loader'],
                    //         fallback: 'vue-style-loader'
                    //     })
                    //     //....scss less sass more
                    // },
                    // sourceMap: true
                }
            },
            /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /* 排除模块安装目录的文件 */
                exclude: [/node_modules/]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                // 图片加载器，较小的图片转成 base64
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: './img/[name].[ext]?[hash:7]'
                }
            }
        ]
    },
    plugins: [
        // 提取公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', // 公共模块的名称
            // chunks: chunks, // chunks 是需要提取的模块
            // minChunks: chunks.length
        }),
        new HtmlWebpackPlugin({
            filename: './index.html', // html 文件输出路径
            template: './src/index.html', // 模板路径
            inject: 'body', // js 插入位置
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, 'src/lib/flexible'),
        //         to: path.resolve(__dirname, config.path + '/lib/flexible'),
        //         force: true,
        //         toType: 'dir',
        //         ignore: ['.*']
        //     }
        // ]),
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, 'src/img'),
        //         to: path.resolve(__dirname, config.path + '/img'),
        //         force: true,
        //         toType: 'dir',
        //         ignore: ['.*']
        //     }
        // ]),
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, 'src/api'),
        //         to: path.resolve(__dirname, config.path + '/api'),
        //         force: true,
        //         toType: 'dir',
        //         ignore: ['.*']
        //     }
        // ]),
        // 借鉴 vue 官方的生成环境配置
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            },
            'CONFIG': JSON.stringify(CONFIG_DEV)
        }),
        // new CleanWebpackPlugin(
        //   ['dist/js/*.js'], 　 //匹配删除的文件
        //   {
        //     root: __dirname,
        //     //根目录
        //     verbose: true,
        //     //开启在控制台输出信息
        //     dry: false　　　　　　　　　　 //启用删除文件
        //   }
        // )
    ],
    devtool: 'eval-source-map'
}