<template>
  <div>
    <div id="produit" class="button" v-link="{ path: '/clan/loc' }">Localisation</div>
    <div class="button" v-link="{ path: '/clan/users' }">Membres Alliés</div>
    <div class="button" v-link="{ path: '/clan/stats' }">Statistiques</div>
  </div>
  <router-view></router-view>
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
