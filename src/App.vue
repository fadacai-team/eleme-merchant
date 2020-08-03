<template>
  <div id="app">
    <Bar />
    <Menu />
  </div>
</template>

<script>
import Bar from "@/components/layout/Bar.vue";
import Menu from "@/components/layout/Menu.vue";

export default {
  name: "App",
  components: {
    Bar,
    Menu
  }
};
</script>

<style lang='less' >
#app {
  font-size: 14px;
  color: #6c5f57;
  min-width: 960px;
}
html,body,footer,div,p,section,span,i,em,h1,h2,h3,h4,h5,h6,header,img,ul,ol,li{
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
#menu-btn{
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
li {
  list-style: none;
}
</style>