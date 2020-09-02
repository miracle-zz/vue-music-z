<template>
  <div class="header">
    <div class="logo">
      <a href>
        <i class="el-icon-headset"></i>网易云音乐
      </a>
    </div>
    <div class="search"></div>
    <div class="login"></div>
  </div>
</template>

<script>
export default {
  name: 'navHeader'
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 60px;
  background-color: #c20c0c;
  line-height: 60px;
  .logo {
    margin-left: 20px;
    a {
      color: #ffffff;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
