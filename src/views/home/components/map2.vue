<template>
  <div class="main">
    <div class="flex">
      <!-- Map Display here -->
      <div class="map-holder">
        <div id="map"></div>
      </div>
      
      <div class="dislpay-arena">
        <div class="coordinates-header">
            <h3>Current Coordinates</h3>
            <p>Latitude: {{ center[0] }}</p>
            <p>Longitude: {{ center[1] }}</p>
        </div>
        <div class="coordinates-header">
          <h3>Current Location</h3>
          <div class="form-group">
            <input
              type="text"
              class="location-control"
              :value="location"
              readonly
            />
            <button type="button" class="copy-btn" @click="copyLocation">copy</button>
          </div>
          <button
  type="button"
  :disabled="loading"
  :class="{ disabled: loading }"
  class="location-btn"
  @click="getLocation"
>
  Get Location
</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import axios from "axios";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";

export default {
  data() {
    return {
      loading: false,
      location: "",
      access_token:
        "pk.eyJ1IjoidnVuZ3V5ZW45OSIsImEiOiJjbDl3YWg0ZWMyamNqM3ZvdXYyOXVlNjh3In0.ymtgzvce8mLHH2uh22WC-Q",
      center: [0, 0],
      map: {},
    };
  },
  mounted() {
    this.createMap();
  },

  methods: {
    async createMap() {
      try {
        mapboxgl.accessToken = this.access_token;
        this.map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v11",
          center: this.center,
          zoom: 11,
        });

        //

        let geocoder = new MapboxGeocoder({
          accessToken: this.access_token,
          mapboxgl: mapboxgl,
          marker: false,
        });

        this.map.addControl(geocoder);

        geocoder.on("result", (e) => {
          const marker = new mapboxgl.Marker({
            draggable: true,
            color: "#D80739",
          })
            .setLngLat(e.result.center)
            .addTo(this.map);
          this.center = e.result.center;
          marker.on("dragend", (e) => {
            this.center = Object.values(e.target.getLngLat());
          });
        });
      } catch (err) {
        console.log("map error", err);
      }
    },
    async getLocation() {
  try {
    this.loading = true;
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.center[0]},${this.center[1]}.json?access_token=${this.access_token}`
    );
    this.loading = false;
    this.location = response.data.features[0].place_name;
  } catch (err) {
    this.loading = false;
    console.log(err);
  }
},
copyLocation() {
  if (this.location) {
    navigator.clipboard.writeText(this.location);
    alert("Location Copied")
  }
  return;
},
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-around;
}
.map-holder {
  width: 60%;
  height: 80vh;
  background-color: aqua;
}
</style>