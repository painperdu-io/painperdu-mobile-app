<template transition="popIn">
  <div class="tip-popup-container">
    <h3 class="tip-popup-title">Trucs & Astuces</h3>
    <div class="tip-popup-title-separator"></div>
    <div class="tip-popup-item-wrapper">
      <div class="tip-popup-item-subtitle-wrapper">
        <div class="tip-popup-app-icon-status-container tip-popup-app-icon-status-left">
          <svg viewBox="0 0 100 100" class="tip-popup-app-icon-status">
            <use xlink:href="#app-icon-bugle" ></use>
          </svg>
        </div>
        <div class="tip-popup-item-subtitle">
          " Oyé, Oyé ! "
        </div>
        <div class="tip-popup-app-icon-status-container tip-popup-app-icon-status-right">
          <svg viewBox="0 0 100 100" class="tip-popup-app-icon-status">
            <use xlink:href="#app-icon-bugle" ></use>
          </svg>
        </div>
      </div>
      <div class="tip-popup-item">
        <div class="tip-popup-item-text-wrapper">
          <p class="tip-popup-item-text">Ton <span class="text-bold text-uppercase">avocat</span> et tes <span class="text-bold text-uppercase">yaourts </span> n'ont pas été<span class="underline"></span></p><br/>
          <p class="tip-popup-item-text">récupérés à temps<span class="underline"></span></p>
        </div>
      </div>
      <div class="tip-popup-item">
        <div class="tip-popup-product">
          <div class="tip-popup-product-item-circle type">
            <svg viewBox="0 0 100 100" class="foods-icon">
              <use xlink:href="#foods-icon-avocat"></use>
            </svg>
          </div>
          <div class="tip-popup-product-name">Avocat</div>
        </div>
        <div class="tip-popup-product">
          <div class="tip-popup-product-item-circle">
            <svg viewBox="0 0 100 100" class="foods-icon">
              <use xlink:href="#foods-icon-yaourt-nature"></use>
            </svg>
          </div>
          <div class="tip-popup-product-name">Yaourts</div>
        </div>
      </div>
      <div>
      <div class="tip-popup-item tip-popup-border-red">
        <div class="tip-popup-item-text-wrapper">
          <p class="tip-popup-item-subtitle-red"><span class="underline"></span>Ne les jetez pas !<br /></p>
          <p class="tip-popup-item-text"><span class="underline"></span>Découvre comment les recycler<br /></p>
          <p class="tip-popup-item-text"><span class="underline"></span>sur notre blog !</p>
        </div>
      </div>
    </div>
    <a href="http://blog.painperdu.io/" target="_self" class="tip-popup-validation-button">Sauver les produits</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

.tip-popup-title-separator {
  width: 56px;
  height: 5px;
  margin: 0 auto;
  transform: scale(0.5);
  background: url('/static/img/separator-green.png') center center no-repeat;
}

.tip-popup-container {
  width: 100%;
}

  .tip-popup-title {
    margin-top: 30px;
    font: 1.8em 'IowanOldStyleBT-BlackItalic', sans-serif;
    color: $color-red;
  }

  .tip-popup-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

    .tip-popup-item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-items: flex-start;
      margin-bottom: 25px;
    }


  .tip-popup-validation-button {
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

  .tip-popup-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
  }

      .tip-popup-item-text-wrapper {
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

        .tip-popup-item-text {
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

        .tip-popup-item-subtitle-red {
          position: relative;
          margin: 0 auto;
          z-index: 1;
          display: inline-block;
          font: 1.5em 'Karla-Italic', sans-serif;
          color: $color-red;
        }

        .tip-popup-product {
          display: flex;
          flex-direction: column;
          margin: 0 10px;
        }

        .tip-popup-product-item-circle {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          text-align: center;
          border: 10px solid #c0bdb1;
          background-color: #c0bdb1;
          box-sizing: border-box;
        }


          .tip-popup-product-item-icon {
            transform: scale(0.8);

          }

          .tip-popup-product-name {
            margin: 10px auto 5px;
            font: 1.8em 'IowanOldStyleBT-BlackItalic', sans-serif;
            color: $color-text;
          }

          .tip-popup-border-red{
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

          .tip-popup-item-subtitle-wrapper {
            position: relative;
            width: 160px;
            color: $color-text;
            margin: 20px auto;
            font: bold 1.3em 'Karla-Italic', sans-serif;
          }
          .tip-popup-app-icon-status-container{
            position: absolute;
            top:-12px;
            width: 35px;
            box-sizing: border-box;
          }
          .tip-popup-app-icon-status-left { transform: scaleX(-1); left:  0}
          .tip-popup-app-icon-status-right {
            right: 0;
          }
</style>
