const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Harus Jelas dari file webpacknya
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Tahap 3 : Masukin ke DOM
          "css-loader", // Tahap 2 : Ngubah CSS ke JS
          "sass-loader", // Tahap 1 : Ngubah sass ke css
        ],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/img",
            esModule: false, // Biar ga ngaco
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            esModule: false, // biar ga ngaco, bikin file nama gajelas di root
          },
        },
      },
    ],
  },
};
