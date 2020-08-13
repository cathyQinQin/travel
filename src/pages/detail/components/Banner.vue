<template>
<div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" src="https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&rect=17%2C0%2C5964%2C2982&q=45&auto=format&w=1356&h=668&fit=crop"/>
        <div class="banner-info">
          <div class="banner-title">大连海洋世界</div>
          <div class="banner-number">
            <span class="iconfont banner-icon">&#xe64b;</span>
            32
          </div>
        </div>
    </div>
    <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
</div>
</template>
<script>
import CommonGallery from 'common/gallery/Gallery.vue';

export default {
  name: 'DetailBanner',
  data() {
    return {
      imgs: ['https://lh3.googleusercontent.com/proxy/SaH2R9H8dQoYLpwLowIFh9KLmVdjRU9CafQQG_WKYyjHXAeUxCthpePwXO6zf1Svn9LkgGEsihKBJPlp92vl8STNsVxEbKy4pbXlV4PGqgaQwMD2AK9qoex2-24'],
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
