<template>
<div id="app">
  <router-view></router-view>
  <tabbar></tabbar>
</div>
</template>
<script>  
import tabbar from './components/tabBar.vue'
export default {
    data() {
        return {
          selected: 'found',
          publishShow: false
        }
    },
    created () {
      this.$router.push('/found')
      // this.$store.state.navState = 0
    },
    components: {
      tabbar
    }
}
</script>
<style lang="stylus">
@import 'common/stylus/index.styl'
</style>