<template>
  <div class="markets-container animated">
    <div v-if="markets.length" class="markets-slider">
      <div class="controls animated bounceIn">
        <div v-show="sliderControls" class="previous animated fadeIn" v-on:click="moveLeft">
          <svg viewBox="0 0 50 50" class="controls-icon  controls-icon-previous">
            <use xlink:href="#header-icon-previous"></use>
          </svg>
        </div>
        <div v-show="sliderControls" class="next animated fadeIn" v-on:click="moveRight">
          <svg viewBox="0 0 50 50" class="controls-icon  controls-icon-next">
            <use xlink:href="#header-icon-previous"></use>
          </svg>
        </div>
      </div>

      <div class="market-container  animated {{ sliderAnimation }}">
        <residence-slider :market="market" :animate="true" v-on:click="loadMarketDetails(market._id)"></residence-slider>

        <div class="market-products-wrapper animated slideInUp" style="overflow=scroll;">
          <div class="market-products-search">
            <svg viewBox="0 0 100 100" class="market-products-search-icon  market-products-search-icon-left">
              <use xlink:href="#app-icon-search"></use>
            </svg>
            <svg viewBox="0 0 100 100" class="market-products-search-icon  market-products-search-icon-right">
              <use xlink:href="#app-icon-close"></use>
            </svg>
            <input class="market-products-search-input animated bounceIn" placeholder="Nom du produit..." v-on:click="displayRemove" v-model="search" />
          </div>

          <div class="market-products-filters">
            <input id="prepare" class="filter" type="radio" value="raw" v-model="type" checked>
            <label for="prepare">Produits Bruts</label>
            <input id="brut" class="filter" type="radio" value="homemade" v-model="type">
            <label for="brut" >Plats Préparés</label>
          </div>

          <products-list
            :products="products"
            :type="type"
            :search="search">
          </producst-list>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="market-container no-market animated fadeIn">
        <div class="add-market" v-link="{ name: 'AddMarket' }">
          <div class="add-market-blason"><span>+</span></div>
          <div class="add-market-text">
            <p>Se rallier <span class="underline"></span><p>
            <p>à une nouvelle <span class="underline"></span></p>
            <p> place du marché <span class="underline"></span></p>
          </div>
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
        this.updateMarketBySlideId(this.marketCurrent);
      } else {
        this.market = this.markets[this.markets.length - 1];
        this.marketCurrent = this.markets.length - 1;
        this.updateMarketBySlideId(this.marketCurrent);
      }
      this.sliderAnimation = 'fadeInLeft';
      setTimeout(() => this.sliderAnimation = '', 1000);
    },
    moveRight(event) {
      if (this.marketCurrent !== this.markets.length - 1) {
        this.marketCurrent++;
        this.updateMarketBySlideId(this.marketCurrent);
      } else {
        this.updateMarketBySlideId(0);
        this.marketCurrent = 0;
      }
      this.sliderAnimation = 'fadeInRight';
      setTimeout(() => this.sliderAnimation = '', 1000);
    },
    displayRemove(event) {
      document.getElementsByClassName('market-products-search-icon-right')[0].classList.add('active');
    },
    updateMarketBySlideId(id) {
      this.market = this.markets[id];
      // récupérer les produits liés à un market
      this.$http({ url: `markets/${this.market._id}/products`, method: 'GET' })
        .then(response => this.products = response.data)
        .catch(err => console.log(err));
    },
    loadMarketDetails(marketId){
      var el = document.getElementsByClassName('market-products-wrapper')[0];
      if (el.classList.contains('slideOutDown') ) {
        el.classList.remove('slideOutDown');
      } else {
        el.classList.add('slideOutDown');
      }
      setTimeout(() => this.$route.router.go({ name: 'DetailsMarketLocation', params: { id: marketId }}), 1000);
    }
  },
  data() {
    return {
      sliderControls: false,
      sliderAnimation: 'fadeIn',
      marketCurrent: 0,
      market: { foodkeeper: { _id: '', picture: '', favorite: false }},
      markets: [],
      products: [],
      type: 'raw',
      search: '',
    };
  },
  ready() {
    // récupérer les markets en fonction de l'id d'un utilisateur
    this.$http({ url: `markets/user/${global.currentUserId}`, method: 'GET' })
      .then(response => {
        this.markets = response.data;
        this.updateMarketBySlideId(0);

        if (this.markets.length > 1 ) {
          this.sliderControls = true;
        }
      })
      .catch(err => console.log(err));
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.markets-container {

}

  .market-products-wrapper {
    text-align: center;
  }

    .market-products-search {
      position: relative;
      margin: 0px auto 18px ;
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
        z-index: 1;
      }

      .market-products-search-icon-left {
        left: 15px;
      }
      .market-products-search-icon-right {
        right: 15px;
        opacity: 0;
        transition: all 0.5s;
        &.active {
          opacity: 1;
        }
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
      top: 135px;
      width: 100%;
      z-index: 99;
      .controls-icon {
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
        transform: rotate(180deg);
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
      align-content: center;
      &.no-market {
        animation-delay: 1s;
      }
    }

    .add-market { text-align: center;}

    .add-market-blason {
      background-color: $color-white;
      color: $color-red;
      width: 100px;
      height: 115px;
      line-height: 115px;
      text-align: center;
      margin: 30px auto 0;
      box-shadow: 2px 2px 5px $color-gray;
      font: 3em 'Karla-Regular', sans-serif;
      mask-image: url('/static/img/blason-1.png');
      -webkit-mask-image: url('/static/img/blason-1.png');
      mask-size: 100% 100%;
      -webkit-mask-size: 100% 100%;
      span {
        display: inline-block;
        margin-top: 30px;
      }
    }

    .add-market-text {
      display: inline-block;
      width: 110px;
      margin-top: 20px;
    }

    .add-market p {
      display: inline-block;
      position: relative;
      margin: 0;
      font: 1.5em 'Karla-Italic', sans-serif;
      color: $color-text;
    }

    .add-market .underline {
      position: absolute;
      left: 0;
      bottom: 2px;
      height: 4px;
      width: 100%;
      background: $color-beige;
      z-index: -1;
    }
</style>
