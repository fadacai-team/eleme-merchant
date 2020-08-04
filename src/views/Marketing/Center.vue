<!-- 营销 -->
<template>
<div class=''>
    <div class="center-cont">
        <h1 class="center-title">营销中心</h1>
        <div class="center-cont-left">
            <p class="center-title-cont">
                <b><i class="el-icon-info"></i>【店外营销红包】和【超级会员红包】升级啦！</b><span>查看详情</span>
            </p>
            <div class="center-market-cont">
                <p class="market-top">
                    <b><i>[智能满减]</i> 即日下线</b>
                    <a href="#">详情点击</a>
                </p>
                <p class="market-title">
                    <b>限时报名</b>
                    <i>更多活动></i>
                </p>
                <div class="center-active">
                    
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'',
    components: {},
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
.center-cont {
    width: 980px;
    margin: 0 auto;
  .center-title {
      height: 50px;
      padding-left: 15px;
      color: #000;
  }
  .center-cont-left{
      width: 500px;
        .center-title-cont {
            height: 40px;
            width: 487px;
            background-color: #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 15px;
            padding:0 15px;
            b{
                font-weight: normal;
                font-size: 13px;
                .el-icon-info {
                    margin-right: 5px;
                }
            }
            span {
                color: #409EFF;
            }
        }
        .center-market-cont {
            height: 400px;
            margin-top: 10px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            padding: 15px;
            .market-top {
                height: 80px;
                background-color: #409EFF;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                border-radius: 3px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                b {
                    margin-left: 80px;
                    color: #fff;
                    i{
                        color: skyblue;
                        font-style: normal;
                    }

                }

                a {
                    width: 80px;
                    height: 30px;
                    background-color: blue;
                    color: #fff;
                    line-height: 30px;
                    text-align: center;
                    border-radius: 30px;
                    margin-top: 10px;
                    margin-left: 70px;
                }
            }
            .market-title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 10px;
                b{
                    font-weight: normal;
                    color: #999;
                }
                i{
                    font-style: normal;
                    color: #999;
                }
            }
        }
    }
}
</style>
