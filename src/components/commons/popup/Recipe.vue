<template transition="popIn">
  <div class="recipe-popup-container">
    <h3 class="recipe-popup-title">Au menu <br /> cette semaine</h3>
    <div class="recipe-popup-title-separator"></div>
    <div class="recipe-popup-item-wrapper">
      <div class="recipe-popup-item-subtitle-wrapper">
        <div class="recipe-popup-app-icon-status-container recipe-popup-app-icon-status-left">
          <svg viewBox="0 0 100 100" class="recipe-popup-app-icon-status">
            <use xlink:href="#app-icon-bugle" ></use>
          </svg>
        </div>
        <div class="recipe-popup-item-subtitle">
          " Oyé, Oyé ! "
        </div>
        <div class="recipe-popup-app-icon-status-container recipe-popup-app-icon-status-right">
          <svg viewBox="0 0 100 100" class="recipe-popup-app-icon-status">
            <use xlink:href="#app-icon-bugle" ></use>
          </svg>
        </div>
      </div>
      <div class="recipe-popup-item">
        <div class="recipe-popup-item-text-wrapper">
          <p class="recipe-popup-item-text">Des <span class="text-bold text-uppercase">carottes</span> et <span class="text-bold text-uppercase">pommes dde terres</span> sont<span class="underline"></span></p><br/>
          <p class="recipe-popup-item-text">disponibles sur la place du marché<span class="underline"></span></p>
        </div>
      </div>
      <div class="recipe-popup-item">
        <div class="recipe-popup-product">
          <div class="recipe-popup-product-item-circle type">
            <svg viewBox="0 0 100 100" class="foods-icon">
              <use xlink:href="#foods-icon-carotte"></use>
            </svg>
          </div>
          <div class="recipe-popup-product-name">Carotte</div>
        </div>
        <div class="recipe-popup-product">
          <div class="recipe-popup-product-item-circle">
            <svg viewBox="0 0 100 100" class="foods-icon">
              <use xlink:href="#foods-icon-patate"></use>
            </svg>
          </div>
          <div class="recipe-popup-product-name">Pomme<br /> de terre</div>
        </div>
      </div>
      <div>
      <div class="recipe-popup-item recipe-popup-border-red">
        <div class="recipe-popup-item-text-wrapper">
          <p class="recipe-popup-item-subtitle-red"><span class="underline"></span>Cuisine les donc ensemble !<br /></p>
          <p class="recipe-popup-item-text"><span class="underline"></span>Découvre la recette conseillée par<br /></p>
          <p class="recipe-popup-item-text"><span class="underline"></span>Pain Perdu sur notre blog !</p>
        </div>
      </div>
    </div>
    <a href="http://blog.painperdu.io/" target="_self" class="recipe-popup-validation-button">Voir la recette</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

.recipe-popup-title-separator {
  width: 56px;
  height: 5px;
  margin: 0 auto;
  transform: scale(0.5);
  background: url('/static/img/separator-green.png') center center no-repeat;
}

.recipe-popup-container {
  width: 100%;
}

  .recipe-popup-title {
    margin-top: 30px;
    font: 1.8em 'IowanOldStyleBT-BlackItalic', sans-serif;
    color: $color-red;
  }

  .recipe-popup-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

    .recipe-popup-item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-items: flex-start;
      margin-bottom: 25px;
    }


  .recipe-popup-validation-button {
    margin: 0 auto 30px;
    width: 150px;
    padding: 18px 15px;
    border-radius: 25px;
    background-color: $color-beige;
    font: 1.3em 'Karla-Bold', sans-serif;
    color: $color-text;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
  }

  .recipe-popup-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
  }

      .recipe-popup-item-text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 0px;

        & > svg {
          margin: 0 10px;
          width: 28px;
          height: 28px;
        }
      }

        .recipe-popup-item-text {
          position: relative;
          margin: 0 auto -2px;
          z-index: 1;
          display: inline-block;
          font: 1.5em 'Karla-Italic', sans-serif;
          color: $color-text;

          &.text-bold, .text-bold {
            font-weight: 700;
          }

          &.text-uppercase, .text-uppercase {
            text-transform: uppercase;
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
        }

        .recipe-popup-item-subtitle-red {
          position: relative;
          margin: 0 auto;
          z-index: 1;
          display: inline-block;
          font: 1.5em 'Karla-Italic', sans-serif;
          color: $color-red;
        }

        .recipe-popup-product {
          display: flex;
          flex-direction: column;
          margin: 0 10px;
        }

        .recipe-popup-product-item-circle {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          text-align: center;
          background: $color-white;
          border: 10px solid $color-white;
          box-sizing: border-box;
          background: url('/static/img/product-raw.png') center center no-repeat $color-white;
        }


          .recipe-popup-product-item-icon {
            transform: scale(0.8);
          }

          .recipe-popup-product-name {
            margin: 10px auto 5px;
            font: 1.8em 'IowanOldStyleBT-BlackItalic', sans-serif;
            color: $color-red;
          }

          .recipe-popup-border-red{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            margin: 0 auto 35px;
            padding: 25px 0;
            width: 225px;
            background: url('/static/img/rectangle-red.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            border: 0;
          }

          .recipe-popup-item-subtitle-wrapper {
            position: relative;
            width: 160px;
            color: $color-text;
            margin: 20px auto;
            font: bold 1.3em 'Karla-Italic', sans-serif;
          }
          .recipe-popup-app-icon-status-container{
            position: absolute;
            top:-12px;
            width: 35px;
            box-sizing: border-box;
          }
          .recipe-popup-app-icon-status-left { transform: scaleX(-1); left:  0}
          .recipe-popup-app-icon-status-right {
            right: 0;
          }
</style>
