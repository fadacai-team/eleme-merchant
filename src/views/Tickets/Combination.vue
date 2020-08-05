<!--  -->
<template>
<div class='combination'>
    <comTop :titleName="titleArr[2]"></comTop>
    <div class="combination-content">
        <aside>卡券组合</aside>
        <div class="ticket-oprate">
            <p class="tips">为您的组合券包添加代金券或商品兑换券</p>
            <div class="cheked-radius">
                <el-radio v-model="radio" label="1">品牌代金券</el-radio>
                <el-radio v-model="radio" label="2">商品兑换券</el-radio>
                
            
            </div>
            <div class="exchange" v-show="radio==1">
                <section >
                <ticketGroup :daiTicket="ticketKind[0]"></ticketGroup>
            </section>
             <section>
                <ticketGroup :daiTicket="ticketKind[0]"></ticketGroup>
            </section>
            </div>

            <div class="daiTicket" v-show="radio==2">
                <section >
                <ticketGroup :daiTicket="ticketKind[1]"></ticketGroup>
            </section>
             <section>
                <ticketGroup :daiTicket="ticketKind[1]"></ticketGroup>
            </section>
            </div>
            
            
        </div>
    </div>
    <FilesImg :titleName="titleArr[2]"></FilesImg>
    <comFooter></comFooter>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import comTop from "../../components/ticket/combinationTop"
import FilesImg from "../../components/ticket/combinationFilesImg"
import comFooter from "../../components/ticket/ticketFooter"
import ticketGroup from "../../components/ticket/combinationTicket"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    comTop,
    FilesImg,
    comFooter,
    ticketGroup
},
data() {
//这里存放数据
return {
     radio: '2',
     ticketKind:["商品兑换券","代金券"],
     titleArr:[
        {title:"代金券",keywords:"店铺"},
        {title:"配送券",keywords:""},
        {title:"组合券",keywords:""},
        ],
    
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
   
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
<style lang='less' scoped>
.combination-content {
    margin-top: 80px;
    position: relative;
    aside {
         position: absolute;
        left: 10px;
        top: 40px;
    }

  .ticket-oprate {
      position: relative;
      left: 120px;
    p.tips {
        margin-bottom: 10px;
    }

    .cheked-radius {
        margin-bottom: 20px;
      label {
        input {

        }
      }
    }

    section {
        margin-bottom: 30px;
    }
  }
}
</style>