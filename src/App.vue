<template>
  <div id="app">
    <el-container>
      <el-header ><Bar /></el-header>
      <el-container>
        <el-aside :width="this.$store.state.menuWidth" id="left-nav"><Menu /></el-aside>
        <el-main id="app-body">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Bar from "@/components/layout/Bar.vue";
import Menu from "@/components/layout/Menu.vue";

export default {
  name: "App",
  components: {
    Bar,
    Menu,
  }
};
</script>

<style lang='less' >
#app {
  font-size: 14px;
  color: #6c5f57;
  min-width: 1020px;
}
html,body,footer,div,p,section,span,i,em,h1,h2,h3,h4,h5,h6,header,img,ul,ol,li,a{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.clearfix {
  *zoom: 1;
}
.clearfix:before,
.clearfix:after {
  display: block;
  clear: both;
  height: 0;
  font-size: 0;
  content: "";
}
em,i{
  font-style: normal;
}
b,strong{
  font-weight: normal;
}
ul,ol,li{
  list-style: none;
}
a {
  text-decoration: none;
}

input {
  outline: none;
}
#app-body{
  height: calc(100vh - 60px);
  overflow-y: scroll;
}
#left-nav{
  height: calc(100vh - 60px);
  overflow: hidden;
  overflow-y: scroll;
}

</style>