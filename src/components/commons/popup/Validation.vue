<template>
  <div class="validation-popup-overlay"></div>
  <div class="validation-popup-container">
    <div class="validation-popup-close" v-on:click="closevalidation(destination)">
      <svg viewBox="0 0 100 100" class="app-icon">
        <use xlink:href="#app-icon-close"></use>
      </svg>
    </div>
    <div v-if="add == 'FoodKeeper'" class="validation-popup-container-content">
      <h3 class="validation-popup-title">Bravo à toi !</h3>
      <div class="validation-popup-title-separator"></div>
      <div class="validation-popup-item-wrapper">
        <div class="validation-popup-item">
            <p class="validation-popup-item-text">Tu viens de créer un nouveau<br /> garde-manger !</p>
        </div>
        <div class="validation-popup-item">
          <div class="validation-popup-item-text-wrapper">
            <p class="validation-popup-item-text"><span class="underline"></span>Maintenant il est temps de<br /></p>
            <p class="validation-popup-item-text text-bold"><span class="underline"></span>configurer une place de marché<br /></p>
            <p class="validation-popup-item-text"><span class="underline"></span>associée pour y partager tes denrées !</p>
          </div>
        </div>
      </div>
      <div class="validation-popup-redirect-button" v-link="{name : 'AddMarket'}">Configurer</div>
      <div class="validation-popup-add-button" v-on:click="closevalidation(destination)">Remettre à plus tard</div>
    </div>
    <div v-if="add == 'Market'" class="validation-popup-container-content">
      <h3 class="validation-popup-title">Bravo à toi !</h3>
      <div class="validation-popup-title-separator"></div>
      <div class="validation-popup-item-wrapper">
        <div class="validation-popup-item">
          <div class="validation-popup-item-text-wrapper">
            <p class="validation-popup-item-text"><span class="underline"></span>Tu viens de créer<br /></p>
            <p class="validation-popup-item-text text-bold"><span class="underline"></span>une nouvelle place du marché !<br /></p>
          </div>
        </div>
      </div>
      <div class="validation-popup-redirect-button" v-on:click="closevalidation(destination)">Fermer</div>
    </div>
    <div v-if="add == 'Product'" class="validation-popup-container-content">
      <h3 class="validation-popup-title">Bravo à toi !</h3>
      <div class="validation-popup-title-separator"></div>
      <div class="validation-popup-item-wrapper">
        <div class="validation-popup-item">
          <div class="validation-popup-item-text-wrapper">
            <p class="validation-popup-item-text"><span class="underline"></span>Tu viens d'ajouter'<br /></p>
            <p class="validation-popup-item-text text-bold"><span class="underline"></span>une nouvelle denrée !<br /></p>
          </div>
        </div>
      </div>
      <div class="validation-popup-redirect-button" v-on:click="closevalidation(destination)">Fermer</div>
    </div>
    <div v-if="add == 'AskProduct'" class="validation-popup-container-content">
      <h3 class="validation-popup-title">Alliance demandée !</h3>
      <div class="validation-popup-title-separator"></div>
      <div class="validation-popup-item-wrapper">
        <div class="validation-popup-item">
          <div class="validation-popup-item-text-wrapper">
            <p class="validation-popup-item-text"><span class="underline"></span>Votre demande de denrée<br /></p>
            <p class="validation-popup-item-text text-bold"><span class="underline"></span>est validée<br /></p>
          </div>
        </div>
      </div>
      <div class="validation-popup-redirect-button" v-on:click="closevalidation(destination)">Fermer</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['destination', 'add'],
  methods: {
    closevalidation(destination) {
      document.getElementsByClassName('validation-popup-container')[0].classList.remove('active');
      document.getElementsByClassName('validation-popup-overlay')[0].classList.remove('active');
      this.$route.router.go({ name: destination });
      event.preventDefault()
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

.validation-popup-container {
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

  .validation-popup-close {
    position: absolute;
    top: 20px;
    right: 12px;
    width: 40px;
    height: 40px;
    fill: $color-red;
  }

  .validation-popup-overlay {
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

  .validation-popup-overlay.active {opacity: 0.7;   z-index: 999;}

.validation-popup-container-content {
  width: 100%;
}

  .validation-popup-title {
    margin-top: 30px;
    font: 1.8em 'IowanOldStyleBT-BlackItalic', sans-serif;
    color: $color-red;
  }

  .validation-popup-title-separator {
    width: 56px;
    height: 5px;
    margin: 0 auto 25px;
    transform: scale(0.5);
    background: url('/static/img/separator-green.png') center center no-repeat;
  }

  .validation-popup-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
  }

  .validation-popup-item {
    margin-bottom: 25px;
  }

      .validation-popup-item-text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > svg {
          margin: 0 10px;
          width: 28px;
          height: 28px;
        }
      }

        .validation-popup-item-text {
          position: relative;
          margin: 0 auto -2px;
          z-index: 1;
          display: inline-block;
          font: 1.5em 'Karla-Italic', sans-serif;
          color: $color-text;

          &.text-bold {
            font-weight: 700;
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

  .validation-popup-redirect-button {
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

  .validation-popup-add-button {
    color: $color-green;
    text-decoration: underline;
    text-transform: uppercase;
    font: 1.2em 'Karla-Bold', sans-serif;
    margin-bottom: 40px;
  }

  .validation-popup-overlay {
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

  .validation-popup-overlay.active {display: inline-block;}

</style>
