const path = require('path')
module.exports={
    mode:'development',
    entry:'./main.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'index.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader','less-loader']
            },
            // {
            //     test:/\.(png|jpe?g|gif|svg)$/,
            //     use:['file-loader']
            // }
        ]
    }
}