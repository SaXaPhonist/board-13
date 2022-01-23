const path = require('path')
const HtmlWebpackPlugin = ('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    devtool: 'inline-source-map',
    modules: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node-modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: path.join(__dirname, 'index.html' )
            }
        )
    ]
}