<template>
  <div class="new-good">
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
    <div class="content">
      <div class="item">
        <span>商品分类*</span>
        <div class="input">
          <el-select v-model="type" placeholder="请选择">
            <el-option
              v-for="item in this.$store.state.goodsTypeList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="item">
        <span>商品名称*</span>
        <div class="input">
          <el-input v-model="name" placeholder=""></el-input>
        </div>
      </div>
      <div class="item">
        <span>商品价格*</span>
        <div class="input">
          <el-input v-model="price" placeholder=""></el-input>
        </div>
      </div>
      <div class="item">
        <span>商品库存*</span>
        <div class="input">
          <el-input v-model="repertory" placeholder=""></el-input>
        </div>
      </div>
      <div  class="item">
        <span>商品图片</span>
        <div class="input">
          <el-upload class="upload" action="#">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </div>
      </div>   
    </div>
    <div class="footer">
      <el-button @click="backRouter">取消</el-button>
      <el-button type="primary" @click="saveGood">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name:"NewGood",
  components: {},
  data() {
    return {
      type:"",
      name:"",
      price:"",
      repertory:""
    }
  },
  methods: {
    backRouter(){
      this.$router.go(-1);
    },
    saveGood(){
      let len = this.$store.state.goodsList.length;
      if (this.input!="") {
        this.$store.state.goodsList.push({
          id:len+1,
          name:this.name,
          repertory:this.repertory,
          price:this.price,
          sales:0,
          status:"待上架",
          img:require("@/assets/home/serve1.jpg"),
          type:this.type,
          isChecked:false
        })
        this.backRouter()
      }
    }
  },
}
</script>
<style lang='scss' scoped>
.new-good{
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
  .content{
    width: 500px;
    margin: 0 auto;
    .item{
      margin-top: 20px;
      span{
        display: inline-block;
        width: 80px;
        height: 40px;
        line-height: 40px;
        margin-right: 20px;
      }
      .input{
        display: inline-block;
        height: 40px;
        width: 400px;
      }
    }
  }
  .footer{
    margin: 50px auto;
    width: 100px;
    display: flex;
  }
}
</style>