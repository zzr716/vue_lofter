<template>
<div class="footer">
<mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="home">
      <img slot="icon" :src="img1">
      首页
    </mt-tab-item>
    <mt-tab-item id="found">
      <img slot="icon" :src="img2">
      发现
    </mt-tab-item>
    <mt-tab-item>
      <img slot="icon" src="../assets/home键.png" @click="publishShow=true">
    </mt-tab-item>
    <mt-tab-item id="message">
      <img slot="icon" :src="img3">
      消息
    </mt-tab-item>
    <mt-tab-item id="my">
      <img slot="icon" :src="img4"> 
      我的
    </mt-tab-item>
</mt-tabbar>
<publish-page v-show="publishShow">
    <div class="publish_exit">
        <img src="../assets/publish/exit.png" class="publish_exit__img" @click="publishShow=false">
    </div>
</publish-page>
</div>  
</template>
<script>
import publishPage from '../pages/publishPage.vue'
export default {
    data () {
        return {
          selected: 'found',
          publishShow: false,
          img1: require('../assets/首页1.png'),
          img2: require('../assets/发现.png'),
          img3: require('../assets/消息1.png'),
          img4: require('../assets/我的1.png')
        }
    },
    components: {
        'publish-page': publishPage
    },
    watch: {
      "selected": {
        handler (val,oldval) { //多看文档 handler
          if (this.selected == "home") {
            this.$router.push('/home')
            this.img1 = require('../assets/首页.png')
          } else {
            this.img1 = require('../assets/首页1.png')
          } if (this.selected == "found") {
            this.$router.push('/')
            this.img2 = require('../assets/发现.png')
          } else {
            this.img2 = require('../assets/发现1.png')
          } if (this.selected == "message") {
            this.$router.push('/message')
            this.img3 = require('../assets/消息.png')
          } else {
            this.img3 = require('../assets/消息1.png')
          }
          if (this.selected == "my") {
            this.$router.push('/my')
            this.img4 = require('../assets/我的.png')
          } else {
            this.img4 = require('../assets/我的1.png')
          }
        },
        deep:true//对象内部的属性监听，也叫深度监听
      }
  }
}    
</script>
<style lang="stylus">
.mint-tabbar
    color #cdcdcd
    .mint-tab-item
      img
        width 24px
        height 24px
        border-radius 50%
      &.is-selected
        text-decoration none
        color #2c2c2c
.publish_exit
    position fixed
    bottom 0
    text-align center
    width 100%
    .publish_exit__img
        vertical-align center
</style>
