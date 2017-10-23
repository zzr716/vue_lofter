<template>
  <div class="content">
  <transition :name="transitionName">
    <keep-alive>
      <router-view class="child-view"></router-view>
    </keep-alive>
    <!-- <router-link :to="somewhere"></router-link> -->
  </transition>
  </div>
</template>

<script>
  export default {
    props: {
      somewhere: String
    },
    data () {
      return {
        transitionName: 'slide-right'
      }
    },
    // beforeRouteUpdate (to, from, next) {
    //   let isBack = this.$router.isBack
    //   if (isBack) {
    //     this.transitionName = 'slide-right'
    //   } else {
    //     this.transitionName = 'slide-left'
    //   }
    //   this.$router.isBack = false
    //   next()
    // }
  }
</script>

<style scoped>
  .content {
    width: 10rem
  }
  .child-view {
  position: absolute;
  width: 10rem;
  transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
  .header {
    position:absolute;
    height:44px;
    background:#0058f1;
    width:100%
  }
</style>