<!-- 营销 -->
<template>
<div class=''>
    <div class="tab-cont">
        <el-tabs type="border-card">
        <el-tab-pane label="待开始0">
            <div class="border-card">

            </div>
        </el-tab-pane>
        <el-tab-pane label="进行中4">
            <template>
                <el-table
                :data="tableData1"
                border
                style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="活动类型"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="活动时间"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="活动规则"
                        width="327">
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
        <el-tab-pane label="已失效0">
            <template>
                <el-table
                    :data="tableData2"
                    border
                    style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="活动类型"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="活动时间"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="活动规则"
                        width="327">
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
    </el-tabs>
    </div>
</div>
</template>

<script>
export default {
    name:'',
    components: {},
    data() {
        return {
            tableData1: [{
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
            date: '超级吃货红包',
            name: '2020-07-17至2020-08-16',
            address: '商户补贴3元',
            type:"进行中",
            active:"详情"
          }, {
            date: '减配送费',
            name: '2020-07-09至2020-10-09',
            address: '蜂鸟快送立减2.5元',
            type:"进行中",
            active:"详情"
          }],
          tableData2: [{
            date: '新用户立减',
            name: '2020-05-12至2020-05-31',
            address: '平台新客下单立减8元',
            type:"已作废",
            active:"详情"
          }, {
            date: '新用户立减',
            name: '2020-07-01至2020-07-31',
            address: '平台新客下单立减8元',
            type:"已作废",
            active:"详情"
          }, {
            date: '超级吃货红包',
            name: '2020-07-09至2020-07-16',
            address: '商户补贴3元',
            type:"已作废",
            active:"详情"
          }, {
            date: '新用户立减',
            name: '2020-06-01至2020-06-31',
            address: '平台新客下单立减8元',
            type:"已作废",
            active:"详情"
          }, {
            date: '减配送费',
            name: '2020-05-16至2020-06-26',
            address: '立减1.5元',
            type:"已作废",
            active:"详情"
          }
          ]
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
.tab-cont{
    margin-top: 15px;
    .border-card{
    height: 700px;
    background:#eee;
}
}
</style>
