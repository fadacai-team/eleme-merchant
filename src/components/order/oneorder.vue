
<!-- 订单 -->
<template>
<div :id="'order'+order.id"  class="box-card order clearfix">
    <el-row id="no-print"  class="order-header">
        <el-col class="order-index" :span="1">
            {{order.daySn}}
        </el-col>
        <el-col class="clearfix" :span="23">
            <div>
                {{order.headPromptForAppV2[0].text}}
            </div>
            <div class="order-state">
                {{order.statusForPrint}}
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
                    <span class="un">{{order.consigneeName}}</span>·
                    <span class="phone">查看手机号</span>
                    <template v-for="(item, index) in order.userTips" >
                        ·<span :key="index" class="user-tip">{{item.content}}</span>
                    </template>
                </div>
                <div class="order-position">
                    <span class="tip">{{order.consigneeAddress}}</span>
                    <span class="distance">{{order.distance}}</span>
                    <span @click="getMap" class="map">查看地图</span>
                </div>
            </el-col>
        </el-row>
        <el-divider></el-divider>

        <el-row class="ready-time">
            <el-col class="" :span="1">
                <i class="el-icon-dish-1"></i>
            </el-col>
            <el-col class="clearfix" :span="23">
                <span>备餐时间 </span>
                <span>{{order.mealCompleteButton.prepareTime | secondToTime}}</span>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row class="order-timeline">
            <el-col class="" :span="1">
                <i class="el-icon-wind-power"></i>
            </el-col>
            <el-col class="clearfix" :span="23">

                <div class="clearfix el-col el-col-23">
                    <ul class="el-timeline">
                        <li class="el-timeline-item">
                            <div class="el-timeline-item__tail"></div>
                            <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--"></div>
                            <div class="el-timeline-item__wrapper">
                                <div class="el-timeline-item__timestamp is-bottom">{{ order.settledTime | formatDate("mm:ss") }}</div>
                                <div class="el-timeline-item__content"> {{order.statusForPrint}} </div>
                            </div>
                        </li>
<transition name="timeline">
                        <div id="timeline-wraper" v-show="timelinestate" >
                            <li   class="el-timeline-item" v-for="(item,index) in order.distTraceView.timeLines" :key="index">
                                <div class="el-timeline-item__tail"></div>
                                <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--"></div>
                                <div class="el-timeline-item__wrapper">
                                    <div class="el-timeline-item__timestamp is-bottom">{{item.time.message}}</div>
                                    <div class="el-timeline-item__content"> {{item.status.message}} </div>
                                </div>
                            </li>
                        </div>
</transition>
                <el-button  id="no-print" v-if="timelinestate" @click="timelinestate=!timelinestate" type="text" class="open-btn">合并</el-button>
                <el-button   id="no-print" v-else @click="timelinestate=!timelinestate" type="text" class="open-btn">展开</el-button>
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
                <div style="font-size:16px;font-weight:700;">{{order.goodsSummary}}</div>
                <el-row class="items" v-for="group in order.newGroups" :key="group.type">
<transition name="productions">
                    <div id="productions-wrapper" v-show="productionstate">
                        <section class="item" v-for="item in group.items" :key="item.vfoodId">
                            <el-col :span="8" class="name">{{item.name}}</el-col>
                            <el-col :span="14" class="count">x{{item.quantity}}</el-col>
                            <el-col :span="2" class="price">{{parseFloat(item.price).toFixed(2)}}</el-col>
                        </section>
                    </div>
</transition>
                <el-button  id="no-print" v-if="productionstate" @click="productionstate=!productionstate" type="text" class="open-btn">合并</el-button>
                <el-button  id="no-print" v-else @click="productionstate=!productionstate" type="text" class="open-btn">展开</el-button>

                </el-row>
                <el-divider></el-divider>
                <section :span="8" class="other">

                    <section>
                        <header class="title">其他</header>
                        <el-col :span="8" class="name">配送费</el-col>
                        <el-col :span="16" class="price">{{order.deliveryFee | formatMoney}}</el-col>
                    </section>

                    
                </section>
                <section :span="8" class="onsale">
                    <header class="title">优惠</header>
                    <section v-for="(item,index) in order.activities" :key="index">
                        <el-col :span="8" class="name">{{item.name}}</el-col>
                        <el-col :span="16" class="price">{{item.amount | formatMoney}}</el-col>
                    </section>
                </section>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row class="user-pay">
            <el-col class="" :span="1">
                <i class="el-icon-user"></i>
            </el-col>
            <el-col class="clearfix" :span="23">
                <section>
                    <el-col :span="8" class="name">顾客实付</el-col>
                    <el-col :span="16" class="price">已支付 ¥ {{order.payAmount | formatMoney}}</el-col>
                </section>
                <section>
                    <el-col :span="8" class="name">本次收入</el-col>
                    <el-col :span="16" class="income price">¥ {{order.income | formatMoney}}</el-col>
                </section>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row class="options">
            <el-col class="" :span="1">
                <i class="el-icon-user"></i>
            </el-col>
            <el-col class="clearfix" :span="23"> 
                <section>
                    <el-col :span="8" class="msgs">
                        <p>完成时间 : {{order.settledTime | formatDate}}</p>
                        <p>下单时间 : {{order.activeTime | formatDate}}</p>
                        <p>单号 : {{order.id}}</p>
                    </el-col>
                    <el-col :span="16" class="btns">
                        <el-button  id="no-print" @click="getPrint">打印</el-button>
                        <el-button  id="no-print">订单退款</el-button>
                    </el-col>
                </section>
            </el-col>
        </el-row>
            <el-dialog
            :title="order.consigneeName+' 的订单路线'"
            :visible.sync="dialogVisible"
            width="600px"
            height="800px">
                <el-row v-loading="loading">
                    <div :id="'map'+order.id" class="map" style="border:1px solid rgba(20,100,230,0.8)"></div>
                </el-row>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="goCenter">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
    </div>
</div>

</template>

<script>
import formatDate from '@/utils/date.js'
import AMapLoader from '@amap/amap-jsapi-loader';
 import print from 'print-js'

export default {
    name:'',
    components: {},
    filters:{
        formatDate(time,fm) {
            fm = fm?fm:"yyyy-MM-dd hh:mm";
            let date = new Date(time)
            return formatDate( fm ,date);
        },
        formatMoney(money){
            return parseFloat(money).toFixed(2)
        },
        secondToTime(sec){
            return parseInt(sec/60) + "分" + sec%60 + "秒";
        }
    },
    props:["order"],
    data() {
        return {
            loading:true,
            qishouPosition: [116.435559, 39.87021],
            originPoint:[116.397933,39.844818],
            endPoint:[116.440655,39.878694],
            thismap:{},
            dialogVisible: false,
            timelinestate:false,
            productionstate:false,
        };
    },
    computed: {
    },
    watch: {
    },
    methods: {
        getPrint:function(){
            this.timelinestate=true
            this.productionstate=true
            setTimeout(()=>{
                printJS({
                    printable: 'order'+this.order.id,
                    type: 'html',
                    //properties: [
                    //    { field: 'name', displayName: '姓名', columnSize:`50%`},
                    //    { field: 'sex', displayName: '性别',columnSize:`50%`},
                    //],
                    // header: `<p class="custom-p"> 名单 </p>`,
                    // style: '#printCons {width: 600px;} .no-print{width: 0px} .itemText1 { width: 200px } .itemText2 { width: 200px } .itemText3 { width: 200px } .itemText4 { width: 200px }',
                    // gridHeaderStyle:'font-size:12px; padding:3px; border:1px solid; font-weight: 100; text-align:left;',
                    // gridStyle:'font-size:12px; padding:3px; border:1px solid; text-align:left;',
                    // repeatTableHeader: true,
                    scanStyles:true,
                    targetStyles: ['*'],
                    ignoreElements:['no-print','bc','gb']
                })
            },1000)
        },
        goCenter:function(){
            this.thismap.setFitView();
        },
        getMap:function(){
            this.dialogVisible=true
            var _this = this
            AMapLoader.load({
                "key": "39ccdca2d63e032c438afe48559bbea3",              // 申请好的Web端开发者Key，首次调用 load 时必填
                "version": "1.4.15",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
                "plugins": ["AMap.Riding","AMap.Icon","AMap.Size"],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
                "AMapUI": {             // 是否加载 AMapUI，缺省不加载
                    "version": '1.1',   // AMapUI 缺省 1.1
                    "plugins":[],       // 需要加载的 AMapUI ui插件
                },
                "Loca":{                // 是否加载 Loca， 缺省不加载
                    "version": '1.3.2'  // Loca 版本，缺省 1.3.2
                },
            }).then((AMap)=>{
                var id = "map" + _this.order.id
                var thismap = new AMap.Map(id, {
                center:[(_this.originPoint[0]+_this.endPoint[0])/2,(_this.originPoint[1]+_this.endPoint[1])/2],
                zoom: 14
            });
            var m3 = new AMap.Marker({
                position:_this.qishouPosition,
                icon: new AMap.Icon({
                    size:new AMap.Size(40,40),
                    image: require('../../assets/images/qishou.png'),
                    imageSize: new AMap.Size(40, 40),
                    anchor: 'center',
                })
            });
            thismap.add(m3)
                var ridingOption = {
                    map: thismap,
                    // panel: "panel",
                    policy: 1,
                    hideMarkers: false,
                    isOutline: true,
                    outlineColor: '#ffeeee',
                    autoFitView: true
                }
                var riding = new AMap.Riding(ridingOption)
                //根据起终点坐标规划骑行路线
                riding.search(_this.originPoint,_this.endPoint, function(status, result) {
                    // result即是对应的公交路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_RidingResult
                    if (status === 'complete') {
                        console.log('骑行路线数据查询成功')
                        _this.loading= false
                    } else {
                        console.log('骑行路线数据查询失败' + result)
                    }
                });
                thismap.on('complete',function(){
                    _this.loading= false
                })
            }).catch(e => {
                console.log(e);
            })
        }
    },
    created() {},
    mounted() {
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
.map{
    width: 100%;
    height: 600px;
}
.order{
    margin-top: 20px;
    border-radius: 6px;
    box-shadow: 1px 5px 8px #67789975;
    align-items: center;
    line-height: 30px;
    background-color: white;
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
                    .user-tip{
                        font-size: 14px;
                        font-weight: 300;
                        margin:0 10px;
                    }
                }
                .order-position{
                    .tip{
                        margin-left: 0;
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
                    height: 34px;
                    .el-timeline-item__node{
                        top: 4px;
                        left: 4px;
                    }
                    .el-timeline-item__tail{
                        top: 4px;
                        left: 10px;
                    }
                }
                >li:first-child{
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
        .user-pay{
            line-height: 30px;
            .name{
                font-size: 16px;
                font-weight: 500;
            }
            .price{
                font-size: 16px;
                text-align: right;
                padding-right: 10px;
            }
            .income{
                color: red;
            }
        }
        .options{
            .msgs{
                p{
                    font-size: 12px;
                    color: rgb(99, 99, 99);
                    line-height: 16px;
                }
            }
            .btns{
                .el-button{
                    margin:10px 10px 0;
                    float: right;
                }
            }
        }
    }
    
}

#timeline-wraper{
    overflow: hidden;
    transition: all .5s ease-in-out;
}
.timeline-enter-active,.timeline-leave-active{
    max-height: 600px;
}
.timeline-enter,.timeline-leave-to{
    max-height: 0px;
}

#productions-wrapper{
    overflow: hidden;
    transition: all .5s ease-in-out;
    .item{
        height: 26px;
    }
}
.productions-enter-active,.productions-leave-active{
    max-height: 600px;
}
.productions-enter,.productions-leave-to{
    max-height: 0px;
}
</style>