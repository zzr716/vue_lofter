<template>
<div class="recommend">
  <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in imgs">
          <img v-lazy="item.img" >
      </mt-swipe-item>
  </mt-swipe>
  <div class="movieList">
    <detail :dynamic="list"></detail>
  </div>
</div>
</template>

<script>
import detail from '@/components/detail'
export default {
  data () {
    return {
      imgs: [
        {img: 'http://image.wufazhuce.com/FrPxW4kfG0ockKwK1rMIUTVt3Map', author: '红鲫鱼'},
        {img: 'http://image.wufazhuce.com/FhdOu2_TPC_Q5o6aHYhdNwo9PhyN', author: '红鲫鱼'},
        {img: 'http://image.wufazhuce.com/FuckD2e3hJIROdSaMIYY9ApCk0lO', author: '红鲫鱼'},        
      ],
      list: []
    }
  },
  created () {
    axios.get('/api/data').then(res => {
            this.list = res.data.movieLists
        }).catch(err => {
            console.log(err)
        })
  },
  computed: {
  },
  components: {
    detail
  }
}
</script>

<style lang="stylus">
.mint-swipe
  height 4.277rem
  width 10rem
  border-bottom 0.025rem solid #cdcdcd
  img[lazy=loading]
    width 100%
    height 100%
  img[lazy=loaded]
    width 100%
    height 100%

</style>