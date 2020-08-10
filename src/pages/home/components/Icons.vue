<template>
    <div class="icons">
        <swiper :options="swiperOptions">
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
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOptions: {
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: false,
      },
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((element, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(element);
      });
      return pages;
    },
  },
};
</script>
<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    @import '~styles/mixins.styl'
    .icons >>>.swiper-container
        overflow hidden
        height 0
        padding-bottom 50%
    .icons
        margin-top .1rem
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
