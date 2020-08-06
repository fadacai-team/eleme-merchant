<template>
     <div class="exchange-top">
       <div class="back">
            <i></i>
            <span @click="backRouter">返回</span>
            <b>|</b>
       </div>
       <h2 class="title">
           新建商品
       </h2>
   </div>
</template>

<script>
export default {
  name:"NewGood",
  components: {},
  data() {
    return {
    }
  }
}
</script>
<style lang='scss' scoped>
.exchange-top {
  font-size: 12px;
  border-bottom: 2px solid #E7EAEF;
  padding-bottom: 20px;
  .back {
      float: left;
      font-size: 14px;
    b{
      margin: 0 20px;
      color: #E8E9ED;
    }
    span{
      cursor: pointer;
    }
  }
  .title {
    margin-left: 60px;
    font-size: 18px;
  }
}
</style>