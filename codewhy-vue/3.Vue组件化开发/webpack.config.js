const { default: test } = require('node:test');
const path = require('path');
// commonjs
module.exports={
    entry:"./src/main.js", //入口文件
    output:{
        path:path.resolve(__dirname,"./build"),  //输出目录
        filename:"bundle.js"   //输出文件名称
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
        }]
    }
}

   


