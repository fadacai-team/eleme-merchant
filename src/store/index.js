import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      comstomer:{
        pingjia:[
          {score:4.0,name:"饿了吗",w:4.2,b:4.3,p:4.5},
          {score:4.0,name:"饿了吗星选",w:5.0,b:4.5,p:4.7},
      ]
      }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
