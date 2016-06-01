<template>
  <div class="cart-popup-container">
    <h3 class="cart-popup-title">Avez-vous acheté... ?</h3>
    <div class="popup-title-separator"></div>
    <div class="cart-popup-item-wrapper">
      <div class="cart-popup-item">
        <div class="cart-popup-item-question-wrapper">
          <svg viewBox="0 0 100 100" class="food-icon">
            <use xlink:href="#foods-icon-pomme"></use>
          </svg>
          <p class="cart-popup-item-question"><span class="underline"></span>Des fruits et des légumes ?</p>
          <svg viewBox="0 0 100 100" class="food-icon">
            <use xlink:href="#foods-icon-orange"></use>
          </svg>
        </div>
        <input id="cart1" type="checkbox">
        <label for="cart1"></label>
      </div>
      <div class="cart-popup-item">
        <div class="cart-popup-item-question-wrapper">
          <svg viewBox="0 0 100 100" class="food-icon">
            <use xlink:href="#foods-icon-emmental"></use>
          </svg>
          <p class="cart-popup-item-question"><span class="underline"></span>Des produits laitiers ?</p>
          <svg viewBox="0 0 100 100" class="food-icon">
            <use xlink:href="#foods-icon-lait"></use>
          </svg>
        </div>
        <input id="cart2" type="checkbox">
        <label for="cart2"></label>
      </div>
      <div class="cart-popup-item">
        <div class="cart-popup-item-question-wrapper">
          <svg viewBox="0 0 100 100" class="food-icon">
            <use xlink:href="#foods-icon-croissant"></use>
          </svg>
          <p class="cart-popup-item-question"><span class="underline"></span>Du pain, des viennoiseries?</p>
          <svg viewBox="0 0 100 100" class="food-icon">
            <use xlink:href="#foods-icon-sandwich"></use>
          </svg>
        </div>
        <input id="cart3" type="checkbox">
        <label for="cart3"></label>
      </div>
      <div class="cart-popup-item">
        <div class="cart-popup-item-question-wrapper">
          <svg viewBox="0 0 100 100" class="food-icon">
            <use xlink:href="#foods-icon-viande"></use>
          </svg>
          <p class="cart-popup-item-question"><span class="underline"></span>De la viande, du poisson ?</p>
          <svg viewBox="0 0 100 100" class="food-icon">
            <use xlink:href="#foods-icon-poisson"></use>
          </svg>
        </div>
        <input id="cart4" type="checkbox">
        <label for="cart4"></label>
      </div>
    </div>
    <div class="cart-popup-add-button">Valider</div>
  </div>
  <div class="popup-overlay"></div>
</template>

<script>
export default {
  methods: {
    closeCart: (event) => {
      document.getElementsByClassName('cart-popup-container')[0].classList.remove('active');
      document.getElementsByClassName('popup-overlay')[0].classList.remove('active');
      event.preventDefault()
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

.cart-popup-container {
  width: 100%;
}

  .cart-popup-title {
    margin-top: 30px;
    font: 1.8em 'IowanOldStyleBT-BlackItalic', sans-serif;
    color: $color-red;
  }

  .popup-title-separator {
    width: 56px;
    height: 5px;
    margin: 0 auto;
    transform: scale(0.5);
    background: url('/static/img/separator-green.png') center center no-repeat;
  }

  .cart-popup-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 300px;
  }

    .cart-popup-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      & > input[type="checkbox"] {
        display: none;
      }

      & > label {
        display: inline-block;
        width: 40px;
        height: 20px;
        position: relative;
        margin: 12px 0;
        transition: 0.3s;
        box-sizing: border-box;
        &:after{
          content: '';
          display: block;
          position: absolute;
          left: 0px;
          top: 0px;
          width: 20px;
          height: 20px;
          transition: 0.3s;
        }
      }

      #cart1:checked + label,
      #cart2:checked + label,
      #cart3:checked + label,
      #cart4:checked + label {
        background: $color-green;
      }

      #cart1:checked + label:after,
      #cart2:checked + label:after,
      #cart3:checked + label:after,
      #cart4:checked + label:after, {
        left: calc(100% - 18px);
        background: $color-white;
      }

      #cart1 + label,
      #cart2 + label,
      #cart3 + label,
      #cart4 + label {
        background: $color-gray;
        border-radius: 20px;
      }

      #cart1 + label:after,
      #cart2 + label:after,
      #cart3 + label:after,
      #cart4 + label:after {
        background: $color-white;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        top: 2px;
        left: 2px;
      }
    }

      .cart-popup-item-question-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        & > svg {
          margin: 0 10px;
          width: 28px;
          height: 28px;
        }
      }

        .cart-popup-item-question {
          position: relative;
          margin: 0 auto -2px;
          z-index: 1;
          display: inline-block;
          font: 1.5em 'Karla-Italic', sans-serif;
          color: $color-text;

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

  .cart-popup-add-button {
    margin: 0 auto 20px;
    width: 150px;
    padding: 18px 0;
    border-radius: 25px;
    background-color: $color-beige;
    font: 1.3em 'Karla-Bold', sans-serif;
    color: $color-text;
    text-transform: uppercase;
    text-align: center;
  }

  .popup-overlay {
      content: "";
      display: none;
      width: 100%;
      height: 100%;
      background-color: $color-black;
      opacity: 0.7;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
      overflow: hidden;
  }

  .popup-overlay.active {display: inline-block;}

</style>
