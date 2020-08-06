<!-- 营销 -->
<template>
<div class=''>
    <el-tabs type="border-card">
        <el-tab-pane label="待开始0">
            <div class="border-card">

            </div>
        </el-tab-pane>
        <el-tab-pane label="进行中4">
            <template>
                <el-table
                :data="tableData"
                border
                style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="活动类型"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="活动时间"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="活动规则"
                        width="347">
                    </el-table-column>
                    <el-table-column
                        prop="type"
                        label="状态"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="active"
                        label="操作"
                        width="100">
                    </el-table-column>
                </el-table>
            </template>
        </el-tab-pane>
        <el-tab-pane label="已失效0">角色管理</el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
export default {
    name:'',
    components: {},
    data() {
        return {
            length:1,
            tableData: [{
            date: '商品活动',
            name: '',
            address: '五个活动',
            type:"进行中",
            active:"详情"
          }, {
            date: '店铺满减',
            name: '2020-05-12至2020-08-12',
            address: '满20减3，满35减8，满50减12',
            type:"进行中",
            active:"详情"
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            type:"进行中",
            active:"详情"
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            type:"进行中",
            active:"详情"
          }]
        };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
}
</script>
<style lang='less'  scoped>
.border-card{
    height: 700px;
    background:#eee;
}
</style>
