<template>
  <div class="goods-detail">
    <h2>商品管理</h2>
    <div class="goods-tab">
      <el-tabs v-model="activeName">
        <el-tab-pane :label="'全部商品('+this.$store.state.goodsList.length+')'" name="全部商品">
          <GoodsTypeList :dataSource="allTypeList"/>
        </el-tab-pane>
        <el-tab-pane :label="'库存不足('+repertoryList.length+')'" name="库存不足">
          <GoodsTypeList :dataSource="repertoryTypeList"/>
        </el-tab-pane>
        <el-tab-pane :label="'已下架('+underCarriageList.length+')'" name="已下架">
          <GoodsTypeList :dataSource="underCarriageTypeList"/>
        </el-tab-pane>
        <el-tab-pane :label="'待上架('+beforeGroundList.length+')'" name="待上架">
          <GoodsTypeList :dataSource="beforeGroundTypeList"/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import GoodsTypeList from "@/components/Goods/GoodsTypeList.vue"
export default {
    name:'Goods',
    components: {
      GoodsTypeList,
    },
    data() {
      return {
        activeName:"全部商品"
      };
    },
    methods: {},
    computed: {
      repertoryList(){
        return this.$store.state.goodsList.filter(good=>good.repertory==0);
      },
      underCarriageList(){
        return this.$store.state.goodsList.filter(good=>good.status=="已下架");
      },
      beforeGroundList(){
        return this.$store.state.goodsList.filter(good=>good.status=="待上架");
      },
      allTypeList(){
        let allTypeList=[] ,index = 1;
        this.$store.state.goodsTypeList.forEach(item => {
          let itemList = this.$store.state.goodsList.filter(good=>good.type == item.name)
          allTypeList.push({id:index,name:item.name,itemList})
          index++
        });
        return allTypeList;
      },
      repertoryTypeList(){
        let repertoryTypeList=[] ,index = 1;
        this.$store.state.goodsTypeList.forEach(item => {
          let itemList = this.repertoryList.filter(good=>good.type == item.name)
          repertoryTypeList.push({id:index,name:item.name,itemList})
          index++
        });
        return repertoryTypeList;
      },
      underCarriageTypeList(){
        let underCarriageTypeList=[] ,index = 1;
        this.$store.state.goodsTypeList.forEach(item => {
          let itemList = this.underCarriageList.filter(good=>good.type == item.name)
          underCarriageTypeList.push({id:index,name:item.name,itemList})
          index++
        });
        return underCarriageTypeList;
      },
      beforeGroundTypeList(){
        let beforeGroundTypeList=[] ,index = 1;
        this.$store.state.goodsTypeList.forEach(item => {
          let itemList = this.beforeGroundList.filter(good=>good.type == item.name)
          beforeGroundTypeList.push({id:index,name:item.name,itemList})
          index++
        });
        return beforeGroundTypeList;
      },
    }
}
</script>
<style lang='scss'  scoped>

</style>