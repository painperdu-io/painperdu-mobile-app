<template transition="popIn">
  <div class="add-picto-popup-container">
    <h3 class="add-picto-popup-title">Choix de la denrée</h3>
    <div class="popup-title-separator"></div>
    <div class="add-picto-accomplice-text">
      <p>Choisis l'illustration de la denrée que <span class="underline"></span><br /></p>
      <p>tu souhaites partager<span class="underline"></span></p>
    </div>
    <div class="add-picto-pictos-wrapper">
      <div class="add-picto-pictos-search">
        <svg viewBox="0 0 100 100" class="add-picto-pictos-search-icon  add-picto-pictos-search-icon-left">
          <use xlink:href="#app-icon-search"></use>
        </svg>
        <svg viewBox="0 0 100 100" class="add-picto-pictos-search-icon  add-picto-pictos-search-icon-right">
          <use xlink:href="#app-icon-close"></use>
        </svg>
        <input placeholder="Nom du produit..." v-model="search" />
      </div>

      <div class="pictos-container">
        <template v-for="picto in pictos | filterBy search in 'name' | orderBy 'name' ">
          <div class="picto-item-wrapper">
            <input name="{{ picto.name }}" class="picto" type="radio" value="{{ picto.name }}" v-model="picto">
            <label for="{{ picto.name }}" class="picto-item-container">
              <svg viewBox="0 0 100 100" class="picto-item-icon">
                <use xlink:href="#foods-icon-{{ picto.name }}"></use>
              </svg>
            </label>
          </div>
        </template>
      </div>
    </div>
    <div class="add-picto-accomplice-button">Ajouter</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pictos : [
        {name : 'salade'},
        {name : 'oeuf'},
        {name : 'sandwich'},
      ],
    }
  },
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

.add-picto-popup-container {
  width: 100%;
}

  .add-picto-popup-title {
    margin-top: 30px;
    font: 1.8em 'IowanOldStyleBT-BlackItalic', sans-serif;
    color: $color-red;
  }

  .add-picto-popup-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

    .add-picto-popup-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .add-picto-accomplice-text{margin: 30px auto 20px;}

    .add-picto-accomplice-text p {
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

  .add-picto-accomplice-button {
    margin: 20px auto 20px;
    width: 150px;
    padding: 18px 0;
    border-radius: 25px;
    background-color: $color-beige;
    font: 1.3em 'Karla-Bold', sans-serif;
    color: $color-text;
    text-transform: uppercase;
    text-align: center;
  }

  .add-picto-pictos-wrapper {
    text-align: center;
  }

    .add-picto-pictos-search {
      position: relative;
      margin: 0px auto 18px ;
      width: 262px;

      input {
        padding: 0 55px 0 50px;
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

      .add-picto-pictos-search-icon {
        position: absolute;
        margin-top: 5px;
        width: 30px;
        height: 30px;
        fill: $color-white;
      }

      .add-picto-pictos-search-icon-left {
        left: 15px;
      }
      .add-picto-pictos-search-icon-right {
        right: 15px;
        opacity: 0;
        transition: all 0.5s;
        &.active {
          opacity: 1;
        }
      }

      .pictos-container {
        display: flex;
        flex-flow: row;
        max-width: 262px;
        margin: auto;
      }
      .picto-item-wrapper{
        width: 33%;
        text-align: center;
        input[type="radio"] {
          display: none;
          &:checked {
            + label {
              transform: scale3d(1.2,1.2,1.2);
            }
          }
        }
      }

      .picto-item-container {
        svg {max-width: 60px;}

      }

</style>
