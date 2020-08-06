<!-- 顾客 -->
<template>
    <div class='customer'> 
        <section>
            <div class="title">
                新老顾客分析
            </div>
            <dataTable :dataList="timeArr[0]" :dataCus="customer[0]"></dataTable>
        </section>
        <section> 
            <div class="title">
                复购分析
            </div>
            <dataTable :dataList="timeArr[1]" :dataCus="customer[1]">
            </dataTable>
        </section>
        <section> 
            <div class="title">
                顾客留存分析
            </div>
            <dataTable :dataList="timeArr[2]" :dataCus="customer[2]">
            </dataTable>
        </section>

        <section> 
            <div class="title">
                顾客分布
            </div>
            <dataTable :dataList="timeArr[3]" :dataCus="customer[3]" :mark="true" >
            </dataTable>
        </section>
        <section> 
            <div class="title">
                热门下单地段分布
            </div>
            <evaBottom>

            </evaBottom>
        </section>
      
    </div>
</template>

<script>
import dataTable from "@/components/cumstomer/analyze"
import evaBottom from "@/components/cumstomer/cumstomer/analuze-bottom"
export default {
    name:'',
    components: {
        dataTable,
        evaBottom,
    },
    data() {
        return {
             timeArr:[
                [
                    {id:1,time:'近7天',date:7},
                    {id:2,time:'近30天',date:30},
                    {id:3,time:'按周',date:""},
                    {id:4,time:'按月',date:""}
                ],
                [
                    {id:1,time:'按周',date:""},
                    {id:2,time:'按月',date:""}
                ],

                [
                    {id:1,time:'近7天',date:7},
                    {id:2,time:'近30天',date:30},
                    {id:3,time:'按周',date:""},
                    {id:4,time:'按月',date:""}
                ],
                 [
                    {id:1,time:'昨天',date:7},
                    {id:2,time:'近7天',date:7},
                    {id:3,time:'近30天',date:30},
                    {id:4,time:'按周',date:""},
                    {id:5,time:'按月',date:""}
                ],

                 [
                    {id:1,time:'昨天',date:7},
                    {id:2,time:'近7天',date:7},
                    {id:3,time:'近30天',date:30},
                   
                ],
            ],
            customer:[
                [
                    {id:1,name:'全部下单顾客',count:'15',isUp:false,num:2,day:"比前7天",table:false},
                    {id:2,name:'新客人数',count:'12',isUp:false,num:0,day:"比前7天",table:false},
                    {id:3,name:'老客人数',count:'3',isUp:false,num:2,day:"比前7天",table:false},
                   {id:4,name:'老客人数',count:'3',isUp:false,num:2,day:"比前7天",table:true},
                            
                ],
                [
                    {id:1,name:'复购人数',count:'13',isUp:false,num:5,day:"比前7天"},
                    {id:2,name:'新客复购',count:'8',isUp:false,num:2,day:"比前7天"},
                    {id:3,name:'老客复购',count:'5',isUp:false,num:3,day:"比前7天"},
                    {id:3,name:'复购率',count:'3',isUp:false,num:2,day:"比前7天",table:true},
                ],
               
            ],
            zhuxingtuArr:[
                 [
                    {
                        number:[3,2,1,4,5,1],
                        work:["1次","两次","三次","四次","五次及以上"]
                    },
                    {
                        number:[3,2,1,4,5,1],
                        work:["1次","两次","三次","四次","五次及以上"]
                    },
                    {
                        number:[3,2,1,4,5,1],
                        work:["1次","两次","三次","四次","五次及以上"]
                    },
            
                ],
            ],
            Location:[
                {

                }

            ]
         
        }
    },
    computed: {},
    watch: {},
    methods: {
       
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

.customer {
    width: 900px;
    margin: 0 auto;
    .title {
        font-size: 18px;
        font-weight: 700;
        padding-left: 10px;
    }
    section{
       margin-bottom: 50px;
    }
    .analyze-tabs {
        .analyze-item{
            float: left;
            padding: 3px 5px;
            background-color: #1989F9;
            border: 1px solid gray;margin-right: 10px;
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
  
}
</style>