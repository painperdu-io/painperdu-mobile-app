<template>
  <div class="market-container">
    <div v-link="{ path: '/market/add' }">Add market</div>

    <div class="market-slider">
      <div class="market-container">

        <residence-slider :data="market"></residence-slider>

        <div class="market-products-wrapper">
          <div class="market-products-search">
            <svg viewBox="0 0 100 100" class="market-products-search-icon  market-products-search-icon-left">
              <use xlink:href="#app-icon-search"></use>
            </svg>
            <svg viewBox="0 0 100 100" class="market-products-search-icon  market-products-search-icon-right">
              <use xlink:href="#app-icon-close"></use>
            </svg>

            <input placeholder="Nom du produit..." v-model="search" />
          </div>


          <div class="market-products-filters">
            <input id="brut" class="filter" type="checkbox" value="false" v-model="type">
            <label for="brut" >Plats Préparés</label>
            <input id="prepare" class="filter" type="checkbox" value="true" v-model="type">
            <label for="prepare">Produits Bruts</label>
          </div>

          <products-list
            :products="market.products"
            :type="type"
            :search="search">
          </producst-list>
        </div>
      </div>

      <div>
        <img src="" />
        Se rallier à une nouvelle place du marché
      </div>

      <div class="controls">
        <div class="previous"></div>
        <div class="next"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from './../commons/ProductsList'
import ResidenceSlider from './../commons/ResidenceSlider'

export default {
  components: {
    ProductsList,
    ResidenceSlider,
  },
  data() {
    return { market: { name: 'Nom de la résidence', products: {} }};
  },
  ready() {
    this.$http({ url: 'products', method: 'GET' })
      .then((response) => {
        this.market.products = response.data;
      })
      .catch(err => { console.log(err); });
  }
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.market-container {}

  .market-products-wrapper {
    text-align: center;
  }

    .market-products-search {
      position: relative;
      margin: 25px auto 18px ;
      width: 262px;

      input {
        padding: 0 55px 0 50px;
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 20px;
        box-sizing: border-box;
        font: 1.5em 'Karla-Italic', sans-serif;
        color: $color-white;
        background: $color-green-lite;
      }

      ::-webkit-input-placeholder {
        color: $color-white;
      }
    }

      .market-products-search-icon {
        position: absolute;
        margin-top: 5px;
        width: 30px;
        height: 30px;
        fill: $color-white;
      }

      .market-products-search-icon-left {
        left: 15px;
      }
      .market-products-search-icon-right {
        right: 20px;
      }

    .market-products-filters {
      text-align: center;
      line-height: 40px;

      input[type="checkbox"] {
        display: none;
      }

      .filter {
        + label {
          padding: 10px;
          height: 40px;
          border: 2px solid $color-white;
          border-radius: 20px;
          font: 1.15em 'Karla-Bold', sans-serif;
          color: $color-text;
          text-transform: uppercase;
        }

        &:first-child {
          + label {
            margin-right: 20px;
          }
        }

        &:checked {
          + label {
            background: $color-white;
          }
        }
      }
    }
</style>
