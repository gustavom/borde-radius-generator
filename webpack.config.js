const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/assets/js/script.js"
  },
  output: {
    path: path.resolve(__dirname, `./public/`),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.njk$/,
        use: [
          {
            loader: "simple-nunjucks-loader",
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Custom template using Handlebars",
      template: "./src/views/pages/home.njk"
    })
  ]
};
