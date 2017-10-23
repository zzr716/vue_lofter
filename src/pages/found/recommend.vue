<template>
<div class="recommend">
    <ul>
      <li v-for="item in list" @click="getDetail(item)">
          <div class="recImgBox" @click="goPage">
              <img v-lazy="item.img"  class="recImg">
          </div>
          <div class="recImgText" @click="goPage">
              <span class="author">作者：{{item.name}}</span>
          </div>  
      </li>
    </ul>
    <mt-popup v-model="detailsShow" position="right" class="detailPage">      <pubdetail>
            <div class="backImg" @click="detailsShow=false">
                <img src="../../assets/found/more.png" class="back" >
            </div>
        </pubdetail>
    </mt-popup> 
    <!-- <page-transition></page-transition> -->
</div>
</template>

<script>
import pageTransition from '@/components/pageTransition'
import { mapActions, mapMutations } from 'vuex'
import pubdetail from '@/components/pubdetail'
export default {
    data () {
        return {
            detailsShow: false,
            list: [
                // {img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2160752917,2227143967&fm=27&gp=0.jpg', author: '红鲫鱼'},
                // {img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2160752917,2227143967&fm=27&gp=0.jpg', author: '红鲫鱼'},
            ]
        }
    },
    created () {
        axios.get('/api/data').then(res => {
            this.list = res.data.recommendLists
        }).catch(err => {
            console.log(err)
        })
    },
    // components: {
        // "page-transition": pageTransition
    // },
    methods: {
        getDetail (item) {
        },
        ...mapActions({
            getDetail: 'getDeatil'
        }),
        swipe: function (evt) {
            console.log('swipe' + evt.direction)
        },
        goPage () {
            this.detailsShow = true
            // this.$router.push('/detail')
        }
    },
    components: {
        pubdetail,
        "page-transition": pageTransition
    }
}
</script>

<style lang="stylus" scoped>
.recommend
    width 100%
    height 100%
    ul
        li
            .recImgBox
                width 100%
                .recImg
                    width 100%
                .recImg[lazy=loaded]
                    height 4.277rem
            .recImgText
                width 9rem
                font-size 0.388rem
                margin .583rem 0 .486rem .416rem
                border-bottom 0.001rem solid #cdcdcd
.detailPage
    width 10rem
    height 100%
</style>

