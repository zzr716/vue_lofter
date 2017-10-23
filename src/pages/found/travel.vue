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
        {img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508784302862&di=cf21d7e0d551a4bf11ca0197a04ee140&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Flvpics%2Fh%3D800%2Fsign%3D1dfd1ba9cafcc3ceabc0c433a247d6b7%2Fb219ebc4b74543a9d8cb6d471c178a82b801146c.jpg', author: '红鲫鱼'},
        {img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508784302863&di=8138abbb80f82b33ebc69a9609faf5ba&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Flvpics%2Fh%3D800%2Fsign%3Db41c8294dbf9d72a08641d1de42b282a%2F55e736d12f2eb93835009c59d7628535e5dd6f28.jpg', author: '红鲫鱼'},
        {img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508784302863&di=ec124506c52828335c5ddc4f94f438f9&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Flvpics%2Fw%3D1000%2Fsign%3D38bc5b5bb6b7d0a27bc9009dfbdf7709%2Fe1fe9925bc315c60a1205c0689b1cb13485477a5.jpg', author: '红鲫鱼'},        
      ],
      list: []
    }
  },
  created () {
    axios.get('/api/data').then(res => {
            this.list = res.data.travelLists
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