import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus = new Vue()

// 自己封装的toast
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import { Swipe, SwipeItem } from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

// 安装ElementUI
Vue.use(ElementUI)

// 安装toast插件
Vue.use(toast)

// 解决移动端300ms延迟
FastClick.attach(document.body)

// 安装懒加载插件  修改 img :src ->v-lazy
Vue.use(VueLazyload,{
  loading: require('./assets/images/common/placeholder.png')
})



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
