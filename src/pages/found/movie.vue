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
        {img: 'https://pic4.zhimg.com/50/v2-e6092d4f1f93f589848af070115fa57f_hd.jpg', author: '红鲫鱼'},
        {img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=138014841,4291541121&fm=11&gp=0.jpg', author: '红鲫鱼'},
        {img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508770382575&di=92f5a783089a16925d9ea272336f47ea&imgtype=0&src=http%3A%2F%2Fp4.gexing.com%2FG1%2FM00%2FE2%2F78%2FrBACFFO-KBjCAJitAABdzxrJlKc563.jpg', author: '红鲫鱼'},        
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