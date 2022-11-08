<template>
  <div class="main">
    <div id="geocoder" class="geocoder"></div>
    <div class="flex">
      <!-- Map Display here -->
      <div class="map-holder">
        <div id="map"></div>
      </div>

      <!-- <div class="dislpay-arena">
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
      </div> -->
    </div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import axios from "axios";
import { MglMap, MglMarker } from "vue-mapbox";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

import "mapbox-gl/dist/mapbox-gl.css"; // Updating node module will keep css up to date.
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"; // Updating node module will keep css up to date.
import "mapbox-gl/dist/mapbox-gl.css";

export default {
  components: {
    MglMap,
    MglMarker,
  },
  data() {
    return {
      loading: false,
      location: "",
      access_token:
        "pk.eyJ1IjoidnVuZ3V5ZW45OSIsImEiOiJjbDl3YWg0ZWMyamNqM3ZvdXYyOXVlNjh3In0.ymtgzvce8mLHH2uh22WC-Q",
      center: [108.2096, 16.059945],
      map: {},
      list_location: "",
      coordinatesStart: [108.2096, 16.059945],
      coordinatesEnd: [108.3096, 16.059945],
    };
  },

  mounted() {
    this.createMap();
    this.list_location = this.$CONST.LOCATION_DATA;
    this.addMarker();
  },
  watch: {
    coordinatesStart: function () {},
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

        document
          .getElementById("geocoder")
          .appendChild(geocoder.onAdd(this.map));

        const nav = new mapboxgl.NavigationControl();
        this.map.addControl(nav, "bottom-right");

        const directions = new MapboxDirections({
          accessToken: this.access_token,
          unit: "metric",
          profile: "mapbox/driving-traffic",
          annotations: "congestion",
          voiceLocale: "vi",
          language: "vi",
        });

        this.map.addControl(directions, "top-left");
        const locate = new mapboxgl.GeolocateControl({
          trackUserLocation: false,
          showUserHeading: true,
        });

        // this.map.addControl(locate, "bottom-right");

        this.map.on("load", async () => {
          // locate.trigger();
          directions.setDestination([108.2086, 16.059945]); // can be address
          this.map.loadImage(
            "https://i.ibb.co/bbPzBjy/car-location.png",
            (error, image) => {
              if (error) throw error;
              // Add the image to the map style.
              this.map.addImage("car-location", image);
            }
          );
          // Get the initial location of the International Space Station (ISS).
          const geojson = await getLocation();
          // Add the ISS location as a source.
          this.map.addSource("iss", {
            type: "geojson",
            data: geojson,
          });
          // Add the rocket symbol layer to the map.
          this.map.addLayer({
            id: "iss",
            type: "symbol",
            source: "iss",
            layout: {
              "icon-image": "car-location", // reference the image
              "icon-size": 0.25,
            },
            setPaintProperty:('my-layer', 'fill-color', '#faafee')
          });

          // Update the source from the API every 2 seconds.
          const updateSource = setInterval(async () => {
            const geojson = await getLocation(updateSource);
            this.map.getSource("iss").setData(geojson);
          }, 1000);

          async function getLocation(updateSource) {
            // Make a GET request to the API and return the location of the ISS.
            let latitude;
            let longitude;

            const options = {
              enableHighAccuracy: true,
              timeout: 0,
              maximumAge: 0,
            };

            function success(pos) {
              const crd = pos.coords;
              localStorage.setItem("latitude", crd.latitude);
              localStorage.setItem("longitude", crd.longitude);
              directions.setOrigin([localStorage.getItem("longitude"),localStorage.getItem("latitude")]);
            }

            function error(err) {
              console.warn(`ERROR(${err.code}): ${err.message}`);
            }
            navigator.geolocation.getCurrentPosition(success, error, options);
            // Fly the map to the location.
            // this.map.flyTo({
            //   center: [longitude, latitude],
            //   speed: 0.5,
            // });
            // Return the location of the ISS as GeoJSON.
            return {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [
                      localStorage.getItem("longitude"),
                      localStorage.getItem("latitude"),
                    ],
                  },
                },
              ],
            };
          }
        });

        geocoder.on("result", (e) => {
          const marker = new mapboxgl.Marker({
            draggable: false,
            color: "#1A6300",
          })
            .setLngLat(e.result.center)
            .addTo(this.map);
          this.center = e.result.center;
          this.coordinatesStart = e.result.center;
          //   marker.on("dragend", (e) => {//   });
        });
      } catch (err) {
        console.log("map error", err);
      }
    },
    // async getLocation() {
    //   try {
    //     this.loading = true;
    //     const response = await this.$api.get(
    //       `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.center[0]},${this.center[1]}.json?access_token=${this.access_token}`
    //     );
    //     this.loading = false;
    //     console.log(response);
    //     this.location = response.features[0].place_name;
    //   } catch (err) {
    //     this.loading = false;
    //     console.log(err);
    //   }
    // },
    // copyLocation() {
    //   if (this.location) {
    //     navigator.clipboard.writeText(this.location);
    //     alert("Location Copied");
    //   }
    //   return;
    // },
    getLocation() {
      const options = {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0,
      };

      function success(pos) {
        const crd = pos.coords;
        this.center = [crd.latitude, crd.longitude];
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
    },
    addMarker() {
      for (var item of this.list_location) {
        // Create a DOM element for each marker.
        const el = document.createElement("div");
        el.style.backgroundImage = "url(https://i.ibb.co/pQm0f6L/Group-51.png)";
        el.className = "marker";
        el.textContent = item.slot;
        el.style.backgroundSize = "100%";

        el.addEventListener("click", () => {
          window.alert(item.name);
        });

        // Add markers to the map.
        new mapboxgl.Marker(el).setLngLat(item.coordinates).addTo(this.map);
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
  width: 100%;
  height: 80vh;
  background-color: aqua;
}
.geocoder {
  width: 50%;
  border: 2px solid;
  margin: auto;
}
.mapboxgl-ctrl-geocoder {
  min-width: 100%;
}
</style>