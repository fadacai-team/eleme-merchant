<!--  -->
<template>
<div class='flow-zh'>
    <v-echart ref="chart1" :options="orgOptions" id="zhnew"></v-echart>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:['secondData'],

data() {
//这里存放数据
return {
    }
},
//监听属性 类似于data概念
computed: {
    orgOptions:function(){
        return {
                title: {text: '漏斗图',
                    
                },
                grid:{
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}"
                },
                toolbox: {
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                legend: {
                    data: ['新客','老客']
                },

                series: [
                    {
                        type:'funnel',
                        left: '10%',
                        top: 60,
                        //x2: 80,
                        bottom: 60,
                        funnelAlign: 'right',
                        width: '20%',
                        // height: {totalHeight} - y - y2,
                        min: 40,
                        max: 200,
                        minSize: '50%',
                        maxSize: '180%',
                        sort: 'descending',
                        gap: 2,
                        label: {
                            show: true,
                            position: 'inside',
                            color:'#1989FA'
                        },
                        labelLine: {
                            length: 10,
                            lineStyle: {
                                width: 1,
                                type: 'solid',

                            }
                        },
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 1,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset:1, color: 'rgba(148, 183, 219,0.5)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#fff' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        },
                        emphasis: {
                            label: {
                                fontSize: 20
                            }
                        },
                        data: [
                            {value: 90, name: '访问'},
                            {value: 80, name: '加购'},
                            {value: 70, name: '结算'},
                            {value: 60, name: '支付'},
                            {value: 50, name: '下单'}
                        ],
                        markPoint:{
                            silent:true
                        }
                    },
                    {
                        name:'新客',
                        type:'funnel',
                        left: '30%',
                        top: 60,
                        //x2: 80,
                        bottom: 60,
                        funnelAlign: 'left',
                        width: '40%',
                        // height: {totalHeight} - y - y2,
                        min: 0,
                        max: 0,
                        minSize: '0%',
                        maxSize: '100%',
                        sort: 'descending',
                        gap: 2,
                        label: {
                            show: true,
                            normal:{
                                formatter:(value)=>{
                                    
                                    return value.data.value[0] +"\n\n" + value.data.value[1]
                                },
                                position: 'inside',
                                color:'rgba(170, 41, 218, 1)',
                            }
                        },
                        labelLine: {
                            length: 10,
                            lineStyle: {
                                width: 1,
                                type: 'solid'
                            }
                        },
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 1,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset:1, color: 'rgba(200, 167, 212,0.2)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#fff' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        },
                        emphasis: {
                            label: {
                                fontSize: 20
                            }
                        },
                        data:this.secondData.new
                    },
                    {
                        name:'老客',
                        type:'funnel',
                        left: '50%',
                        top: 60,
                        //x2: 80,
                        bottom: 60,
                        funnelAlign: 'left',
                        width: '40%',
                        // height: {totalHeight} - y - y2,
                        min: 0,
                        max: 0,
                        minSize: '0%',
                        maxSize: '100%',
                        sort: 'descending',
                        gap: 2,
                        
                        label: {
                            show: false,
                            
                            normal:{
                                formatter:(value)=>{
                                
                                    return value.data.value[0] +"\n\n" + value.data.value[1]
                                },
                                position: 'inside',
                                color:'rgba(170, 41, 218, 1)',
                            }
                        },
                        labelLine: {
                            length: 10,
                            lineStyle: {
                                width: 1,
                                type: 'solid'
                            }
                        },
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 1,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset:1, color: 'rgba(200, 167, 212,0.2)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#FAFBFC' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        },
                        emphasis: {
                            label: {
                                fontSize: 20
                            }
                        },
                        data: this.secondData.old
                    },
                    {
                        name:'漏斗图',
                        type:'funnel',
                        left: '70%',
                        top: 60,
                        //x2: 80,
                        bottom: 60,
                        funnelAlign: 'left',
                        width: '20%',
                        // height: {totalHeight} - y - y2,
                        min: 40,
                        max: 200,
                        minSize: '50%',
                        maxSize: '180%',
                        sort: 'descending',
                        gap: 2,
                        label: {
                            show: true,
                            position: 'inside',
                            color:'#1989FA'
                        },
                        labelLine: {
                            length: 10,
                            lineStyle: {
                                width: 1,
                                type: 'solid'
                            }
                        },
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 1,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset:1, color: 'rgba(148, 183, 219,0.5)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#fff' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        },
                        emphasis: {
                            label: {
                                fontSize: 20
                            }
                        },
                        data: [
                            {value: 90, name: '访问'},
                            {value: 80, name: '咨询'},
                            {value: 70, name: '订单'},
                            {value: 60, name: '点击'},
                            {value: 50, name: '展现'}
                        ]
                    },
                    
                ]
            }
    }
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
.flow-zh{
    width: 860px;
    height: 400px;
    >#zhnew{
        width: 860px;
        height: 400px;
    }
}
</style>