<template>
  <div>
    <!-- Ajouter produit lien
      <div id="produit" class="button" v-link="{ path: '/product' }">fiche produit</div>
    -->

    <div class="group-item clan-item" v-link="{ path: '/clan' }">
      <img src="" />
      <div class="group-name">Nom Clan</div>
    </div>

    <input id="search-input" placeholder="Nom du produit..." v-model="research" />
    <div class="product-filters">
      <button v-bind:disabled="someDynamicCondition">Plats Préparés</button>
      <button v-bind:disabled="someDynamicCondition">Produits Bruts</button>
    </div>


    <div class="products-list ">
      <template v-for="product in products | filterBy research in 'name'  ">
        <div class="product">
          <div class="wrapper" style="background: url('/static/img/products/({{ product.name)}}.jpg'; ">
            <div class="product-quantity">{{ product.quantity }}</div>
          </div>
          <div class="product-name">{{ product.name }}</div>
          <div class="product-status">{{ product.status }}</div>
        </div>
      </template>
    </div>

    <!-- Ajouter place du marché
      <div class="button" v-link="{ path: '/addMarket' }">Ajouter une place du marché</div>
    -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      products: [
        { name: 'tomate',
          quantity: '3',
          status: true,
          brut: true,
        },
        { name: 'emmental',
          quantity: '1',
          status: false,
          brut: true,
        },
        { name: 'viande',
          quantity: '1',
          status: true,
          brut: true,
        },
        { name: 'banane',
          quantity: '6',
          status: true,
          brut: true,
        },

      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';
.wrap {
  text-align: center;
}
.products-list {
  text-align: center;
  .product {
    display: inline-block;
    .wrapper {
      position: relative;
      background-color: white;
      border-radius: 50%;
      width: (230px / 2);
      height: (230px / 2);
      text-align: center;
      .product-quantity {
        position: absolute;
        right: 0px;
        top: 20px;
        background-color: $color-red;
        color: $color-white;
        text-align: center;
        padding: (20px / 2);
        border-radius: 50%;
        font-size: (2.6em / 2);
        font-family: 'Karla-Bold';
      }
    }
    .product-name {
      text-transform: capitalize;
      font-style: italic;
      color: $color-red;
      font-size: (3.6em / 2);
      //font-family: 'Karla-Bold';
    }
    .product-status {
      color: $color-text;
      font-size: (2.4em / 2);
      font-family: 'Karla-Italic';
    }
  }
}

.product-filters {
  text-align: center;
    button {
      background-color: rgba(0,0,0,0);
      height: (80px / 2);
      border: 2px solid white;
      border-radius: (80px / 4);
      text-transform: uppercase;
      padding: (20px / 2);
      color: $color-text;
      font-family: 'Karla-Bold';
      font-size: (2.3em / 2);
      .active {
        background-color: white;
      }
    }
}

#search-input {
  background-color: $color-green;
  border: none;
  color: white;
  margin: auto;
  width: (525px / 2);
  padding: 0 (25px / 2);
  border-radius: (80px / 4);
  height: (80px / 2);
}

::-webkit-input-placeholder { color: white;}


</style>
