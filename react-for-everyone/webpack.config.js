
module.exports = {

	resolve: { fallback: path.join(__dirname, "node_modules") },
  	resolveLoader: { fallback: path.join(__dirname, "node_modules") },

	entry: [
		'./src/App.js'
	],
	output: {
		path: __dirname,
		filename: 'app.js'
	},
	module: {
		loaders: [{
			test:/\.jsx?$/,
			loader: 'babel'
		}]
	}

};