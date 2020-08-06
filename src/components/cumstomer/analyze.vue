<!-- 顾客 -->
<template>
    <div class='dataTable'>      
        <div class="analyze-tabs clear-both">
            <div v-for="(item,index) in dataList " :key="item.id+index" :class="['analyze-item',{'active':analyzeActive==item.id}]" @click="handlerAnalzy(item.date,item.id)">
                {{item.time}}
            </div>
            <div class="right">
                <div class="timer">
                    2020-3-3至 2020-9-12
                </div>
                <select name="" id="">
                    <option value="">比前30天</option>
                </select>
            </div>
        </div>
       <div class='tabs-table'>
            <div class="tabs">
                <div :class="['tabs-itemMin',{'tabs-itemMax':item.table},{'active':item.id==activeTabs}]" v-for="(item,index) in dataCus" :key="index+''" @click="handlerTabsActive(item.id,index)">
                    <div class="title">{{item.name}}</div>
                    <section v-show="!item.table">
                        <div class="count">{{item.count}}</div>
                        <div class="duibi">
                            {{item.day}}
                            <i></i>
                            <em>
                                  {{item.num}}
                            </em>
                        </div>
                    </section>
                    <section v-show="item.table" class="echart-flex">
                        <echartsBingtu></echartsBingtu>
                        <div class="cus">
                           
                            <div class="newCus">
                                <i></i>
                            新客户占比
                        </div>
                        <div class="oldCus">
                            <i></i>
                            老客户占比
                        </div>
                        </div>
                        

                    </section>
                </div>
                
            </div>
            <div class="echarts-img" v-show="!mark2 && !mark"> 
              
                <zheXianTu v-show="isEchartsShow==0"  v-for="(item,index) in customerArr" :key="item[index]" :item="item"></zheXianTu>
                <zheXianTu v-show="isEchartsShow==1"  v-for="(item,index) in customerArr2" :key="item[index]" :item="item"></zheXianTu>
                <zheXianTu v-show="isEchartsShow==2"  v-for="(item,index) in customerArr3" :key="item[index]" :item="item"></zheXianTu>
                <zheXianTu v-show="isEchartsShow==3"  v-for="(item,index) in customerArr4" :key="item[index]" :item="item"></zheXianTu> 
               

            </div>
           <div class="echarts-img2" v-show="mark">
            
                   <zhuXingTu v-for="(item,index) in zhuxingtuArr" :key="index" :item="item"></zhuXingTu>    
             </div>
             <div class="echarts-img3" v-show="mark2">
                 
             </div>
       </div>
        
        
    </div>
</template>

<script>
import dataTable from "@/components/cumstomer/tabs-table"
import echartsBingtu from "@/components/cumstomer/bingtu"
import zheXianTu from "@/components/cumstomer/cumstomer/zhexiantu"
import zhuXingTu from "@/components/cumstomer/cumstomer/zhuxingtu"

export default {
    name:'',
    components: {
        dataTable,
        echartsBingtu,
        zheXianTu,
        zhuXingTu,
    },
    props:["dataList",'dataCus','mark','mark2'],
    data() {
        return {
            analyzeActive:1,  
            activeName: 'second',
          
            isEchartsShow:0,
            activeTabs:1,
            customerArr:[
               {
                    now:[3,2,1,3,1,2,1],
                    before:[2,3,2,1,4,3,2]
               },
             
              ],
              customerArr2:[
               {
                    before:[1,6,1,5,1,2,1],
                    now:[2,3,5,4,4,3,1]
               },
             
              ],
               customerArr3:[
               {
                    now:[4,6,1,3,1,2,1],
                    before:[2,3,2,1,4,3,2]
               },
             
              ],
               customerArr4:[
               {
                    now:[2,6,1,3,2,2,1],
                    before:[3,3,2,1,4,3,2]
               },
             
              ],
               zhuxingtuArr:[
                 
                    {
                        number:[3,2,1,4,5,1],
                        work:["1次","2次","3次","4次","5次以上"]
                    },
                    {
                        number:[4,2,1,0,2,1],
                        work:["早餐","午餐","下午茶","晚餐","夜宵"]
                    },
                    {
                        number:[3,4,1,2,1,1],
                        work:["0-10","10-20","20-30","30-40","40以上"]
                    },
            
                
            ]
            
        }
           

       
    },
    computed: {},
    watch: {},
    methods: {
        handlerAnalzy:function(date,id){
           this.analyzeActive = id
           if(!date){

            return

           }else{
               
           }
        },
        handlerTimer:function(){
            this.timer =new Date()
            
        },
        handlerTabsActive:function(id,index){
            this.activeTabs =id
            this.isEchartsShow =index;
        }
    },
    created() {},
    mounted() {
        // console.log(this.mark2);
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

.dataTable {
    padding: 10px;
    border: 1px solid #ECEDF1;
    overflow: hidden;
    .title {
        font-size: 18px;
        font-weight: 700;

    }
    .analyze-tabs {
        .analyze-item{
            float: left;
            padding: 3px 5px;
            cursor: pointer;
           margin-right: 10px;
        }
        .active{
            background-color: #1989F9;
            border: 1px solid gray;
            color: white;
        }
        
        .right {
            float: right;
            .timer {
                float: left;;
                margin-right: 10px;
            }

            select {
                    float: left;
                    outline: none;
                    border: none;
            }
        }
    }
     .tabs-table{
        width: 900px;
        .tabs{
            width: 900px;
            display: flex;
            .tabs-itemMin{
                padding-left: 10px;
                padding-top: 10px;
                flex: 2;
               
                border: 1px solid #ECEDF1;
                background-color: #FAFBFF;

            }
            .tabs-itemMax{
                flex:4 ;
                border: 1px solid #ECEDF1;
                background-color: #FAFBFF;

            }
             .active{
        
                background-color: #FFFFFF;
                border-top: 2px solid #4280BD;
                border-bottom: none;
            }
        }
        section {
            .count {
                color: blue;
                font-size: 18px;
                font-weight: 700;
                line-height: 40px;
            }

            .duibi {
                font-size: 12px;
                line-height: 30px;
                i {

                }
            }
        }
        .echart-flex{
            margin-top: 10px;
            display: flex;
            .cus{
                margin-left: 10px;
                .newCus{
                    i{
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        background-color: #D53A35;
                    }
                   
                }
                .oldCus{
                    i{
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        background-color: #2F4554;
                    }
                }
            }
        }

    }
    .echarts-img2{
        display: flex;
        
    }

}
.clear-float{
    &:after{
        content: " ";
        display: block;
        clear: both;
    }
}
.tabs{
   
}

</style>