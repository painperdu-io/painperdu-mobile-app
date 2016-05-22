<template>
  <div class="product-add-container">
    <div> @todo icone produit </div>
    <div class="product-add-name">
      <input type="text" placeholder="Nom du produit" />
      <div> @todo produit favori </div>
    </div>
    <div class="product-add-description">
      <textarea placeholder="Description du produit"></textarea>
    </div>

    <div class="product-add-type">
      <input type="radio" id="brut" class="type" value="false" v-model="productType">
      <label for="brut" >Plats Préparés</label>
      <input type="radio" id="prepare" class="type" value="true" v-model="productType">
      <label for="prepare">Produits Bruts</label>
    </div>

    <div class="product-add-category">
      <div class="product-type-prepare" v-if="productType">
        <select class="market-add-form-select" v-model="selectedProductType">
          <option>Entrées</option>
          <option>Plats</option>
          <option>Desserts</option>
        </select>
      </div>
      <div class="product-type-brut" v-else>
        <select class="market-add-form-select" v-model="selectedProductType">
          <option>Légumes</option>
          <option>Viandes</option>
        </select>
      </div>
    </div>
    <div class="product-add-quantity"> @todo quantité
      <input type="text" placeholder="0" />
    </div>

    <h3>A consommer sous</h3>

    <div class="product-add-form-dlc-range">
      <label for="product-dlc">jours</label>
      <input type="range" name="product-dlc" value="1" max="15" min="0" step="1"/>
    </div>

    <div class="product-add-button">Ajouter</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';

.product-add-container {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  position: relative;
  height: calc(100vh - 80px);
}

.product-add-name,
.product-add-description {
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

.product-add-type {
  text-align: center;
  line-height: (80px / 2);
    .type {
      + label {
        background-color: rgba(0,0,0,0);
        height: (80px / 2);
        border: 2px solid white;
        border-radius: (80px / 4);
        text-transform: uppercase;
        padding: (20px / 2);
        color: $color-text;
        font-family: 'Karla-Bold';
        font-size: (2.3em / 2);
      }
      &:first-child {
        + label {
          margin-right: (40px / 2);

        }
      }
      &:checked {
        + label {
          background-color: white;
        }
      }
    }
}

.product-add-form-dlc-range {
  h3 {
    text-transform: uppercase;
    margin: 0 0 5px -140px;
  }

  input[type="range"] {
    -webkit-appearance:none;
    width: 200px;
    height: 4px;
    background: $color-green-lite;
    border-radius: 4px;
    margin: auto;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance:none;
    position:relative;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: $color-white;
    border: 2px solid #f2f2f2;
    box-shadow: 0px 3px 10px rgba(0,0,0, 0.2);
    z-index: 3;
  }
}

.product-add-button {
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
