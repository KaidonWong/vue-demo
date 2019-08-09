const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");


module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
		hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
    ],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					"vue-style-loader",
					{
						loader: "css-loader",
						options: { importLoaders: 1 }
					},
					"postcss-loader"
				]
			},
			{
				test: /\.scss$/,
				use: [
					"vue-style-loader",
					{
						loader: "css-loader",
						options: { importLoaders: 1 }
					},
					"postcss-loader",
					"sass-loader"
				]
			}
		]
	}
});
