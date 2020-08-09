<template>
    <city-header></city-header>
</template>
<script>
import CityHeader from './components/Header'
export default {
  name: 'City',
  components: {
    CityHeader
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .header
        display: flex
        line-height: 0.86rem
        background: $bgColor
        color:#fff
        .header-left
            width: 0.64rem
            .back-icon
                text-align:center
                font-size: .4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
            background: #fff
            border-radius: .1rem
            color: #ccc
        .header-right
            width: 1.24rem
            text-align: center
            .arrow-icon
                font-size: .24rem
                margin-left: -.04rem
</style>
