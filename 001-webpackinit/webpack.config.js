const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// 创建插件实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),     // 模板源文件
    filename: 'index.html'  //  在内存中生成的首页的名称
})


// 向外暴露一个打包的配置对象
module.exports = {
    mode: 'production',    // 选项为 development(开发环境)和 production(线上环境)
    plugins: [
        htmlPlugin
    ],
    // 第三方模块配置规则
    module: { // 所有第三方 模块的配置规则
        rules: [ // 第三方匹配规则
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, // 千万别忘记添加 exclude 排除项
        ]
    },
}