<template>
    <div class="container" @click="handleGalleryClick">
      <div class="wrapper">
        <swiper :options="swiperOptions">
          <template #default>
            <swiper-slide v-for="(img,index) of imgs" :key="index">
                <img :src="img" class="gallery-img"/>
            </swiper-slide>
          </template>
          <template #pagination>
            <div class="swiper-pagination"></div>
          </template>
        </swiper>
      </div>
    </div>
</template>
<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    handleGalleryClick() {
      this.$emit('close');
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        autoplay: true,
        speed: 1000,
        observer: true,
        observeParents: true,
      },
    };
  },
};
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit
.container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background #000
  .wrapper
    width: 100%
    height: 0
    padding-bottom 100%
    .gallery-img
      width: 100%
    .swiper-pagination
      color #fff
      bottom -1rem
</style>
