<template>
<div>
  <!-- <router-view></router-view> -->
  你好Found
<mt-navbar v-model="selected" fixed>
  <!-- <mt-tab-item id="1">推荐</mt-tab-item>
  <mt-tab-item id="2">萌宠</mt-tab-item>
  <mt-tab-item id="3">电影</mt-tab-item>
  <mt-tab-item id="4">摄影课堂</mt-tab-item> -->
</mt-navbar>
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="'内容 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
  </mt-tab-container-item>
</mt-tab-container>
</div>
</template>
<script>
    export default {
        data () {
            return {
                selected: '',
                active: ''
            }
        }
    }
</script>
<style lang="stylus" scoped>

</style>
