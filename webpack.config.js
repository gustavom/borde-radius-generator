const path = require("path");

module.exports = {
  entry: {
    main: "./src/assets/js/script.js"
  },
  output: {
    path: path.resolve(__dirname, `./public/`),
    filename: "[name].js"
  }
};
