<template>
  <div class="foodkeeper-add-product-container animated" transition="slide" transition-mode="in-out">
    <div class="foodkeeper-add-product-form1-wrapper">
      <div class="foodkeeper-add-product-form1-add-icon">
        <div class="controls-quantity animated fadeIn">
          <button class="btn btn-more" v-on:click="increment">+</button>
          <button class="btn btn-less" v-on:click="decrement">-</button>
        </div>
        <div class="foodkeeper-add-product-form1-add-icon-bg" v-on:click="addPicto">
          <div class="product-item-icon-container">
            <svg viewBox="0 0 100 100" class="product-item-icon animated pulse">
              <use id="product-item-icon-svguse" xlink:href=""></use>
            </svg>
          </div>
          <span class="foodkeeper-add-product-form1-add-icon-text">+</span>
          <input id="product-item-count" value="1" v-model="form.quantity" number hidden>
          <div>
            <svg class="product-quantity-circle" viewPort="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle class="product-quantity-circle-base" r="55" cx="45" cy="45" fill="transparent" stroke-width="6" stroke-dasharray="345.575" stroke-dashoffset="0"></circle>
              <circle class="product-quantity-circle-quantity" r="55" cx="45" cy="45" fill="transparent" stroke-width="6" stroke-dasharray="345.575" stroke-dashoffset="276.46"></circle>
              <g class="product-rotate">
                <circle class="product-quantity-bubble" r="14" cx="45" cy="-10" stroke-width="0"></span></circle>
                <text class="product-quantity-text" x="45" y="-6">{{ form.quantity }}</text>
              </g>
            </svg>
            <div class="product-rotate product-item-quantity">{{ form.quantity }}</div>
          </div>
          <div class="product-item-quantity">{{ form.quantity }}</div>
        </div>
      </div>

      <div class="foodkeeper-add-product-form1-itemgreen">
        <input name="form-name" v-model="form.name" type="text" placeholder="Nom du produit" />
      </div>
      <div class="foodkeeper-add-product-form1-itemgreen">
        <input name="form-description" v-model="form.description" type="text" placeholder="Description du produit" />
      </div>
      <div class="foodkeeper-add-product-form1-filters">
        <input id="raw" class="filter" type="radio" value="raw" v-model="form.type" checked>
        <label for="raw">Produits Bruts</label>
        <input id="homemade" class="filter" type="radio" value="homemade" v-model="form.type">
        <label for="homemade">Plats Préparés</label>
      </div>
      <div class="foodkeeper-add-product-form1-question">
        Dans quel(s) <span class="text-focus">garde(s)-manger(s)</span> associez-vous ce produit ?
      </div>
      <div class="foodkeeper-add-product-form1-foodkeepers">
        <select name="foodkeepersSelect" class="foodkeeper-add-product-form-select" id="foodkeepersSelect" v-model="form.foodkeepers" multiple>
          <template v-for="foodkeeper in foodkeepers">
            <option value="{{ foodkeeper._id }}">{{ foodkeeper.name }}</option>
          </template>
        </select>
        <label v-on:click="openSelect" class="foodkeepersSelect" for="foodkeepersSelect">
          <div class="foodkeeperLabel-wrapper" v-if="form.foodkeepers.length > 1">
            Denrée ajoutée sur :
            <template v-for="id in form.foodkeepers">
              <template v-for="foodkeeper in foodkeepers">
                <span class="foodkeeperLabel" v-if="id == foodkeeper._id">{{ foodkeeper.name }}</span>
              </template>
            </template>
          </div>
        </label>
      </div>
    </div>
    <div class="foodkeeper-add-product-form2-wrapper">
      <h3 class="foodkeeper-add-product-form2-title">À consommer sous</h3>
      <div class="foodkeeper-add-product-form2-dlc-range">
        <label class="product-dlc" for="product-dlc">{{ form.dlc }} <span v-if="form.dlc== '1' ">jour</span> <span v-else>jours</span></label>
        <input type="range" name="product-dlc" value="1" max="10" min="1" step="1" v-model="form.dlc"/>
        <div class="foodkeeper-add-product-form2-label-range">
          <p>1 jour</p>
          <p>10 jours</p>
        </div>
      </div>
      <div class="foodkeeper-add-product-form2-button" v-on:click="callAddApi">Ajouter</div>
    </div>
  </div>
  <validation destination="Market" add="Product"></validation>
  <add-picto></add-picto>
</template>

<script>
import Validation from './../commons/popup/Validation'
import AddPicto from './../commons/popup/AddPicto'

export default {
  components : {
    Validation,
    AddPicto,
  },
  methods: {
    increment(event) {
      if (this.form.quantity < 10) {
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
      let value = ((this.form.quantity * 100) / 10);
      if (value < 0) { value = 0; }
      if (value > 100) { value = 100; }

      const pct = ((100 - value) / 100) * (Math.PI * (55 * 2));

      document.getElementsByClassName('product-quantity-circle-quantity')[0].setAttribute('stroke-dashoffset', pct);

      const rotatedeg = value * 360 / 100
      document.getElementsByClassName('product-rotate')[0].style.transform= 'rotate('+ rotatedeg +'deg)';
    },
    openSelect(event){
      document.getElementById('foodkeepersSelect').click();
    },
    addPicto(event) {
      document.getElementsByClassName('add-picto-popup-container')[0].classList.add('active');
      document.getElementsByClassName('add-picto-popup-overlay')[0].classList.add('active');
      event.preventDefault()
    },
    callAddApi(event) {
      event.preventDefault()

      // si la categorie est vide,
      // c'est peut être une complétion automatique
      if (!this.form.name) {
        this.form.name = global.setNameAddProduct;
      }

      // vérification des champs
      if (!this.form.name) {
        document.getElementsByName('form-name')[0].classList.add('error');
      }

      // si tout les champs sont remplis, on enregistre les données
      if (global.setIconAddProduct &&
          (this.form.name) &&
          this.form.foodkeepers.length) {
        // enregistrer les données dans la base
        this.form.icon = global.setIconAddProduct;
        const datas = JSON.stringify(this.form);

        this.$http.post('products', datas, { emulateJSON: true })
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
      } else {
        // ouverture popup error
        document.getElementsByClassName('error-popup-container')[0].classList.add('active');
        document.getElementsByClassName('error-popup-overlay')[0].classList.add('active');
      }
    }
  },
  data() {
    return {
      foodkeepers: [],
      form: {
        icon: '',
        name: '',
        description: '',
        type: true,
        dlc: 1,
        quantity: 1,
        foodkeepers: []
      },
    }
  },
  ready() {
    // intialiser le produit sélectionné
    global.setIconAddProduct = '';
    global.setNameAddProduct = '';

    // récupérer la liste des foodkeepers
    this.$http({ url: `users/${global.currentUserId}`, method: 'GET' })
      .then(response => {
        this.foodkeepers = response.data.foodkeepers;
        this.updateProductCircle();
      })
      .catch(err => { console.log(err); });
  }
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.foodkeeper-add-product-container {
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: column;
}

  .foodkeeper-add-product-form1-wrapper {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }

    .product-item-icon-container{
      position: relative;
      transform: scale(0.8);
    }

    .product-item-icon{
        animation-iteration-count: infinite;
    }

    .foodkeeper-add-product-form1-add-icon {
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: row;
    }

      .foodkeeper-add-product-form1-add-icon-bg {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 15px 0;
        width: 90px;
        height: 90px;
        background: $color-white;
        border-radius: 50%;
        border: 10px solid $color-white;

        &.raw {
          background: url('/static/img/product-raw.png') center center no-repeat $color-white;
        }

        &.homemade {
          background: url('/static/img/product-homemade.png') center center no-repeat $color-white;
        }
      }

      .foodkeeper-add-product-form1-add-icon-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        text-align: center;
        font: 3em 'Karla-Regular', sans-serif;
        color: $color-red;
      }

    .foodkeeper-add-product-form1-filters {
      text-align: center;
      line-height: 40px;

      input[type="radio"] {
        display: none;
      }

      .filter {
        + label {
          padding: 10px;
          height: 40px;
          border: 2px solid $color-white;
          border-radius: 50px;
          font: 1.15em 'Karla-Bold', sans-serif;
          color: $color-text;
          text-transform: uppercase;
        }

        &:first-child {
          + label {
            margin-right: 15px;
          }
        }

        &:checked {
          + label {
            background: $color-white;
          }
        }
      }
    }

    .foodkeeper-add-product-form1-foodkeepers{
      margin-bottom: 5px;
      text-align: center;
    }

    .foodkeeper-add-product-form-select {
      margin: 10px 0 10px;
      width: 262px;
      height: 40px;
      background: $color-green-lite;
      box-sizing: border-box;
      border: none;
      border-radius: 15px;
      text-align-last: left;
      text-transform: capitalize;
      font: 1em 'Karla-Bold', sans-serif;
      color: $color-white;
      padding-left: 25px;
      overflow: hidden;
      position: relative;
      -webkit-appearance: none;
      appearance: none;

      option {
        text-align: left;
        text-transform: capitalize;
        height: 40px;
        padding-top: 10px;
        font: 1.5em 'Karla-Bold', sans-serif;
        background-color: $color-green-lite;
        position: absolute;
        top: 0;
        left: 25px;
      }
    }

    .foodkeeperLabel-wrapper {
      font: 1.1em 'Karla-Italic', sans-serif;
      color: $color-text;
    }

    .foodkeeperLabel {
      display: inline-block;
      font-family: 'Karla-Bold', sans-serif;
      margin: 0 2px;
    }

    .foodkeeper-add-product-form1-itemgreen {
      position: relative;
      margin: 0px auto 15px;
      width: 260px;

      input {
        padding: 0 25px 0 25px;
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 15px;
        box-sizing: border-box;
        font: 1.5em 'Karla-Bold', sans-serif;
        color: $color-white;
        background: $color-green-lite;

        &.error {
          background: $color-stats-red2;
        }

        &.quantity {
          font: 1.5em 'Karla-Bold', sans-serif;
          text-align: center;
          padding: 0 55px 0 55px;
        }
      }

      ::-webkit-input-placeholder {
        color: $color-white;
      }
    }

  .foodkeeper-add-product-form2-wrapper {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    padding: 15px 60px 30px;
    height: 195px;
    background: $color-white;
  }

    .foodkeeper-add-product-form2-title {
      margin: 0;
      font: 1.2em 'Karla-Bold', sans-serif;
      color: $color-text;
      text-transform: uppercase;
    }

    .foodkeeper-add-product-form2-dlc-range {
      margin: 10px 0;
      text-align: center;

      input[type="range"] {
        -webkit-appearance:none;
        width: 100%;
        height: 4px;
        margin: 10px 0px 0px;
        background: $color-green-lite;
        border-radius: 4px;
      }

      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance:none;
        position:relative;
        width: 25px;
        height: 25px;
        border-radius: 100%;
        background: $color-white;
        border: 2px solid #f2f2f2;
        box-shadow: 0px 3px 10px rgba(0,0,0, 0.2);
        z-index: 3;
      }
    }

    .foodkeeper-add-product-form2-label-range {
      display: flex;
      justify-content: space-between;
      align-content: center;
      flex-direction: row;
      margin-top: -5px;
      font: 1.1em 'Karla-Italic', sans-serif;
      color: $color-text;
      p {
        margin-top: 15px;
      }
    }

    .foodkeeper-add-product-form2-button {
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

    .product-dlc {
      // background-color: $color-green;
      // color: $color-white;
      // border-radius: 50px;
      // padding: 5px 10px;
      text-align: center;
      color: $color-green;
      font: 1.6em 'Karla-BoldItalic', sans-serif;
    }

    .product-item-quantity {
      position: absolute;
      right: 2px;
      top: 2px;
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

    .controls-quantity {
      position: absolute;
      top: 155px;
      left: 50%;
      background-color: $color-gray-lite;
      width: 60%;
      transform: translate3d(-50%,-50%,0);
      padding: 5px 10px;
      border-radius: 50px;
      z-index: 0;
    }

    .controls-quantity .btn {
      color: $color-green;
      border-radius: 50%;
      border: 2px solid $color-green;
      font-size: 2em;
      width: 28px;
      height: 28px;
      line-height: 15px;
      padding: 0;
      background-color: $color-gray-lite;
    }

    .controls-quantity .btn-less { float: left; }
    .controls-quantity .btn-more { float: right; }

    .foodkeeper-add-product-form1-question {
      margin: 15px auto 0;
      font: 1.1em 'Karla-Italic', sans-serif;
      color: $color-text;
      text-align: center;
      &.text-focus, .text-focus{
        text-transform: uppercase;
        font-weight: 700;
      }
    }

    .product-quantity-circle {
      position: absolute;
      left: 0px;
      top: 0px;
      overflow: inherit;
      width: 91px;
      height: 91px;
    }

    .product-quantity-circle-quantity {
      transition: all linear 0.2s;
      transform: rotate(-90deg);
      transform-origin: center;
    }

    .product-quantity-bubble {
      fill: $color-red;
    }

    .product-quantity-text {
      position: absolute;
      text-anchor: middle;
      font-size: 1.3em;
      font-family: 'Karla-Bold', sans-serif;
      fill: $color-white;
    }

    .product-rotate{
      position: relative;
      transition: all linear 0.2s;
      transform: rotate(0deg);
      transform-origin: 45px 45px;
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
      display: none;
    }

    .product-quantity-circle {
      width: 100%;
      height: 100%;
      transition: stroke-dashoffset 1s ease;
      stroke-width: 4px;
      circle.product-quantity-circle-base {
        stroke: $color-stats-red4;
      }

      circle.product-quantity-circle-quantity {
        stroke: $color-red;
      }
    }


</style>
