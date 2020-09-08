<template>
  <div class="findHeader">
    <div class="findMenu">
      <span>推荐</span>
      <span>排行榜</span>
      <span>歌单</span>
      <span>主播电台</span>
      <span>歌手</span>
      <span>新碟上架</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'findHeader'
}
</script>

<style lang="scss">
@import 'assets/scss/config.scss';
.findHeader {
  position: relative;
  width: 100%;
  height: 40px;
  background-color: $colorA;
  color: $colorG;
  // justify-content: space-between;
  .findMenu {
    position: absolute;
    top: 10px;
    left: 360px;
    display: flex;
    span {
      display: inline-block;
      margin: auto 25px;
      // height: 14px;
      font-size: 14px;
      padding: 0 10px;
      border-radius: 14px;
      &:hover {
        background-color: #333;
        opacity: 0.5;
      }
    }
  }
}
</style>
