<template>
    <div>
         <div class="title">Hot Recommand</div>
        <ul>
            <li v-for="item of recommandList" class="item border-bottom" :key="item.id">
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">More Details</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommandList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/tts9/1508/68/6435b747deae7c.jpg_r_480x320x95_eec52bf7.jpg',
        title: 'Liyang Tianmu Lake',
        desc: '[Free Tour] Liyang Tianmu Lake Yuhu Peninsula Hot Spring Resort Hotel Self-driving 2-Day Tour-Romantic Steak, Passion Drifting, Various Packages Optional'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/515f065e-9bed-40ce-abef-7bbb7b33be3f.jpg_r_480x320x95_39ae1e40.jpg',
        title: 'Shaolin Temple',
        desc: '[Group Tour]Five-day panoramic tour to Henan Pure Play 👍Shaolin Temple｜Longmen Grottoes｜Kaifeng Baogong｜Yuntai Mountain｜24H shuttle plane'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/83944d8a-2f11-4db2-8a57-3469593f133e.jpg_r_480x320x95_2307b63c.jpg',
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
    .item
        display flex
        height 1.9rem
        overflow hidden
        .item-img
            width 1.7rem
            height 1.7rem
            padding 0.1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
        .item-title
            ellipsis()
            line-height .54rem
            font-size .32rem
        .item-desc
            ellipsis()
            line-height .4rem
            color #ccc
        .item-button
            line-height .44rem
            margin-top .16rem
            background #ff9300
            padding 0 .2rem
            border-radius .06rem
</style>
