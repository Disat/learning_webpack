const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "output"),
  },
  module: {
    rules: [
      {
        test: /.html$/,
        use: {
          loader: "html-loader",
          options: {
            sources: {
              list: [
                // All default supported tags and attributes
                "...",
                {
                  tag: "img",
                  attribute: "data-src",
                  type: "src",
                },
                {
                  tag: "img",
                  attribute: "data-srcset",
                  type: "srcset",
                },
                {
                  tag: "a",
                  attribute: "href",
                  type: "src",
                },
              ],
            },
          },
        },
      },
      {
        test: /.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.jpg$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10 * 1024,
            esModule: false,
          },
        },
        type: "javascript/auto",
      },
    ],
  },
};
