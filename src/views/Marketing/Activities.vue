<!-- 我的活动 -->
<template>
<div class=''>
    <div class="active-cont">
        <div class="active-cont-cont">
            <div class="active-title">
                <h1>我的活动</h1>
                <div class="block">
                    <i class="el-icon-date"></i>
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            不限日期<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-calendar v-model="value">
                            </el-calendar>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div class="active-button">
                <template>
                    <el-button @click="open"><i class="el-icon-upload2"></i>导出效果数据</el-button>
                </template>
                <template>
                    <el-button @click="open"><i class="el-icon-setting"></i>设置</el-button>
                </template>
            </div>
        </div>
        <!-- <div class="block">
            <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
            </el-date-picker>
        </div> -->
    </div>
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
    value:'',
    value1:''
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    open:function(){
        this.$alert('<div class="block"><el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker></div>', {
        confirmButtonText: '确定',
        callback: action => {
            this.$message({
            type: 'info',
            message: `action: ${ action }`
            });
        }
        });
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
<style lang="less" scoped>
.active-cont{
    width: 880px;
    margin: 0 auto;
    h1{
        font-size: 25px;
    }
    .active-cont-cont{
        display: flex;
        justify-content: space-between;
        .active-title{
            display: flex;
            .block{
                margin-left: 15px;
                font-size: 12px;
                margin-top: 15px;
                i{
                    margin-right: 10px;
                    font-size: 18px;
                }
            }
        }
    }
}

</style>
<style lang="less">
.el-calendar-table .el-calendar-day {
    box-sizing: border-box;
    width: 50px;
    padding: 8px;
    height: 45px;
}
.el-dropdown-menu {
    width: 400px;
    height: 300px;
}
</style>