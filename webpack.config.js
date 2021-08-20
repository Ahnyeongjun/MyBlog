const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3300;

module.exports = {
  // 개발환경
  mode: "development",

  // 애플리케이션 시작 경로
  entry: "./src/index.tsx",

  // resolver는 절대 경로로 모듈 위치 잡아주는 라이브러리다. 모듈은 다른 모듈의 디펜던시를 필요로 한다.
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  // 번들된 파일 경로
  output: {
    filename: "bundle.[hash].js",
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(jpg|png|jpeg|bmp|gif|svg)?$/,
        loader: "file-loader",
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],

  // 개발 서버 설정
  devServer: {
    host: "localhost",
    port: 3305,
    inline: true,
    hot: true,
    // historyApiFallback: true,
    // open: true,
  },
};
