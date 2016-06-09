<template>
  <div v-if="products.length" class="products-container">
    <template v-for="product in products | filterBy search in 'name' | filterBy type in 'type' | orderBy 'name' ">
      <div class="product-item-wrapper" :class="{ 'inactive': !product.available }" v-link="{ name: 'ProductMarket', params: { id: product._id }}">
        <div class="product-item-circle {{ product.type }}">
          <svg viewBox="0 0 100 100" class="product-item-icon">
            <use xlink:href="#foods-icon-{{ product.icon}}"></use>
          </svg>
          <div class="product-item-quantity" :class="{ 'animated emergency': product.emergency }">
            {{ product.quantity }}
            <div class="product-item-dlc" v-if="product.emergency">
              <span v-for="n in 6" class="square square-{{n}}"></span>
            </div>
          </div>
        </div>
        <div class="product-item-name">{{ product.name }}</div>
        <div class="product-item-status" v-if="product.available">Disponible maintenant</div>
        <div class="product-item-status" v-else>Indisponible</div>
      </div>
    </template>
  </div>
  <div v-else class="no-products-container">
    <div class="no-products-item no-products-border-red">
      <div class="no-products-item-text-wrapper">
        <p class="no-products-item-text"><span class="underline"></span>En ce jour,<br /></p>
        <p class="no-products-item-text text-bold"><span class="underline"></span>nulle denrée n'est proposée<br /></p>
      </div>
    </div>
    <div class="add-products-button" v-link="{ name: 'AddProductFoodkeeper' }">Ajouter une denrée</div>
  </div>
</template>

<script>
export default {
  props: ['products', 'search', 'type'],
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.products-container {
  text-align: center;
  margin: 20px 0;
}

  @keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

  .product-item-wrapper {
    display: inline-block;
    margin: 20px 15px;

    &.animate {
      animation: fadeIn 1s;
    }

    &.inactive {
      filter: grayscale(1);
      -webkit-filter: grayscale(1);

      .product-item-circle.raw,
      .product-item-circle.homemade {
        background: none;
      }

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

      .product-item-circle.raw {
        background: url('/static/img/product-raw.png') center center no-repeat $color-white;
      }

      .product-item-circle.homemade {
        background: url('/static/img/product-homemade.png') center center no-repeat $color-white;
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
        animation-name: tada;
        animation-iteration-count: infinite;
        animation-delay: 0s;

        @keyframes fade {
          0% {opacity: 0;}
          100% {opacity: 1;}
        }

        &.emergency {
          .square {
            position: absolute;
            display: inline-block;
            width: 5px;
            height: 6px;
            background-color: $color-red;
            &.square-0 { top: -12px; right: 11px; transform: rotate(0deg); animation: fade 0.2s infinite alternate 0.1s ;}
            &.square-1 { top: -10px; right: 0; transform: rotate(25deg); animation: fade 0.2s infinite alternate 0.2s ;}
            &.square-2 { top: -4px; right: -9px; transform: rotate(50deg); animation: fade 0.2s infinite alternate 0.3s ;}
            &.square-3 { top: 6px; right: -13px; transform: rotate(75deg); animation: fade 0.2s infinite alternate 0.4s ;}
            &.square-4 { top: 17px; right: -13px; transform: rotate(-75deg); animation: fade 0.2s infinite alternate 0.5s ;}
            &.square-5 { top: 26px; right: -6px; transform: rotate(-50deg); animation: fade 0.2s infinite alternate 0.6s ;}
          }
        }
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

    .no-products-container {
      min-height: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
     }

        .no-products-item-text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > svg {
          margin: 0 10px;
          width: 28px;
          height: 28px;
        }
      }

        .no-products-item-text {
          position: relative;
          margin: 0 auto -2px;
          z-index: 1;
          display: inline-block;
          font: 1.5em 'Karla-Italic', sans-serif;
          color: $color-text;

          &.text-bold {
            font-weight: 700;
          }

          .underline {
            position: absolute;
            left: 0;
            bottom: 2px;
            height: 4px;
            width: 100%;
            background: $color-beige;
            z-index: -1;
          }
        }

        .no-products-border-red{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          margin: 20px auto 0;
          padding: 25px 0;
          width: 255px;
          background: url('/static/img/rectangle-red.png');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          border: 0;
        }

        .add-products-button {
          margin: 20px auto;
          width: 150px;
          padding: 18px 15px;
          border-radius: 25px;
          background-color: $color-beige;
          font: 1.3em 'Karla-Bold', sans-serif;
          color: $color-text;
          text-transform: uppercase;
          text-align: center;
        }
</style>
