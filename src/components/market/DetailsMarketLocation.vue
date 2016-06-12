<template>
  <div class="details-market-location-wrapper">
    <google-map type="market" :objectid="$route.params.id">
    </google-map>
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
.details-market-location-wrapper {
  overflow-y: scroll;
  position: relative;
  width: 100%;
  height: 372px;
}
</style>
