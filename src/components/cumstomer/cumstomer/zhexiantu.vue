<!--  -->
<template>
<div class='zhexiantu'>
   <v-echart :options="zhexiantu" id="qs"></v-echart>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:['item'],
data() {
//这里存放数据
return {
 zhexiantu : {
    title: {
        text: '一天用电量分布',
        subtext: '纯属虚构'
    },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['7-24','7-25','7-26','7-27','7-28','7-29','7-30']
    },
    yAxis: {
        type: 'value',
       
        axisPointer: {
            snap: true
        }
    },
    visualMap: {
        show: false,
        dimension: 0,
        pieces: [{
            lte: 6,
            color: 'green'
        }, {
            gt: 6,
            lte: 8,
            color: 'red'
        }, {
            gt: 8,
            lte: 14,
            color: 'green'
        }, {
            gt: 14,
            lte: 17,
            color: 'red'
        }, {
            gt: 17,
            color: 'green'
        }]
    },

    
    series: [
        {
            name: '新顾客',
            type: 'line',
            smooth: true,
            data: this.item.now,
            lineStyle:{
                color:"#3683D3"

            }
        },
          {
            name: '老顾客',
            type: 'line',
            smooth: true,
            areaStyle:{
                color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#B8DAFD' // 0% 处的颜色
                }, {
                    offset: 1, color: '#FFFFFF' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
            },
           
             lineStyle:{
               type:"dashed",
                color:'#C2C5CA'  
            },
            data: this.item.before,
            
        }
    ]
}



}
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
    .zhexiantu #qs{
        width: 800px;
        height: 400px;
    }
</style>