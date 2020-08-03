<template>
  <div id="app">
    <el-container>
        <el-aside id="left-nav">
          <leftnav></leftnav>
        </el-aside>
        <el-container>
            <el-header id="top-bar">
              <topbar></topbar>
            </el-header>
            <el-main id="app-body">
              <router-view/>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import topbar from '@/components/TopBar'
import leftnav from '@/components/LeftNav'
export default {
    name:'',
    components: {
      topbar,leftnav
    },
    data() {
        return {
        };
    },
    computed: {},
    watch: {},
    methods: {
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
<style lang='less' >
html,body,footer,div,p,section,span,i,em,h1,h2,h3,h4,h5,h6,header,img,ul,li,ol{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
.clearfix::after{
  content: "";
  height: 0;
  display: block;
  width: 100%;
  visibility: hidden;
}
ul,li,ol{
  list-style: none;
}
#top-bar{
  background-color: #666;
}
#left-nav{
  height: 100vh;
  width: auto !important;
}
#app-body{
  height: calc(100vh - 60px);
  overflow-y: scroll;
}
#menu-btn{
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
}

</style>