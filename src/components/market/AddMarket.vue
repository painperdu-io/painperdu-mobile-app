<template>
  <div class="market-add-container">
    <div class="market-add-map-wrapper"></div>
    <div class="market-add-form-wrapper">
      <div class="market-add-form-question">Quel garde-manger souhaitez-vous associer à ce clan ?</div>
      <select class="market-add-form-select" v-model="slectedAddress">
        <option v-for="place in places" v-bind:value="place">
          {{ place.name }}
        </option>
      </select>
      <div class="market-add-form-adress">
        <p>L'adresse de <span class="txt-current-selected">{{ slectedAddress.name }}</span> est :</p>
        <div class="market-add-form-adress-separator"></div>
        <div class="market-add-form-adress-data">
          <div><p><span class="underline"></span>{{ slectedAddress.addressL1 }}</p></div>
          <div><p class="txt-uppercase"><span class="underline"></span>{{ slectedAddress.addressL2 }}</p></div>
        </div>
      </div>
    </div>
    <div class="market-add-form-perimeter-wrapper">
      <div class="market-add-form-perimeter-range">
        <h3>Périmètre</h3>
        <input type="range" value="1" max="2" min="0" step="1"/>
      </div>
      <div class="market-add-form-perimeter-address">
        <p>Votre <span class="txt-current-selected">{{ slectedAddress.name }}</span> est :</p>
        <div class="market-add-form-perimeter-separator"></div>
        <div class="market-add-form-perimeter-address-data">
          <p>{{ slectedAddress.addressL1 }}</p>
        </div>
      </div>
      <div class="market-add-form-perimeter-add">Ajouter</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      places: [
        { name: 'maison', addressL1: '12 rue du Trésum', addressL2: '74000 Annecy' },
        { name: 'boulot', addressL1: '63 route du Périmètre', addressL2: '74000 Annecy' },
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.txt-current-selected {
  text-transform: uppercase;
  font: bold 1em 'Karla-Italic', sans-serif;
}

.txt-uppercase {
  text-transform: uppercase;
}

.market-add-container {
  position: relative;
  width: 100%;
  font: 1.2em 'Karla-Italic', sans-serif;
  text-align: center;
  color: $color-text;
}

  .market-add-map-wrapper {
    height: 150px;
    background: $color-white;
    overflow: hidden;
  }

  .market-add-form-wrapper {
    padding: 30px 0;
    background: url('/static/img/bg-1.png') center center;
  }

    .market-add-form-select {
      margin: 20px 0 15px;
      width: 262px;
      height: 40px;
      background: $color-green-lite;
      box-sizing: border-box;
      border: none;
      border-radius: 20px;
      font-style: italic;
      text-align-last: center;
      text-transform: capitalize;
      color: $color-white;
      font-size: 1.1em;

      option {
        text-align: center;
        text-transform: capitalize;
      }
    }

    .market-add-form-adress {}

      .market-add-form-adress-separator {
        width: 56px;
        height: 5px;
        margin: -5px auto 15px;
        transform: scale(0.5);
        background: url('/static/img/separator-green.png') center center no-repeat;
      }

      .market-add-form-adress-data {
        font: 1.8em 'Baskerville-Bold', sans-serif;
        font-style: italic;
        color: $color-red;

        p {
          position: relative;
          margin: 0 auto -2px;
          z-index: 1;
          display: inline-block;

          .underline {
            position: absolute;
            left: 0;
            bottom: 2px;
            height: 8px;
            width: 100%;
            background: $color-white;
            z-index: -1;
          }
        }
      }

    .market-add-form-perimeter-wrapper {
      padding: 25px;
      background: $color-white;
    }

      .market-add-form-perimeter-range {
        h3 {
          text-transform: uppercase;
          margin: 0 0 5px -140px;
        }

        input[type="range"] {
          -webkit-appearance:none;
          width: 200px;
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

      .market-add-form-perimeter-separator {
        width: 56px;
        height: 5px;
        margin: -5px auto 15px;
        transform: scale(0.5);
        background: url('/static/img/separator-green.png') center center no-repeat;
      }

      .market-add-form-perimeter-address-data {
        margin-top: -15px;
        font: 1.8em 'Baskerville-Bold', sans-serif;
        font-style: italic;
        color: $color-red;
      }

      .market-add-form-perimeter-add {
        margin: 0 auto;
        width: 150px;
        padding: 18px 0;
        border-radius: 25px;
        background-color: $color-beige;
        font: 1.3em 'Karla-Bold', sans-serif;
        color: $color-text;
        text-transform: uppercase;
      }
</style>
