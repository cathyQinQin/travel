<template>
    <div>
      <detail-banner></detail-banner>
      <detail-header></detail-header>
      <div class="content">
        <detail-List :list="list"></detail-List>
      </div>
    </div>
</template>
<script>
import DetailBanner from './components/Banner.vue';
import DetailHeader from './components/Header.vue';
import DetailList from './components/List.vue';

export default {
  name: 'Detail',
  data() {
    return {
      list: [
        {
          title: 'student price',
          children: [{
            title: 'student price',
          }],
        },
        {
          title: 'adult price',
        },
        {
          title: 'children price',
        },
      ],
    };
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
