<template>
<div class="foundnav">
    <mt-navbar v-model="selected">
        <mt-tab-item  :id="index" v-for="(item,index) in navs">{{item}}</mt-tab-item>
    </mt-navbar>
</div>
</template>
<script>
import pageTransition from '@/components/pageTransition'
export default { 
    data () {
        return {
            swip: true,
            selected: '',
            itemCell: []
        }
    },
    props: {
        navs: Array
    },
    watch: {
        "selected": {
            handler (val,oldval) {
                this.$store.state.navState = this.selected
                // if (this.selected == 0) {
                //     this.$router.push('/found/page' + (this.selected+1))
                // } else if (this.selected == 1) {
                //     this.$router.push('/found/page' + (this.selected+1))
                // } else if (this.selected == 2) {
                //     this.itemCell=[]
                // }
                this.$router.push('/found/page' + (this.selected + 1))
            }
        }
    }
}    
</script>
<style lang="stylus">
.foundnav
    width auto
    float left
    overflow hidden
    font-size .5rem
    .mint-navbar
        width 7rem
        overflow-x auto
        overflow-y hidden
        white-space nowrap
        background-color transparent
        &::-webkit-scrollbar
            display none
        .mint-tab-item
            margin-right 0.416rem
            &.is-selected
                border-bottom .05rem solid #000000
            .mint-tab-item-label
                // margin-right 0.416rem
                font-size .5rem
                // line-height .5rem
            
</style>
