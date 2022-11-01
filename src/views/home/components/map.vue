<template>
<div class="map">
  <MglMap
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
  >
    <MglNavigationControl position="top-right"/>
    <MglGeolocateControl position="top-right" />
  </MglMap>
</div>
</template>

<script>
import { MglMap, MglNavigationControl, MglGeolocateControl } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
  },
  data() {
    return {
      accessToken:"pk.eyJ1IjoidnVuZ3V5ZW45OSIsImEiOiJjbDl3YWg0ZWMyamNqM3ZvdXYyOXVlNjh3In0.ymtgzvce8mLHH2uh22WC-Q",
      mapStyle: "mapbox://styles/mapbox/streets-v11",
    };
  },
};
</script>

<style lang="scss" scoped>

.map {
  width: 100%;
  height: 80vh;
  
}
.mapboxgl-canvas {
    position: unset;
  }
</style>