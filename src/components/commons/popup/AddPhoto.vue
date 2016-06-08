<template transition="popIn">
  <div class="add-photo-popup-container">
    <h3 class="add-photo-popup-title">Ajouter une photo</h3>
    <div class="popup-title-separator"></div>
      <div class="add-photo-popup-item-wrapper">
        <div class="add-photo-popup-item">
          <div class="add-photo-camera">
            Prendre <br />une photo
          </div>
        </div>
        <div class="add-photo-popup-item">
          <div class="add-photo-gallery">
            Accéder à la  <br />bibliothèque
          </div>
        </div>
      </div>
      <div class="add-photo-popup-item">
        <div id="add-photo-preview-wrapper"></div>
      </div>
    <div class="add-photo-accomplice-button">Ajouter</div>
  </div>
</template>

<script>
export default {
  methods: {
    closeAddAccomplice(event) {
      document.getElementsByClassName('popup-container')[0].classList.remove('active');
      document.getElementsByClassName('popup-overlay')[0].classList.remove('active');
      event.preventDefault()
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

    #add-photo-preview-wrapper {
      width: 305px;
      height: 95px;
      margin: 20px auto 15px;
      box-shadow: 0px 0px 5px $color-gray;
    }

  .add-photo-accomplice-button {
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
