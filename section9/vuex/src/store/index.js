import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //初期値
    count: 0
  },
  getters: {
  },
  mutations: {
    increment(state){
      state.count++
    },
    addCount(state, payload){
      //第2引数はオブジェクト
      state.count += payload.value
    }
  },
  actions: {
  },
  modules: {
  }
})
