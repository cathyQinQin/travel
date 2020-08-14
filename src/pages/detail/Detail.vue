<template>
    <div>
      <detail-banner
      :sightName="sightName"
      :bannerImg ="bannerImg"
      :gallaryImgs ="gallaryImgs"
      ></detail-banner>
      <detail-header></detail-header>
      <div class="content">
        <detail-List :list="list"></detail-List>
      </div>
    </div>
</template>
<script>
import axios from 'axios';
import DetailBanner from './components/Banner.vue';
import DetailHeader from './components/Header.vue';
import DetailList from './components/List.vue';

export default {
  name: 'Detail',
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [],
    };
  },
  methods: {
    getDetailInfo() {
      axios.get('api/detail.json', {
        params: {
          id: this.$route.params.id,
        },
      }).then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res) {
      const { data } = res;
      if (data.ret && data.data) {
        const info = data.data;
        this.sightName = info.sightName;
        this.bannerImg = info.bannerImg;
        this.gallaryImgs = info.gallaryImgs;
        this.list = info.categoryList;
      }
    },
  },
  mounted() {
    this.getDetailInfo();
  },
  activated() {
    this.getDetailInfo();
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
};
</script>
<style lang="stylus" scoped>
.content
  height 50rem
</style>
