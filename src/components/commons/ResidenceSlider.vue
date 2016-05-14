<template>
  <div class="residence-slider-container">
    <div class="residence-slider-item" v-link="{ path: '/market/details/members' }">
      <img src="./../../../static/temp/clan.png" />
      <div class="residence-slider-item-name">
        Ma résidence
        <svg viewBox="0 0 100 100" class="residence-slider-item-star-icon">
          <use xlink:href="#app-icon-star"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.residence-slider-container {
  position: relative;
  margin: 30px auto 0;
}

  .residence-slider-item {
    text-align: center;
    img {
      width: 169px;
    }
  }

    .residence-slider-item-name {
      position: absolute;
      bottom: 24px;
      left: 50%;
      width: 100%;
      transform: translate3d(-50%, 0, 0);
      font: 1.25em 'Karla-Bold', sans-serif;
      text-transform: uppercase;
      color: $color-text;
    }

    .residence-slider-item-star-icon {
      position: absolute;
      left: 50%;
      top: -90px;
      width: 100px;
      transform: translate3d(-50%, 0, 0);
      fill: $color-red;
      opacity: 0.7;
    }
</style>
