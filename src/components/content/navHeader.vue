<template>
  <div class="header">
    <div class="logo">
      <a href>
        <i class="el-icon-headset"></i>网易云音乐
      </a>
    </div>
    <div class="header-menu">
      <a href="javascript:;">发现音乐</a>
      <a href="javascript:;">我的音乐</a>
      <a href="javascript:;">朋友</a>
      <a href="javascript:;">商城</a>
      <a href="javascript:;">音乐人</a>
      <a href="javascript:;">下载客户端</a>
    </div>
    <div class="search">
      <input type="text" placeholder="音乐/电台/MV" />
    </div>
    <div class="userPage">
      <el-button round size="mini">个人中心</el-button>
    </div>
    <div class="login"></div>
  </div>
</template>

<script>
export default {
  name: 'navHeader'
}
</script>

<style lang="scss">
@import 'assets/scss/config.scss';

.header {
  width: 100%;
  height: 60px;
  background-color: $colorB;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  .logo {
    margin-left: 100px;
    a {
      color: #ffffff;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .header-menu {
    a {
      font-size: 14px;
      color: #ffffff;
      margin: 0 10px;
    }
  }
  .search {
    input {
      height: 25px;
      border-radius: 25px;
      text-indent: 20px;
    }
  }
}
</style>
