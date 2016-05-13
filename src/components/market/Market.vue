<template>
  <div>


    <div class="group-item clan-item" v-link="{ path: '/market/details' }">
      <img src="./../../../static/temp/clan.png" />
      <div class="group-name">
        Ma résidence
        <svg viewBox="0 0 100 100" class="star-icon">
          <use xlink:href="#app-icon-star"></use>
        </svg>
      </div>
    </div>

    <div class="products-wrapper">
      <div class="search-wrapper">
        <svg viewBox="0 0 100 100" class="search-icon search-icon-left">
          <use xlink:href="#app-icon-search"></use>
        </svg>
        <svg viewBox="0 0 100 100" class="search-icon search-icon-right">
          <use xlink:href="#app-icon-close"></use>
        </svg>

        <input id="search-input" placeholder="Nom du produit..." v-model="research" />
      </div>

      <div class="product-filters">
        <input type="radio" id="brut" class="filter"value="false" v-model="productType">
        <label for="brut" >Plats Préparés</label>
        <input type="radio" id="prepare" class="filter" value="true" v-model="productType">
        <label for="prepare">Produits Bruts</label>
      </div>

      <div class="products-list">
        <template v-for="product in products | filterBy research in 'name' | filterBy productType in 'brut' | orderBy 'name' ">
          <div class="product" v-bind:class="{ 'inactive': !product.status }" v-link:"{ path: '/market/product/:id' }">
            <div class="wrapper">
              <svg viewBox="0 0 100 100" class="foods-icon">
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
      <div class="button" v-link="{ path: '/market/add' }">Ajouter une place du marché</div>
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
        { name: 'chou',
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
          status: true, //disponible maintenant
          brut: true, //type produit
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
  position: relative;
  margin: (60px / 2) auto 0;
  text-align: center;
  img {
    width: (338px / 2);
  }
  .group-name {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: (2.5em / 2);
    font-family: 'Karla-Bold';
    text-transform: uppercase;
    color: $color-text;
  }
  .star-icon {
    fill: $color-red;
    width: (50px/ 2);
    position: absolute;
    left: 95%;
    top: -55%;
  }
}
.products-list {
  text-align: center;
  .product {
    display: inline-block;;
    margin: (45px / 2) (25px/2) 0  (25px/2);
    .wrapper {
      position: relative;
      background-color: white;
      border-radius: 50%;
      width: (230px / 2);
      height: (230px / 2);
      text-align: center;
      .foods-icon {
        transform: scale(0.7);
      }
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
      margin: (20px / 2) auto;
    }
    .product-status {
      color: $color-text;
      font-size: (2.4em / 2);
      font-family: 'Karla-Italic';
    }
    &.inactive {
      filter: grayscale(100%);
      .product-quantity {
        background-color: $color-inactive;
      }
      .product-status {
        opacity: 0.5;
      }
    }
  }
}

.product-filters {
  text-align: center;
  line-height: (80px / 2);
    .filter {
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

.search-icon {
  width: (60px / 2);
  height: (60px / 2);
  margin-top: (10px / 2);
  fill: $color-white;
  position: absolute;
}

.search-icon-left {
  left: 15px;
}
.search-icon-right {
  right: 20px;
}

.search-wrapper {
  position: relative;
  margin:(50px / 2) auto (36px/2) ;
  width: (525px / 2);
}
#search-input {
  background-color: $color-green-lite;
  border: none;
  color: white;
  padding: 0 (25px / 2) 0 (100px / 2);
  border-radius: (80px / 4);
  height: (80px / 2);
  width: 100%;
  box-sizing: border-box;
  font-style: italic;
}

input[type="radio"] {
  display: none;
}

::-webkit-input-placeholder { font-style: italic; color: white;}
</style>
