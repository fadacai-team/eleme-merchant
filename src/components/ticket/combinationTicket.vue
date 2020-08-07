<!--  -->
<template>
<div class='ticketGroup'>
    <section>
        <div class="dl exchange">
            <div class="dt">
                类型
            </div>
            <div class="dd">
               <el-select v-model="value" :placeholder="daiTicket">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
         <div class="dl connect">
            <div class="dt">
                关联商品
            </div>
            <div class="dd">
                <el-input
                placeholder="请选择关联商品"
                v-model="input"
                clearable>
                </el-input>
            </div>
        </div>
         <div class="dl price">
            <div class="dt">
                原价
            </div>
            <div class="dd">
                 <el-input
                placeholder="请输入金额"
                v-model="input"
                clearable class="color-gray">
                </el-input>
                <i>元</i>
            </div>
        </div>
         <div class="dl page">
            <div class="dt">
                可用张数
            </div>
            <div class="dd">
               <el-input
                placeholder="请输入金额"
                v-model="input"
                clearable class="color-gray">
                </el-input>
                <i>张</i>
            </div>
        </div>
        
    </section>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:["daiTicket"],
data() {
//这里存放数据
return {
    input:"",
     options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
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
    .ticketGroup {
        border-bottom: 1px solid #E6E6E6;
       
  section {
        display: flex;
    .dt{    
        margin-bottom: 10px;
        &:after{
            content: "*";
            color: red;
        }

    }
    .exchange {
       

  .dd {
      margin-right: 10px;
  }
}

.connect {


  .dd {
       margin-right: 10px;
  }
}

.price {
 

  .dd {
       margin-right: 10px;
       position: relative;
    .color-gray {

    }

     i {
        position: absolute;
        height: 38px;
        width: 39px;
        background-color: #F4F6FA;
        right: 1px;
        top: 1px;
        border-left: 1px solid #C2C6CE;
        text-align: center;
        line-height: 38px;
        cursor: pointer;
    }
  }
}

.page {
 

  .dd {
   position: relative;
    .el-input--suffix {
        .el-input__inner{
              background-color: gray;
    }
        }
       

    i {
        position: absolute;
        height: 38px;
        width: 39px;
        background-color: #F4F6FA;
        right: 1px;
        top: 1px;
        border-left: 1px solid #C2C6CE;
        text-align: center;
        line-height: 38px;
        cursor: pointer;
    }
  }
}

  }
}
</style>