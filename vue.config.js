// const path = require('path')
// module.exports = {
//   configureWebpack:{
//     resolve:{
//       alias:{
//         '@':path.join(__dirname,'src'),
//         'components':path.join(__dirname,'src/components'),
//         'network':path.join(__dirname,'src/network'),
//         'views':path.join(__dirname,'src/views'),
//         'router':path.join(__dirname,'src/router'),       
//       }
//     }
//   }
// }

module.exports = {
  configureWebpack:{
    resolve:{
      // extensions:[],
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
        'utils':'@/utils'
      }
    }
  }
}