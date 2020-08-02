<!--  -->
<template>
<div >
    <el-menu 
        class="app-left-nav"
        :collapse="isCollapse"
        :router="router"
        default-active="2"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item text-color="blue" @click="isCollapse=!isCollapse">
            <i class="el-icon-menu"></i>
        </el-menu-item>
        <template v-for="(menu,index) in menulist">
            <el-menu-item v-if="menu.childList.length==0"  :index="menu.router" :key="index">
                <i class="el-icon-location"></i>
                <span>{{menu.name}}</span>
            </el-menu-item>
            <el-submenu v-else :index="menu.router" :key="index">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{menu.name}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-for="(item,i) in menu.childList" :tabindex="i" :index="item.router" :key="i">{{item.name}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </template>
        
    </el-menu>

</div>
</template>

<script>
export default {
    name:'',
    components: {},
    data() {
        return {
            isCollapse:false,
            router:true,
            menulist:[
                {
                    name:"首页",
                    router:"/index",
                    childList:[]
                },
                {
                    name:"订单",
                    router:"/order",
                    childList:[
                        {name:"订单处理",router:"/order/process"},
                        {name:"订单查询",router:"/order/search"},
                        {name:"索赔中心",router:"/order/property"},
                        {name:"订单设置",router:"/order/setting"},
                        {name:"企业订单",router:"/order/reservation"}
                    ]
                },
                {
                    name:"顾客",
                    router:"/customer",
                    childList:[
                        {name:"顾客管理",router:"/customer/process"},
                        {name:"顾客xx",router:"/customer/search"}
                    ]
                },
            ]
        };
    },
    computed: {},
    watch: {},
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
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

.app-left-nav:not(.el-menu--collapse) {
width: 200px;
min-height: 400px;
}
</style>