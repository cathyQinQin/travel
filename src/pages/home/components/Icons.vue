<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="icon of page" :key="icon.id">
                    <div class="icon-img">
                    <img class="icon-img-content" :src="icon.imgUrl"/>
                    </div>
                    <p class="icon-desc">{{icon.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: 'hotel'}, {
        id: '0002',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: 'flight'}, {
        id: '0003',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png',
        desc: 'train'}, {
        id: '0004',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
        desc: 'package'}, {
        id: '0005',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: 'viewTicket'}, {
        id: '0006',
        imgUrl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
        desc: 'overseaHotel'}, {
        id: '0007',
        imgUrl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
        desc: 'budgetTicket'}, {
        id: '0008',
        imgUrl: 'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
        desc: 'busTicket'}, {
        id: '0009',
        imgUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        desc: 'freeTravel'}]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((element, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(element)
      })
      return pages
    }
  }
}

</script>
<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    @import '~styles/mixins.styl'
    .icons >>>.swiper-container
        overflow hidden
        height 0
        padding-bottom 50%
    .icons
        overflow hidden
        height 0
        padding-bottom 50%
        .icon
            position relative
            overflow hidden
            height 0
            width 25%
            float left
            padding-bottom 25%
            .icon-desc
                ellipsis()
                position absolute
                left 0
                right 0
                bottom 0
                color darkTextColor
                height .44rem
                line-height .44rem
                text-align center
            .icon-img
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem
                box-sizing border-box
                padding .1rem
                .icon-img-content
                    height 100%
                    display block
                    margin 0 auto

</style>
