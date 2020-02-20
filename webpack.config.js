const path = require("path");
const NunjucksWebpackPlugin = require("nunjucks-webpack-plugin");
module.exports = {
  entry: {
    main: "./src/assets/js/script.js"
  },
  output: {
    path: path.resolve(__dirname, `./public/assets/js`),
    filename: "[name].js"
  },
  plugins: [
    new NunjucksWebpackPlugin({
      templates: [
        {
          from: "./src/views/pages/home.njk",
          to: "../../index.html"
        }
      ]
    })
  ]
};
