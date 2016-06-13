<template transition="popIn">
    <div class="add-picto-popup-overlay"></div>
    <div class="add-picto-popup-container">
      <div class="add-picto-popup-close" v-on:click="addProductIcon">
        <svg viewBox="0 0 100 100" class="app-icon">
          <use xlink:href="#app-icon-close"></use>
        </svg>
      </div>

      <div class="add-picto-popup-wrapper">
        <h3 class="add-picto-popup-title">Choix de la denrée</h3>
        <div class="add-picto-popup-title-separator"></div>
        <div class="add-picto-accomplice-text">
          <p>Choisis l'illustration de la denrée que <span class="underline"></span><br /></p>
          <p>tu souhaites partager<span class="underline"></span></p>
        </div>
        <div class="add-picto-wrapper">
          <div class="add-picto-search">
            <svg viewBox="0 0 100 100" class="add-picto-search-icon  add-picto-search-icon-left">
              <use xlink:href="#app-icon-search"></use>
            </svg>
            <svg viewBox="0 0 100 100" class="add-picto-search-icon  add-picto-search-icon-right">
              <use xlink:href="#app-icon-close"></use>
            </svg>
            <input placeholder="Nom du produit..." v-model="search" />
          </div>

          <div v-if="!filteredFoods.length" class="categories-container" >
           <div class="add-picto-accomplice-subtitle">
            <p>Sapristi ! Pain Perdu ne connaitrait<br /> pas cette mystérieuse denrée...</p>
          </div>
           <div class="add-picto-accomplice-text">
             <p>Mais tu peux choisir la catégorie de<span class="underline"></span><br /></p>
             <p>ton produit dans la liste ci-dessous : <span class="underline"></span></p>
           </div>
           <div class="categories-wrapper">
             <template v-for="category in categories | orderBy 'name' ">
               <div class="category-item-wrapper">
                 <input id="{{ category.shortName }}" class="category-item-input" type="radio" value="{{ category.shortName }}" v-model="selectedCategory">
                 <label for="{{ category.shortName }}" class="category-item-label">{{ category.longName }}</label>
               </div>
             </template>
           </div>
          </div>

          <div v-else class="pictos-container">
            <template v-for="picto in pictos | filterBy search in 'name' | orderBy 'icon' ">
              <div class="picto-item-wrapper">
                <input id="{{ picto.icon }}" class="picto" type="radio" value="{{ picto.icon }}" v-model="selectedFood">
                <label for="{{ picto.icon }}" class="picto-item-container">
                  <svg viewBox="0 0 100 100" class="picto-item-icon">
                    <use xlink:href="#foods-icon-{{ picto.icon }}"></use>
                  </svg>
                </label>
              </div>
            </template>

          </div>
        </div>
        <div class="add-picto-accomplice-button" v-on:click="addProductIcon">Ajouter</div>
      </div>
    </div>
</template>

<script>
import { productsIcons, productsCategories } from './../../../vuex/getters';

export default {
  vuex: {
    getters: {
      categories: productsCategories,
      pictos: productsIcons,
    },
  },
  data () {
    return {
      search: '',
      selectedFood: '',
    }
  },
  computed: {
    filteredFoods: function () {
      return this.pictos.filter(function(picto){
        return picto.name.indexOf(this.search) > -1;
      }.bind(this));
    },
  },
  methods: {
    addProductIcon(event) {
      // retourner le nom du produit
      for (let i = 0; i < this.pictos.length; i++) {
        if (this.pictos[i].icon == this.selectedFood) {
          document.getElementsByName('form-name')[0].value = this.pictos[i].name;
          global.setNameAddProduct = this.pictos[i].name;
          break;
        }
      }

      global.setIconAddProduct = this.selectedFood;
      event.preventDefault()
      document.getElementsByClassName('add-picto-popup-container')[0].classList.remove('active');
      document.getElementsByClassName('add-picto-popup-overlay')[0].classList.remove('active');
      document.getElementById('product-item-icon-svguse').setAttribute('xlink:href','#foods-icon-' + this.selectedFood);
    }
  },
};
</script>

<style lang="scss" scoped>
@import './../../../styles/variables.scss';

.add-picto-popup-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  -webkit-transform: translate3d(-50%, -50%, 0);
  width: 200px;
  min-height: 50px;
  max-height: 597px;
  background: $color-white;
  z-index: -1;
  text-align: center;
  transition: width 0.5s, opacity 0.5s;
  -webkit-transition: width 0.5s, opacity 0.5s;
  opacity: 0;

  &.active {
    opacity: 1;
    z-index: 9999;
    width: 335px;
  }
}

  .add-picto-popup-close {
    position: absolute;
    top: 20px;
    right: 12px;
    width: 40px;
    height: 40px;
    fill: $color-red;
  }

  .add-picto-popup-overlay {
      content: "";
      display: inline-block;;
      width: 100%;
      height: 100%;
      background-color: $color-black;
      opacity: 0;
      position: fixed;
      top: 0;
      left: 0;
      overflow: hidden;
      transition: all 0.2s;
      z-index: -1;
  }

  .add-picto-popup-overlay.active {opacity: 0.7;   z-index: 999;}

.add-picto-popup-title-separator {
  width: 56px;
  height: 5px;
  margin: 0 auto;
  transform: scale(0.5);
  background: url('/static/img/separator-green.png') center center no-repeat;
}

.add-picto-popup-wrapper {
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

    .add-picto-accomplice-subtitle {
      text-align: center;
      p {
        display: inline;
        position: relative;
        margin: 0;
        font: 1.5em 'Karla-Italic', sans-serif;
        color: $color-red;
      }
    }

    .add-picto-accomplice-text{
      margin: 20px auto;
      text-align: center;
    }

    .add-picto-accomplice-text p {
      display: inline;
      position: relative;
      margin: 0;
      font: 1.5em 'Karla-Italic', sans-serif;
      color: $color-text;
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

  .add-picto-wrapper {
    text-align: center;
  }

    .add-picto-search {
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

      .add-picto-search-icon {
        position: absolute;
        margin-top: 5px;
        width: 30px;
        height: 30px;
        fill: $color-white;
      }

      .add-picto-search-icon-left {
        left: 15px;
      }
      .add-picto-search-icon-right {
        right: 15px;
        opacity: 0;
        transition: all 0.5s;
        &.active {
          opacity: 1;
        }
      }

      .pictos-container {
        max-width: 262px;
        margin: auto;
        overflow: scroll;
        height: 300px;
      }
      .picto-item-wrapper{
        text-align: center;
        display: inline-block;
        width: 33%;
        label {
          display: inline-block;
          width: 70px;
        }
        input[type="radio"] {
          display: none;
          &:checked + label {
            transform: scale3d(1.2,1.2,1.2);
          }
        }
      }

      .categories-wrapper {
        max-width: 270px;
        margin-left: 50px;
        text-align: left;
      }
      .category-item-wrapper{
        position: relative;
        text-align: left;
        display: inline-block;
        width: 50%;
        margin: 10px auto;
        label {
          vertical-align: middle;
          text-transform: uppercase;
          color: $color-text;
          font: 1.2em 'Karla-Bold', sans-serif;
          margin: 0px 0 0px 35px;
          max-width: 69px;
          display: inline-block;
          &:before {
            left: 0px;
            top: 0px;
            width: 20px;
            height: 20px;
            border: 1px solid $color-sepia;
          }
          &:after {
            left: 3px;
            top: 3px;
            width: 16px;
            height: 16px;
          }
          &:before,
          &:after {
            content: "";
            position: absolute;
            display: inline-block;
            border-radius: 50%;
          }
        }
        input[type="radio"] {
          display: none;
          &:checked + label:after {
            background-color: $color-sepia;
          }
        }
      }


</style>
