<template>
  <div class="market-details-container">
    <residence-slider></residence-slider>
    <div class="market-details-description">
      <p class="market-details-description-text">
        Haec igitur prima lex amicitiae sanciatur,
        ut ab amicis honesta petamus,
        amicorum causa honesta faciamus,
        ne exspectemus quidem, dum rogemur;
        studium semper Incenderat autem audaces.
      </p>
    </div>
    <tabs-navigation></tabs-navigation>
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
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.market-details-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1 100%;
  position: fixed;
}

  .market-details-description {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex: 1 100%;
    height: 100px;
  }

    .market-details-description-text {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 75%;
      font: 1.2em 'Karla-Italic', sans-serif;
      color: $color-text;
    }
</style>
