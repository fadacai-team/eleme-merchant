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
            <li class="turnover-item" v-for="item in marketingData.slice(0,3)" :key="item.id">
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
          <div class="popularize-item">
            <a v-for="item in popularizeData" :key="item.id" :href="item.url">
              <el-tag>
                {{ item.tag }}
              </el-tag>
            </a>
          </div>

      </div>
      </div>
      <div class="main-left-item serve">
        <div class="item-header clearfix">
          <h3>服务市场</h3>
          <a href="#">全部服务</a>
        </div>
        <ul>
          <li class="serve-item" v-for="item in serveData" :key="item.id">
            <img :src="item.img" alt="">
            <div class="item-right">
              <p>{{item.title}}</p>
              <div>
                <el-rate v-model="item.rate"  disabled show-score></el-rate>
                <span>销量 {{item.sales}}</span>
              </div>
              <div>
                <el-tag v-for="tag in item.tag" :key="tag">
                  {{tag}}
                </el-tag>
              </div>
            </div>
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
            <a :href="item.url">{{item.msg}}</a>
            <div>
              <span>{{item.type}}</span>
              <span>{{item.date}}</span>            
            </div>
          </li>
        </ul>
        <div class="notice-bot">
          <Slider/>
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
        {id:5,type:"超级吃货",msg:"提升排名，精准招揽顾客"},
        {id:6,type:"超级吃货",msg:"提升排名，精准招揽顾客"},
        {id:7,type:"超级吃货",msg:"提升排名，精准招揽顾客"},
        {id:8,type:"超级吃货",msg:"提升排名，精准招揽顾客"},
        {id:9,type:"超级吃货",msg:"提升排名，精准招揽顾客"},
      ],
      popularizeData: [
        { id: 1, tag: "竞价推广", url: "#" },
        { id: 2, tag: "品牌展位", url: "#" }
      ],
      serveData:[
        {id:1,title:"饿了么官方塑料袋",rate:5,sales:849,img:require("@/assets/home/serve1.jpg"),tag:["官方商品"]},
        {id:2,title:"好评爆单尽在掌握",rate:5,sales:2718,img:require("@/assets/home/serve2.jpg"),tag:[]},
        {id:3,title:"设计不满意全额退",rate:5,sales:319,img:require("@/assets/home/serve3.jpg"),tag:["金牌服务","头像35元","不满意全退"]},
        {id:4,title:"好评必备9.8元",rate:4.9,sales:164,img:require("@/assets/home/serve4.jpg"),tag:["低至一分钱","改善评分","好评必备"]}
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
      .marketing{
        float: left;
        width: 300px;
        padding-right: 20px;
      }
      .popularize{
        float: left;
        width: 300px;
        .popularize-item{
          a{
            margin-right: 20px;
          }
        }
      }
      .serve{
        .serve-item{
          height: 120px;
          width: 300px;
          float: left;
          img{
            float: left;
          }
          .item-right{
            float: left;
          }
        }
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
