<template>
    <div>
        <div class="search">
            <input
            v-model="keyword"
            class="search-input"
            type="text"
            placeholder="Enter city name"/>
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom"
                v-for="item of list"
                :key="item.id"
                @click="handleCityClick(item.spell)">{{item.spell}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    No Result Found
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { keys } from 'lodash';
import Bscroll from 'better-scroll';
import { mapMutations } from 'vuex';

export default {
  name: 'CitySearch',
  props: {
    cities: Object,
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null,
    };
  },
  computed: {
    letters() {
      return keys(this.cities);
    },
    hasNoData() {
      return !this.list.length;
    },
  },
  methods: {
    handleCityClick(city) {
      this.$store.dispatch('changeCity', city);
      this.$router.push('/');
    },
    ...mapMutations(['changeCity']),
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        // eslint-disable-next-line no-restricted-syntax
        for (const i of this.letters) {
          this.cities[i].forEach((element) => {
            if (element.spell.indexOf(this.keyword) > -1) {
              result.push(element);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
};
</script>
<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .search
        height .72rem
        background $bgColor
        padding 0 .1rem
        .search-input
            box-sizing border-box
            padding 0 .1rem
            height .62rem
            line-height .62rem
            width 100%
            text-align center
            border-radius .1rem
            color #666
    .search-content
        z-index 1
        overflow hidden
        background #eee
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        .search-item
            line-height .62rem
            padding-left .2rem
            color #666
            background #fff

</style>
