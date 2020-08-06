<!-- 我的活动 -->
<template>
<div class=''>
    <div class="active-cont">
        <div class="active-cont-cont">
            <div class="active-title">
                <h1>我的活动</h1>
                <div class="block1">
                    <i class="el-icon-date"></i>
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            不限日期<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-calendar v-model="value">
                            </el-calendar>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div class="active-button">
                <div class="button1">
                    <el-button @click="handleBtn1()"><i class="el-icon-upload2"></i>导出效果数据</el-button>
                    <el-dialog
                    title="选择数据范围"
                    :visible.sync="dialogVisible1"
                    width="30%"
                    :before-close="handleClose1" center>
                        <div class="block2">
                            <el-date-picker
                            v-model="value2"
                            type="daterange"
                            align="right"
                            unlink-panels
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :picker-options="pickerOptions">
                            </el-date-picker>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible1 = false">取 消</el-button>
                            <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
                        </span>
                    </el-dialog>
                </div>
                <div class="button2">
                    <el-button @click="handleBtn2()"><i class="el-icon-setting"></i>设置</el-button>
                    <el-dialog
                    title="活动通用设置"
                    :visible.sync="dialogVisible2"
                    width="30%"
                    :before-close="handleClose2" center>
                        <div class="active-setting">
                            <div class="active-setting-top">
                                <p class="active-setting-top-title">每单可购买活动商品总数</p>
                                <template class="seclect">
                                    <el-radio v-model="radio" label="1">1份</el-radio>
                                    <el-radio v-model="radio" label="2">不限</el-radio>
                                    <el-radio v-model="radio" label="3">{{activeCont}}</el-radio>
                                    <input type="text" v-model="activeCont" placeholder="输入需要几份" v-show="radio == '3'">
                                </template>
                                <ul class="active-list">
                                    <li>表示一个订单最多可按活动价购买几份，超出部分将按原价售卖</li>
                                    <li>上次变更是由[系统]SYSTEM于2020-06-12T16：45：08操作的 <a href="#">查看详情</a></li>
                                </ul>
                            </div>
                            <div class="active-setting-bottom">
                                <div class="bottom-list-top">
                                    <p class="active-switch"><span>到店自取订单可享受活动</span>
                                        <el-switch
                                        v-model="value3"
                                        active-color="#409EFF"
                                        inactive-color="#666">
                                        </el-switch>
                                    </p>
                                    <ul class="top-list">
                                        <li>1.到店自取订单享受的活动会扣除平台补贴<a href="#">查看示例</a></li>
                                        <li>2.不支持平台新客立减活动、减配送费活动</li>
                                    </ul>
                                </div>
                                <div class="bottom-list-bottom" v-show="value3">
                                    <p>选择到店自取订单可享受的活动类型：</p>
                                    <div class="checkBox">
                                        <template>
                                            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                                            <div style="margin: 15px 0;"></div>
                                            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                                            </el-checkbox-group>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="dialogVisible2 = false">保存修改</el-button>
                        </span>
                    </el-dialog>
                </div>
            </div>
        </div>
        
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
const cityOptions = ['商品折扣', '商品特价(含超值换购)','商品买赠','商品立减','限量抢购','0元试吃','店铺满减','店铺满赠','门店新客立减']
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    value:'',
    checkAll: false,
    checkedCities: ['商品折扣', '商品特价(含超值换购)','商品买赠','商品立减','限量抢购','0元试吃','店铺满减','店铺满赠','门店新客立减'],
    cities: cityOptions,
    isIndeterminate: true,
    radio: '1',
    value1:'',
    value2:'',
    value3:true,
    dialogVisible1: false,
    dialogVisible2: false,
    activeShow:false,
    activeCont:"自定义",
    pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleBtn1:function(){
        this.dialogVisible1 = true
    },
    handleBtn2:function(){
        this.dialogVisible2 = true
    },
    handleClose1(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    handleClose2(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    handleCheckAllChange(val) {
        this.checkedCities = val ? this.cities : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
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
<style lang="less" scoped>
.active-cont{
    width: 880px;
    margin: 0 auto;
    h1{
        font-size: 25px;
    }
    .active-cont-cont{
        display: flex;
        justify-content: space-between;
        .active-title{
            display: flex;
            .block1{
                margin-left: 15px;
                font-size: 12px;
                margin-top: 15px;
                i{
                    margin-right: 10px;
                    font-size: 18px;
                }
            }
        }
        .active-button{
            width: 300px;
            display: flex;
            justify-content: space-between;
            .button1{
                .block2{
                    margin: 0 auto;
                    text-align: center;
                }
            }
        }
    }
}
.active-setting{
    width: 450px;
    .active-setting-top{
        border-radius: 10px;
        height: 200px;
        background-color: #eee;
        padding: 10px;
        font-size: 14px;
        .active-setting-top-title{
            font-size: 18px;
            color: #000;
        }
        .seclect{
            input{
                width: 50px;
            }
        }
        .active-list{
            margin-top: 35px;
            li{
                margin-left: 15px;
                font-size: 12px;
                list-style: disc;
                a{
                    color: blue;
                }
            }
        }
    }
    .active-setting-bottom{
        padding: 10px;
        background-color: #eee;
        margin-top: 20px;
        border-radius: 10px;
        .bottom-list-top{
            padding: 0 10px 8px;
            border-bottom: 1px solid #999;
            .active-switch{
                display: flex;
                justify-content: space-between;
                span{
                    font-size: 18px;
                    color: #000;
                }
            }
            .top-list{
                margin-top: 15px;
                li{
                    font-size: 14px;
                    margin-top: 10px;
                }
            }
        }
        .bottom-list-bottom{
            margin-top: 25px;
        }
    }
}

</style>
<style lang="less">
.el-calendar-table .el-calendar-day {
    box-sizing: border-box;
    width: 50px;
    padding: 8px;
    height: 45px;
}
.el-dropdown-menu {
    width: 400px;
    height: 300px;
}
.el-date-editor .el-range-separator {
    /* padding: 0 5px; */
    line-height: 32px;
    width: 10%;
    color: #303133;
    margin: 0 auto;
}
.el-dialog--center .el-dialog__body {
    text-align: initial;
    /* padding: 25px 25px 30px; */
}
.el-dialog__body {
    padding: 30px 10px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
}
.el-dialog--center {
    text-align: center;
    width: 33%!important;
}

</style>