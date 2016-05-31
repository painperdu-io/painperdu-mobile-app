<template>
  <div class="foodkeeper-add-container">
    <div class="foodkeeper-add-image-wrapper">+</div>
    <div class="foodkeeper-add-form-wrapper">
      <div class="foodkeeper-add-form-itemgreen">
        <svg viewBox="0 0 100 100" class="foodkeeper-add-form-itemgreen-icon">
          <use xlink:href="#app-icon-star"></use>
        </svg>
        <input placeholder="Nom du garde manger" />
      </div>
      <div class="foodkeeper-add-form-itemgreen">
        <input placeholder="Description du garde manger" />
      </div>
      <h3 class="foodkeeper-add-form-title">Renseigner l'adresse du garde manger</h3>
      <div class="foodkeeper-add-form-item">
        <label class="foodkeeper-add-form-item-label" for="address1">Rue, route, impasse</label>
        <input id="address1" class="foodkeeper-add-form-item-input" type="text" placeholder="Rue, route, impasse"></input>
      </div>
      <div class="foodkeeper-add-form-inline-wrapper">
        <div class="foodkeeper-add-form-item">
          <label class="foodkeeper-add-form-item-label" for="number">Numéro</label>
          <input id="number" class="foodkeeper-add-form-item-input" type="text" placeholder="Numéro"></input>
        </div>
        <div class="foodkeeper-add-form-item">
          <label class="foodkeeper-add-form-item-label" for="apartment">Appartement</label>
          <input id="apartment" class="foodkeeper-add-form-item-input" type="text" placeholder="Appart."></input>
        </div>
        <div class="foodkeeper-add-form-item">
          <label class="foodkeeper-add-form-item-label" for="floor">Étage</label>
          <input id="floor" class="foodkeeper-add-form-item-input" type="text" placeholder="Étage"></input>
        </div>
      </div>
      <div class="foodkeeper-add-form-item">
        <label class="foodkeeper-add-form-item-label" for="address2">Complément d'adresse</label>
        <input id="address2" class="foodkeeper-add-form-item-input" type="text" placeholder="Complément d'adresse"></input>
      </div>
      <div class="foodkeeper-add-form-item">
        <label class="foodkeeper-add-form-item-label" for="infos">Informations complémentaires</label>
        <input id="infos" class="foodkeeper-add-form-item-input" type="text" placeholder="Informations complémentaires"></input>
      </div>
      <div class="foodkeeper-add-form-btn">Ajouter</div>
    </div>
  </div>
</template>

<script>
export default {};
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
      padding: 10px 0;
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
</style>
