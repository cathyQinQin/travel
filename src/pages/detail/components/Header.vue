<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            view detail
        </div>
    </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0,
      },

    };
  },
  methods: {
    handleBannerClick() {
      this.showGallery = true;
    },
    handleGalleryClose() {
      this.showGallery = false;
    },
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        const opacity = top / 140 > 1 ? 1 : top / 140;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    },
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll);
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
 .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    text-align center
    line-height .8rem
    height .8rem
    border-radius 50%
    background rgba(0,0,0,.5)
    .header-abs-back
        color #fff
        font-size .4rem
 .header-fixed
    background $bgColor
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    width 100%
    line-height $headerHeight
    text-align center
    color #fff
    .header-fixed-back
        position absolute
        top 0
        left 0
        width .64rem
        text-align center
        font-size .4rem
        color #fff

</style>
