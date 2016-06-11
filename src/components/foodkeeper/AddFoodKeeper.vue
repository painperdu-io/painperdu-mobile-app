<template>
  <div class="foodkeeper-add-container animated" transition="slide" transition-mode="in-out">
    <div class="foodkeeper-add-image-wrapper" v-on:click="addPhoto">
      <div class="foodkeeper-add-image"></div>
      <div class="foodkeeper-add-image-icon">+</div>
    </div>
    <div class="foodkeeper-add-form-wrapper">
      <div class="foodkeeper-add-form-itemgreen">
        <input name="form-name" v-model="form.name" placeholder="Nom du garde manger" />
      </div>
      <div class="foodkeeper-add-form-itemgreen">
        <input name="form-description" v-model="form.description" placeholder="Description du garde manger" />
      </div>
      <h3 class="foodkeeper-add-form-title">Renseigner l'adresse du garde manger</h3>
      <div class="foodkeeper-add-form-item">
        <input id="address1" name="form-street" v-model="form.location.street" class="foodkeeper-add-form-item-input" type="text" placeholder="Rue, route, impasse"></input>
        <label class="foodkeeper-add-form-item-label" for="address1">Rue, route, impasse</label>
      </div>
      <div class="foodkeeper-add-form-inline-wrapper">
        <div class="foodkeeper-add-form-item">
          <input id="number" v-model="form.location.number" class="foodkeeper-add-form-item-input" type="text" placeholder="Numéro"></input>
          <label class="foodkeeper-add-form-item-label" for="number">Numéro</label>
        </div>
        <div class="foodkeeper-add-form-item">
          <input id="apartment" v-model="form.location.apartment" class="foodkeeper-add-form-item-input" type="text" placeholder="Appart."></input>
          <label class="foodkeeper-add-form-item-label" for="apartment">Appartement</label>
        </div>
        <div class="foodkeeper-add-form-item">
          <input id="floor" v-model="form.location.floor" class="foodkeeper-add-form-item-input" type="text" placeholder="Étage"></input>
          <label class="foodkeeper-add-form-item-label" for="floor">Étage</label>
        </div>
      </div>
      <div class="foodkeeper-add-form-inline-wrapper">
        <div class="foodkeeper-add-form-item">
          <input id="code-postal" name="form-zipcode" v-model="form.location.zipcode" class="foodkeeper-add-form-item-input" type="text" placeholder="Code postal"></input>
          <label class="foodkeeper-add-form-item-label" for="infos">Code postal</label>
        </div>
        <div class="foodkeeper-add-form-item foodkeeper-add-form-item-city">
          <input id="ville" name="form-city" v-model="form.location.city" class="foodkeeper-add-form-item-input" type="text" placeholder="Ville"></input>
          <label class="foodkeeper-add-form-item-label" for="infos">Ville</label>
        </div>
      </div>
      <div class="foodkeeper-add-form-item">
        <label class="foodkeeper-add-form-item-label" for="address2">Complément d'adresse</label>
        <input id="address2" v-model="form.location.additional" class="foodkeeper-add-form-item-input" type="text" placeholder="Complément d'adresse"></input>
      </div>
      <div class="foodkeeper-add-form-item">
        <input id="infos" v-model="form.location.infos" class="foodkeeper-add-form-item-input" type="text" placeholder="Informations complémentaires"></input>
        <label class="foodkeeper-add-form-item-label" for="infos">Informations complémentaires</label>
      </div>
      <div class="foodkeeper-add-form-btn" v-on:click="callAddApi">Ajouter</div>
    </div>
  </div>

  <validation destination="Foodkeeper" add="FoodKeeper"></validation>
</template>

<script>
import Validation from './../commons/popup/Validation'

export default {
  components : {
    Validation,
  },
  methods: {
    addPhoto(event) {
      document.getElementsByClassName('popup-container')[0].classList.add('active');
      document.getElementsByClassName('popup-overlay')[0].classList.add('active');
      event.preventDefault()
    },
    callAddApi(event) {
      event.preventDefault();

      // vérification des champs
      if (!this.form.name) {
        document.getElementsByName('form-name')[0].classList.add('error');
      }
      if (!this.form.location.street) {
        document.getElementsByName('form-street')[0].classList.add('error');
      }
      if (!this.form.location.city) {
        document.getElementsByName('form-city')[0].classList.add('error');
      }
      if (!this.form.location.zipcode) {
        document.getElementsByName('form-zipcode')[0].classList.add('error');
      }

      // si tout les champs sont remplis, on enregistre les données
      if (this.form.name &&
          this.form.location.street &&
          this.form.location.city &&
          this.form.location.zipcode) {
        // enregistrer les données dans la base
        this.form.userId = global.currentUserId
        const formDatas = JSON.stringify(this.form);

        this.$http.post('foodkeepers', formDatas, { emulateJSON: true })
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
      form: {
        name: '',
        description: '',
        picture: '',
        location: {
          street: '',
          number: '',
          apartment: '',
          floor: '',
          additional: '',
          infos: '',
          city: '',
          zicode: ''
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.foodkeeper-add-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

  .foodkeeper-add-image-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 130px;
    background: $color-white;
    font: 3em 'Karla-Regular', sans-serif;
    text-align: center;
    color: $color-red;
    overflow: hidden;
  }

    .foodkeeper-add-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }

    .foodkeeper-add-image-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }

  .foodkeeper-add-form-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 35px;
  }

    .foodkeeper-add-form-inline-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 260px;

      & > .foodkeeper-add-form-item {
        width: 80px;
      }
      & > .foodkeeper-add-form-item-city {
        width: 170px;
      }
    }

    .foodkeeper-add-form-title {
      font: 1.3em 'Karla-Bold', sans-serif;
      color: #7b7b7b;
      text-transform: uppercase;
    }

    .foodkeeper-add-form-itemgreen {
      position: relative;
      margin: 0px auto 15px;
      width: 260px;

      input {
        padding: 0 55px 0 25px;
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 20px;
        box-sizing: border-box;
        font: 1.5em 'Karla-Italic', sans-serif;
        color: $color-white;
        background: $color-green-lite;

        &.error {
          background: $color-stats-red2;
        }
      }

      ::-webkit-input-placeholder {
        color: $color-white;
      }
    }

      .foodkeeper-add-form-itemgreen-icon {
        position: absolute;
        margin-top: 5px;
        width: 30px;
        height: 30px;
        fill: $color-white;
        right: 20px;
      }

    .foodkeeper-add-form-item {
      display: flex;
      flex-direction: column;
      width: 260px;
      padding: 10px 0 20px;
      margin-bottom: 5px;
    }

      .foodkeeper-add-form-item-label {
        margin-bottom: 10px;
        font: 1.2em 'Karla-Italic', sans-serif;
        color: $color-text;

        &:hover {
          color: $color-green;
        }
      }

      .foodkeeper-add-form-item-input {
        margin-top: -5px;
        padding-bottom: 5px;
        font: 1.3em 'Karla-Regular', sans-serif;
        border: none;
        border-bottom: 1px solid $color-gray;
        color: $color-text;
        background: transparent;

        &:hover {
          font: 1.3em 'Karla-Bold', sans-serif;
          border-bottom: 2px solid $color-green;
        }

        &::-webkit-input-placeholder {
          color: $color-gray;
        }
      }

    .foodkeeper-add-form-btn {
      margin: 20px auto 30px;
      width: 150px;
      padding: 18px 0;
      border-radius: 25px;
      background-color: $color-beige;
      font: 1.3em 'Karla-Bold', sans-serif;
      color: $color-text;
      text-transform: uppercase;
      text-align: center;
    }

    .foodkeeper-add-form-item {
      display: flex;
      flex-direction: column;
      position: relative;
    }

      .foodkeeper-add-form-item-label {
        position: absolute;
        top: 0;
        margin-bottom: 10px;
        font: 1.2em 'Karla-Italic', sans-serif;
        color: $color-text;
      }

      .foodkeeper-add-form-item-input {
        margin-top: -5px;
        padding-top: 15px;
        padding-bottom: 5px;
        font: 1.3em 'Karla-Regular', sans-serif;
        border: none;
        border-bottom: 1px solid $color-gray;
        color: $color-text;

        &:hover, &:focus {
          font: 1.3em 'Karla-Bold', sans-serif;
          border-bottom: 2px solid $color-green;
          + label {
            color: $color-green;
          }
        }

        &.error {
          font: 1.3em 'Karla-Bold', sans-serif;
          border-bottom: 2px solid $color-red;
          + label {
            color: $color-red;
          }
        }
      }
</style>
