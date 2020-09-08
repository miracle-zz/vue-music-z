<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import navHeader from 'components/content/navHeader'
export default {

  name: 'app',
  components: {
    navHeader
  }
}
</script>

<style lang="scss">
@import 'assets/scss/reset.scss';
</style>
