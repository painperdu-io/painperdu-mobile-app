<template transition="popIn">
  <div class="foodkeeper-add-popup-container">
    <h3 class="foodkeeper-add-popup-title">Ajoutez un compère</h3>
    <div class="popup-title-separator"></div>
    <div class="foodkeeper-add-popup-item-wrapper">
      <div class="foodkeeper-add-popup-item">
        <div class="foodkeeper-add-accomplice-text">
          <p>Associez vos partenaires de vie <span class="underline"></span></p><br/>
          <p>à ce garde-manger pour qu'ils se rallient <span class="underline"></span></p><br/>
          <p>eux aussi à la quête du Pain Perdu <span class="underline"></span></p>
        </div>
      </div>
      <div class="foodkeeper-add-popup-item">
        <div class="foodkeeper-add-accomplice-mail">
          <input v-model="form.email" type="email" placeholder="Indiquer l'adresse mail" />
        </div>
      </div>
    </div>
    <div v-on:click="callAddApi" class="foodkeeper-add-accomplice-button">Ajouter</div>
  </div>
</template>

<script>
export default {
  methods: {
    closeAddAccomplice(event) {
      document.getElementsByClassName('popup-container')[0].classList.remove('active');
      document.getElementsByClassName('popup-overlay')[0].classList.remove('active');
      event.preventDefault()
    },
    callAddApi(event) {
      console.log('CALL ADD API');

      if (!this.form.email) { console.log('MAIL VIDE !!!'); }

      console.log(this.form);
    }
  },
  data() {
    return {
      form: {
        email: '',
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

.popup-title-separator {
  width: 56px;
  height: 5px;
  margin: 0 auto;
  transform: scale(0.5);
  background: url('/static/img/separator-green.png') center center no-repeat;
}

.foodkeeper-add-popup-container {
  width: 100%;
}

  .foodkeeper-add-popup-title {
    margin-top: 30px;
    font: 1.8em 'IowanOldStyleBT-BlackItalic', sans-serif;
    color: $color-red;
  }

  .foodkeeper-add-popup-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

    .foodkeeper-add-popup-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .foodkeeper-add-accomplice-text p {
      display: inline;
      position: relative;
      margin: 0;
      font: 1.5em 'Karla-Italic', sans-serif;
      color: $color-text;
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

    .foodkeeper-add-accomplice-mail {
      margin: 25px auto;
      width: 260px;

      input {
        width: 100%;
        height: 40px;
        padding: 0 20px;
        box-sizing: border-box;
        border-radius: 20px;
        border: none;
        background-color: $color-green-lite;
        color: $color-white;
        font: 1.4em 'Karla-Italic', sans-serif;
      }

      ::-webkit-input-placeholder {
        color: $color-white;
      }
    }

  .foodkeeper-add-accomplice-button {
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

</style>
