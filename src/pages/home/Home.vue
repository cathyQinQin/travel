<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommand :list="recommandList"></home-recommand>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommand from './components/Recommand'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommand,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommandList: [],
      weekendList: []
    }
  },
  methods: {
    async getHomeInfo () {
      let res = await Promise.all(['/api/index.json', '/api/city.json'].map(url => axios.get(url)))
      this.swiperList = res[0].data.data.swiperList
      this.city = res[1].data.data.hotCities
      this.iconList = res[0].data.data.iconList
      this.recommandList = res[0].data.data.recommendList
      this.weekendList = res[0].data.data.weekendList
    }
    // getHomeInfoSucc (res) {
    //   res = res.data
    //   if (res.ret && res.data){
    //     const data = res.data
    //     this.city = data.city
    //   }
    //   console.log(res)
    // }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
<style>

</style>
