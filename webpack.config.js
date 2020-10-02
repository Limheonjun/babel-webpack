const path = require('path')

module.exports = {
  // enntry file
  entry: './src/index.js',
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        //확장자가 .js인 파일에 한해서만 룰 적용
        test: /\.js$/,
        //포함할 경로
        include: [
          path.resolve(__dirname, 'src')
        ],
        //제외할 경로
        exclude: /node_modules/,
        use: {
          //사용될 로더
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development'
};