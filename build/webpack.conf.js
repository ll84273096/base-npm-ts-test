const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './ts/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist'),
        libraryTarget: 'commonjs',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    externals : {
        lodash : {
            commonjs: 'lodash', 
            amd: 'lodash',
            root: '_'
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
};
