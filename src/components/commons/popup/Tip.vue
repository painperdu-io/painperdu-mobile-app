<template transition="popIn">
  <div class="foodkeeper-add-popup-container">
    <h3 class="foodkeeper-add-popup-title">Trucs & Astuces</h3>
    <div class="popup-title-separator"></div>
    <div class="foodkeeper-add-popup-item-wrapper">
      <div class="foodkeeper-add-popup-item">
        <div class="foodkeeper-add-accomplice-mail">
          Trop tard
        </div>
      </div>
      <div class="foodkeeper-add-popup-item">
        <div class="foodkeeper-add-accomplice-text">
          <p>Le citron et le chocolat ont dépassé<span class="underline"></span></p><br/>
          <p>la date limite de consommation <span class="underline"></span></p><br/>
        </div>
      </div>
      <div class="foodkeeper-add-popup-item">
        <div class="product">
          <div class="product-item-circle type">
            <svg viewBox="0 0 100 100" class="foods-icon">
              <use xlink:href="#foods-icon-citron"></use>
            </svg>
          </div>
          <div class="product-name">Citron</div>
        </div>
        <div class="product">
          <div class="product-item-circle type">
            <svg viewBox="0 0 100 100" class="foods-icon">
              <use xlink:href="#foods-icon-chocolat"></use>
            </svg>
          </div>
          <div class="product-name">Chocolat</div>
        </div>
      </div>
      <div>
        <p>Ne les jetez pas !</p>
        <p>Blabla sur le masque de beauté</p>
      </div>
    </div>
    <div class="foodkeeper-add-accomplice-button">Ajouter</div>
  </div>
</template>

<script>
export default {
  methods: {
    closeAddAccomplice(event) {
      document.getElementsByClassName('popup-container')[0].classList.remove('active');
      document.getElementsByClassName('popup-overlay')[0].classList.remove('active');
      event.preventDefault()
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

.popup-title-separator {
  width: 56px;
  height: 5px;
  margin: 0 auto;
  transform: scale(0.5);
  background: url('/static/img/separator-green.png') center center no-repeat;
}

.foodkeeper-add-popup-container {
  width: 100%;
}

  .foodkeeper-add-popup-title {
    margin-top: 30px;
    font: 1.8em 'IowanOldStyleBT-BlackItalic', sans-serif;
    color: $color-red;
  }

  .foodkeeper-add-popup-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

    .foodkeeper-add-popup-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .foodkeeper-add-accomplice-text p {
      display: inline;
      position: relative;
      margin: 0;
      font: 1.5em 'Karla-Italic', sans-serif;
      color: $color-text;
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

    .foodkeeper-add-accomplice-mail {
      margin: 25px auto;
      width: 260px;

      input {
        width: 100%;
        height: 40px;
        padding: 0 20px;
        box-sizing: border-box;
        border-radius: 20px;
        border: none;
        background-color: $color-green-lite;
        color: $color-white;
        font: 1.4em 'Karla-Italic', sans-serif;
      }

      ::-webkit-input-placeholder {
        color: $color-white;
      }
    }

  .foodkeeper-add-accomplice-button {
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

</style>
