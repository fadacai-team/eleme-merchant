<!--  -->
<template>
<div class="floefb">
    <!-- <div class="flow-fb">
        <v-echart ref="chart1" :options="orgOptions" :auto-resize="true"></v-echart>
    </div> -->
    <el-table :data="flowfb" style="width:100%" :row-class-name="tableRowClassName">
        <el-table-column v-for="(item,index) in axis" :prop="'num'+index" :label="item" :key="item"> </el-table-column>
        <!-- <el-table-column prop="num0" label="num0"> </el-table-column>
        <el-table-column prop="num1" label="num1"> </el-table-column>
        <el-table-column prop="num2" label="num2"> </el-table-column>
        <el-table-column prop="num3" label="num3"> </el-table-column>
        <el-table-column prop="num4" label="num4"> </el-table-column> -->
    </el-table>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:['flowfb','axis'],
data() {
//这里存放数据
return {
    // orgOptions: {
    //     xAxis: {
    //         type: 'category',
    //         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    //     },
    //     yAxis: {
    //         type: 'value'
    //     },
    //     series: [{
    //         data: [820, 932, 901, 934, 1290, 1330, 1320],
    //         type: 'line',
    //         smooth: true
    //     }]
    // }
        
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
            return 'warning-row';
        } else if (rowIndex === 3) {
            return 'success-row';
        }
            return '';
        }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    console.log(this.flowfb,this.axis)
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
    .floefb{
        width: 860px;
    }
</style>