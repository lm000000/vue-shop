const path=require("path")
function resolve(dir) {
  return path.join(__dirname,dir)
}
module.exports={     //设置路径别名   调用时在路径前面加上~
  chainWebpack:(config)=>{
    config.resolve.alias
      .set("@",resolve("src"))
      .set("assets",resolve("src/assets"))
      .set("components",resolve("src/components"))
      .set("network",resolve("src/network"))
      .set("router",resolve("src/router"))
      .set("store",resolve("src/store"))
      .set("view",resolve("src/view"))
}
}
