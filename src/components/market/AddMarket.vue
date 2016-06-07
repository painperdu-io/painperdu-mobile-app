<template>
  <div class="market-add-container">
    <div class="market-add-form-wrapper">
      <div class="market-add-form-question">Quel garde-manger souhaitez-vous associer à ce clan ?</div>
      <select class="market-add-form-select" v-model="slectedAddress">
        <option v-for="place in places" v-bind:value="place">
          {{ place.name }}
        </option>
      </select>

      <div class="market-add-form-perimeter-range">
        <h3>Périmètre de recherche <span>pour cette place :</span></h3>
        <input type="range" value="1" max="2" min="0" step="1"/>
        <div class="market-add-form-perimeter-range-label">
          <span class="align-left">Lopin</span>
          <span class="align-right">Canton</span>
          <span>Contrée</span>
        </div>
      </div>
      <div class="market-add-form-perimeter-address">
        <h3><span>L'adresse de </span>ta place du marché <span>est :</span></h3>
        <div class="market-add-form-perimeter-separator"></div>
      </div>
    </div>

    <div class="market-add-form-blason" v-on:click="addBlason">
      <div class="app-icon-container">
        <svg viewBox="0 0 50 50" class="app-icon">
          <use xlink:href="#app-icon-edit"></use>
        </svg>
      </div>
      <div class="residence-slider-item">
        <div class="residence-slider-image">
          <img src="./../../../static/temp/clan.png" />
        </div>
        <div class="residence-slider-item-name">
          <div class="residence-slider-item-name-content">
            {{ slectedAddress.addressL1 }}
          </div>
        </div>
      </div>
    </div>

    <div class="market-add-map-wrapper">
      <google-map></google-map>
    </div>
    <div class="market-add-form-perimeter-add">Ajouter</div>
  </div>
</template>

<script>
import GoogleMap from './../commons/GoogleMap'

export default {
  components: {
    GoogleMap,
  },
  data() {
    return {
      places: [
        { name: 'maison', addressL1: '12 rue du Trésum', addressL2: '74000 Annecy' },
        { name: 'boulot', addressL1: '63 route du Périmètre', addressL2: '74000 Annecy' },
      ]
    }
  },
  methods: {
    addBlason(event) {
      document.getElementsByClassName('popup-container')[0].classList.add('active');
      document.getElementsByClassName('popup-overlay')[0].classList.add('active');
      event.preventDefault()
    }
  }
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
    height: 320px;
    background: $color-white;
    overflow: hidden;
    margin-top: 50px;
  }

  .market-add-form-wrapper {
    padding: 30px 0 0;
    background: url('/static/img/bg-1.png') center center;
  }

    .market-add-form-select {
      margin: 10px 0 10px;
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

    h3 {
      text-transform: uppercase;
      span {
        text-transform: initial;
        font-weight: 300;
      }
    }

      .market-add-form-perimeter-range {

        input[type="range"] {
          -webkit-appearance:none;
          width: 262px;
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

      .market-add-form-perimeter-range-label {
        margin: 15px auto 0;
        width: 262px;
        .align-left {float: left;}
        .align-right {float: right;}
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
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translate3d(-50%,0,0);
      }

      .market-add-form-blason {
        position: absolute;
        left: 50%;
        z-index: 45;
        transform: translate3d(-50%,0,0);
      }

      .residence-slider-item {
        position: relative;
        text-align: center;
        display: inline-block;
        .residence-slider-image {
          width: 100px;
          height: 115px;
          mask-image: url('/static/img/blason-1.png');
          -webkit-mask-image: url('/static/img/blason-1.png');
          mask-size: 100% 100%;
          -webkit-mask-size: 100% 100%;
          background-color: $color-gray;
        }
        img {
          width: 100%;
        }
      }

        .residence-slider-item-name {
          position: absolute;
          bottom: 18px;
          left: 50%;
          min-width: 135px;
          transform: translate3d(-50%, 0, 0);
          font: 1.25em 'Karla-Bold', sans-serif;
          font-weight: 300;
          text-transform: uppercase;
          color: $color-text;
          padding: 5px 10px;
          background-color: $color-white;
          z-index: 99;
          min-height: 18px;

          &:before, &:after {
             content: '';
             position: absolute;
             display: block;
             bottom: -0.6em;
             border: 0.8em solid $color-white;
             z-index: 0;
             }

          &:before {
             left: -1.4em;
             border-right-width: 0.7em;
             border-left-color: transparent;
             -webkit-box-shadow: rgba(000,000,000,0.4) 0.5px 1px 1px;
             -moz-box-shadow: rgba(000,000,000,0.4) 0.5px 1px 1px;
             box-shadow: rgba(000,000,000,0.4) 0.5px 1px 1px;
          }

          &:after {
           right: -1.4em;
           border-left-width: 0.7em;
           border-right-color: transparent;
           -webkit-box-shadow: rgba(000,000,000,0.4) -0.5px 1px 1px;
           -moz-box-shadow: rgba(000,000,000,0.4) -0.5px 1px 1px;
           box-shadow: rgba(000,000,000,0.4) -0.5px 1px 1px;
          }
        }

        .residence-slider-item-name .residence-slider-item-name-content:before,
        .residence-slider-item-name .residence-slider-item-name-content:after {
             border-color: #929396 $color-white transparent $color-white;
             position: absolute;
             display: block;
             border-style: solid;
             bottom: -0.6em;
             content: '';
             z-index: 1;
        }

        .residence-slider-item-name .residence-slider-item-name-content:before {
           left: 0;
           border-width: 0.6em 0 0 2em;
           -webkit-box-shadow: rgba(000,000,000,0.4) 0.5px 1px 1px;
           -moz-box-shadow: rgba(000,000,000,0.4) 0.5px 1px 1px;
           box-shadow: rgba(000,000,000,0.4) 0.5px 1px 1px;
        }

        .residence-slider-item-name .residence-slider-item-name-content:after {
           right: 0;
           border-width: 0.6em 2em 0 0;
           -webkit-box-shadow: rgba(000,000,000,0.4) -0.5px 1px 1px;
           -moz-box-shadow: rgba(000,000,000,0.4) -0.5px 1px 1px;
           box-shadow: rgba(000,000,000,0.4) -0.5px 1px 1px;
        }

        .app-icon-container {
          position: absolute;
          width: 35px;
          height: 35px;
          padding: 3px;
          box-sizing: border-box;
          border-radius: 50%;
          background-color: $color-green;
          fill: $color-white;
          z-index: 10;
          left: 50%;
          top: 40%;
          transform: translate3d(-50%,-50%,0);
        }

</style>
