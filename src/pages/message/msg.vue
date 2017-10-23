<template>
  <div class="page msgs">
      <div>
    <mt-navbar v-model="selected">
        <mt-tab-item id="1">动态</mt-tab-item>
        <mt-tab-item id="2">消息</mt-tab-item>
        <mt-tab-item id="3">聊天</mt-tab-item>
    </mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected" swipeable>
  <mt-tab-container-item id="1">
    <dynamic></dynamic>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
      <news></news>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
      <chatting></chatting>
  </mt-tab-container-item>
</mt-tab-container>
</div>
  </div>
</template>

<script>
import dynamic from './dynamic'
import news from './news'
import chatting from './chatting'
// import navbar from '@/components/Navbar'
export default {
  name : 'msgs',
  components : {
    // navbar
    dynamic,
    news,
    chatting
  },
  data () {
    return {
        // msgNav: ['动态','消息','聊天'],
        chooseItem: 0,
        selected: '1',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '../../common/stylus/index.styl'
.msgs
  a
      text-decoration none
  .mint-tab-item-label
      font-size .444rem
</style>
