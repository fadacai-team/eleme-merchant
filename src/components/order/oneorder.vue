
<!-- 订单 -->
<template>
<div class="box-card order">
    <el-row class="order-header">
        <el-col class="order-index" :span="1">
            4
        </el-col>
        <el-col class="clearfix" :span="23">
            <div>
                预计 00:10 送达
            </div>
            <div class="order-state">
                订单完成
            </div>
        </el-col>
    </el-row>
    <div class="order-content">
        <el-row class="order-user">
            <el-col class="" :span="1">
                <i class="el-icon-user"></i>
            </el-col>
            <el-col class="user-info clearfix" :span="23">
                <div class="user-order">
                    <span class="un">李**</span>·
                    <span class="phone">查看手机号</span>·
                    <span class="d-type">蜂鸟配送</span>·
                    <span class="vip-type">超级会员</span>·
                    <span class="other-info">近20天第4次下单</span>
                </div>
                <div class="order-position">
                    <span class="tip">订单完成3小时后隐藏</span>
                    <span class="distance">订单完成3小时后隐藏</span>
                    <span class="map">查看地图</span>
                </div>
            </el-col>
        </el-row>
        <el-divider></el-divider>

        <el-row class="ready-time">
            <el-col class="" :span="1">
                <i class="el-icon-dish-1"></i>
            </el-col>
            <el-col class="clearfix" :span="23">
                <span>备餐事件 </span>
                <span>3分41秒</span>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        
        <el-row class="order-timeline">
            <el-col class="" :span="1">
                <i class="el-icon-wind-power"></i>
            </el-col>
            <el-col class="clearfix" :span="23">
                <el-button v-if="timelinestate" @click="timelinestate=!timelinestate" type="text" class="open-btn">展开</el-button>
                <el-button v-else @click="timelinestate=!timelinestate" type="text" class="open-btn">合并</el-button>
                <div class="clearfix el-col el-col-23">
                    <ul class="el-timeline" :class="{'hide':timelinestate}">
                        <li class="el-timeline-item">
                            <div class="el-timeline-item__tail"></div>
                            <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--"></div>
                            <div class="el-timeline-item__wrapper">
                                <div class="el-timeline-item__timestamp is-bottom">2018-04-15</div>
                                <div class="el-timeline-item__content"> 进度 </div>
                            </div>
                        </li>
                        <li class="el-timeline-item">
                            <div class="el-timeline-item__tail"></div>
                            <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--"></div>
                            <div class="el-timeline-item__wrapper">
                                <div class="el-timeline-item__timestamp is-bottom">2018-04-15</div>
                                <div class="el-timeline-item__content"> 进度 </div>
                            </div>
                        </li>
                        <li class="el-timeline-item">
                            <div class="el-timeline-item__tail"></div>
                            <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--"></div>
                            <div class="el-timeline-item__wrapper">
                                <div class="el-timeline-item__timestamp is-bottom">2018-04-15</div>
                                <div class="el-timeline-item__content"> 进度 </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </el-col>
        </el-row>
        <el-divider></el-divider>

        <el-row class="productions">
            <el-col class="" :span="1">
                <i class="el-icon-shopping-bag-1"></i>
            </el-col>
            <el-col class="clearfix" :span="23">
                <div>3件商品</div>
                <el-row class="items">
                    <section>
                        <el-col :span="8" class="name">奶茶</el-col>
                        <el-col :span="8" class="count">x3</el-col>
                        <el-col :span="8" class="price">25.2</el-col>
                    </section>
                    <section>
                        <el-col :span="8" class="name">奶茶</el-col>
                        <el-col :span="8" class="count">x3</el-col>
                        <el-col :span="8" class="price">25.2</el-col>
                    </section>
                    <section>
                        <el-col :span="8" class="name">奶茶</el-col>
                        <el-col :span="8" class="count">x3</el-col>
                        <el-col :span="8" class="price">25.2</el-col>
                    </section>
                </el-row>
                <el-divider></el-divider>
                <section :span="8" class="other">
                    <section>
                        <header class="title">其他</header>
                        <el-col :span="8" class="name">配送费</el-col>
                        <el-col :span="8" class="count"></el-col>
                        <el-col :span="16" class="price">1.00</el-col>
                    </section>
                </section>
                <section :span="8" class="onsale">
                    <section>
                        <header class="title">优惠</header>
                        <el-col :span="8" class="name">店铺满减</el-col>
                        <el-col :span="8" class="count"></el-col>
                        <el-col :span="16" class="price">-3.00</el-col>
                    </section>
                </section>
            </el-col>
        </el-row>
        <el-divider></el-divider>

        <el-row class="">
            <el-col class="" :span="1">
                <i class="el-icon-user"></i>
            </el-col>
            <el-col class="clearfix" :span="23">
                
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row class="">
            <el-col class="" :span="1">
                <i class="el-icon-user"></i>
            </el-col>
            <el-col class="clearfix" :span="23">
                
            </el-col>
        </el-row>

    </div>
</div>

</template>

<script>
export default {
    name:'',
    components: {},
    data() {
        return {
            timelinestate:true,
            order:[]
        };
    },
    computed: {},
    watch: {},
    methods: {
    },
    created() {},
    mounted() {
        var _this = this
        this.$axios("http://39.105.114.242/elemeorder/").then(res=>{
            _this.order = res.orders;
        })
    },
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
.order{
    margin-top: 20px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 1px 5px 8px #67789975;
    align-items: center;
    line-height: 30px;
    >.el-row{
        padding: 20px;
    }
    .order-header{
        background-color: #f0f3f9;
        line-height: 30px;
        position: relative;
        .order-index{
            font-size: 30px;
            color: #1989fa;
            font-weight: 600;
        }
        .order-state{
            position: absolute;
            font-size: 14px;
            line-height: 30px;
            right: 26px;
            top:20px;
        }
    }
    .order-content{
        padding: 20px;
        .el-divider{
            margin: 12px 0;
        }
        .order-user{
            font-size: 14px;
            font-weight: 500;
            .user-info{
                span{
                    font-size: 14px;
                    font-weight: 300;
                    margin:0 10px;
                }
                .user-order{
                    .un{
                        font-weight: 600;
                        margin-left: 0;
                    }
                    .phone{
                        color:#4e8cfa;
                        cursor: pointer;
                    }
                }
                .order-position{
                    .tip{
                        margin-left: 0;
                    }
                    .distance{

                    }
                    .map{
                        color:#4e8cfa;
                        cursor: pointer;
                    }
                }
                
            }
        }
        .ready-time{
            span{
                margin-right: 10px;
            }
        }
        .order-timeline{
            .el-timeline{
                transition: .3s ease-in-out;
                li{
                    padding-bottom: 34px;
                    .el-timeline-item__node{
                        top: 4px;
                        left: 4px;
                    }
                    .el-timeline-item__tail{
                        top: 4px;
                        left: 10px;
                    }
                }
                li:first-child{
                    .el-timeline-item__node{
                        background-color: #1989fa;
                    }
                }
                .el-timeline-item__wrapper{
                    div{
                        float: left;
                        margin-right: 15px;
                    }
                }
            }
            .el-timeline.hide{
                height: 30px;
                overflow: hidden;
            }
        }
        .productions{
            .name,.count,.price{
                color: #5a5e66;
            }
            .count,.price{
                text-align: right;
                opacity: .8;
            }
            .price{
                padding-right: 8px;
            }
            .items{
            
            }
            .other,.onsale{
                header{
                    font-size: 12px;
                    opacity: .5;
                }
            }
        }
    }

}
</style>