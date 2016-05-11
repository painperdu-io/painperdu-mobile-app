<template>
  <div>
    <div id="produit" class="button" v-link="{ path: '/cart/users' }">Mes compères</div>
    <div class="button" v-link="{ path: '/cart/products' }">Denrées proposées</div>
    <div class="button" v-link="{ path: '/cart/addCart' }">Ajouter un garde-manger</div>
  </div>
  <router-view transition="fade" transition-mode="out-in"></router-view>
</template>

<script>
import router from '../../router'

export default {}
</script>

<style>
  .button {
    color: red;
  }
</style>
