<template>
  <navigation-bar></navigation-bar>
  <header-bar></header-bar>
  <div class="wrap {{$route.data.bgClass}} ">
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
@import './styles/variables.scss';

body {
  margin: 0;
  background: $color-red;
  font-size: 10px;
}

.wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
}

  .background1 {
    background: $color-white url('/static/img/bg-1.png');
  }

  .background2 {
    background: $color-white url('/static/img/bg-2.png');
  }

  .background3 {
    background: $color-white url('/static/img/bg-3.png');
  }
</style>
