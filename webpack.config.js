module.exports = {
  mode: 'development',
  entry: './tests/fixtures/example.js',
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
