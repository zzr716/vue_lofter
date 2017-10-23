<template>
  <div class="mine">
    <div class="backImg">
        </div>
      <div class="myInf">
          <div class="imgHead">
                <img :src="user.headImg">
          </div>
          <div class="info">
              <p>{{user.name}}<span>ID：{{user.ID}}</span></p>
              <div>  
                  <a>关注 <span>{{user.follow}}</span></a>
                  <a>喜欢 <span>{{user.like}}</span></a>
                  <a>粉丝 <span>{{user.fans}}</span></a>
              </div>
          </div>
      </div>
      <!-- <div class="list"> -->
          <mt-cell v-for="item in list" :title="item.word" is-link>
            <img slot="icon" :src="item.img" width="24" height="24">
          </mt-cell>
      <!-- </div> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      iframe : true,
      user: {
        headImg: require('../../assets/user/shenle.jpg'),
        ID: '红鲫鱼',
        follow: 3,
        like: 7,
        fans: 10
      },
      list : [{
        word : '个人应用',
        img : require('../../assets/appli.png'),
        href : '/mine/application'
      },{
        word : '摄影课堂',
        img : require('../../assets/photo.png'),
        href : './mine/phot'
      },{
        word : '分享LOFFTER APP',
        img : require('../../assets/share.png'),
        href : './mine/photography'
      },{
        word : '设置',
        img : require('../../assets/set.png'),
        href : './mine/setPage'
      }]
     }
  }
}
</script>

<style lang="stylus" scoped>
a
  text-decoration none
.backImg
  height 4rem
  background-image url('../../assets/user/backImg.jpg')
  background-size 100% 100%
  background-repeat no-repeat
  background-attachment scroll
  position relative
.myInf
  position absolute
  top 1rem
  padding 0.5rem
  width 10rem
  height 2rem
  background: rgba(255, 255, 255, 0.8)
  opacity 0.8
  font-size 0.4rem
  .imgHead
    float left
    position relative
    margin-right .277rem
    img
      width 1.388rem
      height 1.388rem
      border-radius 50%
  .info
    font-size 0.4rem
    p
      font-weight bold
      display block
      margin-bottom 0.3rem
    a
      color #7d7d7d
      margin-right 0.43rem 
      span
        font-weight bold
        color #333333
.mint-cell 
  z-index 99
  .mint-cell-wrapper
    font-size 0.5rem
</style>

