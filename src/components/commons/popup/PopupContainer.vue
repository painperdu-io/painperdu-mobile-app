<template>
  <div class="popup-overlay"></div>
  <div class="popup-container">
    <div class="popup-close" v-on:click="closeCart">
      <svg viewBox="0 0 100 100" class="app-icon">
        <use xlink:href="#app-icon-close"></use>
      </svg>
    </div>

    <template v-for="popup in popups">
      <template v-if="popup.route == route">
        <cart v-if="popup.cart"></cart>
        <add-accomplice v-if="popup.addAccomplice"></add-accomplice>
        <add-photo v-if="popup.addPhoto"></add-photo>
        <add-blason v-if="popup.addBlason"></add-blason>
        <tip v-if="popup.tip"></tip>
      </template>
    </template>

  </div>
</template>

<script>
import Cart from './Cart';
import AddAccomplice from './AddAccomplicesFoodKeeper';
import Tip from './Tip';
import AddPhoto from './AddPhoto';
import AddBlason from './AddBlason';
import { popupsList } from './../../../vuex/getters';

export default {
  props: ['route'],
  vuex: {
    getters: {
      popups: popupsList,
    },
  },
  components: {
    Cart,
    AddAccomplice,
    Tip,
    AddPhoto,
    AddBlason,
  },
  methods: {
    closeCart: (event) => {
      document.getElementsByClassName('popup-container')[0].classList.remove('active');
      document.getElementsByClassName('popup-overlay')[0].classList.remove('active');
      event.preventDefault()
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

.popup-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0) scale3d(0,0,0);
  width: 335px;
  min-height: 100px;
  background: $color-white;
  z-index: -1;
  text-align: center;
  transition: all 0.5s;
  opacity: 0;

  &.active {
    transform: translate3d(-50%, -50%, 0) scale3d(1,1,1);
    opacity: 1;
    z-index: 9999;
  }
}

  .popup-close {
    position: absolute;
    top: 20px;
    right: 12px;
    width: 40px;
    height: 40px;
    fill: $color-red;
  }

  .popup-overlay {
      content: "";
      display: inline-block;;
      width: 100%;
      height: 100%;
      background-color: $color-black;
      opacity: 0;
      position: fixed;
      top: 0;
      left: 0;
      overflow: hidden;
      transition: all 0.2s;
      z-index: -1;
  }

  .popup-overlay.active {opacity: 0.7;   z-index: 999;}

</style>
