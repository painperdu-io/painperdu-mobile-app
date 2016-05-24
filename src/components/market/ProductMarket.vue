<template>
  <div class="product-wrapper">
    <div class="product" v-bind:class="{ 'inactive': !product.status }" v-link="{ path: '/market/product/' }">
      <div class="wrapper">
        <svg viewBox="0 0 100 100" class="foods-icon">
          <use xlink:href="#foods-icon-chou"></use>
        </svg>
      </div>
      <div class="product-name">Chou</div>
      <div class="product-infos-separator"></div>
    </div>
  </div>
  <div class="product-infos">
    <div class="product-status value">
      <svg viewBox="0 0 100 100" class="search-icon search-icon-left">
        <use xlink:href="#app-icon-search"></use>
      </svg>
      <p class="legend">Disponible</p>
    </div>
    <div class="product-quantity">
      <span class="value">2</span>
      <p class="legend">Quantité</p>
    </div>
    <div class="product-dlc">
      <span class="value">2j</span>
      <p class="legend">Périme dans</p>
    </div>
  </div>
  <div class="product-description">Description du produit. </div>

  <div class="member-profile-statistics-wrapper">
    <div class="member-profile-statistics">
      <div class="member-profile-statistics-item">
        <p class="legend">Nombre d'échanges</p>
        <p class="value">8</p>
      </div>
      <div class="member-profile-statistics-item">
        <p class="legend">Avis moyen</p>
        <p class="value">Parfait</p>
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
export default {};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';
@import './../../styles/fonts.scss';

.member-profile-statistics-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 298px;
  height: 165px;
  background: url('/static/img/rectangle-profile.png');
  background-size: 298px 165px;
  background-position: center center;
  background-repeat: no-repeat;
}

  .member-profile-statistics {
    padding: 18px 0 0 0;
  }

    .member-profile-statistics-item {
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
      }

      & > p {
        display: inline-block;
      }
    }

    .product-wrapper {
      text-align: center;
    }
    .product {
      display: inline-block;;
      margin: (45px / 2) (25px/2) 0  (25px/2);
      .wrapper {
        position: relative;
        background-color: white;
        border-radius: 50%;
        width: (230px / 2);
        height: (230px / 2);
        text-align: center;
        .foods-icon {
          transform: scale(0.7);
        }
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

    .search-icon {
      fill: $color-white;
      transform: scale(0.5);
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
      font-size: 1.3em;
      margin-bottom: 20px;
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
</style>
