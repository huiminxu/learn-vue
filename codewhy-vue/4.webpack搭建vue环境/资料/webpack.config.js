const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin }= require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// commonjs
module.exports={
    mode:'development',
    devtool:'source-map',
    entry:"./src/main.js", //入口文件
    output:{
        path:path.resolve(__dirname,"./build"),  //输出目录
        filename:"js/bundle.js"   //输出文件名称
    },
    //模块
    modules:{
        rules:[{
            test:/\.css$/, //正则匹配
            // loader:'css-loader', // 语法糖
            use:["style-loader","css-loader",{
                loader:'postcss-loader',
                options:{
                    postcssOptions:{
                        plugins:[
                            require("autoprefixer")
                        ]
                    }
                }
            }]
            // use:[
            //     {loader:'css-loader',options:}
            // ]
        },{
            test:/\.less$/, //正则匹配
            //  postcss-loader 默认拿取 postcss.config.js 的配置

            use:["style-loader","css-loader",'postcss-loader','less-loader']
        },
        {
            test:/\.(jpe?g|png|gif|svg)$/,
            type:'asset',
            generator:{
                filename:"img/[name]_[hash:6][txt]"
            },
            parser:{
                dataUrlCondition:{
                    maxSize: 10 *1024,
                }
            }

        },
        // 字体图标
        {
            test:/\.(eot|ttf|woff2?)$/,
            use:{
                loader:'file-loader',
                // options:{
                //     outputPath:"font",
                //     name:'[name]_[hash:6].[txt]'
                // }
                options:{
                    name:'font/[name]_[hash:6].[txt]'
                }
            }
        }
    ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'public/index.html' 
        }),
        new DefinePlugin({
            BASE_URL:"'./'"
        }),
        new CopyWebpackPlugin({
            patterns:[{
                from:'public',
                // to:'build',
                globOptions:{
                    ignore:[
                        "**/index.html"
                    ]
                }
            }]
        })
    ]

}

   


