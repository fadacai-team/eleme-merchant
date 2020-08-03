<!-- 订单处理 -->
<template>
<div class='order-container'>
    <order></order>
    <order></order>
</div>
</template>

<script>
import order from '@/components/order/oneorder.vue'
export default {
    name:'',
    components: {
        order
    },
    data() {
        return {};
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
.order-container{
    max-width: 1220px;
    margin:0 auto;
}
</style>