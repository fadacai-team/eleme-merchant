
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
            order:{
                "id" : "2131186193263424558",
                "shopId" : 337546626,
                "state" : "COMPLETED",
                "shopName" : "斟沏茶咖(杨村店)",
                "restaurantName" : "斟沏茶咖(杨村店)",
                "city" : "金华",
                "daySn" : 4,
                "activeTime" : "2020-08-02T23:40:54",
                "settledTime" : "2020-08-03T00:00:05",
                "remark" : "",
                "payment" : "ONLINE",
                "bookedTime" : null,
                "invoiceTitle" : null,
                "showGroups" : false,
                "newGroups" : [
                {
                    "name" : "1号篮子",
                    "type" : "NORMAL",
                    "items" : [
                    {
                        "id" : 1880498692,
                        "skuId" : 100000212249070778,
                        "name" : "草莓奶优-大杯[常规糖+少冰]",
                        "categoryId" : 1,
                        "price" : 10,
                        "quantity" : 1,
                        "total" : 10,
                        "discount" : 0,
                        "displayQuantity" : true,
                        "additions" : [],
                        "newSpecs" : [
                        {
                            "name" : "规格",
                            "value" : "大杯"
                        }
                        ],
                        "attributes" : [
                        {
                            "name" : "甜度",
                            "value" : "常规糖"
                        },
                        {
                            "name" : "温度",
                            "value" : "少冰"
                        }
                        ],
                        "extendCode" : "",
                        "barCode" : "",
                        "weight" : 1,
                        "userPrice" : 0,
                        "shopPrice" : 0,
                        "vfoodId" : 1829278158,
                        "partRefund" : false,
                        "ingredients" : [],
                        "isCombo" : false,
                        "comboItems" : [],
                        "relatedItems" : null,
                        "uniqueId" : "e406c603-3da0-4de3-83ec-e0decfc87c28",
                        "ingredientIds" : null,
                        "foodGroup" : null
                    },
                    {
                        "id" : 1880498643,
                        "skuId" : 100000212240007354,
                        "name" : "椰果奶茶-大杯[常规糖+冰]",
                        "categoryId" : 1,
                        "price" : 10,
                        "quantity" : 1,
                        "total" : 10,
                        "discount" : 0,
                        "displayQuantity" : true,
                        "additions" : [],
                        "newSpecs" : [
                        {
                            "name" : "规格",
                            "value" : "大杯"
                        }
                        ],
                        "attributes" : [
                        {
                            "name" : "甜度",
                            "value" : "常规糖"
                        },
                        {
                            "name" : "温度",
                            "value" : "冰"
                        }
                        ],
                        "extendCode" : "",
                        "barCode" : "",
                        "weight" : 1,
                        "userPrice" : 0,
                        "shopPrice" : 0,
                        "vfoodId" : 1829294093,
                        "partRefund" : false,
                        "ingredients" : [],
                        "isCombo" : false,
                        "comboItems" : [],
                        "relatedItems" : null,
                        "uniqueId" : "81bf6019-27e8-4aae-b9f5-eb1278efe7ac",
                        "ingredientIds" : null,
                        "foodGroup" : null
                    },
                    {
                        "id" : 1880535841,
                        "skuId" : 100000212239995066,
                        "name" : "紫薯豌豆球",
                        "categoryId" : 1,
                        "price" : 6,
                        "quantity" : 1,
                        "total" : 6,
                        "discount" : 0,
                        "displayQuantity" : true,
                        "additions" : [],
                        "newSpecs" : [],
                        "attributes" : [],
                        "extendCode" : "",
                        "barCode" : "",
                        "weight" : 1,
                        "userPrice" : 0,
                        "shopPrice" : 0,
                        "vfoodId" : 1829260071,
                        "partRefund" : false,
                        "ingredients" : [],
                        "isCombo" : false,
                        "comboItems" : [],
                        "relatedItems" : null,
                        "uniqueId" : "87ba115f-d2a2-4f6d-8d38-5e11d8098e13",
                        "ingredientIds" : null,
                        "foodGroup" : null
                    }
                    ]
                }
                ],
                "paymentStatus" : "SUCCESS",
                "status" : "SETTLED",
                "invalidType" : null,
                "invalidRemark" : null,
                "tips" : [],
                "refundStatus" : "NO_REFUND",
                "refundRecords" : [],
                "cancelStatus" : "NO_CANCEL",
                "consigneeName" : "李**",
                "consigneePhones" : [
                "181****2895"
                ],
                "consigneeSecretPhones" : [],
                "newConsigneeSecretPhones" : [
                "收餐人 181****2895"
                ],
                "phoneAlertDescription" : "若号码中有【逗号】或【转】，则需要先拨通11位主机号，再手动输入逗号或转之后的分机号，3小时内有效，若无法拨通，请将订单号短信发至“10690510777”，系统将派发有效手机号。",
                "secretPhoneExpireTime" : null,
                "consigneeAddress" : "订单完结3小时后,隐藏顾客地址",
                "distance" : "324m",
                "times" : 2,
                "payAmount" : 24,
                "income" : 16.51,
                "hongbao" : 0,
                "restaurantPart" : -3,
                "elemePart" : 0,
                "orderActivityParts" : [
                {
                    "partName" : "商户承担",
                    "partValue" : -3,
                    "weight" : 2
                },
                {
                    "partName" : "优惠总计",
                    "partValue" : -3,
                    "weight" : 10
                }
                ],
                "deliveryCost" : 0,
                "deliveryFee" : 1,
                "vipDeliveryFeeDiscount" : 0,
                "packageFee" : 0,
                "serviceFee" : -3.69,
                "goodsTotal" : 26,
                "goodsCount" : 3,
                "goodsTotalWithoutPackage" : 26,
                "activityTotal" : -3,
                "activities" : [
                {
                    "categoryId" : 12,
                    "name" : "店铺满减",
                    "amount" : -3,
                    "elemePart" : 0,
                    "restaurantPart" : 3,
                    "familyPart" : 0,
                    "userPart" : 0,
                    "orderAllPartiesPartList" : [
                    {
                        "partName" : "商家补贴",
                        "partAmount" : "3.0"
                    }
                    ]
                }
                ],
                "merchantActivities" : [
                {
                    "categoryId" : 12,
                    "name" : "店铺满减",
                    "amount" : -3,
                    "elemePart" : 0,
                    "restaurantPart" : 3,
                    "familyPart" : 0,
                    "userPart" : 0,
                    "orderAllPartiesPartList" : [
                    {
                        "partName" : "商家补贴",
                        "partAmount" : "3.0"
                    }
                    ]
                }
                ],
                "merchantActivityPart" : -3,
                "orderTraceTime" : null,
                "cookingTime" : "2020-08-02T23:54:54",
                "expectDeliveryCost" : 0,
                "expectDeliveryCostDetail" : [],
                "feedbackStatus" : "UNCOMMENT",
                "reminderOrder" : null,
                "downgraded" : false,
                "showConfirmOrderButton" : false,
                "showPrintOrderButton" : true,
                "showInvalidOrderButton" : false,
                "callDeliveryType" : "DISABLE",
                "remindOrderType" : null,
                "merchantDeliverySubsidy" : -2.5,
                "customerActualFee" : 1,
                "deliveryFeeTotal" : 3.5,
                "orderType" : null,
                "anonymousOrder" : true,
                "headPromptForPC" : "<font color='#0091EA' bgcolor='#FFFFFF'></font>预计 00:10 送达",
                "headPromptForAppV2" : [
                {
                    "text" : "预计 00:10 送达",
                    "fgColor" : "#0091EA",
                    "bgColor" : "#FFFFFF"
                },
                {
                    "text" : " ",
                    "fgColor" : "#FF9800",
                    "bgColor" : "#FFFFFF"
                }
                ],
                "orderLatestStatus" : "订单完成",
                "statusDesc" : null,
                "statusForPrint" : "订单完成",
                "userTips" : [
                {
                    "tipCategory" : "TIP",
                    "contentColor" : "#999999",
                    "backColor" : "#FFFFFF",
                    "content" : "蜂鸟快送",
                    "priority" : 20,
                    "hint" : "",
                    "tipType" : ""
                },
                {
                    "tipCategory" : "TIP",
                    "contentColor" : "#999999",
                    "backColor" : "#FFFFFF",
                    "content" : "超级会员",
                    "priority" : 40,
                    "hint" : "",
                    "tipType" : ""
                },
                {
                    "tipCategory" : "TIP",
                    "contentColor" : "#999999",
                    "backColor" : "#FFFFFF",
                    "content" : "近180天第2次下单",
                    "priority" : 80,
                    "hint" : "",
                    "tipType" : ""
                }
                ],
                "orderSourceTag" : "饿了么",
                "goodsSummary" : "共 3 件商品",
                "distTraceView" : {
                "traceViewType" : "DELIVERY_ORDER",
                "traceView" : {
                    "time" : {
                    "message" : "00:00",
                    "color" : "#666666",
                    "imageUrl" : null
                    },
                    "status" : {
                    "message" : "已送达",
                    "color" : "#666666",
                    "imageUrl" : null
                    },
                    "traceDesc" : {
                    "message" : "骑手:张亮耀",
                    "color" : "#999999",
                    "imageUrl" : null
                    },
                    "statusDesc" : null,
                    "imageUrl" : null,
                    "description" : null,
                    "descImg" : "NONE",
                    "descDialog" : null,
                    "descParameter" : null,
                    "refundImages" : []
                },
                "deliveryFeeDetail" : null,
                "reverseOrderDetail" : null,
                "buttonList" : [],
                "timeLines" : [
                    {
                    "time" : {
                        "message" : "23:57",
                        "color" : "#999999",
                        "imageUrl" : null
                    },
                    "status" : {
                        "message" : "骑手已取餐",
                        "color" : "#999999",
                        "imageUrl" : null
                    },
                    "traceDesc" : null,
                    "statusDesc" : null,
                    "imageUrl" : null,
                    "description" : null,
                    "descImg" : "NONE",
                    "descDialog" : null,
                    "descParameter" : null,
                    "refundImages" : []
                    },
                    {
                    "time" : {
                        "message" : "23:43",
                        "color" : "#999999",
                        "imageUrl" : null
                    },
                    "status" : {
                        "message" : "骑手已到店",
                        "color" : "#999999",
                        "imageUrl" : null
                    },
                    "traceDesc" : null,
                    "statusDesc" : null,
                    "imageUrl" : null,
                    "description" : null,
                    "descImg" : "NONE",
                    "descDialog" : null,
                    "descParameter" : null,
                    "refundImages" : []
                    },
                    {
                    "time" : {
                        "message" : "23:42",
                        "color" : "#999999",
                        "imageUrl" : null
                    },
                    "status" : {
                        "message" : "待骑手取餐",
                        "color" : "#999999",
                        "imageUrl" : null
                    },
                    "traceDesc" : null,
                    "statusDesc" : null,
                    "imageUrl" : null,
                    "description" : null,
                    "descImg" : "NONE",
                    "descDialog" : null,
                    "descParameter" : null,
                    "refundImages" : []
                    },
                    {
                    "time" : {
                        "message" : "23:42",
                        "color" : "#999999",
                        "imageUrl" : null
                    },
                    "status" : {
                        "message" : "待分配骑手",
                        "color" : "#999999",
                        "imageUrl" : null
                    },
                    "traceDesc" : null,
                    "statusDesc" : null,
                    "imageUrl" : null,
                    "description" : null,
                    "descImg" : "NONE",
                    "descDialog" : null,
                    "descParameter" : null,
                    "refundImages" : []
                    },
                    {
                    "time" : {
                        "message" : "23:42",
                        "color" : "#999999",
                        "imageUrl" : null
                    },
                    "status" : {
                        "message" : "待分配配送商",
                        "color" : "#999999",
                        "imageUrl" : null
                    },
                    "traceDesc" : null,
                    "statusDesc" : null,
                    "imageUrl" : null,
                    "description" : null,
                    "descImg" : "NONE",
                    "descDialog" : null,
                    "descParameter" : null,
                    "refundImages" : []
                    },
                    {
                    "time" : {
                        "message" : "23:42",
                        "color" : "#999999",
                        "imageUrl" : null
                    },
                    "status" : {
                        "message" : "已呼叫配送",
                        "color" : "#999999",
                        "imageUrl" : null
                    },
                    "traceDesc" : null,
                    "statusDesc" : null,
                    "imageUrl" : null,
                    "description" : null,
                    "descImg" : "NONE",
                    "descDialog" : null,
                    "descParameter" : null,
                    "refundImages" : []
                    }
                ],
                "extra" : {
                    "countDown" : 0,
                    "hasMoreContacts" : true,
                    "evaluationRider" : "UNCOMMENT",
                    "riderPhone" : "17681921782",
                    "claimButton" : "NONE",
                    "noClaimReason" : "",
                    "showAddFee" : false,
                    "disDeliveryName" : "",
                    "disDeliveryTitle" : "",
                    "disDeliveryDescription" : "",
                    "detailUrlForMobile" : null,
                    "detailUrlForPC" : null,
                    "countDownTips" : null,
                    "isCallDelivery" : false
                }
                },
                "refundOrderTraceView" : null,
                "reverseOrderTraceView" : null,
                "deliveryServiceType" : "CONTROLLED",
                "deliveryTime" : "",
                "enquiry" : null,
                "feeDetail" : {
                "min" : 0,
                "max" : 0,
                "fee" : 0,
                "currentFee" : 0,
                "recommendFee" : 0,
                "chooseList" : null
                },
                "leftConfirmTime" : -1,
                "claimTraceView" : null,
                "noClaimReason" : "",
                "showLiabilityJudgment" : true,
                "liabilityJudgmentView" : null,
                "agreeRefundContent" : "若您觉得因配送原因导致订单退款，可在72小时内申请索赔",
                "incomeDetail" : [
                {
                    "name" : "菜价",
                    "amount" : "26.0"
                },
                {
                    "name" : "商户承担活动补贴",
                    "amount" : "-3.0"
                },
                {
                    "name" : "替用户承担配送费",
                    "amount" : "-2.5"
                },
                {
                    "name" : "抽佣服务费（技术服务费）",
                    "amount" : "-3.69"
                },
                {
                    "name" : "时段加价",
                    "amount" : "-0.3"
                },
                {
                    "name" : "本单收入",
                    "amount" : "16.51"
                }
                ],
                "remindOrderTypes" : [],
                "deliveryRecommends" : null,
                "userTags" : [
                "超级会员"
                ],
                "phoneChanged" : false,
                "leftShipmentTime" : -1,
                "showRefundOrderButton" : true,
                "noRefundOrderReason" : "",
                "showCustomerPhone" : true,
                "countDown" : null,
                "printLogo" : true,
                "ticketPrintContext" : {
                "phoneAlert" : "13282962485转125（分机号），3小时内有效；若无法拨通，请用短信将订单号发至10690510777，将收到新的联系号码。",
                "predictTime" : "08-03 00:10",
                "totalDiscount" : -3,
                "totalAmount" : 27,
                "newPrintInfos" : [
                    "订单已完成"
                ]
                },
                "baiduWaimai" : false,
                "userExtraInfo" : {
                "giverPhone" : "",
                "greeting" : ""
                },
                "displayIMButton" : false,
                "orderBusinessType" : 0,
                "pickUpNumber" : 0,
                "printInfo" : [
                {
                    "printContent" : "--订单完成--"
                }
                ],
                "secretPhoneDesc" : "",
                "mealCompleteButton" : {
                "visible" : true,
                "showMealCompleteButton" : false,
                "enable" : true,
                "completeTime" : "23点45分 已出餐",
                "title" : "确认出餐",
                "prepareTime" : 221,
                "maxPrepareTime" : 221,
                "suggestCompleteTime" : "建议 23:55 前出餐"
                },
                "consigneeAddressImage" : null,
                "useConsigneeAddressImage" : false,
                "ticketConsigneeAddress" : "订单完结3小时后,隐藏顾客地址",
                "grayFeature" : {
                "printUserTicketSwitch" : true,
                "ticketPrintContextSwitch" : false,
                "newUserPhoneGraySwitch" : true,
                "newEstimatedIncomeSwitch" : false
                },
                "costInfos" : [
                {
                    "costType" : "PLATFORM_SERVICE_FEE",
                    "name" : "平台服务费",
                    "amount" : "-3.99"
                },
                {
                    "costType" : "MARKETING_EXPENSES",
                    "name" : "营销类支出",
                    "amount" : "-5.5"
                }
                ],
                "estimatedIncomeExplainUrl" : "https://tb.ele.me/wow/zele/act/estimatedrevenue?wh_biz=tm",
                "riderReportTraceView" : null
            }
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