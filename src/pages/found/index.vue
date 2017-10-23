<template>
<div class="page found">
    <div class="header">
        <div class="search" @click="searchVisible=true">
            <img src="../../assets/found/search.png" alt="" class="searIcon">
        </div>
        <!-- <div class="nav" style="{width: 7rem}"> -->
        <navbar-scroll :navs="navs" :chooseItem="chooseItem"></navbar-scroll>
        <!-- <navbars :navs="navs"></navbars> -->
        <div class="more"> 
            <img src="../../assets/found/more.png" alt="" class="moreIcon">
        </div>
    </div>
    <mt-popup v-model="searchVisible" position="top" class="searchPage">
        <div class="searInput">
            <input type="text" class="searInputText" placeholder="搜索标签、用户、标题" cancel-text=""/>
            <span class="searCancel" @click="searchVisible=false">取消</span>
        </div>
        <!-- <div class="searAbout nav"> -->
            <!-- <navbar :navs="searNavs" :chooseItem="chooseItem"></navbar-scroll> -->
            <navbar></navbar>
        <!-- </div> -->
    </mt-popup>
     <!-- <v-touch @swipeleft="onSwipeleft" @swiperight="onSwipeRight" :priority="1"> -->
        <page-transition></page-transition>
        <!-- <keep-alive> -->
            <!-- <router-view class="routerView"></router-view> -->
        <!-- </keep-alive> -->
    <!-- </v-touch> -->
</div>
</template>
<script>
import pageTransition from '@/components/pageTransition'
import navbarScroll from '@/components/NavbarScroll'
import navbar from '@/components/Navbar'
import navbars from '@/components/Navbars'
import tabcontainer from '@/components/tabcontainer'
import data from '@/util/mock.js'
import AlloyFinger from 'alloyfinger'
export default {
    data () {
        return {
            navs: ['推荐','萌宠','电影','旅行','文具控','美食','摄影课堂'],
            searNavs: ['标签','用户','文章'],
            chooseItem: 0,
            isBottom: true,
            searchVisible: false
        }
    },
    created () {
        this.$router.push('/found/page1')
    },
    mounted () {
        // var that = this
        // let el = document.querySelector('.child-view')
        // var af = new AlloyFinger(el, {
        //     swipe: function (evt) {
        //         console.log(evt.direction)
        //         if (evt.direction == 'Left') {
        //             let index = 1
        //             let next = ''
        //             if (that.$route.name != null) {
        //                 index = +that.$route.name[4]
        //                 console.log(index)
        //                 index < 8  ?  (next = "page" + (index + 1)) &&(that.chooseItem = index + 1) && (that.chooseItem = +index + 1) 
        //                     : (next="page8") && (that.chooseItem = 7)
        //                 that.$router.push('/found/' + next)
        //             }
        //             // that.$router.push('/found/page3')
        //             // console.log('左滑')
        //         }
        //     }
        // })
    },
    computed: {
        getNavState () {
            return this.$store.state.navState
        }
    },
    watch: {
    // 监听计算属性 并且它来自vuex中状态
        getNavState(state){
            var index = state + 1
            // console.log(index)
            // console.log(this.$router.options.routes[1].children[index+1].name)
            this.$router.push('/found/page' + index)
        // console.log(
        },
        "chooseItem" () {
            console.log(this.chooseItem)
        },
        '$route' (to, from) {
            let toNum = to.path.split('/').length
            let fromNum = from.path.split('/').length
            if (toNum > fromNum) {
                this.direction = 'slide-left'
            } else {
                this.direction = 'slide-right'
            }
        }
    },
    methods: {
        onSwipeleft () {
            let index = 1
            let next = ""
            if (this.$route.name != null) {
                index =  +this.$route.name[4]
                console.log(this.$route.name[4])
                console.log('index'+index)
                // console.log(this.chooseItem)
                index < 8  ?  (next = "page" + (index + 1)) &&(this.chooseItem = index + 1) && (this.chooseItem = +index + 1) 
                    : (next="page8") && (this.chooseItem = 7)
                this.$router.push('/found/' + next)
            } 
            if (index >3 ) {
                document.querySelector('.list-content').scrollLeft += 76
            }        
        },
        onSwipeRight () {
            // this.$router.goBack()
                  let index = 1
                    let back = ""
            if(this.$route.name != null) {
                index =  +this.$route.name[4]
                index > 1  ?  (back = "page" + (index - 1)) &&(this.chooseItem = index - 1) && (this.chooseItem = +index - 1)
            : (back="page1") && (this.chooseItem = 1)
            this.$router.push('/found/' + back)
            } else {
                this.$router.push('/found/' + "page6")
            }
            } 
    },
    components: {
        navbar,
        navbars,
        tabcontainer,
        'navbar-scroll': navbarScroll,
        "page-transition": pageTransition
    }
}
</script>
<style lang="stylus">
@import '../../common/stylus/index.styl'
.header
    position relative
    .search
        float left
        z-index 100
        width 1.319rem
        padding 0.305rem 0 0.305rem 0
        text-align center
        .searIcon
            width 0.611rem
            height 0.611rem
    .more
        float right
        z-index 100
        text-align center
        width 1.319rem
        padding 0.305rem 0 0.305rem 0
        .moreIcon
            width 0.611rem
            height 0.611rem
.searchPage
    width 100%
    height 100%
    font-size .5rem
    .searInput
        padding 0 0.305rem
        height 1.194rem
        line-height 1.194rem
        font-size .5rem
        border 0.001rem solid #dddddd
        .searInputText
            width 80%
            border .001rem solid #cdcdcd
            border-radius .475rem
            background #eeeeee
        .searCancel
            width 20%
            background-color white
            color gray
    .nav
        .nav-wrapper
            ul
                width 10rem
            .nav-item
                width 3.33rem
</style>
