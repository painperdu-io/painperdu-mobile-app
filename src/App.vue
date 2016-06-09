<template>
  <header-bar v-if="$route.page.header.enable"></header-bar>
  <div class="wrap {{ $route.page.bgClass }}  {{ $route.page.wrap }}">
    <router-view></router-view>
  </div>
  <footer-bar v-if="$route.page.footer.enable"></footer-bar>
  <menu-bar></menu-bar>
  <popup :route="$route.name"></popup>
  <cart></cart>
  <error></error>
  <validation></validation>
  <foods-icons></foods-icons>
  <svg-icons></svg-icons>
</template>

<script>
import Cart from './components/commons/popup/Cart'
import Validation from './components/commons/popup/Validation'
import Error from './components/commons/popup/Error'
import Popup from './components/commons/popup/PopupContainer'
import HeaderBar from './components/commons/navigation/HeaderBar'
import FooterBar from './components/commons/navigation/FooterBar'
import MenuBar from './components/commons/navigation/MenuBar'
import SvgIcons from './components/commons/icons/SvgIcons'
import FoodsIcons from './components/commons/icons/FoodsIcons'
import store from './vuex/store'

export default {
  components: {
    Cart,
    Validation,
    Error,
    Popup,
    HeaderBar,
    FooterBar,
    MenuBar,
    SvgIcons,
    FoodsIcons,
  },
  store,
};
</script>

<style lang="scss">
@import './styles/reset.scss';
@import './styles/fonts.scss';
@import './styles/animate.css';
@import './styles/transitions.scss';
@import './styles/variables.scss';

::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}

body {
  margin: 0;
  background: $color-white;
  font-size: 10px;
}

.wrap {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  overflow-y: auto;
  background-color: $color-white;
  background-attachment: fixed;

  &.wrap-header-footer {
    min-height: calc(100vh - 135px);
    padding: 75px 0 60px;
  }

  &.wrap-header {
    min-height: calc(100vh - 75px);
    padding-top: 75px;
  }

  &.wrap-footer {
    min-height: calc(100vh - 75px);
    padding-bottom: 75px;
  }
}

  .backgroundWhite {
    background: $color-white;
  }

  .background1 {
    background-image: url('/static/img/bg-1.png');
  }

  .background2 {
    background-image: url('/static/img/bg-2.png');
  }

  .background3 {
    background-image: url('/static/img/bg-3.png');
  }

  .background4 {
    background-image: url('/static/img/bg-4.png');
  }

</style>
