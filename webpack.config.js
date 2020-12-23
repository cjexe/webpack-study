const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const config = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            {test: '/\.txt$/', use: 'raw-loader'},
            {test: '/\.css$/', use: 'css-loader'}

        ]
    },
    plugins: [
        new htmlWebpackPlugin()
    ]
}
module.exports = config