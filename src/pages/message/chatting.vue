<template>
  <div class="chatting">
       <!-- <li v-for='item in user'>
            <div class="imgHead">
              <img :src="item.head">
            </div>
            <div class="rightContain">
                <div class="line">
                  <p>{{item.name}}<time>{{item.time}}</time></p>
                  <p class="words">{{item.words}}</p>
                </div>
            </div>
       </li> -->
       <mt-cell v-for="item in list" :title="item.name" :label="item.words" :value="item.time">
          <img slot="icon" :src="item.head" width="24" height="24">
      </mt-cell>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        head: require('../../assets/user/head.jpg'),
        name: 'lofter通知',
        time : '10-19',
        words : 'HI,欢迎来到这里.....'
      },{
        head: require('../../assets/user/head.jpg'),
        name: 'lofter通知',
        time : '10-19',
        words : 'HI,欢迎来到这里.....'
      },{
        head: require('../../assets/user/head.jpg'),
        name: 'lofter通知',
        time : '10-19',
        words : 'HI,欢迎来到这里.....'
      }]
    }
  }
}

</script>

<style lang="stylus" scoped>
.mint-cell-title
  img
    border-radius 50%
</style>
