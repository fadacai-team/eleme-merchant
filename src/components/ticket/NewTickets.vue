<!--  -->
<template>
<div class='newTicket'>
  <section>
      <li v-for="(item,index) in location" :key="index">
      <div class="code">{{item.code}}</div>
      <div class="info">
          <div class="type">{{item.type}}</div>
          <div class="tips">{{item.tips}}</div>
      </div>
      <div class="createTime">{{item.createTime}}</div>
      <div class="count">{{item.count}}</div>
      <div class="sum">{{item.sum}} <span>元</span> </div>
      <div class="status">{{item.status}}</div>
      <div class="more">更多</div>
    </li>
  </section>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:["location"],
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  console.log(this.location);
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
    .newTicket {
      width: 100%;
        
        display: flex;
     section{
       width: 100%;

       color: black;
       font-size: 14px;

    li{
        width: 100%;
        line-height: 40px;
        display: flex;
        border-bottom: 1px solid #E4EDF2;
        justify-content: center;
        align-items: center;

      .code {
        flex: 1;padding-left: 20px;
    }

  .info {

     flex: 2;
    .name {
     
    }

    .tips {
      margin-top: -10px;
      font-size: 12px;
      color: gray;
    }
  }
  .sum{
    flex:1;
  }
  .count{
    flex: 1;
  }
  .status{
    flex: 1;
  }

  .createTime {
    flex: 2;
  }
  .more{
    flex: 1;cursor: pointer;
    &:hover{
      color:red;
      text-decoration: underline
      ;
    }
  }
      }
     }
}
</style>