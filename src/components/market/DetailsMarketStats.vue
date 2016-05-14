<template>
  <div class="details-market-statistics-wrapper">
    <statistics></statistics>
  </div>
</template>

<script>
import Statistics from './../commons/Statistics'

export default {
  components: {
    Statistics,
  },
};
</script>

<style lang="scss" scoped>
.details-market-statistics-wrapper {
  position: relative;
  top: 0;
  left: 0;
  margin: 12px;
}
</style>
