<!--  -->
<template>
<div class="">
    
        <div class="flow-qs">
            <v-echart ref="chart1" :options="orgOptions" id="qs" ></v-echart>

        </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:['flowqs','xAxis','isPersent'],
data() {
//这里存放数据
return { 
}
},
//监听属性 类似于data概念
computed: {
    orgOptions:function(){
        return {
                    legend: {
                        data: ['我的门店', '商圈同行均值']
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.xAxis
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel:{
                            show:true,
                            formatter:(value)=>{
                                return this.isPersent?value + " %": value;
                            }
                        }
                    },
                    series: [
                        {
                        data: this.flowqs.myShop,
                        type: 'line',
                        smooth: true,
                        name:"我的门店",
                        areaStyle:{
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                        offset: 0, color: '#66B1FC' // 0% 处的颜色
                                        }, 
                                        {
                                        offset: 1, color: '#ffffff' // 100% 处的颜色
                                        }
                                    ],
                                    global: false // 缺省为 false
                                }
                            }
                        },
                        {
                            data: this.flowqs.sameShop,
                            type: 'line',
                            smooth: true,
                            name:"商圈同行均值",
                            areaStyle:{
                                    color: {
                                    type: 'linear',
                                    colorStops: [
                                        {
                                        offset: 0, color: '#ffffff' // 0% 处的颜色
                                        }, 
                                        {
                                        offset: 1, color: '#ffffff' // 100% 处的颜色
                                        }
                                    ],
                                    global: false // 缺省为 false
                                }
                            }
                        },
                    ]
                }
    }

},
//监控data中的数据变化
watch: {
},
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
.flow-qs,#qs{
    width: 860px;
    height: 400px;
    h3{
        margin-bottom: 30px;
    }
}
</style>