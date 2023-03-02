const path=require("path");
const {VueLoaderPlugin}=require("vue-loader");
const HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:path.resolve(__dirname,"./src/index.js"),
    module: {
	rules: [
	    {
		test: /\.vue$/,
		loader: 'vue-loader'
	    },
	    {
		test: /\.js$/,
		loader: 'babel-loader'
	    },
	    {
		test: /\.scss$/,
		use: [
		    'vue-style-loader',
		    'css-loader',
		    'sass-loader'
		]
	    }
	]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
	    filename:"index.html",
            template:path.resolve(__dirname,"./src/index.html")
        }),
    ],
}
