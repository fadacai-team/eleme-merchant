<!--  -->
<template>
<div class="flow">
    <div>
        <h3>流量转化</h3>
        <el-tabs   v-model="activeFatherZh">
            <el-tab-pane label="全部顾客" name="0">
                <el-tabs type="card"  v-model="activeSonZh">
                    <el-tab-pane v-for="(item,index) in flowZh[0].bottomLabel" :label="item" :name="index+''" :key="item"></el-tab-pane>
                </el-tabs>
                <flowuserzh :arrData="flowZh[0].flowZhArr[activeSonZh].userArr"></flowuserzh>
            </el-tab-pane>


            <el-tab-pane label="新顾客" name="1">
                <el-tabs type="card"  v-model="activeSonZh">
                    <el-tab-pane v-for="(item,index) in flowZh[1].bottomLabel" :label="item" :name="index+''" :key="item"></el-tab-pane>
                </el-tabs>
                <flownewuser :secondData="flowZh[1].flowZhArr[activeSonZh].userArr"></flownewuser>
            </el-tab-pane>
        </el-tabs>
    </div>


    <div>
        <h3>流量趋势</h3>
        <!-- 初始写法 -->
        <!-- <el-tabs   v-model="activeFatherQs" type="card">
                <el-tab-pane v-for="item in flowQs" :key="item.name" :label="item.label" :name="item.name" >
                    <el-tabs v-model="activeSonQs">
                        <el-tab-pane v-for="data in item.flowQsArr" :key="data.name1" :label="data.label1" :name="data.name1">
                            <flowqs :flowqs="data.data" :isPersent="data.isPersent" :xAxis="item.xAxis"></flowqs>
                        </el-tab-pane>
                        
                    </el-tabs>
                </el-tab-pane>
        </el-tabs> -->
        <el-tabs v-model="activeFatherQs" type="card">
            <el-tab-pane v-for="(item,index) in flowQs" :name="index+''" :label="item.label" :key="item.name"></el-tab-pane>
            <!-- 第一次优化 -->
            <!-- <el-tab-pane name="0" label="今天"></el-tab-pane>
            <el-tab-pane name="1" label="每天"></el-tab-pane>
            <el-tab-pane name="2" label="每周"></el-tab-pane>
            <el-tab-pane name="3" label="每月"></el-tab-pane> -->
        </el-tabs>
        <el-tabs v-model="activeSonQs">
            <!-- <el-tab-pane name="0" label="访问人数"></el-tab-pane>
            <el-tab-pane name="1" label="下单人数"></el-tab-pane>
            <el-tab-pane name="2" label="下单率"></el-tab-pane> -->
            <!-- 第二次优化 -->
            <el-tab-pane v-for="(item,index) in flowQs[0].bottomLabel" :name="index+''" :label="item" :key="item"></el-tab-pane>
        </el-tabs>
        <flowqs :flowqs.sync="flowQs[activeFatherQs].flowQsArr[activeSonQs].data" :isPersent="flowQs[activeFatherQs].flowQsArr[activeSonQs].isPersent" :xAxis="flowQs[activeFatherQs].xAxis"></flowqs>
    </div>

    <div>
        <h3>流量分布</h3>
        
        <div class="flow-top">
            <el-tabs   v-model="activeFatherFb" type="card" class="flow-top-left">
                <el-tab-pane v-for="(item,index) in flowFb" :key="item.name" :label="item.label" :name="index+''" ></el-tab-pane>
            </el-tabs>
            <p>时间</p>
        </div>


        <el-tabs v-model="activeSonFb" >
            <el-tab-pane v-for="(item,index) in flowFb[0].bottomLabel" :key="item" :label="item" :name="index+''"></el-tab-pane>
        </el-tabs>

        <flowfb :flowfb.sync="flowFb[activeFatherFb].flowFbArr[activeSonFb].data" :axis="flowFb[activeFatherFb].flowFbArr[activeSonFb].Axis"></flowfb>
        
    </div>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import flowuserzh from './flow/flow-zh-user'
import flowqs from './flow/flow-qs'
import flowfb from './flow/flow-Fb'
import flownewuser from './flow/flow-zh-newuser'
export default {
//import引入的组件需要注入到对象中才能使用
components: {flowuserzh,flowqs,flowfb,flownewuser},
data() {
//这里存放数据
    return {
        activeFatherZh:0,
        activeSonZh:0,

        activeFatherQs:0,
        activeSonQs:0,
        activeFatherFb:0,
        activeSonFb:0,
        flowZh:[
                {
                    bottomLabel:['今日实时','昨天','近七天','近30天'],
                    flowZhArr:[
                        {
                            name:'first',
                            label:'今天实时',
                            userArr:[
                                {
                                    name: "访问人数",
                                    mount: 9,
                                    time: "比前一周期",
                                    changeMount: 4,
                                    title: "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",
                                },
                                {
                                    name: "下单次数",
                                    mount: 2,
                                    time: "比前一周期",
                                    changeMount: 4,
                                    title:
                                        "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",
                                },
                                { name: "下单人数", mount: 2, time: "比前一周期", changeMount: 4,title: "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",},
                                { name: "下单转化率", mount: 22.2, time: "比前一周期", changeMount: 4,title: "下单人数/访问人数",},
                            ],
                        },
                        {
                            name:'second',
                            label:'昨天',
                            userArr:[
                                        {
                                            name: "访问人数",
                                            mount: 13,
                                            time: "比上一周",
                                            changeMount: 2,
                                            title: "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",
                                        },
                                        {
                                            name: "下单次数",
                                            mount: 3,
                                            time: "比上一周",
                                            changeMount: 1,
                                            title:
                                                "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",
                                        },
                                        { name: "下单人数", mount: 3, time: "比上一周", changeMount: 1,title: "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",},
                                        { name: "下单转化率", mount: 23.2, time: "比上一周", changeMount: 4.9,title: "下单人数/访问人数",},
                                ],
                        },
                        {
                            name:'third',
                            label:'近7天',
                            userArr:[
                                        {
                                            name: "访问人数",
                                            mount: 76,
                                            time: "比前7日",
                                            changeMount: 28,
                                            title: "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",
                                        },
                                        {
                                            name: "下单次数",
                                            mount: 28,
                                            time: "比前前7日",
                                            changeMount:8,
                                            title:
                                                "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",
                                        },
                                        { name: "下单人数", mount: 24, time: "比前前7日", changeMount: 10,title: "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",},
                                        { name: "下单转化率", mount: 31.6, time: "比前前7日", changeMount: 2.4,title: "下单人数/访问人数",},
                                    ],
                        },
                        {
                            name:'fourth',
                            label:'近30天',
                            userArr:[
                                        {
                                            name: "访问人数",
                                            mount: 225,
                                            time: "比前30天",
                                            changeMount: 66,
                                            title: "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",
                                        },
                                        {
                                            name: "下单次数",
                                            mount: 65,
                                            time: "比前30天",
                                            changeMount: 42,
                                            title:
                                                "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",
                                        },
                                        { name: "下单人数", mount: 61, time: "比前30天", changeMount: 39,title: "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",},
                                        { name: "下单转化率", mount: 27.1, time: "比前30天", changeMount:13.3,title: "下单人数/访问人数",},
                                    ],
                        },
                    ]
                },
                {
                    label:'新顾客',
                    bottomLabel:['昨天','近七天','近30天'],
                    flowZhArr:[
                        {userArr:{
                            new:[
                                {value: ['9人','12次']},
                                {value: ['5人','9次']},
                                {value: ['4人','8次']},
                                {value: ['3人','5次']},
                                {value: ['6人','18次']}
                            ],
                            old:[
                                {value: ['3人','2次']},
                                {value: ['5人','3次']},
                                {value: ['3人','3次']},
                                {value: ['2人','0次']},
                                {value: ['0人','0次']}
                            ]
                        }},
                        {userArr:{
                            new:[
                                {value: ['56人','84次']},
                                {value: ['30人','63次']},
                                {value: ['20人','36次']},
                                {value: ['15人','25次']},
                                {value: ['6人','18次']}
                            ],
                            old:[
                                {value: ['21人','14次']},
                                {value: ['35人','21次']},
                                {value: ['21人','21次']},
                                {value: ['14人','5次']},
                                {value: ['7人','2次']}
                            ]
                        }},
                        {userArr:{
                            new:[
                                {value: ['270人','84次']},
                                {value: ['150人','63次']},
                                {value: ['120人','56次']},
                                {value: ['90人','35次']},
                                {value: ['60人','18次']}
                            ],
                            old:[
                                {value: ['90人','60次']},
                                {value: ['150人','50次']},
                                {value: ['90人','30次']},
                                {value: ['60人','15次']},
                                {value: ['20人','10次']}
                            ]
                        }},
                    ]
                }
        ],
        flowQs:[
            {
                label:'今天实时',
                bottomLabel:['访问人数','下单人数','下单转化率'],
                xAxis:['00:00','02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00'],
                flowQsArr:[
                    {
                        isPersent:false,
                        data:{
                            myShop:[56,54,84,51,24,35,35,85,65,54,75,58,65,55],
                            sameShop:[120,98,130,140,150,112,96,98,124,132,147,123,124,130]
                        }
                    },
                    {
                        isPersent:false,
                        data:{
                            myShop:[21,24,12,32,40,12,42,34,45,56,35,53,47,50],
                            sameShop:[120,98,130,140,150,112,96,98,124,132,147,123,124,130]
                        }
                    },
                    {
                        isPersent:true,
                        data:{
                            myShop:[24,25,24,12,13,14,24,25,14,12,13,14,19,23],
                            sameShop:[30,31,32,33,34,33,36,35,34,37,39,35,37,36]
                        }
                    },
                ]
            },
            {
                label:'每天累计',
                xAxis:['07-21','07-22','07-23','07-24','07-25','07-26','07-27','07-28','07-29','07-30','07-31','08-01','08-02','08-03'],
                flowQsArr:[
                    {
                        isPersent:false,
                        data:{
                            myShop:[21,24,12,32,40,12,42,34,45,56,35,53,47,50],
                            sameShop:[120,98,130,140,150,112,96,98,124,132,147,123,124,130]
                        },

                    },
                    {
                        isPersent:false,
                        data:{
                            myShop:[2,3,5,6,5,7,9,12,13,5,17,9,8,14],
                            sameShop:[30,35,34,42,50,45,46,35,34,29,31,35,36,35]
                        }
                    },
                    {
                        isPersent:true,
                        data:{
                            myShop:[5,6,4,3,5,6,5,7,8,9,2,5,6,4],
                            sameShop:[21,30,29,32,31,30,36,35,34,36,34,31,35,36]
                        }
                    },
                ]
            },
            {
                label:'每周累计',
                xAxis:['06/15-06/21','06/15-06/21','06/15-06/21','06/15-06/21','06/15-06/21','06/15-06/21','06/15-06/21'],
                flowQsArr:[
                    {
                        isPersent:false,
                        data:{
                            myShop:[123,124,125,156,145,153,145],
                            sameShop:[223,214,256,236,256,245,275]
                        },
                    },
                    {
                        isPersent:false,
                        data:{
                            myShop:[10,17,16,35,25,26,30],
                            sameShop:[100,110,123,112,145,142,136]
                        },
                    },
                    {
                        isPersent:true,
                        data:{
                            myShop:[20,12,24,18,20,14,15],
                            sameShop:[30,32,34,38,30,34,35]
                        },
                    },
                ]
            },
            {
                label:'每月累计',
                xAxis:['2020/02','2020/03','2020/04','2020/05','2020/06','2020/07','2020/08'],
                flowQsArr:[
                    {
                        isPersent:false,
                        data:{
                            myShop:[450,460,470,485,500,498,470],
                            sameShop:[650,660,670,685,600,698,670]
                        },
                    },
                    {
                        isPersent:false,
                        data:{
                            myShop:[80,90,120,157,123,145,156],
                            sameShop:[180,190,220,257,223,245,256]
                        },
                    },
                    {
                        isPersent:true,
                        data:{
                            myShop:[12,20,23,31,34,21,22],
                            sameShop:[32,30,33,31,34,31,32]
                        },
                    },
                ]
            },
        ],
        flowFb:[
            {
                label:'昨天',
                bottomLabel:['整体流量','自然流量','广告流量'],
                flowFbArr:[
                    {
            
                        Axis:['曝光入口','访问次数','访问人数','下单次数','下单人数','下单转化率'],
                        data:[
                                {
                                    num0:'搜索',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'品类',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'首页商家列表',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'订单页',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'其他入口',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'下单转化率',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                            ],
                    },
                    {
                    
                        Axis:['曝光入口','访问次数','访问人数','下单次数','下单人数','下单转化率'],
                        data:
                            [
                                {
                                    num0:'搜索',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'品类',
                                    num1:24,
                                    num2:22,
                                    num3:44,
                                    num4:21,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'首页商家列表',
                                    num1:11,
                                    num2:44,
                                    num3:44,
                                    num4:77,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'订单页',
                                    num1:21,
                                    num2:44,
                                    num3:44,
                                    num4:25,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'其他入口',
                                    num1:55,
                                    num2:22,
                                    num3:25,
                                    num4:42,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'下单转化率',
                                    num1:124,
                                    num2:42,
                                    num3:25,
                                    num4:424,
                                    num5:'33.3%'
                                },
                            ]
                        
                    },
                    {
                        
                        Axis:['推广类型','访问次数','点击成本'],
                        data:[{
                            num0:'竞价推广',
                            num1:0,
                            num2:0,
                        }]
                    },
                ]
            },
            {
                name:'second',
                label:'近7天',
                flowFbArr:[
                    {
                        
                        Axis:['曝光入口','访问次数','访问人数','下单次数','下单人数','下单转化率'],
                        data:[
                                {
                                    num0:'搜索',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'品类',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'首页商家列表',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'订单页',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'其他入口',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'下单转化率',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                            ],
                    },
                    {
                        
                        Axis:['曝光入口','访问次数','访问人数','下单次数','下单人数','下单转化率'],
                        data:
                            [
                                {
                                    num0:'搜索',
                                    num1:80,
                                    num2:42,
                                    num3:14,
                                    num4:14,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'品类',
                                    num1:87,
                                    num2:72,
                                    num3:14,
                                    num4:14,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'首页商家列表',
                                    num1:48,
                                    num2:45,
                                    num3:5,
                                    num4:36,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'订单页',
                                    num1:35,
                                    num2:12,
                                    num3:24,
                                    num4:7,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'其他入口',
                                    num1:21,
                                    num2:24,
                                    num3:47,
                                    num4:42,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'下单转化率',
                                    num1:'33.3%',
                                    num2:'33.3%',
                                    num3:'33.3%',
                                    num4:'33.3%',
                                    num5:'33.3%'
                                },
                            ]
                        
                    },
                    {
                        
                        Axis:['推广类型','访问次数','点击成本'],
                        data:[{
                            num0:'竞价推广',
                            num1:0,
                            num2:0,
                        }]
                    },
                ]
            },
            {
                name:'third',
                label:'近30天',
                flowFbArr:[
                    {
                        name1:'first',
                        label1:'整体流量',
                        Axis:['曝光入口','访问次数','访问人数','下单次数','下单人数','下单转化率'],
                        data:[
                                {
                                    num0:'搜索',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'品类',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'首页商家列表',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'订单页',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'其他入口',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'下单转化率',
                                    num1:12,
                                    num2:6,
                                    num3:2,
                                    num4:2,
                                    num5:'33.3%'
                                },
                            ],
                    },
                    {
                        name1:'second',
                        label1:'自然流量',
                        Axis:['曝光入口','访问次数','访问人数','下单次数','下单人数','下单转化率'],
                        data:
                            [
                                {
                                    num0:'搜索',
                                    num1:120,
                                    num2:53,
                                    num3:44,
                                    num4:55,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'品类',
                                    num1:152,
                                    num2:75,
                                    num3:58,
                                    num4:5,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'首页商家列表',
                                    num1:425,
                                    num2:757,
                                    num3:77,
                                    num4:88,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'订单页',
                                    num1:54,
                                    num2:24,
                                    num3:22,
                                    num4:23,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'其他入口',
                                    num1:54,
                                    num2:55,
                                    num3:7,
                                    num4:8,
                                    num5:'33.3%'
                                },
                                {
                                    num0:'下单转化率',
                                    num1:55,
                                    num2:44,
                                    num3:52,
                                    num4:212,
                                    num5:'33.3%'
                                },
                            ]
                        
                    },
                    {
                        name1:'third',
                        label1:'广告流量',
                        Axis:['推广类型','访问次数','点击成本'],
                        data:[{
                            num0:'竞价推广',
                            num1:11,
                            num2:44,
                        }]
                    },
                ]
            },
        ]
    };
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleClick(tab, event) {
        console.log(tab, event);
    }
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
.flow{
    width: 920px;
    margin: 0 auto;
    >div{
        margin-top: 30px;
        >.flow-top{
            display: flex;
            justify-content: space-between;
            >el-tabs{
            }
            >p{
            }
        }
    }
}
</style>