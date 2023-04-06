const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// used to get the current working directory of the node.js process
const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
    entry: [path.join(CURRENT_WORKING_DIR, 'client/app/index.js')],
    resolve: {
        extensions: ['.js', '.json', '.css', '.scss', '.html'],
        alias: {
            app: 'client/app'
        }
    },
    modules:{
        rules: [
            {
                test: /\.(js|jsx)$/, //regex that includes all .js & .jsx files
                exclude: /(node_modules)/, // regex that excludes the none_modules dir
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new Dotenv(),
        new CopyWebpackPlugin([
            {
                from: 'client/public'
            }
        ])
    ]
};