module.exports = {
  entry: "./index.js",
  output: {
      path: __dirname+"/static",
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-es2015-parameters']
        }
      }
    ]
  }
};
