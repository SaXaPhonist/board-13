const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');

const env = process.env.NODE_ENV

module.exports = {
    mode: env === 'prod' ? 'production':'development',
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
        extensions: [".tsx", ".ts", ".js", "jsx"],
        modules: [ path.resolve('./src'), 'node_modules']
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
            type: 'assets/images',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'assets/fonts',
          },
    ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        env === 'dev' ? ( new ReactRefreshWebpackPlugin()): null,    
        new HtmlWebpackPlugin(
            {
                template: path.join(__dirname, 'index.html' )
            }
        ),
        new CopyWebpackPlugin({
            patterns: [{from: path.resolve(__dirname, './src/assets'), to: 'assets'}]
        }),
        new EslintPlugin()
    ]
}