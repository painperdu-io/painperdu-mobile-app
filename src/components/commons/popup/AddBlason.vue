<template transition="popIn">
  <div class="add-photo-popup-container">
    <h3 class="add-photo-popup-title">Personnaliser votre blason</h3>
    <div class="popup-title-separator"></div>
      <div class="add-photo-popup-item-wrapper">
        <div class="add-photo-popup-item">
          <div class="blason {{shape}} {{color}}"></div>
        </div>
        <div class="add-photo-popup-item">
          <p>Sélectionnez votre forme<span class="underline"></span></p>
          <div class="add-photo-forms">
            <input id="blason-1" class="form" type="radio" value="blason-1" v-model="shape">
            <label class="blason-1"  for="blason-1" ><img src="./../../../../static/img/shape-1.png" /></label>
            <input id="blason-2" class="form" type="radio" value="blason-2" v-model="shape">
            <label class="blason-2"  for="blason-2"><img src="./../../../../static/img/shape-2.png" /></label>
            <input id="blason-3" class="form" type="radio" value="blason-3" v-model="shape">
            <label class="blason-3"  for="blason-3" ><img src="./../../../../static/img/shape-3.png" /></label>
            <input id="blason-4" class="form" type="radio" value="blason-4" v-model="shape">
            <label class="blason-4"  for="blason-4" ><img src="./../../../../static/img/shape-4.png" /></label>
          </div>
        </div>
        <div class="add-photo-popup-item">
          <p>Choisissez votre illustration<span class="underline"></span></p>
          <div class="add-photo-illustrations">
            <input id="home" class="illustration" type="radio" value="home" v-model="illustration">
            <label class="home"  for="home" ><img src="./../../../../static/img/illustration-1.png" /></label>
            <input id="school" class="illustration" type="radio" value="school" v-model="illustration">
            <label class="school"  for="school"><img src="./../../../../static/img/illustration-2.png" /></label>
            <input id="job" class="illustration" type="radio" value="job" v-model="illustration">
            <label class="job"  for="job" ><img src="./../../../../static/img/illustration-3.png" /></label>
          </div>
        </div>
        <div class="add-photo-popup-item">
          <p>Choisissez votre couleur<span class="underline"></span></p>
          <div class="add-photo-colors">
            <input id="green" class="color" type="radio" value="color-1" v-model="color">
            <label class="green"  for="green" ></label>
            <input id="red" class="color" type="radio" value="color-2" v-model="color">
            <label class="red"  for="red"></label>
            <input id="beige" class="color" type="radio" value="color-3" v-model="color">
            <label class="beige"  for="beige" ></label>
            <input id="gray" class="color" type="radio" value="color-4" v-model="color">
            <label class="gray"  for="gray"></label>
            <input id="none" class="color" type="radio" value="color-5" v-model="color">
            <label class="none"  for="none"></label>
          </div>
        </div>
      </div>
    <div class="add-blason-button">Valider</div>
  </div>
</template>

<script>
export default {};
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
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

    .add-photo-popup-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .blason {
      position: relative;
      &.blason-1 {
        mask-image: url('/static/img/blason-1.png');
        -webkit-mask-image: url('/static/img/blason-1.png');
      }
      &.blason-2 {
        mask-image: url('/static/img/blason-2.png');
        -webkit-mask-image: url('/static/img/blason-2.png');
      }
      &.blason-3 {
        mask-image: url('/static/img/blason-3.png');
        -webkit-mask-image: url('/static/img/blason-3.png');
      }
      &.blason-4 {
        mask-image: url('/static/img/blason-4.png');
        -webkit-mask-image: url('/static/img/blason-4.png');
      }

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.2;
        left: 0;
        top: 0;
      }

      &.color-1 {
        &:after { background-color: $color-green; }

      }
      &.color-2 {
        &:after { background-color: $color-red; }
      }
      &.color-3 {
        &:after { background-color: $color-beige; }
      }
      &.color-4 {
        &:after { background-color: $color-gray }
      }
      &.color-5 {
        &:after{ background-color: #transparent;}
      }
    }

    p {
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

  .add-blason-button {
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

  input[type="radio"] {
    display: none;
    + label {
      display: inline-block;
      margin: 20px 10px;
    }
    &:checked {
      + label {
        transform: scale3d(1.2,1.2,1.2);
      }
    }
  }

  .form {
    + label {
      width: 43px;
      height: 63px;

      img {
        height: 100%;
      }
    }
  }

  .illustration {
    + label {
      display: inline-block;
      width: 40px;
      height: 40px;
      img {
        height: 46px;
      }
    }
  }

  .color {
    + label {
      display: inline-block;
      width: 25px;
      height: 25px;
      border-radius: 20px;
      font: 1.15em 'Karla-Bold', sans-serif;
      color: $color-text;
      text-transform: uppercase;
    }

  }

  label {
    &.red { background-color: $color-red; }
    &.green { background-color: $color-green; }
    &.gray { background-color: $color-gray; }
    &.beige { background-color: $color-beige; }
    &.none { border: 1px solid $color-gray; }
  }

  .blason {
    margin: 15px;
    width: 100px;
    height: 115px;
    background-color: $color-gray;
    mask-image: url('/static/img/blason-1.png');
    -webkit-mask-image: url('/static/img/blason-1.png');
    mask-size: 100% 100%;
    -webkit-mask-size: 100% 100%;
  }

</style>
