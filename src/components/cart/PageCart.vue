<template>
  <div>
    <div id="produit" class="button" v-link="{ path: '/cart/users' }">Mes compères</div>
    <div class="button" v-link="{ path: '/cart/products' }">Denrées proposées</div>
    <div class="button" v-link="{ path: '/cart/addCart' }">Ajouter un garde-manger</div>
  </div>
    <router-view transition="popIn"></router-view>
</div>
</template>

<script>
import router from '../../router'

export default {}
</script>

<style>
  .button {
  }
</style>
