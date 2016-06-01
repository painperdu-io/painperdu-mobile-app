<template transition="popIn">
  <div class="foodkeeper-add-popup-container">
    <h3 class="foodkeeper-add-popup-title">Ajoutez un compère</h3>
    <div class="foodkeeper-add-popup-item-wrapper">
      <div class="foodkeeper-add-popup-item">
        <div class="foodkeeper-add-accomplice-mail">
          <input type="email" placeholder="Indiquer l'adresse mail" />
        </div>
      </div>
    </div>
    <div class="foodkeeper-add-accomplice-button">Ajouter</div>
  </div>
</template>

<script>
export default {
  methods: {
    closeAddAccomplice: (event) => {
      document.getElementsByClassName('popup-container')[0].classList.remove('active');
      document.getElementsByClassName('popup-overlay')[0].classList.remove('active');
      event.preventDefault()
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

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
    height: 100px;
  }

    .foodkeeper-add-popup-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
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
