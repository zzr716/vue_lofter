<template>
<div class="nav list-wrapper">
<div class="nav-wrapper scroll-content" ref="navWrapper">
  <ul class="list-content" ref="listContent">
    <li class="nav-item list-item" v-for="(item,index) in navs"   
      @click="isActive(index)" :class="chooseId==index?'is-selected':''">{{item}}</li>
  </ul>
</div>
</div>
</template>

<script>
import  BScroll  from 'better-scroll'
import { ease } from '../common/js/ease'
export default {
  data () {
    return {
      chooseId: '0',
    }
  },
  props: {
    navs: Array,
    chooseItem: Number
  },
  methods: {
    isActive (index) {
      this.chooseId = index
      this.$store.state.navState = this.chooseId
      // console.log(this.$store.state.navState)
      this.$router.push('/found/page' + (this.chooseId + 1))
      if (index > 3) {
        document.querySelector('.list-content').scrollLeft += 76
      }
    }
  },
  created () {
    axios.get('/api/data').then(res => {
      var that = this
      // // this.$nextTick(() => {
      // //   that.navScroll = new BScroll(that.$refs.navWrapper, {
      // //     click: true,
      // //     scrollX: true
      // //   })
      // })
    }).catch(err => {
      console.log(err)
    })
  },
  watch: {
    "chooseItem" () {
      this.chooseId = this.chooseItem - 1 
    }
  }
}
</script>

<style lang="stylus">
.nav
  float left
  // overflow hidden
  .nav-wrapper
    overflow hidden
    // transform translate3d(-1rem)
    ul
      // transform translateX(-2rem)
      width 7rem
      margin-top .3875rem
      // overflow auto
      overflow-x auto
      overflow-y hidden
      white-space nowrap
      position relative
      &::-webkit-scrollbar
        display none
      .nav-item
        // transform translate3d(-1rem)
        // position relative
        // width auto
        display inline-block
        font-size .5rem
        height .5rem
        text-align center
        margin-right 0.416rem
        &.is-selected
          padding-bottom .3rem
          border-bottom .0001rem solid #000000
</style>