<template>
  <div>
    <!-- Ajouter produit lien
      <div id="produit" class="button" v-link="{ path: '/product' }">fiche produit</div>
    -->

    <div class="group-item clan-item" v-link="{ path: '/clan' }">
      <img src="" />
      <div class="group-name">Nom Clan</div>
    </div>

    <input type="search" placeholder="Nom du produit..." />
    <div class="product-filters">
      <button>Produits Bruts</button>
      <button>Produits Préparés</button>
    </div>

    <div class="products-list">
      <div class="product">
        <div>
          <img src="" />
          <div class="product-quantity"></div>
        </div>
        <div class="product-name">Nom du produit</div>
        <div class="product-status">Disponible maintenant</div>
      </div>
    </div>

    <!-- Ajouter place du marché
      <div class="button" v-link="{ path: '/addMarket' }">Ajouter une place du marché</div>
    -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './../../styles/variables.scss';
.wrap {
  text-align: center;
}
.products-list {
  text-align: center;
}
</style>
