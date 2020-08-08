<template>
    <div>
         <div class="title">Where to go on weekend</div>
        <ul>
            <li v-for="item of recommandList" class="item border-bottom" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeRecommand',
  data () {
    return {
      recommandList: [{
        id: '0001',
        imgUrl: '//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg',
        title: 'Liyang Tianmu Lake',
        desc: '[Free Tour] Liyang Tianmu Lake Yuhu Peninsula Hot Spring Resort Hotel Self-driving 2-Day Tour-Romantic Steak, Passion Drifting, Various Packages Optional'
      }, {
        id: '0002',
        imgUrl: '//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/fd16ccffb2e2376ff370bda3bebebd71.jpg',
        title: 'Shaolin Temple',
        desc: '[Group Tour]Five-day panoramic tour to Henan Pure Play 👍Shaolin Temple｜Longmen Grottoes｜Kaifeng Baogong｜Yuntai Mountain｜24H shuttle plane'
      }, {
        id: '0003',
        imgUrl: '//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/c2ae82fcc9fa11fa253e5919c49bcfbf.jpg',
        title: 'Shanghai',
        desc: '[Group Tour]All inclusive 💎Nanjing, Shanghai, Hangzhou, Suzhou, Yangzhou, Wuxi, Wuzhen, Zhouzhuang, Shuangshui Town, Wuzhen, Zhouzhuang, 6-day tour♛, including the night view of Songcheng and Shanghai'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        line-height .8rem
        background #eee
        text-indent .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 61%
        .item-img
            width 100%
    .item-info
        padding .1rem
    .item-title
        ellipsis()
        line-height .54rem
        font-size .32rem
    .item-desc
        ellipsis()
        line-height .4rem
        color #ccc
</style>
