<template>
  <div class="hotRecommend">
    <div class="container">
      <detail-menu></detail-menu>
      <div class="wrapper">
        <div class="item" v-for="(item,index) in  hotPlayList" :key="index">
          <item :name="item.name" :imgUrl="item.picUrl" :playCount="item.playCount"></item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import detailMenu from 'components/content/detailMenu'
import item from 'components/content/item'

import { getHotPlayList } from 'network/findMusic'

export default {
  name: 'hotRecommend',
  components: {
    detailMenu,
    item
  },
  data () {
    return {
      hotPlayList: []
    }
  },
  methods: {
    getHotPlayList () {
      getHotPlayList().then(res => {
        // console.log(res)
        this.hotPlayList = res.data.result
      })
    }
  },
  mounted () {
    this.getHotPlayList()
  }
}
</script>

<style lang="scss">
.hotRecommend {
  .wrapper {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      margin-bottom: 15px;
      // flex: 180px;
    }
  }
}
</style>
