<template>
  <div class="google-map-container">
    <map
      :map-type-id.sync="mapType"
      :center.sync="center"
      :zoom.sync="zoom"
      :options="{ disableDefaultUI: true, styles: mapStyles,}"
      >
      <marker
        v-for="m in markers"
        :icon.sync="markersIcon"
        :position.sync="m.position"
      >
      </marker>
      <circle
        :bounds.sync="circleBounds"
        :center.sync="center"
        :radius.sync="circleRadius"
        :options="circleOptions" >
      </circle>

    </map>
    <div class="google-map-container-bg"></div>
  </div>
</template>

<script>
import { load, Map, Marker, Circle } from 'vue-google-maps'
load({ key: 'AIzaSyAyKy5Ep1QK1LekN9GJHu-uHGbUxQL7sfI' })

export default {
  components: {
    Map,
    Marker,
    Circle,
  },
  data () {
    return {
      zoom: 16,
      center : { lat: 48.8538302, lng: 2.2982161 },
      markers: [{ 'position': { lat: 48.8538302, lng: 2.2982161 } }],
      /*markersIcon : {
        url: '/static/img/stats-value.png',
        size: { width: 40, height: 30 },
        origin: { x: 0, y: 0},
        anchor: { x: 0, y: 30},
      },*/
      mapStyle: 'default',
      circleBounds: {},
      circleRadius: 100,
      circleOptions: {
        editable: false,
        strokeColor: '#25dec9',
        strokeOpacity: 0.3,
        strokeWeight: 2,
        fillColor: '#25dec9',
        fillOpacity: 0.3,
      }
    };
  },
  computed: {
    mapStyles () {
      switch(this.mapStyle) {
        default:
        return [
          {"featureType":"landscape","elementType":"all","stylers":[{"color":"#fcf9fc"}]},
          {"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#e6e6e6"}]},
          {"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#FFFFFF"}]},
          {"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c7fcf7"}]},
          {"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#dedede"}]},
          {"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4fbdb2"}]},
          {"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"},{"hue":"#70ebdb"}]},
          {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#b8b8b8"}]},
          {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#b8b8b8"}]},
          {"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"on"},{"hue":"#253b42"}]}
        ];
      }
    }
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
  }
</style>
