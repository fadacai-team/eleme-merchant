<!-- 营销 -->
<template>
<div class=''>
    <div class="center-cont">
        <h1 class="center-title">营销中心</h1>
        <div class="center-cont-middle">
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
                        <div class="center-active-left">
                            <p class="active-title">8月限时秒杀招商！【热卖商品限时热卖】</p>
                            <div class="active-title-bottom">
                                <div class="active-label">
                                    <p class="active-label-top">
                                        <span>首页专区</span>
                                        <span>引流神器</span>
                                    </p>
                                    <i>49797家店已报名</i>
                                </div>
                                <div class="active-button">
                                    <span>去报名</span>
                                </div>
                            </div>
                        </div>
                        <div class="center-active-left">
                            <p class="active-title">超级会员活动</p>
                            <div class="active-title-bottom">
                                <div class="active-label">
                                    <p class="active-label-top">
                                        <span>首页流量</span>
                                        
                                    </p>
                                    <i>1524家店已报名</i>
                                </div>
                                <div class="active-button">
                                    <span>去报名</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="market-title">
                        <b>下午茶商家都在用</b>
                    </p>
                    <div class="market-bottom">
                        <section class="market-bottom-items" v-for="msg,index in msgs">
                            <p>{{msg.text}}</p>
                            <b>{{msg.title}}</b>
                        </section>
                    </div>
                    
                </div>
                <div class="market-client">
                    <p class="client-title">引客进店</p>
                    <el-row :gutter="20">
                        <el-col :span="6" v-for="client,index in clients">
                            <div class="grid-content bg-purple">
                                <i :class=client.className></i>
                                <p class="cont1">{{client.cont1}}</p>
                                <p class="cont2">{{client.cont2}}</p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="market-client">
                    <p class="client-title">促进下单</p>
                    <el-row :gutter="20">
                        <el-col :span="6" v-for="dindan,index in dindans">
                            <div class="grid-content bg-purple">
                                <i :class=dindan.className></i>
                                <p class="cont1">{{dindan.cont1}}</p>
                                <p class="cont2">{{dindan.cont2}}</p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="market-client">
                    <p class="client-title">提升客单价</p>
                    <el-row :gutter="20">
                        <el-col :span="6" v-for="kedan,index in kedans">
                            <div class="grid-content bg-purple">
                                <i :class=kedan.className></i>
                                <p class="cont1">{{kedan.cont1}}</p>
                                <p class="cont2">{{kedan.cont2}}</p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="market-client">
                    <p class="client-title">刺激复购</p>
                    <el-row :gutter="20">
                        <el-col :span="6" v-for="fugou,index in fugous">
                            <div class="grid-content bg-purple">
                                <i :class=fugou.className></i>
                                <p class="cont1">{{fugou.cont1}}</p>
                                <p class="cont2">{{fugou.cont2}}</p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="market-client">
                    <p class="client-title">顾客管理</p>
                    <el-row :gutter="20">
                        <el-col :span="6" v-for="kehu,index in kehus">
                            <div class="grid-content bg-purple">
                                <i :class=kehu.className></i>
                                <p class="cont1">{{kehu.cont1}}</p>
                                <p class="cont2">{{kehu.cont2}}</p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="center-cont-right">
                <div class="right-title">
                    <h2>营销日历</h2>
                    <p @click="test">概览未来60天的营销活动</p>
                </div>
                <div class="right-block">
                    <el-calendar v-model="value">
                    </el-calendar>
                </div>
                <div class="today-title">
                    <i class="el-icon-date"></i>今天(<span>{{value | today}}</span>)
                </div>
                <div class="today_active">
                    <section class="today-active-items" v-for="text,index in texts">
                        <span>{{text.cont}}</span>
                        <b>{{text.right}}</b>
                    </section>
                </div>
                <div class="problem">
                    <h2>遇到问题了？</h2>
                    <div class="problem-list">
                        <section class="problem-list-items" v-for="item,index in items">{{item.cont}}</section>
                    </div>
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
    filters:{
        today(value){
            const d = value
            const Year = d.getFullYear()
            const Month = d.getMonth() + 1
            const Date1 = d.getDate()
            const str = Year + "年" + Month + "月" + Date1 + "日"
            return str
        }
    },
    data() {
        return {
            msgs:[
                {id:1,text:"减配送费",title:"订单量提升14%"},
                {id:2,text:"超值换购",title:"每单多赚3元"},
                {id:3,text:"门店新客立减",title:"新客增加9%"},
            ],
            value:new Date(),
            texts:[
                {id:1,cont:"商品活动",right:">"},
                {id:2,cont:"店铺满减",right:">"},
                {id:3,cont:"超级吃货红包",right:">"},
                {id:4,cont:"减配送费",right:">"},
            ],
            items:[
                {id:1,cont:'前往"本地生活-餐饮学院"，比别人更懂营销'},
                {id:1,cont:'看教程，3分钟玩转营销'},
                {id:1,cont:'查看常见问题'},
                {id:1,cont:'反馈问题或提建议'},
            ],
            clients:[
                {id:1,cont1:"平台营销红包",cont2:"多场景高效揽客",className:"el-icon-tickets"},
                {id:2,cont1:"超级吃货红包",cont2:"精准揽客",className:"el-icon-mobile"},
                {id:3,cont1:"店铺满减",cont2:"开店必备",className:"el-icon-s-ticket"},
                {id:4,cont1:"减配送费",cont2:"引流下单",className:"el-icon-s-opportunity"},
                {id:5,cont1:"扫码领红包",cont2:"线下引流线上",className:"el-icon-menu"},
            ],
            dindans:[
                {id:1,cont1:"商品活动",cont2:"推新品爆款",className:'el-icon-s-shop'},
                {id:1,cont1:"进店领红包",cont2:"促下单",className:'el-icon-mobile'},
                {id:1,cont1:"门店新客立减",cont2:"新客转化",className:'el-icon-s-custom'},
                {id:1,cont1:"店铺满赠",cont2:"提成交",className:'el-icon-s-shop'},
            ],
            kedans:[
                {id:1,cont1:'超值换购',cont2:'提升客单价',className:"el-icon-s-claim"}
            ],
            fugous:[
                {id:1,cont1:"下单返红包",cont2:"回头客",className:"el-icon-document-remove"},
                {id:1,cont1:"焦点返红包",cont2:"提复购频次",className:"el-icon-document-remove"},
            ],
            kehus:[
                {id:1,cont1:"精准管理",cont2:"",className:"el-icon-s-custom"}
            ]
        };
    },
    computed: {},
    watch: {},
    methods: {
        test:function(){
            console.log(this.value)
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
.center-cont {
    width: 980px;
    margin: 0 auto;
  .center-title {
      height: 50px;
      padding-left: 15px;
      color: #000;
  }
  .center-cont-middle{
      display: flex;
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
                height: 360px;
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
                .center-active{
                    height: 100px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 5px;
                    .center-active-left{
                        height: 100px;
                        width: 230px;
                        border-radius: 5px;
                        background-color: orange;
                        padding: 15px;
                        // overflow: hidden;
                        .active-title{
                            color: #000;
                            font-size: 14px;
                            width: 200px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow : ellipsis;
                        }
                        .active-title-bottom{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            cursor: pointer;
                            .active-label{
                                margin-top: 5px;
                                .active-label-top{
                                    display: flex;
                                    justify-content: space-between;
                                    
                                    span{
                                        width: 50px;
                                        height: 20px;
                                        margin-right: 8px;
                                        font-size: 12px;
                                        text-align: center;
                                        line-height: 20px;
                                        background-color: peru;
                                    }
                                }
                                i{
                                    font-style: normal;
                                    font-size: 10px;
                                }
                            }
                            .active-button{
                                span{
                                    display: inline-block;
                                    width: 60px;
                                    height: 30px;
                                    background-color: peru;
                                    color: #fff;
                                    border-radius: 30px;
                                    text-align: center;
                                    line-height: 30px;
                                }
                            }
                        }
                    }
                    .center-active-right{
                        width: 230px;
                        height: 100px;
                        background-color: orange;
                        border-radius: 5px;
                    }
                }
                .market-bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 15px;
                    .market-bottom-items {
                        cursor: pointer;
                        width: 150px;
                        height: 70px;
                        background-color: powderblue;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        border-radius: 5px;
                        p {
                            font-size: 20px;
                            color: #000;
                        }
                        b {
                            font-weight: normal;
                            color: rgb(169, 135, 250);
                            font-size: 13px;
                        }
                    }
                }
                
            }
            .market-client{
                margin-top: 20px;
                .client-title{
                    color: #000;
                    font-size: 18px;
                }
                    .el-row {
                        margin-bottom: 20px;
                        &:last-child {
                        margin-bottom: 0;
                        }
                    }
                    .el-col {
                        border-radius: 4px;
                        margin-top: 10px;
                    }
                    .bg-purple-dark {
                        background: #fff;
                    }
                    .bg-purple {
                        background: #fff;
                    }
                    .bg-purple-light {
                        background: #fff;
                    }
                    .grid-content {
                        border: 1px solid #999;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
                        width: 125px;
                        border-radius: 4px;
                        min-height: 85px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        i{
                            color:skyblue;
                            font-size: 18px;
                        }
                        .cont1{
                            color: #000;
                            font-size: 14px;
                            margin: 5px 0;
                        }
                        .cont2{
                            font-size: 12px;
                        }
                    }
                    .row-bg {
                        padding: 10px 0;
                        background-color: #f9fafc;
                    }
                }
        }
        .center-cont-right{
            margin-left: 35px;
            .right-title{
                display: flex;
                align-items: center;
                p{
                    margin-left: 10px;
                    margin-top: 10px;
                }
            }
            .right-block{
                width: 400px;
                height: 360px;
            }
            .today-title{
                margin-top: 15px;
                line-height: 22px;
                height: 22px;
                padding-left: 15px;
                color: #000;
                .el-icon-date{
                    margin-right: 10px;
                }
            }
            .today_active{
                margin-top: 15px;
                width: 300px;
                padding-left: 20px;
                .today-active-items{
                    width: 300px;
                    height: 40px;
                    display: flex;
                    margin-top: 5px;
                    align-items: center;
                    padding: 0 8px;
                    border:1px solid #999;
                    border-radius: 5px;
                    justify-content: space-between;
                    b{
                    cursor: pointer;
                    }
                }
                .today-active-items:hover{
                    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
                }
            }
            .problem{
                width: 300px;
                margin-top: 20px;
                padding-left: 15px;
                h2{
                    color: #000;
                    font-style: normal;
                    font-weight: 900px;
                }
                .problem-list-items{
                    padding-left: 10px;
                    margin-top: 25px;
                    cursor: pointer;
                }
                .problem-list-items:hover{
                    color: #000;
                    text-decoration: cornflowerblue;
                }

            }
        }
      
  }
}
</style>
<style lang="less">
.el-calendar-table .el-calendar-day {
    box-sizing: border-box;
    padding: 8px;
    height: 40px;
}

</style>
