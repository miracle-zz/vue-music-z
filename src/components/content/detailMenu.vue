<template>
  <div class="menu">
    <div class="title">热门推荐</div>
    <div class="catagory">
      <span>华语</span>
      <span>|</span>
      <span>流行</span>
      <span>|</span>
      <span>摇滚</span>
      <span>|</span>
      <span>民谣</span>
      <span>|</span>
      <span>电子</span>
    </div>
    <div class="more">
      更多
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailMenu'
}
</script>

<style lang="scss">
@import 'assets/scss/config.scss';

.menu {
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 3px solid $colorA;
  .title {
    display: inline-block;
    font-size: 20px;
    margin-right: 20px;
  }
  .catagory {
    display: inline-block;
    span {
      margin: 0 6px;
    }
  }
  .more {
    float: right;
    margin-top: 6px;
  }
}
</style>
