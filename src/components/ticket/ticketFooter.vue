<!--  -->
<template>
<div class="footer">
       <div class="rule">
          
           <div class="shop-rule">
            <aside>购买规则</aside>
           <div class="cell-info">
              <li>
                  <div class="dt">
                      售卖日期
                  </div>
                  <div class="dd">
                      日期
                  </div>
              </li>

              <li>
                  <div class="dt remain">
                      库存
                  </div>
                  <div class="dd">
                      <input type="text" value="1000">
                  </div>
              </li>
              <li>
                  <div class="dt last">
                      每人购买
                  </div>
                  <div class="dd day-buy" >
                      <input type="text" value="20">
                      <i>份</i>
                  </div>
              </li>
           </div>
       </div>
       <div class="use-rule">
           <aside>使用规则</aside>
           <div class="use-time">
               <li>
                     <div class="dt">
                      有效期
                    </div>
                    <div class="dd">
                        购买后
                        <div class="chooseDate">
                            <input type="text" value="60">
                            <i>天</i>
                        </div>
                         有效
                    </div>
               </li>
           </div>
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
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

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
     .footer {
        margin-top: 80px;
        position: relative;
        font-size: 14px;
        aside {
        position: absolute;
        left: 10px;
        font-size: 16px;
        margin-top: -2px;

        }
        i,em{
            font-style: normal;
        }
        .rule{
            position: relative;
            top: 40px;
            li{
                position: relative;
                display: flex;
                left: 120px;
                margin-bottom: 30px;
            .dt{
                position: relative;
                width: 100px;
                &:after{
                    content:"*";
                    color: red;
                }
            }
            .dd{
                position: relative;
                left: 80px;
            }
        }
            .shop-rule {
            position: relative;
            border-top: 1px solid #E6E6E6;
            margin-top: 30px;
            padding-top: 30px;
            
            li {
                .remain {
                    
                }
                .last{
                    input{
                        
                    }
                }
                .dd {
                    padding: 5px;
                    border: 1px solid #DCDCDE;
                    position: relative;
                    input {
                        width: 160px;
                        height: 20px;
                        outline: none;
                        border: none;
                        
                    }
                    i{
                            width: 30px;
                            height: 32px;
                            position: absolute;
                             background-color: #F2F4F8;
                            color: #A9B4BB;
                            top: 0;right: 0;
                            line-height: 32px;
                            text-align: center;
                            border-left: 1px solid #E8E8EA;
                        }
                }
            }
            }
            .cell-info {
                position: relative;
                left: 100px;
            }
        }

        .use-rule {
            position: relative;
            border-top: 1px solid #E6E6E6;
            margin-top: 30px;
            padding-top: 30px;

            .use-time {
               position: relative;
                left: 100px;
                li {
                   
                    .dd {

                         display: flex;
                         line-height: 30px;
                         margin-top: -5px;
                         
                    .chooseDate {
                        width: 100px;
                        height: 30px;
                         border: 1px solid #DCDCDE;
                        position: relative;
                        margin: 0 10px;
                        input {
                            width: 70px;
                            outline:none;
                            border: none;padding-left: 5px;
                        }

                        i {
                            width: 30px;
                            height: 28px;
                            position: absolute;
                             background-color: #F2F4F8;
                            color: #A9B4BB;
                            top: 0;right: 0;
                            line-height: 28px;
                            text-align: center;
                            border-left: 1px;
                        }
                    }
                    }
                }
        }
        }
    }
</style>