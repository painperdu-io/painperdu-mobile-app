<template>
  <div class="error-popup-overlay"></div>
  <div class="error-popup-container">
    <div class="error-popup-close" v-on:click="closeError">
      <svg viewBox="0 0 100 100" class="app-icon">
        <use xlink:href="#app-icon-close"></use>
      </svg>
    </div>
    <div class="error-popup-container-content">
      <h3 class="error-popup-title">Halte là !</h3>
      <div class="error-popup-title-separator"></div>
      <div class="error-popup-item-wrapper">
        <div class="error-popup-item">
          <div class="error-popup-item-text-wrapper">
            <p class="error-popup-item-text"><span class="underline"></span>Des champs<br /></p>
            <p class="error-popup-item-text"><span class="underline"></span>ont été mal saisis<br /></p>
          </div>
        </div>
      </div>
    </div>
  <div class="popup-overlay"></div>
  </div>
</template>

<script>
export default {
  methods: {
    closeError(event) {
      document.getElementsByClassName('error-popup-container')[0].classList.remove('active');
      document.getElementsByClassName('error-popup-overlay')[0].classList.remove('active');
      event.preventDefault()
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

.error-popup-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  -webkit-transform: translate3d(-50%, -50%, 0);
  width: 200px;
  min-height: 50px;
  max-height: 597px;
  background: $color-white;
  z-index: -1;
  text-align: center;
  transition: width 0.5s, opacity 0.5s;
  -webkit-transition: width 0.5s, opacity 0.5s;
  opacity: 0;

  &.active {
    opacity: 1;
    z-index: 9999;
    width: 335px;
  }
}

  .error-popup-close {
    position: absolute;
    top: 20px;
    right: 12px;
    width: 40px;
    height: 40px;
    fill: $color-red;
  }

  .error-popup-overlay {
      content: "";
      display: inline-block;;
      width: 100%;
      height: 200% !important;
      background-color: $color-black;
      opacity: 0;
      position: fixed;
      top: 0;
      left: 0;
      overflow: hidden;
      transition: all 0.2s;
      z-index: -1;
  }

  .error-popup-overlay.active {opacity: 0.7;   z-index: 999;}

.error-popup-container-content {
  width: 100%;
}

  .error-popup-title {
    margin-top: 30px;
    font: 1.8em 'IowanOldStyleBT-BlackItalic', sans-serif;
    color: $color-red;
  }

  .error-popup-title-separator {
    width: 56px;
    height: 5px;
    margin: 0 auto 25px;
    transform: scale(0.5);
    background: url('/static/img/separator-green.png') center center no-repeat;
  }

  .error-popup-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
  }

  .error-popup-item {
    margin-bottom: 25px;
  }

      .error-popup-item-text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
      }

        .error-popup-item-text {
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

  .error-popup-overlay {
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

  .error-popup-overlay.active {display: inline-block;}

</style>
