<template>
    <ul class="list" ref="list">
        <li class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @click="handleLetterClick"
            @touchmove="handleTouchMove"
            >
        {{item}}
        </li>
    </ul>
</template>
<script>
import { throttle, keys } from 'lodash';

export default {
  name: 'CityAlphabet',
  props: {
    cities: Object,
  },
  data() {
    return {
      startY: 0,
      timer: null,
    };
  },
  updated() {
    this.startY = this.$refs.A[0].offsetTop;
    this.offsetY = this.$refs.list.offsetTop;
    this.rowHeight = this.$refs.A[0].clientHeight;
  },
  computed: {
    letters() {
      return keys(this.cities);
    },
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change', e.target.innerText);
    },
    handleTouchMove: throttle(function f(e) {
      const touchY = e.touches[0].clientY - this.offsetY;
      const index = Math.floor((touchY - this.startY) / this.rowHeight);
      if (index >= 0 && index < this.letters.length) {
        this.$emit('change', this.letters[index]);
      }
    }, 30),
  },
};
</script>
<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        bottom 0
        right 0
        width .4rem
        .item
            line-height .4rem
            text-align center
            color $bgColor
</style>
