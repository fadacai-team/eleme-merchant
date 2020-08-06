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
    <div class="goodsItem" v-for="item in itemList" :key="item.id">
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
        <span>清空</span>
        <span>置满</span>
      </div>
      <div class="operate">
        <span>编辑</span>
        <span>下架</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"showGoods",
  props:["itemList"],
  computed:{
    isAllChecked: {
      get: function() {
        const len = this.itemList.length;
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
        flex: 4;
        .pic{
          display: flex;    
          align-items: center;
          width: 50px;
          img{
            height: 50px;
          }
        }
      }
      .price{
        flex: 1;
      }
      .repertory{
        flex: 2;
      }
      .operate{
        flex: 2;
      }
    }
  }
</style>