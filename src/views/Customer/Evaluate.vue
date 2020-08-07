<!-- 顾客评价 -->
<template>
<div class='cus-pingjia'>
    <div class="top clear-float" >
        <div class="title"> 顾客评价</div>
        <div class="title-right">查看评价分析 
            <span class="el-icon-paperclip"></span>
        </div>
    </div>
    <div class="title-bottom clear-float">
        <section class="left">
        <startMark :grade1='pingjia[0]'></startMark>
        </section>
            <section class="right">
                <startMark :grade1='pingjia[1]'></startMark>
        </section>
    </div>
    <div class="content">
         <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部评价" name="first">
                <firstEva></firstEva>
                 <userEva v-for="(item,index) in userEvaluate" :key="index" :userArr="item" :sumEva='Math.floor((item.w+item.b)/2)'></userEva>
                </el-tab-pane>
            <el-tab-pane label="优质评价" name="second">
                     <userEva v-for="(item,index) in userEvaluate2" :key="index" :userArr="item" :sumEva='Math.floor((item.w+item.b)/2)'></userEva>
            </el-tab-pane>
            <el-tab-pane label="晒评价" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="回复设置" name="fourth">定时任务补偿</el-tab-pane>
            <el-tab-pane label="申诉历史" name="fiveth">申诉历史</el-tab-pane>
            
        </el-tabs>
        <div class="userEva">
           
        </div>
    </div>
  
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import startMark from "@/components/cumstomer/Evaluate/takeStarts"
import firstEva from "@/components/cumstomer/Evaluate/firstEvaluate"
import userEva from "@/components/cumstomer/Evaluate/firstEvaPingJia"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    startMark,
    firstEva,
    userEva,
},
data() {
//这里存放数据
return {
    activeName: 'first',
    pingjia:[
        {score:4.0,name:"饿了吗",w:4.2,b:4.3,p:4.5},
        {score:4.0,name:"饿了吗星选",w:5.0,b:4.5,p:4.7},
    ],
    userEvaluate:[
        {username:'丁一',w:2,b:5,buy:"花青冰沙-中杯','草莓冰沙-中杯'，'柠檬雪泡-中杯",isZan:true,evaTime:"2020-07-30 14:59",imgs:"头像3"},
        {username:'胡二',w:4,b:5,buy:"芒果-中杯','草莓冰沙-中杯'，'柠檬雪泡-中杯",isZan:true,evaTime:"2020-07-30 14:59",imgs:"头像7"},
        {username:'张三',w:5,b:5,buy:"花青冰沙-中杯','草莓冰沙-中杯'，'柠檬雪泡-中杯",isZan:true,evaTime:"2020-07-30 14:59",imgs:"头像5"},
        {username:'李四',w:4,b:5,buy:"花青冰沙-中杯','草莓冰沙-中杯'，'柠檬雪泡-中杯",isZan:true,evaTime:"2020-07-30 19:02",imgs:"头像4"},
        {username:'王五',w:5,b:5,buy:"花青冰沙-中杯,草莓冰沙-中'，柠檬雪泡-中杯",isZan:false,evaTime:"2020-07-30 10:05",imgs:"头像6"},
        {username:'赵六',w:3,b:5,buy:"花青冰沙-中杯,'草莓冰沙-中杯'，'柠檬雪泡-中杯'",isZan:true,evaTime:"2020-07-30 12:09",imgs:"头像2"},
        {username:'孙七',w:1,b:5,buy:"柠檬雪泡-中杯",isZan:true,evaTime:"2020-07-30 13:59",imgs:"头像3"},
        {username:'周八',w:5,b:5,buy:"草莓冰沙-中杯，柠檬雪泡-中杯",isZan:false,evaTime:"2020-07-38 18:59",imgs:"头像1"},
        {username:'吴九',w:5,b:5,buy:"草莓冰沙-中杯，柠檬雪泡-中杯",isZan:false,evaTime:"2020-07-38 18:59",imgs:"头像10"},
        {username:'郑十',w:5,b:5,buy:"柠檬雪泡-中杯",isZan:false,evaTime:"2020-07-38 18:59",imgs:"头像8"},
    ],
     userEvaluate2:[
        
        
        {username:'张三',w:5,b:5,buy:"花青冰沙-中杯','草莓冰沙-中杯'，'柠檬雪泡-中杯",isZan:true,evaTime:"2020-07-30 14:59",imgs:"头像5"},
        {username:'王五',w:5,b:5,buy:"花青冰沙-中杯,草莓冰沙-中'，柠檬雪泡-中杯",isZan:false,evaTime:"2020-07-30 10:05",imgs:"头像6"},
        {username:'周八',w:5,b:5,buy:"草莓冰沙-中杯，柠檬雪泡-中杯",isZan:false,evaTime:"2020-07-38 18:59",imgs:"头像1"},
        {username:'吴九',w:5,b:5,buy:"草莓冰沙-中杯，柠檬雪泡-中杯",isZan:false,evaTime:"2020-07-38 18:59",imgs:"头像10"},
        {username:'郑十',w:5,b:5,buy:"柠檬雪泡-中杯",isZan:false,evaTime:"2020-07-38 18:59",imgs:"头像8"},
    ]
}
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
     handleClick(tab, event) {
        console.log(tab, event);
     
      }
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
.cus-pingjia {
    width: 900px;
    position: relative;
    left: 0;
    right: 0;
    margin: 0 auto;
  .top {
    .title {
        float: left;
        font-size: 18px;
        color: black;
    }

    .title-right {
        float: right;
    }
   
   
  }
   .title-bottom{
       margin: 30px 0;
        section.left {
            float: left;
            padding-right: 90px;
            border-right: 1px solid black;
        }

        section.right {
            padding-left: 90px;
        float: left;
        }
    }
}
.clear-float{
    &::after{
        content: "";
        display: block;
        clear: both;
    }
}

</style>