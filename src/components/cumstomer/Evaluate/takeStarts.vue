<!--  -->
<template>
    <div class="table">
        <div class="title">
            饿了么
        </div>
        <div class="dl">
            <div class="dt">4.0</div>
            <div class="dd">
                <div class="starts">
                    <span :class="['el-icon-star-on',{'active':grade1.score>=1}]"></span>
                    <span :class="['el-icon-star-on',{'active':grade1.score>=2}]"></span>
                    <span :class="['el-icon-star-on',{'active':grade1.score>=3}]"></span>
                    <span :class="['el-icon-star-on',{'active':grade1.score>=4}]"></span>
                    <span :class="['el-icon-star-on',{'active':grade1.score>=5}]"></span>
                   
                </div>
                <div class="mark">
                    <span>味道:</span>
                    <span>包装:</span>
                    <span>配送:</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:['grade1','grade2'],
data() {
//这里存放数据
return {
    allgrade:"",
         
    }
},
//监听属性 类似于data概念
computed: {
    
},
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
    // console.log(this.grade);
  
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
    .table {
  .title {
      font-size: 16px;
      color: black;
  }

  .dl {
      display: flex;
      margin-top: 10px;
    .dt {
        font-size: 26px;
        color: #E2A346;
        margin-right: 20px;
    }

    .dd {
      .starts {
        .el-icon-star-on {
            font-size: 16px;
        }
      }

      .mark {
        span {
            display: inline-block;
            font-size: 12px;
            padding: 2px;
            background-color: #F6F7FB;
            margin-right: 5px;
        }
      }
    }
  }
}
.active{
    color: red;
}
</style>