<template>
  <div class="market-details-container" >
    <div class="app-icon-container animated fadeIn">
      <svg viewBox="0 0 50 50" class="app-icon">
        <use xlink:href="#app-icon-edit" ></use>
      </svg>
    </div>
    <residence-slider :market="market"></residence-slider>
    <div class="animated slideInUp">
      <tabs-navigation :objectid="$route.params.id" route="DetailsMarket"></tabs-navigation>
      <router-view class="animated" transition="slide" transition-mode="out-in"></router-view>
    </div>
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
  data() {
    return {
      market: { foodkeeper: { _id: '', picture: '', favorite: false }},
    };
  },
  ready() {
    const marketId = this.$route.params.id;

    // récupérer les informations du market en fonction de son id
    this.$http({ url: `markets/${marketId}`, method: 'GET' })
      .then(response => this.market = response.data)
      .catch(err => console.log(err));
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
