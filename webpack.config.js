module.exports = {
  mode: 'development',
  entry: './example',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: './index?id=js' }
        ]
      }
    ]
  }
}
