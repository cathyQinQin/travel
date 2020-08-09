<template>
    <div class="header">
        choose city
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .header
        position relative
        display inline-block
        width 100%
        line-height $headerHeight
        height $headerHeight
        text-align center
        .header-back
            position absolute
            top 0
            left 0
            width .64rem
            text-align center
            font-size .4rem
            color #fff
</style>
