<template>
  <div class="goods-menu">
    <el-tabs tab-position="left" v-model="activeName">
      <el-tab-pane v-for="item in typeList" :key="item.id" :label="item.name+'('+item.itemList.length+')'" :name="item.name">
        <div class="header">
          <div class="operate">
            <span>上架</span>
            <span>下架</span>
            <span>删除</span>
          </div>
          <div class="new">
            <router-link to="#" class="link">新建分类</router-link>
            <router-link to="#" class="link">新建商品</router-link>
          </div>
        </div>
        <showGoods :itemList="item.itemList"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import showGoods from "@/components/Goods/showGoods.vue"
export default {
  name:"GoodsTypeList",
  components:{
    showGoods,
  },
  props:["typeList"],
  data(){
    return{
      activeName:this.typeList[0].name
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
        span{
          width: 60px;
          height: 30px;
          display: inline-block;
          text-align: center;
          line-height: 30px;
          border: 1px solid #dedfe3;
        }
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