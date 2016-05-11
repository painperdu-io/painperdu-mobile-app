<template>
  <div>
    <div id="produit" class="button" v-link="{ path: '/product' }">fiche produit</div>
    <div class="button" v-link="{ path: '/clan' }">fiche clan</div>
    <div class="button" v-link="{ path: '/addMarket' }">Ajouter une place du marché</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  .button {
    color: red;
  }
</style>
