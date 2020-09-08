<template>
  <div class="item">
    <div class="img-box">
      <img :src="imgUrl" alt />
      <div class="bottom">
        <i class="el-icon-service"></i>
        <span>{{playCount}}</span>
        <i class="el-icon-caret-right paly-icon"></i>
      </div>
    </div>
    <div class="name">{{name}}</div>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    name: String,
    playCount: Number,
    imgUrl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.item {
  .img-box {
    position: relative;

    img {
      width: 140px;
      height: 140px;
    }
    .bottom {
      height: 20px;
      line-height: 20px;
      width: 140px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: #cccccc;
      .paly-icon {
        float: right;
        line-height: 20px;
      }
    }
  }
  .name {
    margin-top: 5px;
    width: 140px;
  }
}
</style>
