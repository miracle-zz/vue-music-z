<template>
  <div class="findMusic">
    <find-header></find-header>
    <find-swiper :slideList="slideList"></find-swiper>
    <hotRecommend></hotRecommend>
    <find-leaderboard></find-leaderboard>
  </div>
</template>

<script>
import findHeader from './components/findHeader'
import findSwiper from './components/findSwiper'
import hotRecommend from './components/hotRecommend'
import findLeaderboard from './components/findLeaderboard'

import { getSlideList } from 'network/findMusic'
export default {
  name: 'findMusic',
  data () {
    return {
      slideList: []
    }
  },
  components: {
    findHeader,
    findSwiper,
    hotRecommend,
    findLeaderboard
  },
  methods: {
    getSlideList () {
      getSlideList().then(res => {
        // console.log(res.data.banners)
        this.slideList = res.data.banners
      })
    }
  },
  mounted () {
    this.getSlideList()
  }
}
</script>

<style>
</style>
