<template>
  <div class="dynamic">
      <div class="header">
          <slot></slot>
          <!-- <div class="backImg" @click="goback">
             <img src="../assets/found/more.png" class="back" >
          </div> -->
          <div class="name">
            <span>{{dynamic.name}}</span>
          </div>
      </div>
      <div class="content">
        <div class="head">
          <div class="imgHead">
            <img :src="dynamic.headImg" class="img">
          </div>
          <span class="username">{{dynamic.name}}</span>
          <span class="time" v-show='dynamic.follow'></span>
          <span class="follow" v-show='!dynamic.follow'>关注</span>
        </div>
        <div class="bigImg" v-show="dynamic.img">
          <img :src="dynamic.img">
        </div>
        <div class="word">
            <p>{{dynamic.word}}</p>
        </div>
        <div class="location"></div>
        <div class="tag">
          <span>#</span>
          <a href="javascript:;" v-for='item of dynamic.tag'>{{item}}</a>
        </div>
        <div class="actimg">
          <img :src="btnImg.heart">
          <img :src="btnImg.comment">
          <img :src="btnImg.transmit">
          <img :src="btnImg.agree">
        </div>
        <div class="comment">
          <div class="headInf">
              <span>{{dynamic.comment.hot}} 热度</span>
              <span>{{dynamic.comment.num}} 评论</span>
          </div>
          <p v-for="item of dynamic.comment.users">
            <a :href="item.url">{{item.name}}</a>  {{item.word}}
          </p>
        </div> 
      </div>
      <div class="footer">
        <input type="text" placeholder="发表评论" class="comment">
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      chooseIndex : 0,
      btnImg : {
        heart : require('../assets/heart.png'),
        comment : require('../assets/comment.png'),
        transmit : require('../assets/transmit.png'),
        agree : require('../assets/agree.png')
      }
    }
  },
  watch: {
    ...mapGetters({
      dynamic: 'showDetail'
    })
  },
  computed: mapGetters({
      dynamic: 'showDetail'
  }),
  methods: {
    goback () {
      // this.$router.push('/found')
      this.$router.goBack(-1)
    }
  }
}

</script>

<style lang="stylus" scoped>
.mint-popup
  position relative
.dynamic
    width 10rem
    height auto
    background-color white
    .header
      font-size .5rem
      border-bottom 0.0001rem solid #cdcdcd
      .backImg
        float left
        width 1.319rem
        text-align center
        padding 0.305rem 0 0.305rem 0
        img
          width 0.611rem
          height 0.611rem
      .name
        text-align center
        padding 0.305rem 0 0.305rem 0
    .content
      overflow-y auto
      height auto
      max-height 130%
      width 10rem
      position absolute
      bottom 1.48rem
      top 1.41rem
      .head
        width 9rem
        height 1.71rem
        line-height 1.71rem
        position relative
        margin 0 0.5rem 0
        .imgHead
          position absolute
          left 0
          padding 0.2rem 0
          .img
            width 1.138rem
            height 1.138rem
            border-radius 50%
      .username
        position absolute
        left 1.555rem
        font-size 0.388rem
      .follow
        border 0.001rem solid #9ac600
        font-size 0.388rem
        border-radius 0.222rem
        height 0.833rem
        line-height 0.833rem
        width 1.72rem
        text-align center
        position absolute
        right 0
        top 0.444rem
      .bigImg
        width 10rem
        img
          width 100%
      .word 
        width 9rem
        margin 0 0.5rem
        font-size 0.388rem
      .tag
        width 9rem
        margin 0.388rem 0.5rem 0
        padding-bottom 0.472rem
        font-size 0.388rem
        color #dddddd
        border-bottom 0.001rem dashed #dddddd
        a
          color #999999
          margin-right 0.23rem
      .actimg
        width 9rem
        margin 0.527rem 0.5rem
        img
          width 0.64rem
          height 0.64rem
      .comment
        width 9rem
        margin 0 0.5rem 0
        font-size 0.358rem
        color #999999
        p
          margin-top 0.305rem
          color #8B8B83
          font-size 0.4rem
        a
          color #B9D3EE
          font-size 0.358rem
    .footer
      position absolute
      bottom 0
      width 10rem
      padding 0.22rem 0.25rem
      border-top .001rem solid #dddddd
      .comment
        width 9rem
        padding 0.25rem
        border .001rem solid #cdcdcd
        border-radius .275rem
        background #eeeeee
        font-size 0.388rem
</style>


