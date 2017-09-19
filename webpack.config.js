const webpack = require('webpack');

function getDevTool() {
    if (process.env.NODE_ENV !== 'production') {
        return 'source-map'; //enables source map
    }

    return false;
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/scripts',
    publicPath: '/scripts',
    filename: 'main.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
      //for production
      // new webpack.DefinePlugin({
      //   'process.env': {
      //     NODE_ENV: JSON.stringify('production')
      //   }
      // }),
      //
      // new webpack.optimize.UglifyJsPlugin({
      //   compress: false
      // })
    ]
};
