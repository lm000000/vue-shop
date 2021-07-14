import Vue from 'vue'
import VueRouter from 'vue-router'
const vue1=()=>import("../views/home/vue1")
const vue2=()=>import("../views/category/vue2")
const vue3=()=>import("../views/cart/vue3")
const vue4=()=>import("../views/me/vue4")
const detail=()=>import("../views/detail/detail")
Vue.use(VueRouter)

//解决路由重复点击报错
/*const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}*/
const routes = [
  {
    path:"",
    redirect:"/vue1"
  },
  {
    path:"/vue1",
    component:
    vue1
  },
  {
    path:"/vue2",
    component:
    vue2
  },
  {
    path:"/vue3",
    component:
    vue3
  },
  {
    path:"/vue4",
    component:
    vue4
  },
  {
    path:"/detail/:iid",
    component:
    detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
