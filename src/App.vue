<template>
  <header-bar></header-bar>
  <div class="wrap">
    <router-view></router-view>
  </div>
  <footer-bar></footer-bar>
</template>

<script>
import HeaderBar from './components/commons/HeaderBar'
import FooterBar from './components/commons/FooterBar'
import NavigationBar from './components/commons/NavigationBar'

export default {
  components: {
    HeaderBar,
    FooterBar,
    NavigationBar,
  }
}
</script>

<style>
body {
  margin: 0;
  background: #ff4743;
  font-size: 10px;
}

.wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #ffffff;
  overflow: hidden;
}
</style>
