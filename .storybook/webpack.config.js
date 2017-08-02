const path = require('path');

// this is for webpack 1
// to use new @storybook use webpack2 format instead
module.exports = {
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader?importLoaders=1&sourceMap!sass-loader',
				include: path.resolve(__dirname, '../')
			},
			{ test: /\.(jpg|png|gif)$/, loader: "url-loader?limit=100000" },
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
		]
	},
};