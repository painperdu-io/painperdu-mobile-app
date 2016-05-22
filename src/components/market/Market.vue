<template>
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

        <input id="search-input" placeholder="Nom du produit..." v-model="search" />
      </div>


      <div class="market-products-filters">
        <input id="brut" class="filter" type="radio" value="false" v-model="type">
        <label for="brut" >Plats Préparés</label>
        <input id="prepare" class="filter" type="radio" value="true" v-model="type">
        <label for="prepare">Produits Bruts</label>
      </div>

      <products-list
        :products="market.products"
        :type="type"
        :search="search">
      </producst-list>
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
    return {
      market: {
        name: 'NOM RESIDENCE',
        products: [
          { name: 'salade',
            quantity: '3',
            status: true,
            brut: true,
          },
          { name: 'chou',
            quantity: '1',
            status: false,
            brut: true,
          },
          { name: 'pain',
            quantity: '1',
            status: true,
            brut: true,
          },
          { name: 'poivron',
            quantity: '6',
            status: true,
            brut: true,
          },
          { name: 'lasagnes',
            quantity: '3',
            status: true,
            brut: false,
          },
          { name: 'emmental',
            quantity: '1',
            status: false,
            brut: true,
          },
          { name: 'viande',
            quantity: '1',
            status: true,
            brut: true,
          },
          { name: 'banane',
            quantity: '6',
            status: true, //disponible maintenant
            brut: true, //type produit
          },
        ]
      }
    }
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

      input[type="radio"] {
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
