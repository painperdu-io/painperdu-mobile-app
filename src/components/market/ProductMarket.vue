<template>
  <div class="product-wrapper">
    <div class="product" v-bind:class="{ 'inactive': !product.status }" v-link="{ path: '/market/product/' }">
      <div class="product-item-circle type" v-bind:class="{ 'type-prepare': !product.brut }">
        <svg viewBox="0 0 100 100" class="foods-icon">
          <use xlink:href="#foods-icon-chou"></use>
        </svg>
        <div class="product-item-quantity" v-model="count" v-bind:class="{ 'emergency': product.emergency }">{{ product.count }}</div>
      </div>
      <div class="controls-quantity">
        <button class="btn btn-more" v-on:click="increment">+</button>
        <button class="btn btn-less" v-on:click="decrement">-</button>
      </div>
      <div class="product-name">Chou</div>
      <div class="product-infos-separator"></div>

    </div>
  </div>
  <div class="product-infos">
    <div class="product-status">
      <div class="value">
        <svg viewBox="0 0 100 100" class="check-icon">
          <use xlink:href="#app-icon-check"></use>
        </svg>
      </div>
      <p class="legend">Disponible</p>
    </div>
    <div class="product-quantity">
      <span class="value">{{ product.quantity }}</span>
      <p class="legend">Quantité</p>
    </div>
    <div class="product-dlc">
      <span class="value">2j</span>
      <p class="legend">Périme dans</p>
    </div>
  </div>
  <div class="product-description">Description du produit. </div>

  <div class="member-profile-statistics-wrapper">
    <div class="member-profile-wrapper">
      Picto
      Nom user
      Statut
    </div>
    <div class="member-profile-statistics">
      <div class="member-profile-statistics-item">
        <p class="legend">Nombre d'échanges</p>
        <p class="value">8</p>
        <span class="underline"></span>
      </div>
      <div class="member-profile-statistics-item membre-{{membre-status}}">
        <p class="legend">Avis moyen</p>
        <p class="value">Parfait</p>
        <span class="underline"></span>
      </div>
    </div>
  </div>

  <div class="ask-product-wrapper">
    <div class="ask-product-text">
      <input type="radio" id="brut" class="filter"value="false" v-model="productType">
      <label for="brut" >
        Je ne suis pas disponible maintenant. <br>
        Je veux récupérer ma demande plus tard.
      </label>
    </div>
    <div class="ask-product-button">Demander</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        quantity: 2,
        count : 0,
      },
    }
  },
  methods: {
    increment: function (event) {
      if (this.count != product.quantity){
        this.count++;
      }
    },
    decrement: function (event) {
      this.count--;
    },
  },
};

</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.member-profile-statistics-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 0 auto 150px;
  padding-bottom: 30px;
  width: 298px;
  background: url('/static/img/rectangle-red.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
}

  .member-profile-statistics {
    padding: 18px 0 0 0;
  }

    .member-profile-statistics-item {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      margin: 0 auto;
      width: 235px;
      height: 34px;
      text-transform: uppercase;
      font: 1.3em 'Karla-Regular', sans-serif;
      color: $color-text;

      .value {
        font: 1.2em 'Karla-Bold', sans-serif;
        color: $color-green;
        z-index: 1;
      }

      & > p {
        display: inline-block;
        z-index: 1;
      }
    }

    .underline {
      position: absolute;
      left: 0;
      bottom: 10px;
      height: 6px;
      width: 100%;
      background-color: $color-white;
      z-index: 0;
    }

    .product-wrapper {
      position: relative;
      text-align: center;
    }
    .product {
      display: inline-block;;
      margin: (45px / 2) (25px/2) 0  (25px/2);
      .product-item-circle {
        position: relative;
        background-color: white;
        border-radius: 50%;
        width: (230px / 2);
        height: (230px / 2);
        text-align: center;
        border: 12px solid $color-white;
        box-sizing: border-box;
        z-index: 10;
        .foods-icon {
          transform: scale(0.8);
        }
      }
      .product-item-circle.type {
        background: url('/static/img/product-brut.png') center center repeat $color-white;
      }

      .product-item-circle.type-prepare {
        background: url('/static/img/product-prepare.png') center center repeat $color-white;
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


      .product-name {
        text-transform: capitalize;
        font-style: italic;
        color: $color-red;
        font-size: (3.6em / 2);
        font-family: 'IowanOldStyleBT-BlackItalic';
        font-weight: 700;
        margin: (20px / 2) auto;
      }
      &.inactive {
        filter: grayscale(100%);
        .product-quantity {
          background-color: $color-inactive;
        }
        .product-status {
          opacity: 0.5;
        }
      }
    }

    .product-infos {
      display: flex;
      flex: 1 100%;
      flex-flow: row;
      color: $color-text;
    }

    .check-icon {
      fill: $color-white;
      width: (40px /2);
      height: (40px /2);
      vertical-align: middle;
    }

    .product-quantity,
    .product-status,
    .product-dlc {
      flex: 1;
      flex-flow: column;
      text-align: center;
    }

    .product-infos .value {
      display: inline-block;
      background-color: $color-green;
      color: $color-white;
      text-align: center;
      border-radius: 50%;
      font-size: (2.6em / 2);
      font-family: 'Karla-Bold';
      width: (55px /2);
      height: (55px /2);
      line-height: (55px / 2);
    }

    .product-infos .legend {
      font-size: 1.2em;
      font-family: 'Karla-Regular';
    }

    .product-description {
      color: $color-text;
      font-size: 1.3em;
      font-family: 'Karla-Italic';
      margin: 60px auto;
      width: 298px;
    }

    .ask-product-wrapper {
      background-color: $color-green;
      padding: 10px;
      position: absolute;
      bottom: 0px;
      width: 100%;
    }

    .ask-product-text {
      color: $color-white;
      padding-left: 20px;
      width: 70%;
      margin: auto;
      font-size: 1.2em;
      font-family: 'Karla-Bold';
      font-weight: 700;
      margin-bottom: 20px;
    }

    .ask-product-wrapper input[type="radio"] {
      display: none;
    }

    .ask-product-button {
      margin: 0 auto;
      width: 150px;
      padding: 18px 0;
      border-radius: 25px;
      background-color: $color-beige;
      font: 1.3em 'Karla-Bold', sans-serif;
      color: $color-text;
      text-transform: uppercase;
      text-align: center;
    }

    .product-infos-separator {
      width: 56px;
      height: 5px;
      margin: 0 auto 30px;
      transform: scale(0.5);
      background: url('/static/img/separator-green.png') center center no-repeat;
    }


  .controls-quantity {
    position: absolute;
    top: 40%;
    left: 50%;
    background-color: $color-gray-lite;
    width: 60%;
    transform: translate3d(-50%,-50%,0);
    padding: 5px 10px;
    border-radius: 20px;
    z-index: 0;
  }

  .controls-quantity .btn {
    color: $color-green;
    border-radius: 50%;
    border: 2px solid $color-green;
    font-size: 2em;
    width: 28px;
    height: 28px;
    line-height: 20px;
    padding: 0;
    background-color: $color-gray-lite;
  }

  .controls-quantity .btn-less { float: left; }
  .controls-quantity .btn-more { float: right; }

</style>
