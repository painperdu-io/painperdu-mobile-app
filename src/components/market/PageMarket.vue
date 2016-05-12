<template>
  <div>


    <div class="group-item clan-item" v-link="{ path: '/clan' }">
      <img src="" />
      <div class="group-name">Ma résidence</div>
    </div>

    <div class="products-wrapper">
      <input id="search-input" placeholder="Nom du produit..." v-model="research" />

      <div class="product-filters">
        <input type="radio" value="false" v-model="productType">
        <label for="one" class="filter">Plats Préparés</label>
        <input type="radio" value="true" v-model="productType">
        <label for="two" class="filter">Produits Bruts</label>
      </div>


      <div class="products-list ">
        <template v-for="product in products | filterBy research in 'name' | filterBy productType in 'brut'  ">
          <div class="product" v-link:"{ path: '/product/:id' }">
            <div class="wrapper">
              <svg viewBox="0 0 100 100" class="header-icon  header-icon-right">
                <use xlink:href="#foods-icon-{{ product.name}}"></use>
              </svg>
              <div class="product-quantity">{{ product.quantity }}</div>
            </div>
            <div class="product-name">{{ product.name }}</div>
            <div class="product-status" v-if="product.status">Disponible maintenant</div>
            <div class="product-status" v-else>Indisponible</div>
          </div>
        </template>
      </div>
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
        { name: 'salade',
          quantity: '3',
          status: true,
          brut: true,
        },
        { name: 'choux',
          quantity: '1',
          status: false,
          brut: true,
        },
        { name: 'pain',
          quantity: '1',
          status: true,
          brut: true,
        },
        { name: 'poivron',
          quantity: '6',
          status: true,
          brut: true,
        },
        { name: 'lasagnes',
          quantity: '3',
          status: true,
          brut: false,
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
.products-wrapper {
  text-align: center;
}
.group-item {
  margin: auto;
  text-align: center;
  .group-name {
    font-size: (2.5em / 2);
    font-family: 'Karla-Bold';
    text-transform: uppercase;
    color: $color-text
  }
}
.products-list {
  text-align: center;
  .product {
    display: inline-block;
    margin: (45px / 2) (25px/2) 0  (25px/2);
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
        top: 10px;
        display: inline-block;
        background-color: $color-red;
        color: $color-white;
        text-align: center;
        border-radius: 50%;
        font-size: (2.6em / 2);
        font-family: 'Karla-Bold';
        width: (55px /2);
        height: (55px /2);
        line-height: (55px / 2);
      }
    }
    .product-name {
      text-transform: capitalize;
      font-style: italic;
      color: $color-red;
      font-size: (3.6em / 2);
      font-family: 'IowanOldStyle-Roman';
      font-weight: 700;
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
  line-height: (80px / 2);
    .filter {
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
  margin:(50px / 2) auto (36px/2) ;
  width: (525px / 2);
  padding: 0 (25px / 2);
  border-radius: (80px / 4);
  height: (80px / 2);
}

::-webkit-input-placeholder { color: white;}


</style>
