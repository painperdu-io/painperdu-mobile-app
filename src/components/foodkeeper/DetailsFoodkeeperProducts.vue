<template>
  <div class="details-foodkeeper-products-wrapper">
    <products-list :products="products"></products-list>
  </div>
</template>

<script>
import ProductsList from './../commons/ProductsList'

export default {
  components: {
    ProductsList,
  },
  data() {
    return { products: [] };
  },
  ready() {
    const foodkeeperId = this.$route.params.id;

    // récupére les produits liés à un foodkeeper
    this.$http({ url: `products/foodkeeper/${foodkeeperId}`, method: 'GET' })
      .then((response) => { this.products = response.data; })
      .catch(err => { console.log(err); });
  }
};
</script>

<style lang="scss" scoped>
.details-foodkeeper-products-wrapper {
  position: relative;
  top: 0;
  left: 0;
}
</style>
