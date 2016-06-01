<template>
  <div class="foodkeeper-add-popup-container">
    <div class="foodkeeper-add-popup-close" v-on:click="closefoodkeeper-add"></div>
    <h3 class="foodkeeper-add-popup-title">Ajoutez un compère ?</h3>
    <div class="foodkeeper-add-popup-item-wrapper">
      <div class="foodkeeper-add-accomplice-container">
        <div class="foodkeeper-add-accomplice-mail">
          <input type="email" placeholder="Indiquer l'adresse mail" />
        </div>
        <div class="foodkeeper-add-accomplice-button">Ajouter</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.foodkeeper-add-accomplice-container {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  position: relative;
  height: calc(100vh - 80px);
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
</style>
