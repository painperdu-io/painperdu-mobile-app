<template>
  <div class="markets-container">

    <div class="markets-slider">
      <div class="controls">
        <div class="previous" v-on:click="moveLeft">
          <svg viewBox="0 0 50 50" class="controls-icon  controls-icon-previous">
            <use xlink:href="#header-icon-next"></use>
          </svg>
        </div>
        <div class="next" v-on:click="moveRight">
          <svg viewBox="0 0 50 50" class="controls-icon  controls-icon-next">
            <use xlink:href="#header-icon-next"></use>
          </svg>
        </div>
      </div>

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
            <input id="brut" class="filter" type="radio" value="homemade" v-model="type">
            <label for="brut" >Plats Préparés</label>
            <input id="prepare" class="filter" type="radio" value="raw" v-model="type" checked>
            <label for="prepare">Produits Bruts</label>
          </div>

          <products-list
            :products="market.products"
            :type="type"
            :search="search">
          </producst-list>
        </div>
      </div>

      <div class="market-container">
        <div>
          <img src="" />
          Se rallier à une nouvelle place du marché
        </div>
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
  methods: {
    moveLeft(event) {
      if (this.marketCurrent !== 0) {
        this.marketCurrent--;
        this.market = this.markets[this.marketCurrent];
      } else {
        this.market = this.markets[this.markets.length];
        this.marketCurrent = this.markets.length;

        this.market = { name: '', products: {} };
        console.log('AJOUT PLACE DU MARCHÉ');
      }
      // const slides = document.getElementsByClassName('market-container');
      // for (let i = 0; i < slides.length; i++) {
      //   const x = slides[i].offsetLeft;
      //   //slides[i].style.transform = `translate3d(${x + 375}px, 0, 0)`;
      //   slides[i].style.transform = `translate3d(100%, 0, 0)`;
      // }
      //
    },
    moveRight(event) {
      if (this.marketCurrent !== this.markets.length) {
        this.marketCurrent++;
        if (this.marketCurrent === this.markets.length) {
          this.market = { name: '', products: {} };
          console.log('AJOUT PLACE DU MARCHÉ');
        } else {
          this.market = this.markets[this.marketCurrent];
        }
      } else {
        this.market = this.markets[0];
        this.marketCurrent = 0;
      }
      // const slides = document.getElementsByClassName('market-container');
      // for (let i = 0; i < slides.length; i++) {
      //   const x = slides[i].offsetLeft;
      //   slides[i].style.transform = `translate3d(-100%, 0, 0)`;
      // }
    }
  },
  data() {
    //return { market: { name: 'Nom de la résidence', products: {} }};
    return {
      market: { name: '', products: {} },
      markets: [
        { name: 'Résidence 1', products: {} },
        { name: 'Résidence 2', products: {} },
        { name: 'Résidence 3', products: {} },
      ],
      marketCurrent: 0,
    };
  },
  ready() {
    this.market = this.markets[0];
    // this.$http({ url: 'products', method: 'GET' })
    //   .then((response) => {
    //     this.market.products = response.data;
    //   })
    //   .catch(err => { console.log(err); });
  }
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.markets-container {}

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
        &:checked {
          + label {
            background: $color-white;
          }
        }
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

      }
    }

    .controls {
      position: absolute;
      top: 65px;
      width: 100%;
      .previous,
      .next {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: $color-green-lite;
        fill: $color-white;
      }

      .previous {
        position: absolute;
        left: 8%;
      }

      .next {
        position: absolute;
        right: 8%;
      }

    }

    .markets-slider {
      width: 100%;
      display: flex;
      flex-direction: row;
      overflow-x: auto;
    }

    .market-container {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 100%;
      align-items: center;
      transition: all 1s;
    }
</style>
