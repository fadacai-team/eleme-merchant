<template>
  <div class="home">
    <div class="main-left">
      <div class="main-left-item turnover">
        <div class="item-header clearfix">
          <h3>今日营业情况</h3>
          <a href="#">更多数据</a>
        </div>
        <ul>
          <li class="turnover-item" v-for="item in turnoverData" :key="item.id">
            <p>{{item.type}}</p>
            <p>{{item.num}}</p>
          </li>
        </ul>
      </div>
      <div class="main-left-item">
        <div class="marketing">
          <div class="item-header clearfix">
            <h3>营销活动</h3>
            <a href="#">营销中心</a>
          </div>
          <ul>
            <li class="turnover-item" v-for="item in marketingData.slice(0,2)" :key="item.id">
              <p>{{item.type}}</p>
              <p>{{item.msg}}</p>
            </li>
          </ul>
          <a href="#">查看我的活动({{marketingData.length}})</a>
        </div>
        <div class="popularize">
          <div class="item-header clearfix">
            <h3>店铺推广</h3>
          </div>
          <div>
            <a href="#">竞价推广</a>
            <a href="#">品牌展位</a>
          </div>
      </div>
      </div>
      <div class="main-left-item serve">
        <div class="item-header clearfix">
          <h3>服务市场</h3>
          <a href="#">全部服务</a>
        </div>
        <ul>
          <li class="turnover-item" v-for="item in serveData" :key="item.id">
          </li>
        </ul>
      </div>
      <div class="main-left-item turnover">
        <div class="item-header clearfix">
          <h3>本地生活大学</h3>
          <a href="#">更多数据</a>
        </div>
        <ul>
          <li class="turnover-item" v-for="item in turnoverData" :key="item.id">
            <p>{{item.type}}</p>
            <p>{{item.num}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-right">
      <div class="notice">
        <div class="notice-top">
          <h3>重要通知</h3>
          <a href="#">查看全部</a>
        </div>
        <ul class="clearfix notice-mid">
          <li v-for="item in notices" :key="item.id">
            <a href="item.url">{{item.msg}}</a>
            <div>
              <span>{{item.type}}</span>
              <span>{{item.date}}</span>            
            </div>
          </li>
        </ul>
        <div class="notice-bot">
          <Slider/>
          <!-- <img src="@/assets/shouye.jpg" alt=""> -->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Slider from "@/components/home/Slider.vue";
export default {
  name: "Home",
  components: {
    Slider
  },
  data() {
    return{
      notices:[
        {id:1,type:"攻略",date:"07-31",msg:"早餐外卖消费大数据",url:"#"},
        {id:2,type:"重要",date:"07-31",msg:"关于店外引客的图片变化说明",url:"#"},
        {id:3,type:"经营",date:"07-31",msg:"您的门店信息修改申请已通过",url:"#"},
      ],
      turnoverData:[
        {id:1,type:"预计收入",num:0},
        {id:2,type:"营业额",num:0},
        {id:3,type:"有效订单",num:0},
        {id:4,type:"访问次数",num:0},
        {id:5,type:"访问人数",num:0},
        {id:6,type:"下单转换率",num:0},
      ],
      marketingData:[
        {id:1,type:"超级吃货",msg:"提升排名，精准招揽顾客"},
        {id:2,type:"超级吃货",msg:"提升排名，精准招揽顾客"},        
        {id:3,type:"超级吃货",msg:"提升排名，精准招揽顾客"},
        {id:4,type:"超级吃货",msg:"提升排名，精准招揽顾客"},
      ],
      serveData:[
        {id:1,msg:"饿了么官方塑料袋",star:5,sales:849,tag:["官方商品"]},
        {id:1,msg:"饿了么官方塑料袋",star:5,sales:2718,tag:[]},
        {id:1,msg:"饿了么官方塑料袋",star:5,sales:319,tag:["金牌服务","头像35元","不满意全退"]},
        {id:1,msg:"好评必备9.8元",star:4.9,sales:164,tag:["低至一分钱","改善评分","好评必备"]}
      ]
    }
  },
};
</script>
<style lang="scss" scoped>
  .home{
    display: flex;
    justify-content:center;
    .main-left{
      width: 600px;
      height: 100vh;
      .main-left-item{
        height: 330px;
        width: 600px;
        border-bottom:1px solid #e6e7eb;
        .item-header{
          h3{
            float: left;
            color: #313131;
            font-weight: normal;        
          }
          a{
            float: right;
          }
        } 
      }
      .turnover{
        background-color: #ffffff;
        .turnover-item{
          padding-top: 20px;
          width: 200px;
          height: 100px;
          float: left;
        }
      }
      .marketing,.popularize{
        float: left;
        width: 300px;
      }  
    }
    .main-right{
      margin-left: 50px;
      width: 230px;
      height: 100vh;
      .notice{
        .notice-top{
          h3{
            float: left;
            color: #313131;
            font-weight: normal;        
          }
          a{
            float: right;
          }
        }
        .notice-mid{
          li{
            a{
              line-height: 32px;
            }
            span{
              margin-right: 10px;
            }
          }
        }
        .notice-bot{
          margin-top: 20px;
        }
      }
    }
  }
</style>
