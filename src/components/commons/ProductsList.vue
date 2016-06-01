<template>
  <div class="products-container">
    <template v-for="product in products | filterBy search in 'name' | filterBy type in 'brut' | orderBy 'name' ">
      <div class="product-item-wrapper" v-bind:class="{ 'inactive': !product.status }" v-link="{ path: '/market/product' }">
        <div class="product-item-circle type" v-bind:class="{ 'type-prepare': !product.brut }">
          <svg viewBox="0 0 100 100" class="product-item-icon">
            <use xlink:href="#foods-icon-{{ product.name}}"></use>
          </svg>
          <div class="product-item-quantity" v-bind:class="{ 'emergency': product.emergency }">
            {{ product.quantity }}
            <div class="product-item-dlc" v-if="product.emergency">
              <span v-for="n in 6" class="square square-{{n}}"></span>
            </div>
          </div>
        </div>
        <div class="product-item-name">{{ product.name }}</div>
        <div class="product-item-status" v-if="product.status">Disponible maintenant</div>
        <div class="product-item-status" v-else>Indisponible</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ['products', 'search', 'type']
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.products-container {
  text-align: center;
  margin: 20px 0;
}

  .product-item-wrapper {
    display: inline-block;
    margin: 20px 15px;

    &.inactive {
      filter: grayscale(1);
      -webkit-filter: grayscale(1);

      .product-item-quantity {
        background-color: $color-inactive;
      }
      .product-item-status {
        opacity: 0.5;
      }
    }
  }

    .product-item-circle {
      position: relative;
      width: 125px;
      height: 125px;
      border-radius: 50%;
      text-align: center;
      background: $color-white;
      border: 10px solid $color-white;
      box-sizing: border-box;
    }

      .product-item-circle.type {
        background: url('/static/img/product-brut.png') center center no-repeat $color-white;
      }

      .product-item-circle.type-prepare {
        background: url('/static/img/product-prepare.png') center center no-repeat $color-white;
      }

      .product-item-icon {
        transform: scale(0.8);
      }

      .product-item-quantity {
        position: absolute;
        right: -7px;
        top: -7px;
        width: 28px;
        height: 28px;
        font: 1.3em 'Karla-Bold', sans-serif;
        line-height: 28px;
        text-align: center;
        color: $color-white;
        background: $color-red;
        border-radius: 50%;
        animation-name: shake-item;
        animation-iteration-count: 3;
        animation-direction: alternate;
        animation-delay: 2s;
      }

      @keyframes shake-item {
          0%   {background-color: red; left:0px; top:0px;}
          25%  {background-color: yellow; left:200px; top:0px;}
          50%  {background-color: blue; left:200px; top:200px;}
          75%  {background-color: green; left:0px; top:200px;}
          100% {background-color: red; left:0px; top:0px;}
      }

    .product-item-name {
      margin: 10px auto 5px;
      font: 1.8em 'IowanOldStyleBT-BlackItalic', sans-serif;
      text-transform: capitalize;
      color: $color-red;
    }

    .product-item-status {
      font: 1.2em 'Karla-Italic', sans-serif;
      color: $color-text;
    }
</style>
