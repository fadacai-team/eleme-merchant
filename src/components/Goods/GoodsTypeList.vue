<template>
  <div class="goods-menu">
    <el-tabs tab-position="left" v-model="activeName">
      <el-tab-pane v-for="item in typeList" :key="item.id" :label="item.name+'('+item.itemList.length+')'" :name="item.name">
        <div class="header">
          <div class="operate">
            <el-button-group>
              <el-button size="small" @click="grounding">上架</el-button>
              <el-button size="small" @click="underCarriage">下架</el-button>
              <el-button size="small" @click="deleteGoods">删除</el-button>
            </el-button-group>
          </div>
          <div class="new">
            <router-link to="/goods/newtype" class="link">新建分类</router-link>
            <router-link to="/goods/newgood" class="link">新建商品</router-link>
          </div>
        </div>
        <showGoods :dataSource="item.itemList"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import showGoods from "@/components/Goods/ShowGoods.vue"
export default {
  name:"GoodsTypeList",
  components:{
    showGoods,
  },
  props:{dataSource:Array},
  data(){
    return{
      activeName:this.dataSource[0].name,
      typeList:[]
    }
  },
  methods:{
    grounding(){
      this.$store.state.goodsList.forEach(item => {
        if (item.isChecked) {
          item.status="已上架"
        }
      })  
    },
    underCarriage(){
      this.$store.state.goodsList.forEach(item => {
        if (item.isChecked) {
          item.status="已下架"
        }
      })
    },
    deleteGoods(){
      this.$store.state.goodsList = this.$store.state.goodsList.filter(item=>item.isChecked == false)  
    }
  },
  mounted(){
    this.typeList = this.dataSource
  },
  watch:{
    dataSource:{
      deep:true,
      handler(val){
        
        this.typeList = val
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .goods-menu{
    position: relative;
    .header{
      display: flex;
      justify-content:flex-end;
      .operate{
        width: 180px;
      }
      .new{
        width: 240px;
        height: 30px;
        .link{
          margin-left: 20px;
          width: 100px;
          height: 30px;
          display: inline-block;
          text-align: center;
          line-height: 30px;
          background-color: #1989f9;
          color: #ffffff;
        }
      }
    }
  }
</style>