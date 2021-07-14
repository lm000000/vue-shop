/*
* 要将px装换成vw
* npm 下载 postcss-px-to-viewport
* 在配置
* */

module.exports={         //配置往后要重启项目
  plugins:{
    autoprefixer:{},
    "postcss-px-to-viewport":{
      viewportWidth:375,//视窗的宽度，对应的是我们设计稿的宽度   一般是750 但在移动端是375
      viewportHeight:667,//视窗的高度，对应的是我们设计稿的高度
      unitPrecision:5,//制定‘px’转换为视窗单位的小数位数（很多时候无法整除）
      viewportUnit:'vw',//指定需要转换成的视窗单位，建议使用vw
      selectorBlackList:[],//指定不需要转换的类，  class
      minPixelValue:1,//小于或等于‘1px’不转换为视窗单位
      mediaQuery:false,//允许在媒体查询中转换为‘px’
     // exclude:[/bottom/]   //指不需要装换的文件   用正则表达式说明
    }
  }
}