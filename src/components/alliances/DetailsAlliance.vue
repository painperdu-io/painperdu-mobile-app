<template>
  <div class="alliance-details-container" transition="moveHorizontal">
    <div class="alliance-summary">
      <div class="profile-container animated bounceInRight" v-show="show" >
        <div class="profile-infos">
          <div class="profile-infos-photo">
            <div class="profile-infos-photo-img">
              <img src="https://randomuser.me/api/portraits/men/12.jpg"/>
            </div>
          </div>
          <h3 class="profile-infos-name">Adrien</h3>
        </div>
      </div>
      <div class="product animated bounceInLeft" v-bind:class="{ 'inactive': !product.status }" v-link="{ path: '/market/product/:id' }">
        <div class="product-item-circle type" v-bind:class="{ 'type-prepare': !product.brut }">
          <svg viewBox="0 0 100 100" class="foods-icon animated tada">
            <use xlink:href="#foods-icon-chou"></use>
          </svg>
          <div class="product-quantity">2</div>
        </div>
        <div class="product-name">Chou</div>
      </div>
    </div>

    <div class="steps-summary">
      <h3 class="title-section">Suivi de vos actions</h3>
      <div class="steps-summary-separator"></div>

      <fieldset class="step final-step">
        <form>
          <svg viewBox="0 0 100 100" class="alliance-icon">
            <use xlink:href="#app-icon-note"></use>
          </svg>
          <h3>
            Laissez un avis à Ludovic <br>
            Votre échange était :
          </h3>
          <select class="alliance-form-vote-select" v-model="selectedProductType">
            <option>Parfait</option>
            <option>Moyen</option>
          </select>
        </form>
      </fieldset>
      <div class="alliance-action-button">Valider</div>

      <fieldset class="step user-side">
        <legend>
          <svg viewBox="0 0 100 100" class="alliance-icon">
            <use xlink:href="#app-icon-bugle"></use>
          </svg>
        </legend>
        <form>
          <h3>Avez-vous récupéré le produit ?</h3>
        </form>
      </fieldset>
      <div class="alliance-action-button">Oui</div> <div class="alliance-action-button">Non</div>

      <div class="user-address">
        Les coordonnées de Ludovic sont :<br>
        <span class="user-address-details">Appartement 5, étage 2 <br>
        20 rue du Trésum <br>
        74000 Annecy</span>
      </div>

      <fieldset class="step my-side">
        <legend>
          <svg viewBox="0 0 100 100" class="alliance-icon">
            <use xlink:href="#app-icon-helmet"></use>
          </svg>
        </legend>
          <h3>Ludovic est disponible :</h3>
          <div class="date-hours">Entre 10h et 12h</div>
          <span class="date-day">Jeudi 28/02/16</span>
      </fieldset>

      <fieldset class="step user-side">
        <legend>
          <svg viewBox="0 0 100 100" class="alliance-icon">
            <use xlink:href="#app-icon-bugle"></use>
          </svg>
        </legend>
        <form>
          <h3>Ludovic n'est pas disponible aujourd'hui mais il vous propose les créneaux suivants</h3>
          <div class="multiple-dates">
            <input type="radio" id="date-1" class="filter" value="false" v-model="productType">
            <label for="date-1" >
              <div class="date-hours">Entre 10h et 12h</div>
              <span class="date-day">Jeudi 28/02/16</span>
            </label>
            <input type="radio" id="date-2"  class="filter" value="true" v-model="productType">
            <label for="date-2">
              <div class="date-hours">Entre 18h et 20h</div>
              <span class="date-day">Jeudi 28/02/16<span class="underline"></span></span>
            </label>
          </div>
        </form>
      </fieldset>
      <div class="alliance-action-button">Refuser</div> <div class="alliance-action-button">Accepter</div>

      <fieldset class="step my-side">
        <legend>
          <svg viewBox="0 0 100 100" class="alliance-icon">
            <use xlink:href="#app-icon-helmet"></use>
          </svg>
        </legend>
          <h3>Vous avez contacté Ludovic le :</h3>
          <div class="date-day">28/02/16</div>
      </fieldset>

    </div>
  </div>

</template>

<script>
import Profile from './../commons/Profile'

export default {
  data() {
    return {
      show: true,
    };
  },
  components: {
    Profile,
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.alliance-summary {
  display: flex;
  flex-direction: row;
  flex: 1 100%;
  padding: 45px 0 30px;
  position: fixed;
  background: url('/static/img/bg-3.jpg');
  z-index: 99;
  width: 100%;
  justify-content: center;
  top: 60px;
}

.profile-container,
.product {
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 150px;
}

.profile-container {
  text-align: center;
}

    .profile-infos-photo {
      position: relative;
      margin: 0 auto 20px;
      width: 110px;
      height: 115px;
      mask-image: url('/static/img/blason-1.png');
      -webkit-mask-image: url('/static/img/blason-1.png');
      mask-size: 100% 100%;
      -webkit-mask-size: 100% 100%;
    }

      .profile-infos-photo-img {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;

        img {
          width: 125px;
          height: 125px;
          filter: grayscale(100%);
          mix-blend-mode: multiply;
        }
      }

    .profile-infos-name,
    .profile-infos-status {
      margin: 5px 0;
      color: $color-text;
      z-index: 10;
    }

    .profile-infos-name {
      font: bold 1.8em 'IowanOldStyleBT-BlackItalic', sans-serif;
      text-transform: capitalize;
      color: $color-red;
    }

    .product {
      display: flex;
      .product-item-circle {
        vertical-align: middle;
        display: flex;
        justify-content: center;
        position: relative;
        width: 125px;
        height: 125px;
        border-radius: 50%;
        text-align: center;
        background: $color-white;
        border: 10px solid $color-white;
        box-sizing: border-box;
        margin: auto;
        .foods-icon {
          width: 80px;
        }
        .product-quantity {
          position: absolute;
          right: 0px;
          top: 10px;
          display: inline-block;
          background-color: $color-red;
          color: $color-white;
          text-align: center;
          border-radius: 50%;
          font-size: (2.6em / 2);
          font-family: 'Karla-Bold';
          width: (55px /2);
          height: (55px /2);
          line-height: (55px / 2);

        }
      }

      .product-item-circle.type {
        background: url('/static/img/product-brut.png') center center no-repeat $color-white;
      }

      .product-item-circle.type-prepare {
        background: url('/static/img/product-prepare.png') center center no-repeat $color-white;
      }

      .product-name {
        text-transform: capitalize;
        font-style: italic;
        color: $color-red;
        font-size: (3.6em / 2);
        font-family: 'IowanOldStyleBT-BlackItalic';
        font-weight: 700;
        margin: (20px / 2) auto;
        text-align: center;
      }
    }

.title-section {
    text-transform: uppercase;
}

.steps-summary {
  background-color: $color-white;
  font-size: (2.6em / 2);
  font-family: 'Karla-Italic';
  margin-top: 280px;
}

.steps-summary-separator {
  width: 56px;
  height: 5px;
  margin: 8px auto;
  transform: scale(0.5);
  background: url('/static/img/separator-red.png') center left no-repeat;
}

.alliance-form-vote-select {
  margin: 20px 0 15px;
  width: 170px;
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

.alliance-action-button {
  display: inline-block;
  margin: 0 auto;
  width: 150px;
  padding: 18px 0;
  border-radius: 25px;
  background-color: $color-beige;
  font: 1.3em 'Karla-Bold', sans-serif;
  color: $color-text;
  text-transform: uppercase;
  text-align: center;
}

.alliance-icon {
  width: 40px;
  height: 40px ;
  margin: 5px 15px 0px;
  fill: $color-red;
}

.steps-summary {
    text-align: center;
    color: $color-text;
    font-family: 'Karla-Italic';
    padding-bottom: 20px;
}

.step {
    text-align: center;
    margin: 30px auto;
    width: 75%;
    padding-bottom: 15px;
    border: 0px;
}

  .step.my-side {
    background: url('/static/img/rectangle-green.png') no-repeat center;
    background-size: 100% 100%;
  }
  .step.user-side {
    background: url('/static/img/rectangle-red.png') no-repeat center;
    background-size: 100% 100%;
  }
    .step.user-side svg {fill: $color-green;}
  .step.final-step {
    border: 0px;
    background: url('/static/img/rectangle-beige.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
    .step.final-step svg {fill: $color-green;}


.date-hours {
  background-color: $color-green;
  height: (80px / 2);
  border-radius: (80px / 4);
  text-transform: uppercase;
  color: $color-white;
  font-family: 'Karla-Bold';
  font-size: (2.6 / 2);
  box-sizing: border-box;
  line-height: (80px / 2);
  width: 60%;
  min-width: 115px;
  margin: auto;
}

.user-address {
  margin-top: 40px;
}

.user-address-details {
  margin-top: 10px;
  font-family: 'Karla-BoldItalic';
  font-size: (3.6em / 2);
  line-height: 1.4em;
}

.multiple-dates {
  text-align: center;
  line-height: (80px / 2);
    .filter {
      display: none;
      &:first-child {
        + label {

        }
      }
      &:checked {
        + label .date-hours {
          background-color: white;
          border: 2px solid $color-green;
          color: $color-green
        }
      }
    }
}

legend {
  text-align: center;
}


</style>
