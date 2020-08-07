<!-- 顾客 -->
<template>
    <div class='customer'>
        <div class="title">
            新老顾客分析
        </div>
        <section>
            <dataTable :dataList="timeArr" :dataCus="customer[0]"></dataTable>
        </section>
      
    </div>
</template>

<script>
import dataTable from "@/components/cumstomer/analyze"
export default {
    name:'',
    components: {
        dataTable,
    },
    data() {
        return {
             timeArr:[
                {id:1,time:'近7天',date:7},
                {id:2,time:'近30天',date:30},
                {id:3,time:'按周',date:""},
                {id:4,time:'按月',date:""}
            ],
            customer:[
                [
                    {name:'全部下单顾客',count:'15',isUp:false,num:2,day:"比前7天",table:false},
                    {name:'新客人数',count:'12',isUp:false,num:0,day:"比前7天",table:false},
                    {name:'老客人数',count:'3',isUp:false,num:2,day:"比前7天",table:false},
                   {name:'老客人数',count:'3',isUp:false,num:2,day:"比前7天",table:true},
                            
                        ],
                [
                    {name:'全部下单顾客',count:'15',isUp:false,num:2,day:"比前7天"},
                    {name:'新客人数',count:'12',isUp:false,num:0,day:"比前7天"},
                    {name:'新老客占比',count:'3',isUp:false,num:2,day:"比前7天"},
                ]  
            ]
         
        }
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

.customer {
    width: 900px;
    margin: 0 auto;
    .title {
        font-size: 18px;
        font-weight: 700;
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