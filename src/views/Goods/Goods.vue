<template>
  <div class="goods-detail">
    <h2>商品管理</h2>
    <div class="goods-tab">
      <el-tabs v-model="activeName">
        <el-tab-pane :label="'全部商品('+goodsList.length+')'" name="全部商品">
          <div class="goods-menu">
            <el-tabs tab-position="left">
              <el-tab-pane v-for="item in allTypeList" :key="item.id" :label="item.name+'('+item.itemList.length+')'" :name="item.name">
                <Good :itemList="item.itemList"/>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="'库存不足('+repertoryList.length+')'" name="库存不足">
          <div class="goods-menu">
            <el-tabs tab-position="left">
              <el-tab-pane v-for="item in repertoryTypeList" :key="item.id" :label="item.name+'('+item.itemList.length+')'" :name="item.name"></el-tab-pane>
            </el-tabs>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="'已下架('+underCarriageList.length+')'" name="已下架">
          <div class="goods-menu">
            <el-tabs tab-position="left">
              <el-tab-pane v-for="item in underCarriageTypeList" :key="item.id" :label="item.name+'('+item.itemList.length+')'" :name="item.name"></el-tab-pane>
            </el-tabs>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="'待上架('+beforeGroundList.length+')'" name="待上架">
          <div class="goods-menu">
            <el-tabs tab-position="left">
              <el-tab-pane v-for="item in beforeGroundTypeList" :key="item.id" :label="item.name+'('+item.itemList.length+')'" :name="item.name"></el-tab-pane>
            </el-tabs>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import GoodsItem from "@/components/Goods/GoodsItem.vue"
export default {
    name:'Goods',
    data() {
      return {
        activeName:"全部商品",
        goodsList:[
          {id:1,name:"杨枝甘露",repertory:99,price:9.9,sales:0,status:"已下架",img:require("@/assets/home/serve1.jpg"),type:"鲜果茶"},
          {id:2,name:"鲜橙茶",repertory:99,price:9.9,sales:0,status:"已上架",img:require("@/assets/home/serve1.jpg"),type:"鲜果茶"},
          {id:3,name:"百香果茶",repertory:0,price:9.9,sales:0,status:"已上架",img:require("@/assets/home/serve1.jpg"),type:"鲜果茶"},
          {id:4,name:"芒果沙冰",repertory:99,price:9.9,sales:0,status:"待上架",img:require("@/assets/home/serve1.jpg"),type:"沙冰"}
          ],
        goodsTypeList:[{id:1,name:"鲜果茶"},{id:2,name:"沙冰"}]
      };
    },
    methods: {},
    computed: {
      repertoryList(){
        return this.goodsList.filter(good=>good.repertory==0);
      },
      underCarriageList(){
        return this.goodsList.filter(good=>good.status=="已下架");
      },
      beforeGroundList(){
        return this.goodsList.filter(good=>good.status=="待上架");
      },
      allTypeList(){
        let allTypeList=[] ,index = 1;
        this.goodsTypeList.forEach(item => {
          let itemList = this.goodsList.filter(good=>good.type == item.name)
          allTypeList.push({id:index,name:item.name,itemList})
          index++
        });
        return allTypeList;
      },
      repertoryTypeList(){
        let repertoryTypeList=[] ,index = 1;
        this.goodsTypeList.forEach(item => {
          let itemList = this.repertoryList.filter(good=>good.type == item.name)
          repertoryTypeList.push({id:index,name:item.name,itemList})
          index++
        });
        return repertoryTypeList;
      },
      underCarriageTypeList(){
        let underCarriageTypeList=[] ,index = 1;
        this.goodsTypeList.forEach(item => {
          let itemList = this.underCarriageList.filter(good=>good.type == item.name)
          underCarriageTypeList.push({id:index,name:item.name,itemList})
          index++
        });
        return underCarriageTypeList;
      },
      beforeGroundTypeList(){
        let beforeGroundTypeList=[] ,index = 1;
        this.goodsTypeList.forEach(item => {
          let itemList = this.beforeGroundList.filter(good=>good.type == item.name)
          beforeGroundTypeList.push({id:index,name:item.name,itemList})
          index++
        });
        return beforeGroundTypeList;
      },
    },
    components: {
      GoodsItem
    },
    watch: {},
    created() {},
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
}
</script>
<style lang='scss'  scoped>

</style>