<template>
<div>
    <mt-navbar v-model="selected">
        <mt-tab-item  :id="index" v-for="(item,index) in list">
            {{item}}
        </mt-tab-item>
    </mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected" swipeable>
  <mt-tab-container-item :id="index" v-for="(item, index) in list">
    <mt-cell :title="item" v-for="item in itemCell">
        <!-- <span>icon 是图片</span> -->
        <!-- <img slot="icon" src="../assets/100x100.png" width="24" height="24"> -->
    </mt-cell>
  </mt-tab-container-item>
</mt-tab-container>
</div>
</template>
<script>
export default {
    data () {
        return {
            swip: true,
            list: ['标签','用户','文章'],
            selected: '',
            itemCell: [],
            first: 0,
        }
    },
    created () {
        this.selected=0
    },
    props: {
    },
    watch: {
        "selected": {
            handler (val,oldval) {
                if (this.selected === 0) {
                    console.log(this.selected)
                    this.itemCell=['每周一涂','给你看我的手杖吧','始于人像摄影']
                } else if (this.selected === 1) {
                    this.itemCell=['猫司令','假面猫耳','海报君','RAW','影视口碑榜']
                } else if (this.selected === 2) {
                    this.itemCell=[]
                }
            }
        }
    }
}    
</script>
<style lang="stylus">
</style>
