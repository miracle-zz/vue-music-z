<template>
  <div class="leaderboard">
    <div class="container">
      <div class="menu">
        <div class="title">榜单</div>
        <div class="more">
          更多
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="detail">
        <find-rank-list-item
          :name="musicFast.name"
          :coverImgUrl="musicFast.coverImgUrl"
          :id="musicFast.id"
        ></find-rank-list-item>
        <find-rank-list-item
          :name=" newSong.name"
          :coverImgUrl=" newSong.coverImgUrl"
          :id=" newSong.id"
        ></find-rank-list-item>
        <find-rank-list-item
          :name="originalMusic.name"
          :coverImgUrl="originalMusic.coverImgUrl"
          :id="originalMusic.id"
        ></find-rank-list-item>
        <find-rank-list-item
          :name="hotMusic.name"
          :coverImgUrl="hotMusic.coverImgUrl"
          :id="hotMusic.id"
        ></find-rank-list-item>
      </div>
    </div>
  </div>
</template>

<script>
import findRankListItem from './findRankListItem'

import { getRankList } from 'network/findMusic'

export default {
  name: 'findLeaderboard',
  components: {
    findRankListItem
  },
  data () {
    return {
      musicFast: {},
      newSong: {},
      originalMusic: {},
      hotMusic: {}
    }
  },
  methods: {
    getRankList () {
      getRankList().then(res => {
        const data = res.data.list
        this.musicFast = data[0]
        this.newSong = data[1]
        this.originalMusic = data[2]
        this.hotMusic = data[3]
      })
    }
  },
  mounted () {
    this.getRankList()
  }
}
</script>

<style lang="scss">
@import 'assets/scss/config.scss';

.leaderboard {
  .container {
    .menu {
      margin-top: 20px;
      padding-bottom: 10px;
      margin-bottom: 20px;
      border-bottom: 3px solid $colorA;
      .title {
        display: inline-block;
        font-size: 20px;
        margin-right: 20px;
      }
      .more {
        float: right;
        margin-top: 6px;
      }
    }
    .detail {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
