const path = require('path')
const config = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            {test: '/\.txt$/', use: 'raw-loader'}

        ]
    },
    plugins: []
}
module.exports = config