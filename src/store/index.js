import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comstomer:{
      pingjia:[
        {score:4.0,name:"饿了吗",w:4.2,b:4.3,p:4.5},
        {score:4.0,name:"饿了吗星选",w:5.0,b:4.5,p:4.7},
      ],
    },
    menuWidth:(document.documentElement.offsetWidth<1160 || document.body.offsetWidth<1160)?"75px":"200px",
    goodsTypeList:[{id:1,name:"鲜果茶"},{id:2,name:"沙冰"}],
    goodsList:[
      {id:1,name:"杨枝甘露",repertory:99,price:9.9,sales:0,status:"已下架",img:require("@/assets/home/serve1.jpg"),type:"鲜果茶",isChecked:false},
      {id:2,name:"鲜橙茶",repertory:99,price:9.9,sales:0,status:"已上架",img:require("@/assets/home/serve1.jpg"),type:"鲜果茶",isChecked:false},
      {id:3,name:"百香果茶",repertory:99,price:9.9,sales:0,status:"已上架",img:require("@/assets/home/serve1.jpg"),type:"鲜果茶",isChecked:false},
      {id:4,name:"哈密瓜茶",repertory:99,price:9.9,sales:0,status:"已下架",img:require("@/assets/home/serve1.jpg"),type:"鲜果茶",isChecked:false},
      {id:5,name:"柠檬茶",repertory:0,price:9.9,sales:0,status:"待上架",img:require("@/assets/home/serve1.jpg"),type:"鲜果茶",isChecked:false},
      {id:6,name:"芒果沙冰",repertory:99,price:9.9,sales:0,status:"已上架",img:require("@/assets/home/serve1.jpg"),type:"沙冰",isChecked:false}
    ],
  },
  getters:{
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
