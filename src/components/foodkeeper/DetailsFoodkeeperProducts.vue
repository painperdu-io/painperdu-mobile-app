<template>
  <div class="details-foodkeeper-products-wrapper">
    <products-list></products-list>
  </div>
</template>

<script>
import ProductsList from './../commons/ProductsList'

export default {
  components: {
    ProductsList,
  },
};
</script>

<style lang="scss" scoped>
.details-foodkeeper-products-wrapper {
  position: relative;
  top: 0;
  left: 0;
}
</style>
