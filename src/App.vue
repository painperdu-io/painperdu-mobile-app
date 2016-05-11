<template>
  <header-bar></header-bar>
  <div class="wrap">
    <router-view transition="popIn"></router-view>
  </div>
  <footer-bar></footer-bar>
</template>

<script>
import HeaderBar from './components/commons/HeaderBar'
import FooterBar from './components/commons/FooterBar'
import NavigationBar from './components/commons/NavigationBar'
import store from './vuex/store'

export default {
  components: {
    HeaderBar,
    FooterBar,
    NavigationBar,
  },
  store,
}
</script>

<style lang='scss'>
@import './styles/fonts.scss';
@import './styles/transitions.scss';

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
