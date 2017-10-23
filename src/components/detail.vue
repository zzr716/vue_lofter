<template>
<div>
<ul class="itemList">
    <li  @click="getDetail(item)" v-for="item in dynamic" class="item">
        <div class="head">
            <div class="imgHead">
            <img :src="item.headImg" class="img">
            </div>
            <span class="username">{{item.name}}</span>
            <span class="follow" v-show='!item.follow' @click="item.follow=true">关注</span>
        </div>
        <div class="bigImg" v-show="item.img" @click='detailsPage'>
            <img v-lazy="item.img" >
        </div>
        <div class="word" @click='detailsPage'>
            <p>{{item.word}}</p>
        </div>
        <div class="tag">
            <span>#</span>
            <a href="javascript:;" v-for='item of item.tag'>{{item}}</a>
        </div>
        <div class="actimg" @click='detailsPage'>
            <img :src="btnImg.heart">
            <img :src="btnImg.comment">
            <img :src="btnImg.transmit">
            <img :src="btnImg.agree">
        </div>
        <div class="comment">
          <div class="headInf">
              <span>{{item.comment.hot}} 热度</span>
              <span>{{item.comment.num}} 评论</span>
          </div>
          <p v-for="uesr of item.comment.users">
            <!-- <a :href="user.url">{{user.name}}</a>:  {{user.word}} -->
          </p>
        </div>
    </li>
</ul>
<mt-popup v-model="detailsShow" position="right" class="detailPage">
    <pubdetail>
        <div class="backImg" @click="detailsHide">
             <img src="../assets/found/more.png" class="back" >
        </div> 
    </pubdetail>
    <!-- <pageTransition></pageTransition> -->
</mt-popup>
</div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
import pubdetail from '@/components/pubdetail'
export default {
  components : {
    pubdetail
  },
  props : {
    dynamic: Array
  },
  data () {
    return {
      detailsShow: false,
      btnImg : {
        heart : require('../assets/heart.png'),
        comment : require('../assets/comment.png'),
        transmit : require('../assets/transmit.png'),
        agree : require('../assets/agree.png')
      }
    }
  },
  methods : {
    getDetail (item) {
      this.detailsShow = true
    },
    ...mapActions({
      getDetail: 'getDeatil'
    }),
    detailsPage () {
      this.detailsShow = true
      // this.$router.push('/detail')
    },
    detailsHide () {
      this.detailsShow = false
    }
  }
}
</script>
<style lang="stylus">
.detailPage
    width 10rem
    height 100%
.itemList
      overflow-y auto
      height auto
      max-height 180%
      width 10rem
      background #dddddd
      .item
        margin-bottom 0.21rem
        background white
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
          img[lazy=loading]
            width 100%
          img[lazy=loaded]
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
          border-bottom 0.001rem dashed #dddddd
          color #dddddd
          a
            color #999999
            margin-right 0.23rem
        .actimg
          width 9rem
          margin 0.527rem 0.5rem 0
          img
            width 0.64rem
            height 0.64rem
        .comment
          color #999999
          width 9rem
          margin 0 0.5rem 0
          font-size 0.358rem
</style>
