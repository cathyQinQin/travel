<template>
    <div>
         <div class="title">Hot Recommand</div>
        <ul>
            <router-link
                :to="`/detail/${item.id}`"
                tag="li"
                v-for="item of list"
                class="item"
                :key="item.id">
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">More Details</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array,
  },
};
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        line-height .8rem
        background #eee
        text-indent .2rem
    .item
        borderBottom()
        display flex
        height 1.9rem
        overflow hidden
        .item-img
            width 1.7rem
            height 1.7rem
            padding 0.1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
        .item-title
            ellipsis()
            line-height .54rem
            font-size .32rem
        .item-desc
            ellipsis()
            line-height .4rem
            color #ccc
        .item-button
            line-height .44rem
            margin-top .16rem
            background #ff9300
            padding 0 .2rem
            border-radius .06rem
</style>
