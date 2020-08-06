<!-- 不可索赔 -->
<template>
<div class='cant-compensate'>
    <el-card>
        <el-page-header @back="goBack" content="近30天不可索赔订单"></el-page-header>
    </el-card>
    <el-row style="margin-top:30px">
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="orderId" label="流水号" ></el-table-column>
            <el-table-column prop="deniedReason" label="原因" ></el-table-column>
            <el-table-column prop="amount" label="金额" width="200"></el-table-column>
        </el-table>
    </el-row>
</div>
</template>

<script>
export default {
    name:'',
    components: {},
    data() {
        return {
            tableData: [
                {
                    orderId: "100027455049038461",
                    amount: 31.54,
                    date:"2020年6月6日",
                    compensable: false,
                    deniedReason: "非蜂鸟配送，不支持索赔",
                },
                {
                    orderId: "100027455049038461",
                    amount: 31.54,
                    date:"2020年6月6日",
                    compensable: false,
                    deniedReason: "非蜂鸟配送，不支持索赔",
                },
                {
                    orderId: "100027455049038461",
                    amount: 31.54,
                    date:"2020年6月6日",
                    compensable: false,
                    deniedReason: "超过索赔时间",
                },
                {
                    orderId: "100027455049038461",
                    amount: 31.54,
                    date:"2020年6月6日",
                    compensable: false,
                    deniedReason: "超过索赔时间",
                }
            ]
        };
    },
    computed: {},
    watch: {},
    methods: {
        goBack:function(){
            this.$router.push({name:"property"})
        }
    },
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
.cant-compensate{
    margin: 0 auto;
    max-width: 1220px;
    padding-top: 10px;
}
</style>