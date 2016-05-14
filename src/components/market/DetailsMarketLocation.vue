<template>
  <div class="details-market-wrapper">
    <google-map></google-map>
  </div>
</template>

<script>
import GoogleMap from './../commons/GoogleMap'

export default {
  components: {
    GoogleMap,
  },
};
</script>

<style lang="scss" scoped>
.details-market-wrapper {
  position: relative;
  width: 100%;
  height: 292px;
}
</style>
