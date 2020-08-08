<template>
<div class="wrapper">
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
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
        observeParents: true,
        loop:true
      },
      swiperList: [{
        id: '001',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vcimg/c0a60fa20379efa4f02ce527a680dc1b.jpeg'
      }, {
        id: '002',
        imgUrl: 'http://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg'
      }]
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
