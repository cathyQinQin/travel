<template>
    <div>
       <div class="item" v-for="(item,index) of list" :key="index">
           <div class="item-title">
               <span class="item-title-icon iconfont">&#xe8fb;</span>
               {{item.title}}
           </div>
           <div class="item-children">
              <detail-list v-if="item.children" :list="item.children"></detail-list>
           </div>
       </div>
    </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array,
  },
  data() {
  },
};
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'
.item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
    borderBottom()
    position relative
    left .06rem
    top .06rem
    .item-title-icon
      display inline-block
      width .36rem
      height .36rem
      margin-right .1rem
.item-children
  padding 0 .2rem
</style>
