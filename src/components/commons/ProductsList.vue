<template>
  <div class="products-container">
    <template v-for="product in products | filterBy search in 'name' | filterBy type in 'brut' | orderBy 'name' ">
      <div class="product-item-wrapper" v-bind:class="{ 'inactive': !product.status }" v-link="{ path: '/market/product/:id' }">
        <div class="product-item-circle">
          <svg viewBox="0 0 100 100" class="product-item-icon">
            <use xlink:href="#foods-icon-{{ product.name}}"></use>
          </svg>
          <div class="product-item-quantity">{{ product.quantity }}</div>
        </div>
        <div class="product-item-name">{{ product.name }}</div>
        <div class="product-item-status" v-if="product.status">Disponible maintenant</div>
        <div class="product-item-status" v-else>Indisponible</div>
      </div>
    </template>
  </div>
</template>

<script>
/*import { productsList } from './../../vuex/getters'

export default {
  vuex: {
    getters: {
      products: productsList,
    },
  },
};*/

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
      filter: grayscale(100%);

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
    }

      .product-item-icon {
        transform: scale(0.7);
      }

      .product-item-quantity {
        position: absolute;
        right: 0px;
        top: 10px;
        width: 28px;
        height: 28px;
        font: 1.3em 'Karla-Bold', sans-serif;
        line-height: 28px;
        text-align: center;
        color: $color-white;
        background: $color-red;
        border-radius: 50%;
      }

    .product-item-name {
      margin: 10px auto 5px;
      font: bold 1.8em 'IowanOldStyleBT-BlackItalic', sans-serif;
      text-transform: capitalize;
      color: $color-red;
    }

    .product-item-status {
      font: 1.2em 'Karla-Italic', sans-serif;
      color: $color-text;
    }
</style>
