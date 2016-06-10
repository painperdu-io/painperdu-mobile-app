<template>
  <div class="product-container">
    <div class="product-wrapper">
      <div class="product" :class="{ 'inactive': !product.available }">
        <div class="product-item-circle {{ product.type }}">
          <svg viewBox="0 0 100 100" class="foods-icon">
            <use xlink:href="#foods-icon-{{ product.icon }}"></use>
          </svg>
          <svg class="product-quantity-circle" viewPort="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle class="product-quantity-circle-quantity" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
          </svg>
          <div class="product-item-quantity">{{ form.quantity }}</div>
          <input id="product-item-count" number value="1" v-model="form.quantity" hidden>
        </div>
        <div class="controls-quantity">
          <button class="btn btn-more" v-on:click="increment">+</button>
          <button class="btn btn-less" v-on:click="decrement">-</button>
        </div>
        <div class="product-name">{{ product.name }}</div>
        <div class="product-infos-separator"></div>

      </div>
    </div>
    <div class="product-infos">
      <div class="product-status">
        <div class="value">
          <svg viewBox="0 0 100 100" class="check-icon">
            <use xlink:href="#app-icon-check"></use>
          </svg>
        </div>
        <p v-if="product.available" class="legend">Disponible</p>
        <p v-else class="legend">Non disponible</p>
      </div>
      <div class="product-quantity">
        <span class="value">{{ product.quantity }}</span>
        <p class="legend">Quantité</p>
      </div>
      <div class="product-dlc">
        <span class="value">2j</span>
        <p class="legend">Périme dans</p>
      </div>
    </div>
    <div class="product-description">{{ product.description }}</div>

    <fieldset class="member-profile-statistics-wrapper">
      <legend class="member-profile-wrapper" v-link="{ name: 'MemberProfile', params: { id: product.author._id }}">
        <div class="member-profile-item-allie">
          <svg viewBox="0 0 100 100" class="profile-icon ">
            <use xlink:href="#app-icon-infinite"></use>
          </svg>
        </div>
        <div class="member-profile-img"><img :src="product.author.picture"/></div>
        <div class="member-profile-text">
          <h2 class="member-profile-name">{{ product.author.name.first }}</h2>
          <p class="member-profile-status">{{ statusName }}</p>
        </div>
      </legend>
      <div class="member-profile-statistics">
        <div class="member-profile-statistics-item">
          <p class="legend">Nombre d'échanges</p>
          <p class="value">8</p>
          <span class="underline"></span>
        </div>
        <div class="member-profile-statistics-item membre-{{membre-status}}">
          <p class="legend">Avis moyen</p>
          <p class="value">Parfait</p>
          <span class="underline"></span>
        </div>
      </div>
    </fieldset>

    <div class="ask-product-wrapper">
      <div class="ask-product-text">
        <input type="checkbox" id="later" class="later" value="false" v-model="laterHours">
        <label for="later" >
          Je ne suis pas disponible maintenant. <br>
          Je veux récupérer ma demande plus tard.
        </label>
      </div>
      <div v-if="laterHours">
        <div class="add-rdv-form-item">
          <input id="date"  class="add-rdv-form-item-input" type="date" v-model="date">
          <label for="date" class="add-rdv-form-item-label">Date</label>
        </div>
        <div class="add-rdv-form-item">
          <input for="heure-debut" class="add-rdv-form-item-input" type="time" v-model="heureDebut">
          <label id="heure-debut" class="add-rdv-form-item-label">Créneau horaire</label>
          <input for="heure-fin" class="add-rdv-form-item-input" type="time" v-model="heureFin">
          <label for="heure-fin" class="add-rdv-form-item-label">Créneau horaire</label>
        </div>

      </div>
      <div class="ask-product-button" v-on:click="callAddApi">Demander</div>
    </div>
  </div>
  <validation destination="Alliances" add="AskProduct"></validation>
</template>

<script>
import Validation from './../commons/popup/Validation'

export default {
  components : {
    Validation,
  },
  computed: {
    statusName() {
      const status = [
        { score: 10, name: 'Artisan' },
        { score: 20, name: 'Soldat' },
        { score: 30, name: 'Menestrel' },
        { score: 40, name: 'Écuyer' },
        { score: 50, name: 'Chevalier' },
        { score: 60, name: 'Seigneur' },
      ];

      for (let i = 0; i < status.length; i++) {
        if (3 < status[i].score) {
          return status[i].name;
        }
      }
    },
  },
  methods: {
    increment(event) {
      if (this.form.quantity < this.product.quantity) {
        this.form.quantity++;
        this.updateProductCircle();
      }
    },
    decrement(event) {
      if (this.form.quantity > 1) {
        this.form.quantity--;
        this.updateProductCircle();
      }
    },
    updateProductCircle() {
      let value = ((this.form.quantity * 100) / this.product.quantity);
      if (value < 0) { value = 0; }
      if (value > 100) { value = 100; }

      const pct = ((100 - value) / 100) * (Math.PI * (90 * 2));
      document.getElementsByClassName('product-quantity-circle-quantity')[0].setAttribute('stroke-dashoffset', pct);
    },
    callAddApi(event) {
      event.preventDefault();

      // enregistrer les données dans la base
      const datas = JSON.stringify({
        quantity: this.form.quantity,
        product: this.product._id,
        users: {
          giver: this.product.author._id,
          applicant: global.currentUserId,
        }
      });
      this.$http.post('alliances', datas, { emulateJSON: true })
        .then((response) =>  {
          // ouverture popup validation
          document.getElementsByClassName('validation-popup-container')[0].classList.add('active');
          document.getElementsByClassName('validation-popup-overlay')[0].classList.add('active');
        })
        .catch(err => {
          console.log(err);

          // ouverture popup error
          document.getElementsByClassName('error-popup-container')[0].classList.add('active');
          document.getElementsByClassName('error-popup-overlay')[0].classList.add('active');
        });
    }
  },
  data() {
    return {
      form: {
        quantity: 1,
      },
      product: {
        author: {
          picture: '',
          name: {
            first: '',
            last: '',
          },
        },
      },
      heureDebut : '',
      heureFin : '',
      date: '',
    }
  },
  ready() {
    const productId = this.$route.params.id;

    // récupérer un produit en fonction de son id
    this.$http({ url: `products/${productId}`, method: 'GET' })
      .then((response) => this.product = response.data)
      .catch(err => console.log(err));
  }
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.member-profile-statistics-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 0 auto 150px;
  padding-bottom: 30px;
  width: 298px;
  background: url('/static/img/rectangle-red.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border: 0;
}

  .member-profile-statistics {
    padding: 18px 0 0 0;
  }

    .member-profile-statistics-item {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      margin: 0 auto;
      width: 235px;
      height: 34px;
      text-transform: uppercase;
      font: 1.3em 'Karla-Regular', sans-serif;
      color: $color-text;

      .value {
        font: 1.2em 'Karla-Bold', sans-serif;
        color: $color-green;
        z-index: 1;
      }

      & > p {
        display: inline-block;
        z-index: 1;
      }
    }

    .underline {
      position: absolute;
      left: 0;
      bottom: 10px;
      height: 6px;
      width: 100%;
      background-color: $color-white;
      z-index: 0;
    }

    .product-wrapper {
      position: relative;
      text-align: center;
    }
    .product {
      display: inline-block;;
      margin: (45px / 2) (25px/2) 0  (25px/2);
      .product-item-circle {
        position: relative;
        background-color: white;
        border-radius: 50%;
        width: (230px / 2);
        height: (230px / 2);
        text-align: center;
        border: 12px solid $color-white;
        box-sizing: border-box;
        z-index: 10;
        .foods-icon {
          transform: scale(0.8);
        }
      }
      .product-item-circle.raw {
        background: url('/static/img/product-raw.png') center center no-repeat $color-white;
      }

      .product-item-circle.homemade {
        background: url('/static/img/product-homemade.png') center center no-repeat $color-white;
      }

      .product-item-quantity {
        position: absolute;
        right: -7px;
        top: -7px;
        width: 28px;
        height: 28px;
        font: 1.3em 'Karla-Bold', sans-serif;
        line-height: 28px;
        text-align: center;
        color: $color-white;
        background: $color-red;
        border-radius: 50%;
        animation-name: shake-item;
        animation-iteration-count: 3;
        animation-direction: alternate;
        animation-delay: 2s;
      }


      .product-name {
        text-transform: capitalize;
        font-style: italic;
        color: $color-red;
        font-size: (3.6em / 2);
        font-family: 'IowanOldStyleBT-BlackItalic';
        font-weight: 300;
        margin: (20px / 2) auto;
      }
      &.inactive {
        filter: grayscale(100%);
        .product-quantity {
          background-color: $color-inactive;
        }
        .product-status {
          opacity: 0.5;
        }
      }
    }

    .product-infos {
      display: flex;
      flex: 1 100%;
      flex-flow: row;
      color: $color-text;
    }

    .check-icon {
      fill: $color-white;
      width: (40px /2);
      height: (40px /2);
      vertical-align: middle;
    }

    .product-quantity,
    .product-status,
    .product-dlc {
      flex: 1;
      flex-flow: column;
      text-align: center;
    }

    .product-infos .value {
      display: inline-block;
      background-color: $color-green;
      color: $color-white;
      text-align: center;
      border-radius: 50%;
      font-size: (2.6em / 2);
      font-family: 'Karla-Bold';
      width: (70px /2);
      height: (70px /2);
      line-height: (70px / 2);
    }

    .product-infos .legend {
      font-size: 1.2em;
      font-family: 'Karla-Regular';
    }

    .product-description {
      color: $color-text;
      font-size: 1.3em;
      font-family: 'Karla-Italic';
      margin: 20px auto;
      width: 298px;
      text-align: center;
    }

    .ask-product-wrapper {
      background-color: $color-green;
      padding: 20px 0;
      position: fixed;
      bottom: 0px;
      width: 100%;
      z-index: 2;
    }

    .ask-product-text {
      color: $color-white;
      padding-left: 20px;
      width: 70%;
      margin: 0 auto 20px;
      font-size: 1.3em;
      font-family: 'Karla-Bold';
      font-weight: 700;
      position: relative;
    }

    .ask-product-wrapper input[type="checkbox"] {
      display: none;
      + label:before {
        content: "";
        display: inline-block;
        width: 17px;
        height: 17px;
        border: 1px solid $color-white;
        border-radius: 50%;
        position: absolute;
        top: 0px;
        left: -5px;
        margin: 3px 0 0 0;
      }
      &:checked + label:after {
        content: "";
        display: inline-block;
        width: 12px;
        height: 12px;
        background-color: $color-red;
        border-radius: 50%;
        position: absolute;
        top: 3px;
        left: -2px;
        margin: 3px 0 0 0;
      }
    }

    .ask-product-button {
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

    .product-infos-separator {
      width: 56px;
      height: 5px;
      margin: 0 auto 30px;
      transform: scale(0.5);
      background: url('/static/img/separator-green.png') center center no-repeat;
    }


  .controls-quantity {
    position: absolute;
    top: 40%;
    left: 50%;
    background-color: $color-gray-lite;
    width: 60%;
    transform: translate3d(-50%,-50%,0);
    padding: 5px 10px;
    border-radius: 20px;
    z-index: 0;
  }

  .controls-quantity .btn {
    color: $color-green;
    border-radius: 50%;
    border: 2px solid $color-green;
    font-size: 2em;
    width: 28px;
    height: 28px;
    line-height: 20px;
    padding: 0;
    background-color: $color-gray-lite;
  }

  .controls-quantity .btn-less { float: left; }
  .controls-quantity .btn-more { float: right; }

  @keyframes float {
    0%   { transform: translate3d(0,0,0); }
    100% { transform: translate3d(0,10%,0); }
  }

  .member-profile-wrapper {
    width: 100%;
    position: relative;
    animation: float 1s infinite alternate;
    text-align: center;
  }

  .member-profile-img {
    display: inline-block;
    width: 75px;
    height: 100px;
    clip-path: polygon(0% 0%, 100% 0, 100% 70%, 50% 100%, 0 70%);
    -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 70%, 50% 100%, 0 70%);
    background-color: $color-gray;
    overflow: hidden;
    img {
      height: 100%;
      transform: translate3d(-10%,0 ,0);
    }
  }

  .member-profile-text {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    width: 110px;
    background-color: $color-white;
    padding: 5px 0;
  }

  .member-profile-name {
    font-size: 1.3em;
    font-family: 'IowanOldStyleBT-BlackItalic';
    color: $color-red;
    margin: 2px 0;
    font-weight: 300;
    text-transform: capitalize;
  }

  .member-profile-status {
    color: $color-text;
    margin: 2px 0;
  }

  .member-profile-item-allie {
    position: absolute;
    right: 35%;
    top: -10px;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    fill: $color-white;
    background: $color-green;
    border-radius: 50%;
    z-index: 3;
  }

  .add-rdv-form-item {
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
    position: relative;
    min-height: 45px;
  }

    .add-rdv-form-item-label {
      position: absolute;
      top: 0;
      margin-bottom: 10px;
      font: 1.2em 'Karla-Italic', sans-serif;
      color: $color-text;
    }

    .add-rdv-form-item-input {
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

  .product-quantity-circle {
    width: 200px;
    height: 200px;
    transition: stroke-dashoffset 1s ease;
    stroke-width: 4px;

    circle {
      stroke: $color-red;
    }
  }
</style>
