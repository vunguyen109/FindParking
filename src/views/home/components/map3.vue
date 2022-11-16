<template>
  <div class="main">
    <div id="geocoder" class="geocoder"></div>
    <div class="flex">
      <!-- Map Display here -->
      <div class="map-holder">
        <div id="map"></div>
      </div>
      <div id="infomation"  >
        <div class="info">
          <div @click="close" ><b-icon class="btnClose" icon="x-lg"></b-icon></div>
          <div id="content_image"></div>
          <div class="content_info">
            <div id="content_name"></div>
            <div id="content_rate"></div>
            <div id="content_address"></div>
            <button @click="direct">chỉ đường</button>
          </div>
        </div>
        <div id="content_introduce"></div>
        <div class="owner">
          <div id="owner_image"></div>
          <div id="owner_name">owner_name</div>
        </div>
        <div class="reviews"></div>
      </div>
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
  props: {
    mapLoad: {
      load: false,
    },
  },
  data() {
    return {
      loading: false,
      location: "",
      access_token:
        "pk.eyJ1IjoidnVuZ3V5ZW45OSIsImEiOiJjbDl3YWg0ZWMyamNqM3ZvdXYyOXVlNjh3In0.ymtgzvce8mLHH2uh22WC-Q",
      center: [108.2096, 16.059945],
      map: {},
      directions: {},
      list_location: "",
      coordinates: [108.2096, 16.059945],
      load: 0,
      showInfo: false,
    };
  },

  mounted() {
    this.list_location = this.$CONST.LOCATION_DATA;
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
          zoom: 12,
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

        this.directions  = new MapboxDirections({
          accessToken: this.access_token,
          unit: "metric",
          profile: "mapbox/driving-traffic",
          annotations: "congestion",
          voiceLocale: "vi",
          language: "vi",
          alternatives: true,
          continue_straight: true,
          interactive: false,
        });

        this.map.addControl(this.directions, "top-left");

        const locate = new mapboxgl.GeolocateControl({
          // trackUserLocation: true,
          // showUserHeading: true,
        });

        // this.map.addControl(locate, "bottom-right");
        // add marker

        for (var item of this.list_location) {
          // Create a DOM element for each marker.
          const el = document.createElement("div");
          el.style.backgroundImage =
            "url(https://i.ibb.co/pQm0f6L/Group-51.png)";
          el.className = "marker";
          el.textContent = item.slot;
          el.style.backgroundSize = "100%";
          el.nodeValue = item.name;
          (function (_item,_map,_showInfo) {
            el.addEventListener("click", function () {
              // Fly the map to the location.
            console.log(_map);
            _map.flyTo({
              center: [_item.coordinates[0],_item.coordinates[1]-0.003],
              speed: 0.5,
              zoom: 15,
            });
            let styles = `display: block `;
            document.getElementById("infomation").style = styles;
            document.getElementById("content_image").style = 'background-image: url("'+ _item.image +'");';
            document.getElementById("content_name").innerHTML = _item.name;
            document.getElementById("content_address").innerHTML = _item.address;
            document.getElementById("content_introduce").innerHTML = _item.introduce;
            localStorage.setItem("Destination",_item.coordinates);
            // Return the location of the ISS as GeoJSON.
              // directions.setDestination(_item.coordinates); // can be address
            });
          })(item,this.map,this.showInfo);

          // Add markers to the map.
          new mapboxgl.Marker(el).setLngLat(item.coordinates).addTo(this.map);
        }
        this.map.on("load", async () => {
          // locate.trigger();
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
          });

          // Update the source from the API every 2 seconds.
          const updateSource = setInterval(async () => {
            const geojson = await getLocation(updateSource);
            this.map.getSource("iss").setData(geojson);
            this.directions.setOrigin([
                  localStorage.getItem("longitude"),
                  localStorage.getItem("latitude"),
                ]);
            if (!this.mapLoad.load) {
              this.mapLoad.load = true;
              this.$emit("checkLoad", this.mapLoad.load);
            }
          }, 1000);

          async function getLocation(updateSource) {
            // Make a GET request to the API and return the location of the ISS.
            if (navigator.geolocation) {
              var id, target, options;

              function success(pos) {
                var crd = pos.coords;
                localStorage.setItem("latitude", crd.latitude);
                localStorage.setItem("longitude", crd.longitude);
                
                if (
                  target.latitude === crd.latitude &&
                  target.longitude === crd.longitude
                ) {
                  console.log("Congratulations, you reached the target");
                  navigator.geolocation.clearWatch(id);
                }
              }

              function error(err) {
                console.warn("ERROR(" + err.code + "): " + err.message);
              }

              target = {
                latitude: 0,
                longitude: 0,
              };

              options = {
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 0,
              };

              id = navigator.geolocation.watchPosition(success, error, options);
            } else {
              alert("can't get location");
            }

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
    close() {
      document.getElementById("infomation").style = `display: none`;
    },
    direct() {
      this.directions.setDestination(localStorage.getItem("Destination"));
      this.map.flyTo({
              center: [localStorage.getItem("longitude"),
                      localStorage.getItem("latitude")],
              speed: 0.5,
              zoom: 15,
            });
      this.close();
    }
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
.mapbox-directions-route-summary + .mapbox-directions-instructions {
  margin: 3px;
  overflow: auto;
}
#infomation {
  width: 80%;
  height: 50vh;
  padding: 30px;
  position: absolute;
  z-index: 2;
  bottom: -10%;
  background-color: rgb(255, 255, 255);
  display: none;
  border-radius: 5px;

}
.info {
  display: flex;
}
#content_image {
      width: 50%;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-right: 30px;
    border-radius: 5px;
}
.btnClose {
      position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
}
#content_name {
  font-size: 24px;
    font-variant: all-petite-caps;
}
</style>