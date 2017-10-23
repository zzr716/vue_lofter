<template>
  <div class="news">
      <mt-cell v-for="item in list" :title="item.name" is-link>
          <img slot="icon" :src="item.img" width="24" height="24">
      </mt-cell>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        img : require('../../assets/newFans.png'),
        name : '新的粉丝',
        num : 2323
      },{
        img : require('../../assets/like.png'),
        name : '喜欢',
        num : 2323
      },{
        img : require('../../assets/commend.png'),
        name : '评论',
        num : 2323
      },{
        img : require('../../assets/notifi.png'),
        name : "通知",
        num : 10
      }]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
a
    text-decoration none
</style>
