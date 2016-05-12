<template>
  <!--<navigation-bar></navigation-bar>-->
  <header-bar></header-bar>
  <div class="wrap {{ $route.page.bgClass }}">
    <router-view transition="popIn"></router-view>
  </div>
  <footer-bar></footer-bar>
  <svg-icons></svg-icons>
</template>

<script>
import HeaderBar from './components/commons/HeaderBar'
import FooterBar from './components/commons/FooterBar'
import NavigationBar from './components/commons/NavigationBar'
import SvgIcons from './components/commons/SvgIcons'
import store from './vuex/store'

export default {
  components: {
    HeaderBar,
    FooterBar,
    NavigationBar,
    SvgIcons,
  },
  store,
};
</script>

<style lang="scss">
@import './styles/reset.scss';
@import './styles/fonts.scss';
@import './styles/transitions.scss';
@import './styles/variables.scss';

body {
  margin: 0;
  background: $color-red;
  font-size: 10px;
}

.wrap {
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 160px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  padding: 80px 0;
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
