<template transition="popIn">
  <div class="add-photo-popup-container">
    <h3 class="add-photo-popup-title">Ajouter une photo</h3>
    <div class="popup-title-separator"></div>
      <div class="add-photo-popup-item-wrapper">
        <div class="add-photo-popup-item">
          <div class="add-photo-camera" v-on:click="addPictureByPhoto">Prendre<br />une photo</div>
        </div>
        <div class="add-photo-popup-item">
          <div class="add-photo-gallery" v-on:click="addPictureByLibrary">Accéder à la<br />bibliothèque</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    addPictureByLibrary(event) {
      event.preventDefault();

      // image récupérée
      const success = function(imageURI) {
        const el = document.getElementsByClassName('foodkeeper-add-image')[0];
        const img = 'data:image/jpeg;base64,' + imageURI;
        el.style.backgroundImage = 'url(' + img + ')';
      }

      // erreur
      const fail = function() {
        console.log('Error: Add photo by library');
      }

      // récupérer l'image à partir d'une source définie
      navigator.camera.getPicture(success, fail, {
        quality: 80,
        destinationType: navigator.camera.DestinationType.DATA_URL,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
      });

      // fermer la popup
      document.getElementsByClassName('popup-container')[0].classList.remove('active');
      document.getElementsByClassName('popup-overlay')[0].classList.remove('active');
    },
    addPictureByPhoto(event) {
      event.preventDefault();

      // image récupérée
      const success = function(imageURI) {
        const el = document.getElementsByClassName('foodkeeper-add-image')[0];
        const img = 'data:image/jpeg;base64,' + imageURI;
        el.style.backgroundImage = 'url(' + img + ')';
      }

      // erreur
      const fail = function() {
        console.log('Error: Add photo by library');
      }

      // récupérer l'image à partir d'une source définie
      navigator.camera.getPicture(success, fail, {
        quality: 80,
        destinationType: navigator.camera.DestinationType.DATA_URL,
        sourceType: navigator.camera.PictureSourceType.CAMERA
      });

      // fermer la popup
      document.getElementsByClassName('popup-container')[0].classList.remove('active');
      document.getElementsByClassName('popup-overlay')[0].classList.remove('active');
    },
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

.add-photo-popup-container {
  width: 100%;
}

  .add-photo-popup-title {
    margin-top: 30px;
    font: 1.8em 'IowanOldStyleBT-BlackItalic', sans-serif;
    color: $color-red;
  }

  .add-photo-popup-item-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
  }

    .add-photo-popup-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .add-photo-accomplice-text p {
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

    .add-photo-gallery,
    .add-photo-camera {
      margin: 25px auto 0;
      width: 150px;
      height: 50px;
      padding: 12px 20px;
      box-sizing: border-box;
      border-radius: 50px;
      border: none;
      background-color: $color-green-lite;
      color: $color-white;
      font: 1.1em 'Karla-Bold', sans-serif;
      text-transform: uppercase;
    }
</style>
