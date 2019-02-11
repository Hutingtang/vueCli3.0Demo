const BASE_URL = process.env.NODE_ENV == "production" ? "/iview-admin" : "/";
const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL, //基础路径
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components/"))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  //连接服务器配置，跨域
  devServer:{
    // proxy:"http://localhost:4000"
  }
}
