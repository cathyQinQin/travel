<template>
<div class="wrapper">
  <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
    <template #default>
      <swiper-slide v-for="item of list" :key="item.id">
          <img :src="item.imgUrl" class="swiper-img"/>
      </swiper-slide>
    </template>
    <template #pagination>
      <div class="swiper-pagination"></div>
    </template>
  </swiper>
</div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: true,
        speed: 1000,
      },
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper;
      },
    },
  },
};
</script>
<style lang="stylus" scoped>
.wrapper >>>.swiper-pagination-bullet-active
    background :#ffffff
.wrapper
    width: 100%
    height: 0
    padding-bottom 30%
    overflow hidden
    background #eee
    .swiper-img
        width: 100%
</style>
