<template>
  <div class="google-map-container">
    <map
      :center.sync="center"
      :zoom.sync="zoom"
      :options="options">
      <marker
        v-for="m in markers"
        :position.sync="m.position"></marker>
    </map>
    <div class="google-map-container-bg"></div>
  </div>
</template>

<script>
import { load, Map, Marker } from 'vue-google-maps'
load({ key: 'AIzaSyAyKy5Ep1QK1LekN9GJHu-uHGbUxQL7sfI' })

export default {
  components: {
    Map,
    Marker,
  },
  data () {
    return {
      zoom: 16,
      options: {
        disableDefaultUI: true,
      },
      center : { lat: 48.8538302, lng: 2.2982161 },
      markers: [{ 'position': { lat: 48.8538302, lng: 2.2982161 } }],
    };
  },
};
</script>

<style lang="scss" scoped>
.google-map-container {
  position: relative;
  width: 100%;
  height: 100%;
}

  .google-map-container-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
</style>
