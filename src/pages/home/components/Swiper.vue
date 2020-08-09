<template>
<div class="wrapper">
  <swiper :options="swiperOptions" v-if="showSwiper">
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
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 3000,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
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
