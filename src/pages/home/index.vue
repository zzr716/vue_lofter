<template>
<div class="home page">
    <div class="header homeHeader">
        <mt-navbar v-model="selected" class="homeNav">
            <mt-tab-item id="0">关注</mt-tab-item>
            <mt-tab-item id="1">订阅</mt-tab-item>
        </mt-navbar>
        <div class="addPeople">
            <img class="" src="../../assets/found/addPeo.png"/>
        </div>
    </div>
    <div class="content">
        <mt-tab-container v-model="selected" swipeable>
            <mt-tab-container-item id="0">
                <detail :dynamic="list"></detail>
            </mt-tab-container-item>
            <mt-tab-container-item id="1">
                <follow></follow>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</div>
</template>
<script>
import detail from '@/components/detail'
import navbars from '@/components/Navbar'
import follow from './follow'
export default {
    data () {
        return {
            list: [],
            chooseItem: 0,
            selected: '0',
        }
    },
    components: {
        navbars,
        detail,
        follow
    },
    created () {
        axios.get('/api/data').then(res => {
            return res.data.followLists
        }).then(res => {
            this.list = res
        }).catch(err => {
            console.log(err)
        })
    }
}
</script>
<style lang="stylus">
@import '../../common/stylus/index.styl'
.home
    width 10rem
    position relative
    .homeHeader
        position relative
        a
            text-decoration none
        .mint-navbar
            white-space nowrap
            position absolute
            left 1.4rem
            width 7rem
            background-color transparent
            float left
            .mint-tab-item
                margin-right 0.416rem
                font-size .5rem
                &.is-selected
                    border 0
                .mint-tab-item-label
                    // margin-right 0.416rem
                    font-size .5rem !important
                    line-height 1
        .addPeople
            position absolute
            right 0
            // width 0.24rem
            // height 0.24rem
            text-align center
            width 1.319rem
            padding 0.305rem 0 0.305rem 0
            img
                width 0.61rem
                height 0.61rem
</style>