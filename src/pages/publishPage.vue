<template>
<div class="page" >
    <transition name="fade">
        <div class="publishPage"
         transition="fade">
            <ul class="publishAction" transition="fade">
                <li>
                    <img class="pubActImg" src="./../assets/publish/image.png">
                    <span class="pubActText">图片</span>
                </li>
                <li>
                    <img class="pubActImg" src="./../assets/publish/video.png">
                    <span class="pubActText">视频</span>                
                </li>
                <li>
                    <img class="pubActImg" src="./../assets/publish/text.png">
                    <span class="pubActText">文字</span>
                </li>
                <li>
                    <img class="pubActImg" src="./../assets/publish/audio.png">
                    <span class="pubActText">音乐</span>
                </li>
            </ul>
            <slot></slot>
        </div>
    </transition>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="stylus" scoped>
.publishPage
    background white
    position fixed
    top 0
    right 0
    left 0
    bottom 0
    width 100%
    height 100%
    overflow auto
    z-index 100
    display flex
    flex-direction column-reverse
    &.fade-enter-active, &.fade-leave-active
        transition .3s
    &.fade-enter, &.fade-leave-to
        transform translate3d(0,2rem,0)
    .publishAction
        width 100%
        position fixed
        top 6.055rem
        left 1.388rem
        -webkit-backdrop-filter blur(10px)
        li
            list-style-type none
            display inline-block
            .pubActImg
                width 3.083rem
                height 3.083rem
                border-radius 50%
                margin-right 1.055rem
            .pubActText
                border-radius .7rem
                display block
                box-sizing border-box
                background rgb(204, 204, 204)
                font-size .444rem
                height 1rem
                width 2.583rem
                line-height 1rem
                margin .347rem 0 .416rem .25rem
                text-align center
</style>

