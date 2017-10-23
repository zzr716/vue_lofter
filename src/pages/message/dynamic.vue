<template>
  <div class="dynamic">
      <div v-for='item in users' class="dyItem">
        <!-- <mt-cell> -->
          <div class="dyHead">
            <div class="imgHead">
              <img v-lazy="item.head" />
            </div>
            <div class="desc">
              <p>{{item.name}}<span>喜欢了{{item.likeN}}篇</span></p>
              <time >{{item.time}}</time>
            </div>
          </div>
          <div class="dyBody">
            <div class="imgBox">
              <img v-for='img in item.imgArr' v-lazy="img.src">
            </div>
          </div>
        <!-- </mt-cell> -->
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users : [
        {
          name : '别人家的宠物',
          likeN : 4,
          time : new Date(),
          head : require('../../assets/user/head.jpg'),
          imgArr : [
            {
              src : require('../../assets/user/picture.jpg'),
              href : '###'
            },{
              src : require('../../assets/user/picture.jpg'),
              href : '###'
            },{
              src : require('../../assets/user/picture.jpg'),
              href : '###'
            },{
              src : require('../../assets/user/picture.jpg'),
              href : '###'
            },{
              src : require('../../assets/user/picture.jpg'),
              href : '###'
          }]
        }, {
          name : 'Jackic',
          likeN : 5,
          time : new Date(),
          head : require('../../assets/user/shenle.jpg'),
          imgArr : [
            {
              src : require('../../assets/user/picture1.jpg'),
              href : '###'
            },{
              src : require('../../assets/user/picture1.jpg'),
              href : '###'
            },{
              src : require('../../assets/user/picture1.jpg'),
              href : '###'
            }
          ]
        }, {
          name : '红鲤鱼',
          likeN : 2,
          time : new Date(),
          head : require('../../assets/user/shenle.jpg'),
          imgArr : [
            {
              src : require('../../assets/user/picture2.jpg'),
              href : '###'
            },{
              src : require('../../assets/user/picture2.jpg'),
              href : '###'
          }]
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.dynamic
  background white
  // height auto
  // min-height 100%
  box-sizing border-box
  .dyItem
    width 10rem
    padding 0 0.5rem
    .dyHead
      width 100%
      .imgHead
        width 1.388rem
        float left
        img[lazy=loading]
          width 1.138rem
          height 1.138rem
          border-radius 50%
        img[lazy=loaded]  
          width 1.138rem
          height 1.138rem
          border-radius 50%
      .desc
        p
          font-size .342rem
        span
          color #999999
          margin-left .5rem
          font-size .416rem
        time
          color #999999
          font-size .342rem
    .dyBody
      width 100%
      margin .24rem 0
      // border-bottom 1px solid #dcdcdc
      .imgBox
        display flex
        display -webkit-flex
        flex-wrap wrap
        -webkit-flex-wrap wrap
        justify-content flex-start
        -webkit-justify-content flex-start
        align-items flex-start
        -webkit-align-items flex-start
        margin 0 .8rem 0 1.388rem
        border-bottom 0.0015rem solid #dcdcdc
      img[lazy=loading]
        width 1.81rem
        height 1.81rem
        border-radius 50%
        margin 0 0.24rem 0.24rem 0
      img[lazy=loaded]
        width 1.81rem
        height 1.81rem
        border-radius 50%
        margin 0 0.24rem 0.24rem 0
</style>

