<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>
<script>
import axios from 'axios';
import CityHeader from './components/Header.vue';
import CitySearch from './components/Search.vue';
import CityList from './components/List.vue';
import CityAlphabet from './components/Alphabet.vue';

export default {
  name: 'City',
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: 'A',
    };
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json')
        .then(this.handleCityInfoSucc);
    },
    handleCityInfoSucc(res) {
      const { data } = res;
      if (data && data.ret) {
        this.cities = data.data.cities;
        this.hotCities = data.data.hotCities;
      }
    },
    handleLetterChange(letter) {
      this.letter = letter;
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>
<style lang="stylus" scoped>
</style>
