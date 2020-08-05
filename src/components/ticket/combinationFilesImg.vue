<!--  -->
<template>
 <div class="content">
     <div class="ticketImgs">
        <li class="index-img">
            <div class="dt">封面图</div>
                <div class="dd">
                    <img src="" alt="">
                    图片
                </div>
            </li>
            <li class="img-show">
                <div class="dt">展示图片</div>
                <div class="dd">
                    <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :limit="4"
                    class="el-upload--picture-card"
                    >
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                
                    
                    <li>最多可.上传4张，尺寸800*800px以上</li>
                    <li>图片大小不超过5M,支持格式png, jpg, jpeg</li>
                    
                </div>
            </li>
                <li class="detail-img img-show">
                <div class="dt">详细图片</div>
                <div class="dd">
                    <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :limit="4"
                    class="el-upload--picture-card"
                    >
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                    <li>最多可.上传4张，尺寸:宽750以上，高度不限</li>
                    <li>图片大小不超过5M，支持格式png, jpg, jipeg</li>
                </div>
            </li>
     </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:['titleName'],
data() {
//这里存放数据
return {
        dialogImageUrl: '',
        dialogVisible: false
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleRemove(file, fileList) {
        console.log(file, fileList);
    },
     handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
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
    .content{
    position: relative;
    aside {
    position: absolute;
    left: 10px;
    top: 40px;
}

    .ticketImgs {
       border-top: 1px solid #E6E6E6;
        position: relative;
        left: 100px;
        top: 40px;
        padding-top: 40px;
      
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
        .index-img {

        }

        .img-show {
            .dd{
                position: relative;
                width: 100px;
                .el-upload--picture-card{
                    
                    width: 100px;
                    height: 120px;
                line-height: 120px;
                text-align: center;
                }
                li{
                    position: relative;
                    width: 600px;
                    left: 0;
                    color:#90929A;
                    margin-bottom: 10px;
                    margin-top: 10px;
                    list-style: circle;
                }
            }
        
        }
           
    }
}
  
</style>