<template>
<mt-tab-container v-model="selected" swipeable>
    <mt-tab-container-item :id="index" v-for="(item, index) in navs">
        <router-view></router-view>
    </mt-tab-container-item>
</mt-tab-container>
</template>
<script>
export default {
    data () {
        return {
            selected: ''
        }
    },
    props: {
        navs: Array
    },
    method: {
    },
    watch: {
        "selected": {
            handler (val,oldval) {
                this.$router.push('/found/page' + (this.selected+1))
            }
        }
    }
}
</script>
<style>

</style>
