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
                    picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508763761206&di=854b585e08f46fa8a13545e903a241ca&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fd9%2F1512%2F24%2Fe154a2619acea8f7.jpg_r_487x650x95_0060cccb.jpg',
                    id: 11351
                },
                {
                    picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508763783484&di=1e2d095d4a2ae3e0399333ab83299310&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20160530%2Ftooopen_sy_163678236126.jpg',
                    id: 11372
                },
                {
                    picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508763783505&di=5e7bbf9c6a8eebe07a9ccd75122fd6fa&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F52%2F85%2F45i58PIC97v_1024.jpg',
                    id: 11378
                }
            ],
            data: [
                {pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508763898174&di=e7e892f78ad4675d5229a11bee6e6613&imgtype=0&src=http%3A%2F%2Fimg3.3lian.com%2F2014%2Fs5%2F31%2Fd%2F54.jpg', author: '红鲫鱼'},
                {pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508763917550&di=2ed8df332f395acf91d4452d819f2db8&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Flvpics%2Fh%3D800%2Fsign%3D3133028f1bd8bc3ed9080bcab28aa6c8%2F0824ab18972bd4076848644879899e510eb309f3.jpg', author: '红鲫鱼'},
                {pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508763935323&di=a486fffe26fd646fe9e34f947303dca4&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4034970a304e251f8e45423aae86c9177e3e5345.jpg', author: '红鲫鱼'},
                {pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508764031227&di=a6f97c975ee3b6bd1bacbc922e696bed&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fpoi%2F1507%2F5a%2Fcc518303e6b05b.jpg_r_480x360x95_62431c50.jpg', author: '红鲫鱼'},
                {pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508763927085&di=38d58c93e325e66b368ffdaaedf19876&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fc2cec3fdfc039245c91071cf8e94a4c27c1e254c.jpg', author: '红鲫鱼'},
                {pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508764051158&di=1b0f5d53c0ab4b521686d8488bd551e0&imgtype=0&src=http%3A%2F%2Fpic6.photophoto.cn%2F20080326%2F0042040238452924_b.jpg', author: '红鲫鱼'},
                {pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508763783505&di=5e7bbf9c6a8eebe07a9ccd75122fd6fa&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F52%2F85%2F45i58PIC97v_1024.jpg', author: '红鲫鱼'},
            ],
            listenScroll: true,
            scrollX: true
        }
    },
    created () {
        axios.get('/api/data').then(res => {
            this.list = res.data.foodLists
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

