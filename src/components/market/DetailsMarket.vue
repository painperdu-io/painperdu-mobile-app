<template>
  <div class="market-details-container">
    <div class="app-icon-container" v-link="{ path: '/market/add' }">
      <svg viewBox="0 0 50 50" class="app-icon">
        <use xlink:href="#app-icon-edit" ></use>
      </svg>
    </div>
    <residence-slider></residence-slider>
    <tabs-navigation route="DetailsMarket"></tabs-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import ResidenceSlider from './../commons/ResidenceSlider'
import TabsNavigation from './../commons/navigation/TabsNavigation'

export default {
  components: {
    ResidenceSlider,
    TabsNavigation,
  },
  methods: {
    addBlason: (event) => {
      document.getElementsByClassName('popup-container')[0].classList.add('active');
      document.getElementsByClassName('popup-overlay')[0].classList.add('active');
      event.preventDefault()
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.market-details-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1 100%;
  position: relative;
}

  .app-icon-container {
    position: absolute;
    width: 35px;
    height: 35px;
    padding: 3px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: $color-green;
    fill: $color-white;
    z-index: 10;
    right: 40px;
    top: 65px;
    transform: translate3d(-50%,-50%,0);
  }
</style>
