<!-- 

 -->
<template>
<div class=''>
    <div class="user-evaluate" @click="isHuifu=true">
       <div class="dt">
          {{userArr.imgs}}
       </div>
       <div class="dd">
           <div class="username">
             {{userArr.username}}
             <i class="el-icon-eleme"></i>
           </div>
           <div class="stars">
               <span :class="['el-icon-star-on',{'active':sumEva>=1}]"></span>
               <span :class="['el-icon-star-on',{'active':sumEva>=2}]"></span>
               <span :class="['el-icon-star-on',{'active':sumEva>=3}]"></span>
               <span :class="['el-icon-star-on',{'active':sumEva>=4}]"></span>
               <span :class="['el-icon-star-on',{'active':sumEva>=5}]"></span>
           </div>
            <div class="mark">
                <span>味道:{{userArr.w}}星</span>
                <span>包装:{{userArr.b}}星</span>   
            </div>
            <div class="buy">
                购买了{{userArr.buy}}
            </div>
            <div class="bestEva" v-show="sumEva==5">
                <i class="el-icon-thumb"></i>
                <span>
                    {{userArr.buy}}
                </span>
            </div>
            <section>

            </section>
            <div class="bottom">
                <div class="EvaTime">
                    评价于 : {{userArr.evaTime}} 
                </div>
               
                <b @click.stop="isHuifu=!isHuifu" class="reponseCus">回复顾客</b>
                <div :class="['aside',{'hidden':isHuifu}]" @click.stop="isHuifu=false">
                    <textarea name="" id="" cols="30" rows="10" :focus="huifu" v-model="response">
                    </textarea>
                    <input type="button" value="提交" @click="handlerTijiao">
                </div>
            </div>
            <div class="huifu">
               {{huifu}}
            </div>
            <section>
                <div class="reponse" v-for="(item,index) in huifuArr" :key="index">
                    {{reponseTime}}span{{item}}
                </div>
                
            </section>
       </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:['userArr','sumEva'],
data() {
//这里存放数据
return {
    huifu:"",
    isHuifu:true,
    huifuArr:[],
    response:"",
    reponseTime:(new Date()).toLocaleString()
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
 
    handlerHuifu:function(){
        // this.huifu =
    },
    handlerTijiao:function(){
     
        this.huifuArr.push(this.response);
        this.response=""
        this.isHuifu = true
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
 
   
    // console.log(Math.floor((this.userArr.w+this.userArr.b)/2));
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
.user-evaluate {
    display: flex;
    color: #98999B;
    margin-bottom: 30px;
  .dt {
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      border:1px solid pink;
      border-radius: 50%;
      margin-right: 20px;
  } 

  .dd {
    .username {
        font-size: 16px;
        color: black;
    }

    .stars {
      span {

      }
    }

    .mark {
      span {

      }
    }

    .buy {
        margin-top: 10px;
    }
    .bestEva{
    color: black;
     cursor: pointer;
            &:hover{
                text-decoration: underline;
            }
            i{
                color: red;
            }
}
    .bottom{
        position: relative;
        display: flex;
        margin-top: 10px;
        align-items: center;
        .EvaTime{
            margin-right: 10px;
            font-size: 12px;
           
        }
        b{
            font-weight: 550;
            padding: 2px;
            cursor: pointer;
        }

        textarea{
            position:absolute;
            background-color: white;
            top: 40px;
            width: 300px;
            height: 100px;
            left: 100px;
            z-index: 2;
        }
        input{
            z-index: 3;
            position: absolute;
            top: 123px;
            left: 363px;
        }

    }
    
  }
}
.active{
    color: red;
}.hidden{
    display: none;
}
.reponseCus{
    color: black;
}
</style>