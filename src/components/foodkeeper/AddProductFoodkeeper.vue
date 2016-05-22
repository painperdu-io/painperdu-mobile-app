<template>
  <div class="foodkeeper-add-product-container">
    <div class="foodkeeper-add-product-form1-wrapper">
      <div class="foodkeeper-add-product-form1-add-icon">
        <div class="foodkeeper-add-product-form1-add-icon-bg">
          <span class="foodkeeper-add-product-form1-add-icon-text">+</span>
        </div>
      </div>
      <div class="foodkeeper-add-product-form1-itemgreen">
        <svg viewBox="0 0 100 100" class="foodkeeper-add-product-form1-itemgreen-icon right">
          <use xlink:href="#app-icon-close"></use>
        </svg>
        <input type="text" placeholder="Nom du garde manger" />
      </div>
      <div class="foodkeeper-add-product-form1-itemgreen">
        <input type="text" placeholder="Description du garde manger" />
      </div>
      <div class="foodkeeper-add-product-form1-filters">
        <input id="brut" class="filter" type="radio" value="false" v-model="type">
        <label for="brut" >Plats Préparés</label>
        <input id="prepare" class="filter" type="radio" value="true" v-model="type">
        <label for="prepare">Produits Bruts</label>
      </div>
      <select class="foodkeeper-add-product-form1-select" v-model="slectedAddress">
        <option>Légumes</option>
        <option>Légumes</option>
        <option>Légumes</option>
      </select>
      <div class="foodkeeper-add-product-form1-itemgreen">
        <svg viewBox="0 0 100 100" class="foodkeeper-add-product-form1-itemgreen-icon left">
          <use xlink:href="#app-icon-close"></use>
        </svg>
        <input class="quantity" type="text" value="1" readonly="readonly">
        <svg viewBox="0 0 100 100" class="foodkeeper-add-product-form1-itemgreen-icon right">
          <use xlink:href="#app-icon-close"></use>
        </svg>
      </div>
    </div>
    <div class="foodkeeper-add-product-form2-wrapper">
      <h3 class="foodkeeper-add-product-form2-title">À consommer sous</h3>
      <div class="foodkeeper-add-product-form2-dlc-range">
        <label for="product-dlc">jours</label>
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
export default {};
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
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 20px 0;
        width: 75px;
        height: 75px;
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
        background: $color-green-lite;
        border-radius: 4px;
        margin: auto;
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
</style>
