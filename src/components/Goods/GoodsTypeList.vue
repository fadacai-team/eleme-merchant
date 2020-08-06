<template>
  <div class="goods-menu">
    <el-tabs tab-position="left">
      <el-tab-pane v-for="item in allTypeList" :key="item.id" :label="item.name+'('+item.itemList.length+')'" :name="item.name">
        <Good :itemList="item.itemList"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name:""
}
</script>