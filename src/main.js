import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//图片懒加载
import vueLazyLoad from "vue-lazyload"

Vue.prototype.$bus=new Vue()
Vue.config.productionTip = false

Vue.use(vueLazyLoad,{
  //当图片加载时显示的静态图片
  loading:require("./assets/images/common/placeholder.png")
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
