<template>
<div class="recommend">
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) in sw">
            <img v-lazy="item.picUrl">
        </mt-swipe-item>
    </mt-swipe>
    <div class="wrapper" ref="imgWrapper">
        <ul class="content">
            <li v-for="item in data">
                <img v-lazy="item.pic" alt="">
            </li>
        </ul>
    </div>
    <div class="animalList">
        <detail :dynamic="list"></detail>
    </div>
</div>
</template>

<script>
import detail from '@/components/detail'
import BScroll from 'better-scroll'
export default {
    data () {
        return {
            list: [],
            sw: [
                {
                    picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508729348097&di=9383a42344bf14fcd69c75abec904c5d&imgtype=0&src=http%3A%2F%2Fscimg.jb51.net%2Fallimg%2F160404%2F14-160404103545501.jpg',
                    id: 11351
                },
                {
                    picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508729337568&di=7dbf3eafe0d84fe72aaa43cb6e2f4dac&imgtype=0&src=http%3A%2F%2Fi2.3conline.com%2Fimages%2Fpiclib%2F201310%2F23%2Fbatch%2F1%2F200118%2F1382499204368634anxngae.jpg',
                    id: 11372
                },
                {
                    picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508729367312&di=da8a0d48364b511de01075e6317dd992&imgtype=0&src=http%3A%2F%2Fimg.sc115.com%2Fuploads1%2Fsc%2Fjpgs%2F1504%2Ffpic780_sc115.com.jpg',
                    id: 11378
                },
                {
                    picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509324187&di=66a6b03ff3ec6d42d73a80e7a447538a&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F110914%2F8879-11091423405836.jpg',
                    id: 11375
                }
            ],
            data: [
                {pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509184758&di=a72647905d182f7fe864eb39814fbdd3&imgtype=jpg&er=1&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201702%2F08%2F4972db13f75df2df2446259945029d0d.jpg', author: '红鲫鱼'},
                {pic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1515336031,987745482&fm=27&gp=0.jpg', author: '红鲫鱼'},
                {pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509283992&di=6935beb430d842f99fd6b89cc34e8a2f&imgtype=jpg&er=1&src=http%3A%2F%2Fmvimg2.meitudata.com%2F55d5b36c1e4e899.jpg', author: '红鲫鱼'},
                {pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508729367312&di=da8a0d48364b511de01075e6317dd992&imgtype=0&src=http%3A%2F%2Fimg.sc115.com%2Fuploads1%2Fsc%2Fjpgs%2F1504%2Ffpic780_sc115.com.jpg', author: '红鲫鱼'},
                {pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508689390924&di=fe971eed58df2a3840301e342dc07dc3&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130509%2F0035035937220080_b.jpg', author: '红鲫鱼'},
                {pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508689433157&di=e09cf603739b7b75b56d7f557e747c0a&imgtype=0&src=http%3A%2F%2Fpic.nipic.com%2F2008-06-04%2F2008649611898_2.jpg', author: '红鲫鱼'},
                {pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508689488964&di=73f0b0a1a618430ba78b18cecc046def&imgtype=0&src=http%3A%2F%2Fmvimg2.meitudata.com%2F56891890cc8115043.jpg', author: '红鲫鱼'},
            ],
            listenScroll: true,
            scrollX: true
        }
    },
    created () {
        axios.get('/api/data').then(res => {
            this.list = res.data.animalLists
            this.$nextTick(() => {
                this._initScroll()
            })
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {
        _initScroll () {
            this.slide = new BScroll(this.$refs.imgWrapper, {
                scrollX: true,
                click: true
            })
        }
    },
    components: {
        detail
    }
}
</script>

<style lang="stylus">
.recommend
    width 100%
    .mint-swipe
        height 4.277rem
        width 10rem
        margin-bottom 0.3rem
        img[lazy=loading]
            width 100%
            height 100%
        img[lazy=loaded]
            width 100%
            height 100%
    .wrapper
        width 10rem
        overflow hidden
        border-bottom 0.025rem solid #cdcdcd
        .content
            white-space nowrap
            width 100%
            overflow-x auto
            overflow-y hidden
            &::-webkit-scrollbar
                display none
            li
                display inline-block
                margin-right 0.25rem
                // width 1.75rem
                // img
                    // width 1.75rem
                    // height 1.75rem
                img[lazy=loaded]
                    width 1.75rem
                    height 1.75rem
    .animalList
        width 10rem
        margin-top 0.25rem
</style>

