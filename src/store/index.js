import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[],
    checkItem:true,
    filter:[]
  },
  mutations: {
      getCart(state,playLoad) {
        if (state.cartList.length===0) {
          playLoad.counter=1
          state.cartList.push(playLoad)
        } else {
          for (let item of state.cartList) {
            if (item.iid === playLoad.iid) {
              item.counter += 1
            } else {
              state.cartList.push(playLoad)
            }
          }
        }
        },
    getFilter(state,playLoad){
        state.filter.push(playLoad)
    },
    delete(state){
        state.cartList.splice(0)
    }
  },
  actions: {
  },
  modules: {
  }
})
