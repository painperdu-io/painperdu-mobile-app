<template>
  <div class="cart-list">
    <template v-for="cart in carts">
      <div class="cart" style="background: url('/static/img/products/({{ product.name)}}.jpg';" v-link:"{ path: '/cart/:id' }">
        <h3>{{ cart.name }}</h3>
        <div class="separator"></div>
        <p>{{ cart.description }}</p>
      </div>
    </template>
  </div>

  <div class="add-cart">

  </div>





  <div>
    <div id="produit" class="button" v-link="{ path: '/cart/users' }">Mes compères</div>
    <div class="button" v-link="{ path: '/cart/products' }">Denrées proposées</div>
    <div class="button" v-link="{ path: '/cart/addCart' }">Ajouter un garde-manger</div>
  </div>
    <router-view transition="popIn"></router-view>
</div>
</template>

<script>
export default {
  data() {
    return {
      carts: [
        {
          name: 'Studio Lyon',
          description: 'Description du studio',
        },
        {
          name: 'Maison Maman',
          description: 'Description du studio',
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  width: 100%;
  height: 33%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background: yellow;
}
</style>
