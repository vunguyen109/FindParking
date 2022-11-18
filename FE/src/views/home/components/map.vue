<template>
<div class="map">
  <MglMap
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
  >
    <!-- <MglAttributionControl  /> -->
    <MglFullscreenControl position="top-right" />
      <MglNavigationControl position="bottom-right" />
      <MglGeolocateControl position="bottom-right" />
      <MglScaleControl />
      <!-- <PopupWrapper /> -->
      <MglMarker :coordinates="Coordinates" color = "red">
      <MglPopup :showed="true" :closeButton="false" :closeOnClick="false" :offset="15" anchor="bottom" >
        <VCard>
          <div>5</div>
        </VCard>
      </MglPopup>
    </MglMarker>
  </MglMap>
</div>
</template>

<script>
import {
  MglMap,
  MglAttributionControl,
  MglNavigationControl,
  MglGeolocateControl,
  MglFullscreenControl,
  MglScaleControl,
  MglMarker,
    MglPopup,
} from "vue-mapbox";
import 'mapbox-gl/dist/mapbox-gl.css';
// import PopupWrapper from "@/views/home/components/PopupWrapper.vue"

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
    // MglAttributionControl,
    MglFullscreenControl,
    MglScaleControl,
    MglMarker,
    MglPopup,
    // PopupWrapper,
  },
  data() {
    return {
      accessToken:"pk.eyJ1IjoidnVuZ3V5ZW45OSIsImEiOiJjbDl3YWg0ZWMyamNqM3ZvdXYyOXVlNjh3In0.ymtgzvce8mLHH2uh22WC-Q",
      mapStyle: "mapbox://styles/mapbox/streets-v11",
      Coordinates: [11, 39]
    };
  },
};
</script>

<style lang="scss" scoped>

.map {
  width: 100%;
  height: 80vh;
  
}
</style>