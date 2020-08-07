<!--  -->
<template>
<div class='first'>
    <li>
        <div class="dt">评价日期</div>
        <div class="dd">
            <b v-for="(item,index) in firstEva[0]" :key="index" @click="handlerClick1(item)" :class="{'active':active1==item}">
                {{item}}
            </b>
             <div class="block">
               <el-date-picker
                v-model="value2"
                type="daterange"
                align="right"
                unlink-panels
                range-separator=""
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
                size="small">
                </el-date-picker>
            </div>
        </div>
    </li>
    <li>
        <div class="dt">回复情况</div>
        <div class="dd">
            <b v-for="(item,index) in firstEva[1]" :key="index" @click="handlerClick2(item)" :class="{'active':active2==item}">
                {{item}}
            </b>
        </div>
    </li>
    <li>
        <div class="dt">评价类型</div>
        <div class="dd">
            <b v-for="(item,index) in firstEva[2]" :key="index" @click="handlerClick3(item)" :class="{'active':active3==item}">
                {{item}}
            </b>
        </div>
    </li>
    <li>
        <div class="dt">评价内容</div>
        <div class="dd">
            <b v-for="(item,index) in firstEva[3]" :key="index" @click="handlerClick4(item)" :class="{'active':active4==item}">
                {{item}}
            </b>
        </div>
    </li>
    <li>
        <div class="dt">评价来源</div>
        <div class="dd">
            <b v-for="(item,index) in firstEva[4]" :key="index" @click="handlerClick5(item)" :class="{'active':active5==item}">
                {{item}}
            </b>
        </div>
    </li>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    firstEva:[
        ["今天","近7天","近30天","近90天"],
        ["全部","未回复","已回复",],
        ["全部","差评（1-2星）","中评（3星）","好评（4-5星）"],
        ["全部","有内容评价","有图片评价"],
        ["全部","饿了么","饿了么星选"],
    ],
      pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: '',
        active1:"今天",
        active2:"全部",
        active3:"全部",
        active4:"全部",
        active5:"全部",
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handlerClick1(value){
        this.active1 = value;
       
    },
    handlerClick2(value){
        this.active2 = value;
       
    },
    handlerClick3(value){
        this.active3 = value;
       
    },
    handlerClick4(value){
        this.active4 = value;
       
    },
     handlerClick5(value){
        this.active5 = value;
       
    },
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
.first {
    position: relative;
  li {
      display: flex;
      margin-bottom: 10px;
    .dt {
         position: relative;
         margin-top: 7px;
        
    }

    .dd {
        display: flex;
        position: relative;
        left: 40px;
      b {
          margin-right: 20px;
          padding: 0 10px;       
          line-height: 34px;
          cursor: pointer;
      }
      .active{
        background-color: #E7F1FB;
        color: #6B93C7;
        border-radius: 5px;
      }
    }
  }
}
.el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner{
    padding: 5px;
    width: 200px;
    margin-top: 4px;
}
</style>