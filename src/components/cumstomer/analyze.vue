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
                <div :class="['tabs-itemMin',{'tabs-itemMax':item.table}]" v-for="(item,index) in dataCus" :key="index" >
                    <div class="title">{{item.name}}</div>
                    <section v-show="!item.table">
                        <div class="count">{{item.count}}</div>
                        <div class="duibi">
                            {{item.day}}
                            <i></i>
                            {{item.num}}
                        </div>
                    </section>
                    <section v-show="item.table">

                    </section>
                </div>
                
            </div>
        </div>
        
    </div>
</template>

<script>
import dataTable from "@/components/cumstomer/tabs-table"
export default {
    name:'',
    components: {
        dataTable,
    },
    props:["dataList",'dataCus'],
    data() {
        return {
            analyzeActive:1,  
           timerbefore:new Date().getTime() - this.lately*new Date().getTime(),
           timernow:  new Date().getTime(),
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

.dataTable {

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
                flex: 2;
                height: 90px;
                border: 1px solid black;

            }
            .tabs-itemMax{
                flex:4 ;
                 height: 90px;
                border: 1px solid black;

            }
        }

    }

}
.clear-float{
    &:after{
        content: " ";
        display: block;
        clear: both;
    }
}
</style>