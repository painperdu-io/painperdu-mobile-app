<template>
  <div class="residence-slider-container">
    <div class="residence-slider-item " :class="{ 'animated slideInDown': animate }">
      <div class="residence-slider-image blason-{{ market.blason }}">
        <img :src="market.foodkeeper.picture" />
      </div>
      <div class="residence-slider-item-name animated rubberBand">
        {{ market.foodkeeper.name }}
        <div class="residence-slider-item-name-content">
          <svg v-if="market.favorite" viewBox="0 0 100 100" class="residence-slider-item-star-icon">
            <use xlink:href="#app-icon-star"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['market','animate'],
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.residence-slider-container {
  position: relative;
  margin: 30px auto;
  text-align: center;
}

  .residence-slider-item {
    position: relative;
    text-align: center;
    display: inline-block;
    animation-delay: 0.2s;
    .residence-slider-image {
      width: 100px;
      height: 115px;
      mask-size: 100% 100%;
      -webkit-mask-size: 100% 100%;
      background-color: $color-gray;
      &.blason-1 {
        mask-image: url('/static/img/blason-1.png');
        -webkit-mask-image: url('/static/img/blason-1.png');
      }
      &.blason-2 {
        mask-image: url('/static/img/blason-2.png');
        -webkit-mask-image: url('/static/img/blason-2.png');
      }
      &.blason-3 {
        mask-image: url('/static/img/blason-3.png');
        -webkit-mask-image: url('/static/img/blason-3.png');
      }
      &.blason-4 {
        mask-image: url('/static/img/blason-4.png');
        -webkit-mask-image: url('/static/img/blason-4.png');
      }
    }
    img {
      height: 100%;
    }
  }

    .residence-slider-item-name {
      position: absolute;
      bottom: 18px;
      left: 50%;
      min-width: 130px;
      margin-left: -65px;
      font: 1.25em 'Karla-Bold', sans-serif;
      text-transform: uppercase;
      color: $color-text;
      padding: 5px 10px;
      background-color: $color-white;
      z-index: 99;
      min-height: 18px;
      box-sizing: border-box;
      animation-delay: 0.7s;

      &:before, &:after {
         content: '';
         position: absolute;
         display: block;
         bottom: -0.6em;
         border: 0.8em solid $color-white;
         z-index: 0;
         }

      &:before {
         left: -1.4em;
         border-right-width: 0.7em;
         border-left-color: transparent;
         /*-webkit-box-shadow: rgba(000,000,000,0.4) 0.5px 1px 1px;
         -moz-box-shadow: rgba(000,000,000,0.4) 0.5px 1px 1px;
         box-shadow: rgba(000,000,000,0.4) 0.5px 1px 1px;*/
      }

      &:after {
       right: -1.4em;
       border-left-width: 0.7em;
       border-right-color: transparent;
       /*-webkit-box-shadow: rgba(000,000,000,0.4) -0.5px 1px 1px;
       -moz-box-shadow: rgba(000,000,000,0.4) -0.5px 1px 1px;
       box-shadow: rgba(000,000,000,0.4) -0.5px 1px 1px;*/
      }
    }

    .residence-slider-item-name .residence-slider-item-name-content:before,
    .residence-slider-item-name .residence-slider-item-name-content:after {
         border-color: #929396 $color-white transparent $color-white;
         position: absolute;
         display: block;
         border-style: solid;
         bottom: -0.6em;
         content: '';
         z-index: 1;
    }

    .residence-slider-item-name .residence-slider-item-name-content:before {
       left: 0;
       border-width: 0.6em 0 0 2em;
       /*-webkit-box-shadow: rgba(000,000,000,0.4) 0.5px 1px 1px;
       -moz-box-shadow: rgba(000,000,000,0.4) 0.5px 1px 1px;
       box-shadow: rgba(000,000,000,0.4) 0.5px 1px 1px;*/
    }

    .residence-slider-item-name .residence-slider-item-name-content:after {
       right: 0;
       border-width: 0.6em 2em 0 0;
       /*-webkit-box-shadow: rgba(000,000,000,0.4) -0.5px 1px 1px;
       -moz-box-shadow: rgba(000,000,000,0.4) -0.5px 1px 1px;
       box-shadow: rgba(000,000,000,0.4) -0.5px 1px 1px;*/
    }

    .residence-slider-item-star-icon {
      position: absolute;
      right: 0;
      top: -4px;
      width: 30px;
      fill: $color-red;
      opacity: 1;
    }
</style>
