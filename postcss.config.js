module.exports = {
  'plugins': {
    'autoprefixer': {},
    "postcss-px-to-viewport":{
      viewportWidth:375,//视窗宽度，对应的是我们设计稿的宽度
      viewportHeight:667,
      unitPrecision:5,//指定'px'转换为视窗单位值的小数位数
      viewporUnit:'vm',//指定需要转换成的视窗单位，建议使用vw
      selectorBlackList:['ignore'],//指定不需要转换的类
      minPixelValue:1,//小于或等于'1px'不转换为视窗单位
      mediaQuery:false//允许再媒体查询中转换'px'
    }
  }
}