<template>
  <div class="foodkeeper-add-product-container">
    <div class="foodkeeper-add-product-form1-wrapper">
      <div class="foodkeeper-add-product-form1-add-icon">
        <div class="controls-quantity">
          <button class="btn btn-more" v-on:click="increment">+</button>
          <button class="btn btn-less" v-on:click="decrement">-</button>
        </div>
        <div class="foodkeeper-add-product-form1-add-icon-bg" v-on:click="addPicto">
          <span class="foodkeeper-add-product-form1-add-icon-text">+</span>
          <input id="product-item-count" value="0" v-model="quantity" number hidden>
          <div class="product-item-quantity">{{ quantity }}</div>
        </div>
      </div>
      <div class="foodkeeper-add-product-form1-itemgreen">
        <svg viewBox="0 0 100 100" class="foodkeeper-add-product-form1-itemgreen-icon right">
          <use xlink:href="#app-icon-star"></use>
        </svg>
        <input type="text" placeholder="Nom du produit" />
      </div>
      <div class="foodkeeper-add-product-form1-itemgreen">
        <input type="text" placeholder="Description du produit" />
      </div>
      <div class="foodkeeper-add-product-form1-filters">
        <input id="brut" class="filter" type="radio" value="false" v-model="type">
        <label for="brut" >Plats Préparés</label>
        <input id="prepare" class="filter" type="radio" value="true" v-model="type">
        <label for="prepare">Produits Bruts</label>
      </div>
      <div class="foodkeeper-add-product-form1-question">Dans quel <span>garde-manger</span> proposez-vous ce produit ?</div>
      <select class="foodkeeper-add-product-form1-select" v-model="slectedAddress">
        <svg viewBox="0 0 100 100" class="foodkeeper-add-product-form1-itemgreen-icon right">
          <use xlink:href="#app-icon-previous"></use>
        </svg>
        <option v-for="place in places" v-bind:value="place">
          {{ place.name }}
        </option>
      </select>
    </div>
    <div class="foodkeeper-add-product-form2-wrapper">
      <h3 class="foodkeeper-add-product-form2-title">À consommer sous</h3>
      <div class="foodkeeper-add-product-form2-dlc-range">
        <input id="product-item-dlc" value="0" v-model="dlc" number hidden>
        <label class="product-dlc" for="product-dlc">{{ dlc }} jours</label>
        <input type="range" name="product-dlc" value="1" max="10" min="0" step="1"/>
        <div class="foodkeeper-add-product-form2-label-range">
            <p>0 jours</p>
            <p>10 jours</p>
        </div>
      </div>
      <div class="foodkeeper-add-product-form2-button">Ajouter</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dlc: 0,
      quantity: 0,
      places: [
        { name: 'maison', addressL1: '12 rue du Trésum', addressL2: '74000 Annecy' },
        { name: 'boulot', addressL1: '63 route du Périmètre', addressL2: '74000 Annecy' },
      ]
    }
  },
  methods: {
    increment: function (event) {
      this.quantity++;
    },
    decrement: function (event) {
      if (this.quantity > 0){
        this.quantity--;
      }
    },
    addPicto: (event) => {
      document.getElementsByClassName('popup-container')[0].classList.add('active');
      document.getElementsByClassName('popup-overlay')[0].classList.add('active');
      event.preventDefault()
    }
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.foodkeeper-add-product-container {
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: column;
  height: calc(100vh - 60px);
}

  .foodkeeper-add-product-form1-wrapper {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }

    .foodkeeper-add-product-form1-add-icon {
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: row;
    }

      .foodkeeper-add-product-form1-add-icon-bg {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 20px 0;
        width: 115px;
        height: 115px;
        background: $color-white;
        border-radius: 50%;
      }

      .foodkeeper-add-product-form1-add-icon-text {
        text-align: center;
        font: 3em 'Karla-Regular', sans-serif;
        color: $color-red;
      }

    .foodkeeper-add-product-form1-select {
      margin: 20px auto 15px;
      padding: 0 25px;
      width: 262px;
      height: 40px;
      background: $color-green-lite;
      box-sizing: border-box;
      border: none;
      border-radius: 20px;
      text-transform: capitalize;
      color: $color-white;
      font: 1.5em 'Karla-Italic', sans-serif;

      option {
        text-transform: capitalize;
      }
    }

    .foodkeeper-add-product-form1-filters {
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

    .foodkeeper-add-product-form1-itemgreen {
      position: relative;
      margin: 0px auto 15px;
      width: 260px;

      input {
        padding: 0 55px 0 25px;
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 20px;
        box-sizing: border-box;
        font: 1.5em 'Karla-Italic', sans-serif;
        color: $color-white;
        background: $color-green-lite;

        &.quantity {
          font: 1.5em 'Karla-Bold', sans-serif;
          text-align: center;
          padding: 0 55px 0 55px;
        }
      }

      ::-webkit-input-placeholder {
        color: $color-white;
      }
    }

    .foodkeeper-add-product-form1-itemgreen-icon {
      position: absolute;
      top: 0;
      margin-top: 5px;
      width: 30px;
      height: 30px;
      fill: $color-white;

      &.left {
        left: 20px;
      }

      &.right {
        right: 20px;
      }
    }

  .foodkeeper-add-product-form2-wrapper {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    padding: 0 60px;
    height: 195px;
    background: $color-white;
  }

    .foodkeeper-add-product-form2-title {
      margin: 0;
      font: 1.2em 'Karla-Bold', sans-serif;
      color: $color-text;
      text-transform: uppercase;
    }

    .foodkeeper-add-product-form2-dlc-range {
      margin: 25px 0;
      text-align: center;

      input[type="range"] {
        -webkit-appearance:none;
        width: 100%;
        height: 4px;
        margin: 10px 0px 0px;
        background: $color-green-lite;
        border-radius: 4px;
      }

      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance:none;
        position:relative;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background: $color-white;
        border: 2px solid #f2f2f2;
        box-shadow: 0px 3px 10px rgba(0,0,0, 0.2);
        z-index: 3;
      }
    }

    .foodkeeper-add-product-form2-label-range {
      display: flex;
      justify-content: space-between;
      align-content: center;
      flex-direction: row;
      margin-top: -5px;
      font: 1.1em 'Karla-Italic', sans-serif;
      color: $color-text;
    }

    .foodkeeper-add-product-form2-button {
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

    .product-dlc {
      background-color: $color-green;
      color: $color-white;
      border-radius: 50px;
      padding: 5px 10px;
    }

    .product-item-quantity {
      position: absolute;
      right: 2px;
      top: 2px;
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

    .controls-quantity {
      position: absolute;
      top: 13%;
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

    .foodkeeper-add-product-form1-question {
      margin: 20px auto 0;
      color: $color-text;
    }
</style>
