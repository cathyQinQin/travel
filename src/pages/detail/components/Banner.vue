<template>
<div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" :src="bannerImg"/>
        <div class="banner-info">
          <div class="banner-title">{{sightName}}</div>
          <div class="banner-number">
            <span class="iconfont banner-icon">&#xe64b;</span>
            32
          </div>
        </div>
    </div>
    <fade-animation>
      <common-gallery
      :imgs="gallaryImgs"
      v-show="showGallery"
      @close="handleGalleryClose"
      ></common-gallery>
    </fade-animation>
</div>
</template>
<script>
import CommonGallery from 'common/gallery/Gallery.vue';
import FadeAnimation from 'common/fade/FadeAnimation.vue';

export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
  },
  data() {
    return {
      showGallery: false,
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallery = true;
    },
    handleGalleryClose() {
      this.showGallery = false;
    },
  },
  components: {
    CommonGallery,
    FadeAnimation,
  },
};
</script>
<style lang="stylus" scoped>
.banner
  overflow hidden
  height 0
  padding-bottom 49%
  position relative
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8))
    .banner-title
      font-size .32rem
      padding 0 .2rem
      flex 1
    .banner-number
      margin-top .14rem
      line-height .32rem
      height .32rem
      padding 0 .4rem
      border-radius .2rem
      background rgba(0,0,0,.8)
      font-size .24rem
      .banner-icon
        font-size .24rem
</style>
