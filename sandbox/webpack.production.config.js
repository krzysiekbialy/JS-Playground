const { devServer, ...webpackParams } = require("./webpack.config");

module.exports = {
  ...webpackParams,
  output:{
    ...webpackParams.output,
    publicPath: "/react-starter/"
  },
  mode: "production"
};