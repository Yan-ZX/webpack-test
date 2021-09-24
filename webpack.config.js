const path = require('path');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.json5$/i,
                type: "json",
                parser: {
                    parse: json5.parse,
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "output "
        })
    ],
    devServer: {
        static: "./dist",
      },
    optimization: {
        splitChunks: {
            chunks:"all",
        }
    }

}