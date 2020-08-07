<template>
  <div class="showGoods">
    <div class="goodsItem">
      <div class="select">
        <input type="checkbox" v-model="isAllChecked">
      </div>
      <div class="info">商品</div>
      <div class="price">价格</div>
      <div class="repertory">库存</div>
      <div class="operate">操作</div>
    </div>
    <div class="goodsItem" v-for="(item,index) in itemList" :key="item.id">
      <div class="select">
        <input type="checkbox" v-model="item.isChecked">
      </div>
      <div class="info">
        <div class="pic">
          <img :src="item.img" alt="">
        </div>
        <div>
          <span>
            {{item.name}}
          </span>
          <span>
            月售：{{item.sales}}
          </span>
        </div>
      </div>
      <div class="price">
        ￥ <span>{{item.price}}</span>
      </div>
      <div class="repertory">
        <span>{{item.repertory}}</span>
        <el-button-group>
          <el-button size="mini">清空</el-button>
          <el-button size="mini">置满</el-button>
        </el-button-group>
      </div>
      <div class="operate">
        <el-button-group>
          <el-button size="mini"><router-link to="/goods/editgood">编辑</router-link></el-button>
          <el-button size="mini" @click="handle(item,item.status)">{{(item.status=="已下架"||item.status=="待上架")?"上架":"下架"}}</el-button>
          <el-button size="mini" @click="deleteGood(index)">删除</el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"showGoods",
  props:["dataSource"],
  data(){
    return {
      itemList : []
    }
  },
  computed:{
    isAllChecked: {
      get: function() {
        const len = this.itemList.length;
        if (len==0) {
          return false
        }
        for (let i = 0; i < len; i++) {
          const item = this.itemList[i];
          if (!item.isChecked) {
            return false;
          }
        }
        return true;
      },
      set: function(val) {
        if (val) {
          this.itemList.forEach(item => {
            item.isChecked = true;
          });
        } else {
          this.itemList.forEach(item => {
            item.isChecked = false;
          });
        }
      }
    },
  },
  methods:{
    handle(item,status){
      console.log(status);
      if (status=="已下架"||status=="待上架") {
        item.status='已上架'
      } else {
        item.status='已下架'
      }
    },
    deleteGood(index){
      this.$store.state.goodsList.splice(index, 1);
    }
  },
  mounted(){
    this.itemList = this.dataSource
  },
  watch:{
    dataSource:{
      deep:true,
      handler(val){
        this.itemList = val
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .showGoods{
    .goodsItem{
      display: flex;
      height: 80px;
      line-height: 80px;
      border-bottom:1px solid #e8ebf2 ;
      span{
        display: inline-block;
        width: 20px;
        margin-left: 10px;
      }
      .select{
        display: flex;
        align-items: center;
        height: 80px;
        width: 57px;
        input{
          width: 14px;
          height: 14px;
        }
      }
      .info{
        display: flex;
        flex: 5;
        .pic{
          display: flex;    
          align-items: center;
          width: 50px;
          img{
            height: 50px;
          }
        }
        span{
          width: 80px;
        }
      }
      .price{
        flex: 1;
      }
      .repertory,.operate{
        flex: 3;
      }
    }
  }
</style>