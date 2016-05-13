<template>
  <div>
    <div>En cours</div>
    <div>Passées</div>
    <div class="footer-item" v-link="{ path: '/addMarket'}">Mes<br/> Ajouter place du marché</div>

  </div>
</template>

<script>
import router from '../../router'

export default {};
</script>

<style lang="scss" scoped>
  .button {
    color: red;
  }
</style>
