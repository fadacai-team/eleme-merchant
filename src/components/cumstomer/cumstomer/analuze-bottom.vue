<!--  -->
<template>
<div class='order-location'>
    <el-tabs type="card" v-model="activeFatherTabs">

        <el-tab-pane v-for="(item,index) in location" :name="index+''" :label="item.label" :key="item.name"></el-tab-pane>
        </el-tabs>
    <el-tabs v-model="activeSonTabs">

         <el-tab-pane v-for="(item,index) in location[0].bottomLabel" :name="index+''" :label="item" :key="item"></el-tab-pane>
    </el-tabs>
    <section>
        <div class="title">
            <b>排名</b>
            <b>地段名称</b>
            <b>顾客</b>
            <b>客单价</b>
        </div>
         <LocationPlace :location.sync="location[activeFatherTabs].dataArr[activeSonTabs].data" :isPersent="location[activeFatherTabs].dataArr[activeSonTabs].isPersent" ></LocationPlace>

        
    </section>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import LocationPlace from "../../cumstomer/cumstomer/CusButton"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    LocationPlace,
},
data() {
//这里存放数据
return {
      activeName: 'first',
      activeFatherTabs:0,
      activeSonTabs:0,
      location:[
            {   
                name:'first',
                label:"昨天",
                bottomLabel:["本店热门地段","商圈潜力地段"],
                dataArr:[
                    {
                        isPersent:false,
                        data:[
                            {  name:1,localName:"义务高层次人才创业园",count:3,price:23  },
                            {  name:2,localName:"义务高层次人才创业园",count:3,price:23  },
                            {  name:3,localName:"义务高层次人才创业园",count:3,price:23  },
                            {  name:4,localName:"义务高层次人才创业园",count:3,price:23  },
                            {  name:5,localName:"义务高层次人才创业园",count:3,price:23  },
                            {  name:6,localName:"义务高层次人才创业园",count:3,price:23  },
                        ]                            
                    },
                    {
                        isPersent:false,
                          data:[
                            {  name:1,localName:" 季宅1区",count:4,price:25  },
                            {  name:2,localName:"季宅1区",count:4,price:24  },
                            {  name:4,localName:"季宅1区",count:4,price:24  },
                            {  name:4,localName:"季宅1区",count:4,price:24  },
                            {  name:5,localName:"季宅1区",count:4,price:24  },
                            {  name:6,localName:"季宅1区",count:4,price:24  },
                        ]
                    },
                   
                ]
            },
            {
                name:"second",
                label:"近7天",
                dataArr:[
                    {
                        isPersent:false,
                         data:[
                            {  name:1,localName:"义务高层次人才创业园",count:6,price:19  },
                            {  name:2,localName:"义务高层次人才创业园",count:6,price:19  },
                            {  name:3,localName:"义务高层次人才创业园",count:6,price:19  },
                            {  name:4,localName:"义务高层次人才创业园",count:6,price:19  },
                            {  name:5,localName:"义务高层次人才创业园",count:6,price:19  },
                            {  name:6,localName:"义务高层次人才创业园",count:6,price:19  },
                        ]

                    },
                    {
                        isPersent:false,
                        data:[
                            {  name:1,localName:"季宅1区",count:8,price:30  },
                            {  name:2,localName:"季宅1区",count:8,price:30  },
                            {  name:4,localName:"季宅1区",count:8,price:30  },
                            {  name:4,localName:"季宅1区",count:8,price:30  },
                            {  name:5,localName:"季宅1区",count:8,price:30  },
                            {  name:6,localName:"季宅1区",count:8,price:30  },
                        ]
                    },
                   
                ]
            },
            {
                name:"third",
                label:"近30天",
                dataArr:[
                    {
                        isPersent:false,
                        data:[
                            {  name:1,localName:"义务高层次人才创业园",count:26,price:18  },
                            {  name:2,localName:"义务高层次人才创业园",count:26,price:18  },
                            {  name:3,localName:"义务高层次人才创业园",count:26,price:18  },
                            {  name:4,localName:"义务高层次人才创业园",count:26,price:18  },
                            {  name:5,localName:"义务高层次人才创业园",count:26,price:18  },
                            {  name:6,localName:"义务高层次人才创业园",count:26,price:18  },
                        ]
                    },
                    {
                        isPersent:false,
                         data:[
                                {  name:1,localName:"季宅1区",count:48,price:26  },
                                {  name:2,localName:"季宅1区",count:48,price:26  },
                                {  name:4,localName:"季宅1区",count:48,price:26  },
                                {  name:4,localName:"季宅1区",count:48,price:26  },
                                {  name:5,localName:"季宅1区",count:48,price:26  },
                                {  name:6,localName:"季宅1区",count:48,price:26  },
                            ]
                    },
                   
                ]
            },
            
        ],
      
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
     handleClick(tab, event) {
        // console.log(tab, event);
      }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    console.log(this.location[0].bottomlabel);
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
.el-tabs--border-card>.el-tabs__header,#bck{
    background-color: white;
}
</style>