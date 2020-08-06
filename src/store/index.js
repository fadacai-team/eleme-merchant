import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {
    menuWidth(){
      let w = document.documentElement.offsetWidth || document.body.offsetWidth;
      if (w < 1160) {
        return "75px";
      }
      if (w >= 1160) {
        return "200px";
      }
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
