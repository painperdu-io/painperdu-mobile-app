<template>
  <!--<menu-bar></menu-bar>-->
  <header-bar v-if="$route.page.header.enable"></header-bar>
  <div class="wrap {{ $route.page.bgClass }}  {{ $route.page.wrap }}">
    <router-view transition="popIn"></router-view>
  </div>
  <footer-bar v-if="$route.page.footer.enable"></footer-bar>
  <svg-icons></svg-icons>
</template>

<script>
import HeaderBar from './components/commons/navigation/HeaderBar'
import FooterBar from './components/commons/navigation/FooterBar'
import MenuBar from './components/commons/navigation/MenuBar'
import SvgIcons from './components/commons/icons/SvgIcons'
import store from './vuex/store'

export default {
  components: {
    HeaderBar,
    FooterBar,
    MenuBar,
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
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  overflow: hidden;

  &.wrap-header-footer {
    min-height: calc(100vh - 120px);
    padding: 60px 0;
  }

  &.wrap-header {
    min-height: calc(100vh - 60px);
    padding-top: 60px;
  }

  &.wrap-footer {
    min-height: calc(100vh - 60px);
    padding-bottom: 60px;
  }
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
