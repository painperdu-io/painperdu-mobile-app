<template>
  <map
    :center="center"
    :zoom="7"
  >
    <!--<marker
      v-for="m in markers"
      :position.sync="m.position"
      :clickable="true"
      :draggable="true"
      @g-click="center=m.position"
    ></marker>-->
  </map>
</template>

<script>
  import {load, Map, Marker} from 'vue-google-maps'

  load('AIzaSyAyKy5Ep1QK1LekN9GJHu-uHGbUxQL7sfI')

  export default {
    data () {
      return {
        center: {lat: 10.0, lng: 10.0},
        markers: [{
          position: {lat: 10.0, lng: 10.0}
        }, {
          position: {lat: 11.0, lng: 11.0}
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
