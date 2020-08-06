<template>
  <div class="new-type">
    <div class="exchange-top">
      <div class="back">
        <span @click="backRouter">返回</span>
        <b>|</b>
      </div>
      <h2 class="title">
          新建分类
      </h2>
    </div>
    <div class="content">
      <div class="item">
        <span>分类名称*</span>
        <div class="input">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="item">
        <span>分类描述</span>
        <div class="input">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 2}"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
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
  name:"NewType",
  components: {},
  data() {
    return {
      input:"",
      textarea:""
    }
  },
  methods: {
    backRouter(){
      this.$router.go(-1);
    },
    saveGood(){
      let len = this.$store.state.goodsTypeList.length;
      if (this.input!="") {
        this.$store.state.goodsTypeList.push({
          id:len+1,
          name:this.input,
          desc:this.textarea,
        })
        this.backRouter()
      }
    }
  },
}
</script>
<style lang='scss' scoped>
.new-type{
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