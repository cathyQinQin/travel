<template>
    <div class="list" ref="wrapper">
        <div>
        <div class="area">
            <div class="title border-topbottom">current city</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">hot city</div>
            <div class="button-list">
                    <div class="button-wrapper" v-for="city of hotCities" :key="city.id">
                        <div class="button">{{city.spell}}</div>
                    </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom" v-for="(item,key) of cities" :key="key">{{key}}
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.spell}}</div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        bottom 0
        right 0
        .title
            font-size .26rem
            line-height .54rem
            background #eee
            padding-left .2rem
            color #666
        .border-topbottom
            &::before
                border-color #ccc
            &::after
                border-color #ccc
        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .button-wrapper
                float left
                width 33.33%
                .button
                    padding .1rem 0
                    margin .1rem
                    text-align center
                    border .02rem solid #ccc
                    border-radius .06rem
        .item-list
            .item
                line-height .76rem
                padding-left .2rem
            &::after
                border-color #ccc
</style>
