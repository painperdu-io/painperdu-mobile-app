<template>
  <div class="confirmation-popup-overlay"></div>
  <div class="confirmation-popup-container">
    <div class="confirmation-popup-close" v-on:click="closeconfirmation()">
      <svg viewBox="0 0 100 100" class="app-icon">
        <use xlink:href="#app-icon-close"></use>
      </svg>
    </div>
    <div v-if="answerGiven" class="confirmation-popup-container-content">
      <h3 class="confirmation-popup-title">Parbleu !</h3>
      <div class="confirmation-popup-title-separator"></div>
      <div class="confirmation-popup-item-wrapper">
        <div  class="confirmation-popup-item">
          <div class="confirmation-popup-item-text-wrapper">
            <p class="confirmation-popup-item-text"><span class="underline"></span>Votre choix est fait !<br /></p>
            <p class="confirmation-popup-item-text"><span class="underline"></span>On aime votre assurance !<br /></p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="confirmation-popup-container-content">
      <h3 class="confirmation-popup-title">Diantre !</h3>
      <div class="confirmation-popup-title-separator"></div>
      <div class="confirmation-popup-item-wrapper">
        <div  class="confirmation-popup-item">
          <div class="confirmation-popup-item-text-wrapper">
            <p class="confirmation-popup-item-text"><span class="underline"></span>Tout ceci s'annonce compliqué !<br /></p>
            <p class="confirmation-popup-item-text"><span class="underline"></span>Les éléments sont contre vous !<br /></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['answer'],
  methods: {
    closeconfirmation() {
      document.getElementsByClassName('confirmation-popup-container')[0].classList.remove('active');
      document.getElementsByClassName('confirmation-popup-overlay')[0].classList.remove('active');
      update();
      event.preventDefault()
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

.confirmation-popup-container {
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

  .confirmation-popup-close {
    position: absolute;
    top: 20px;
    right: 12px;
    width: 40px;
    height: 40px;
    fill: $color-red;
  }

  .confirmation-popup-overlay {
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

  .confirmation-popup-overlay.active {opacity: 0.7;   z-index: 999;}

.confirmation-popup-container-content {
  width: 100%;
}

  .confirmation-popup-title {
    margin-top: 30px;
    font: 1.8em 'IowanOldStyleBT-BlackItalic', sans-serif;
    color: $color-red;
  }

  .confirmation-popup-title-separator {
    width: 56px;
    height: 5px;
    margin: 0 auto 25px;
    transform: scale(0.5);
    background: url('/static/img/separator-green.png') center center no-repeat;
  }

  .confirmation-popup-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
  }

  .confirmation-popup-item {
    margin-bottom: 25px;
  }

      .confirmation-popup-item-text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
      }

        .confirmation-popup-item-text {
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

  .confirmation-popup-overlay {
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

  .confirmation-popup-overlay.active {display: inline-block;}

</style>
