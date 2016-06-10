<template>
  <div class="slot-popup-overlay"></div> 
  <div class="slot-popup-container">
    <div class="slot-popup-close" v-on:click="closeSlot">
      <svg viewBox="0 0 100 100" class="app-icon">
        <use xlink:href="#app-icon-close"></use>
      </svg>
    </div>
    <div class="slot-popup-container-content">
      <h3 class="slot-popup-title">Pourparler !</h3>
      <div class="slot-popup-title-separator"></div>
      <div class="slot-popup-item-wrapper">
        <div v-if="ask" class="slot-popup-item">
          <div class="slot-popup-item-text-wrapper">
            <p class="slot-popup-item-text"><span class="underline"></span>Votre allié vous propose<br /></p>
            <p class="slot-popup-item-text"><span class="underline"></span>un nouvel horaire de rencontre<br /></p>
          </div>
        </div>

          <div class="slot-popup-item">
            <div class="date-hours">Entre 10h et 12h</div>
            <span class="date-day">Jeudi 28/02/16</span>
          </div>

      </div>
  Ò
      <div v-else class="slot-popup-item-wrapper">
        <div class="slot-popup-item">
          <div class="slot-popup-item-text-wrapper">
            <p class="slot-popup-item-text"><span class="underline"></span>Proposez un nouvel<br /></p>
            <p class="slot-popup-item-text"><span class="underline"></span>horaire de rencontre<br /></p>
          </div>
        </div>

          <div class="slot-popup-item">
            <input id="date" v-model="form.date" class="slot-form-item-input" type="date" min="{{ datemin }}" v-model="date">
            <label for="date" class="slot-form-item-label">Date</label>
          </div>
          <div class="slot-popup-item">
            <input for="heure-debut" v-model="form.timeStart" class="slot-form-item-input" type="time" v-model="heureDebut">
            <label id="heure-debut" class="slot-form-item-label">Créneau horaire</label>
            <input for="heure-fin" v-model="form.timeEnd" class="slot-form-item-input" type="time" v-model="heureFin">
            <label for="heure-fin" class="slot-form-item-label">Créneau horaire</label>
          </div>
      </div>
    </div>
    <div class="validation-popup-redirect-button" v-on:click="closeSlot">Proposer</div>
  </div>
</template>

<script>
export default {
  props:['ask'],
  methods: {
    closeSlot(event) {
      document.getElementsByClassName('slot-popup-container')[0].classList.remove('active');
      document.getElementsByClassName('slot-popup-overlay')[0].classList.remove('active');
      event.preventDefault()
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

.slot-popup-container {
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

  .slot-popup-close {
    position: absolute;
    top: 20px;
    right: 12px;
    width: 40px;
    height: 40px;
    fill: $color-red;
  }

  .slot-popup-overlay {
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

  .slot-popup-overlay.active {opacity: 0.7;   z-index: 999;}

.slot-popup-container-content {
  width: 100%;
}

  .slot-popup-title {
    margin-top: 30px;
    font: 1.8em 'IowanOldStyleBT-BlackItalic', sans-serif;
    color: $color-red;
  }

  .slot-popup-title-separator {
    width: 56px;
    height: 5px;
    margin: 0 auto 25px;
    transform: scale(0.5);
    background: url('/static/img/separator-green.png') center center no-repeat;
  }

  .slot-popup-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
  }

  .slot-popup-item {
    margin-bottom: 25px;
  }

      .slot-popup-item-text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
      }

        .slot-popup-item-text {
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

  .slot-popup-overlay {
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

  .slot-popup-overlay.active {display: inline-block;}


  .slot-form-item {
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
    position: relative;
    min-height: 45px;
  }

    .slot-form-item-label {
      position: absolute;
      top: 0;
      margin-bottom: 10px;
      font: 1.2em 'Karla-Italic', sans-serif;
      color: $color-text;
    }

    .slot-form-item-input {
      margin-top: -5px;
      padding-top: 15px;
      padding-bottom: 5px;
      font: 1.3em 'Karla-Regular', sans-serif;
      border: none;
      border-bottom: 1px solid $color-white;
      color: $color-text;
      background-color: $color-green;
      -webkit-appearance: none;
      appearance: none;

      &:hover, &:focus {
        font: 1.3em 'Karla-Bold', sans-serif;
        border-bottom: 3px solid $color-white;
        + label {
          font-weight: 700;
        }
      }

      &.error {
        &:hover, &:focus {
          font: 1.3em 'Karla-Bold', sans-serif;
          border-bottom: 2px solid $color-red;
          + label {
            color: $color-red;
          }
        }
      }
    }

    .date-hours {
      background-color: $color-green;
      height: 20px;
      border-radius: 20px;
      text-transform: uppercase;
      color: $color-white;
      font-family: 'Karla-Bold';
      font-size: 1.3em;
      box-sizing: border-box;
      line-height: 40px;
      width: 60%;
      min-width: 115px;
      margin: auto;
    }

    .date-days {
      position: relative;
      height: 20px;
      color: $color-text;
      font-family: 'Karla-Bold';
      font-size: 1.3em;
      box-sizing: border-box;
      line-height: 40px;
      width: 60%;
      min-width: 115px;
      margin: auto;
    }

</style>
