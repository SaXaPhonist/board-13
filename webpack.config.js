const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const EslintPlugin = require('eslint-webpack-plugin');
// const eslintOptions = require('.eslintrc.json')

module.exports = {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 8080,
        open: false,
        static: './dist'
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", "jsx"]
    },
    module: {
        rules: [{
            test: /\.(ts|js)x?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(?:ico|png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
    ]
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
        ),
        // new CopyWebpackPlugin({
        //     patterns: [{from: path.resolve(__dirname, './src/assets'), to: 'assets'}]
        // }),
        // new EslintPlugin(eslintOptions)
    ]
}