<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommand :list="recommandList"></home-recommand>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>
<script>
import axios from 'axios';
import { mapState } from 'vuex';
import HomeHeader from './components/Header.vue';
import HomeSwiper from './components/Swiper.vue';
import HomeIcons from './components/Icons.vue';
import HomeRecommand from './components/Recommand.vue';
import HomeWeekend from './components/Weekend.vue';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommand,
    HomeWeekend,
  },
  data() {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommandList: [],
      weekendList: [],
    };
  },
  computed: {
    ...mapState(['city']),
  },
  methods: {
    async getHomeInfo() {
      const res = await Promise.all(['/api/index.json', `/api/city.json?city=${this.city}`].map((url) => axios.get(url)));
      this.swiperList = res[0].data.data.swiperList;
      this.iconList = res[0].data.data.iconList;
      this.recommandList = res[0].data.data.recommendList;
      this.weekendList = res[0].data.data.weekendList;
    },
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.getHomeInfo();
      this.lastCity = this.city;
    }
    console.log('activated');
  },
};
</script>
<style>

</style>
