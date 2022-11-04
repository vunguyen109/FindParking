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
            <button type="button" class="copy-btn" @click="copyLocation">
              copy
            </button>
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
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

import 'mapbox-gl/dist/mapbox-gl.css' // Updating node module will keep css up to date.
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css' // Updating node module will keep css up to date.
import "mapbox-gl/dist/mapbox-gl.css";

export default {
  data() {
    return {
      loading: false,
      location: "",
      access_token:
        "pk.eyJ1IjoidnVuZ3V5ZW45OSIsImEiOiJjbDl3YWg0ZWMyamNqM3ZvdXYyOXVlNjh3In0.ymtgzvce8mLHH2uh22WC-Q",
      center: [108.2096, 16.059945],
      map: {},
      list_location: "",
    };
  },
  mounted() {
    this.createMap();
    this.list_location = this.$CONST.LOCATION_DATA;
    this.addMarker();
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

        const nav = new mapboxgl.NavigationControl();
        this.map.addControl(nav, "bottom-right");

        const locate = new mapboxgl.GeolocateControl();
        this.map.addControl(locate, "bottom-right");

        geocoder.on("result", (e) => {
          const marker = new mapboxgl.Marker({
            draggable: false,
            color: "#1A6300",
          })
            .setLngLat(e.result.center)
            .addTo(this.map);
          this.center = e.result.center;
          //   marker.on("dragend", (e) => {//   });
        });

        //

        const directions = new MapboxDirections({
            accessToken: this.access_token,
            unit: 'metric',
            profile: 'mapbox/driving-traffic',
            annotations:'congestion',
            voiceLocale:'vi',
            language:'vi',
        });
        this.map.addControl(directions, 'top-left');

      } catch (err) {
        console.log("map error", err);
      }
    },
    async getLocation() {
      try {
        this.loading = true;
        const response = await this.$api.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.center[0]},${this.center[1]}.json?access_token=${this.access_token}`
        );
        this.loading = false;
        console.log(response);
        this.location = response.features[0].place_name;
      } catch (err) {
        this.loading = false;
        console.log(err);
      }
    },
    copyLocation() {
      if (this.location) {
        navigator.clipboard.writeText(this.location);
        alert("Location Copied");
      }
      return;
    },
    addMarker() {
      // for(var item of this.list_location){
      //   console.log(item.coordinates);
      //   const marker = new mapboxgl.Marker({
      //       draggable: false,
      //       color: "#1A6300",
      //     })
      //       .setLngLat(item.coordinates)
      //       .addTo(this.map);
      // }
      for(var item of this.list_location){
        // Create a DOM element for each marker.
        const el = document.createElement('div');
        el.style.backgroundImage = 'url(https://i.ibb.co/pQm0f6L/Group-51.png)';
        el.className = 'marker';
        el.textContent = item.slot;
        el.style.backgroundSize = '100%';
        
        el.addEventListener('click', () => {
        window.alert(item.name);
        });
        
        // Add markers to the map.
        new mapboxgl.Marker(el)
        .setLngLat(item.coordinates)
        .addTo(this.map);
        }
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