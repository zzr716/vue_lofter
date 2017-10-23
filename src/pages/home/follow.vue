<template>
  <div>
      <mt-cell title="我的订阅" style="color: #dddddd;"></mt-cell>
      <mt-cell v-for="item in list" :title="item.name" :value="item.num">
          <img slot="icon" :src="item.img" width="24" height="24">
      </mt-cell>
  </div>
</template>
<script>
export default {
    data () {
        return {
            list: [
                {
                    img:require('../../assets/movie.jpg'),
                    name: '一句话影评',
                    num: 20
                },
                {
                    img:require('../../assets/meiduan.jpg'),
                    name: '美短',
                    num: 130
                },
                {
                    img:require('../../assets/dog.jpg'),
                    name: '萨摩耶',
                    num: 260
                }
            ]
        }
    }
}
</script>
<style lang="stylus">

</style>
