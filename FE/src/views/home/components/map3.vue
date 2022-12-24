<template>
  <div class="main">
    <!-- <div id="geocoder" class="geocoder"></div> -->
    <div class="flex">
      <!-- Map Display here -->
      <div class="map-holder">
        <div id="map"></div>
      </div>
      <div id="infomation"  >
        <div class="info">
          <div @click="close" ><b-icon class="btnClose" icon="x-lg"></b-icon></div>
          <img id="content_image"></img>
          <div class="content_info">
            <div id="content_name"></div>
            <div id="content_rate">Đánh giá :⭐⭐⭐⭐⭐</div>
            <div id="content_address">Đại chỉ : </div>
              <b-button @click="direct" variant="success">chỉ đường</b-button>
              <b-button v-show="!show_order" @click="checkLogin" variant="success">đặt chỗ</b-button>
              <div v-show="show_order" class="order_content">
                vui lòng nhập biển số xe của bạn:
                <input type="text" v-model="licensePlate">
                <b-button @click="order" variant="success">đặt chỗ</b-button>
              </div>
          </div>
        </div>
        <div id="content_introduce"></div>
        <div class="owner">
          <div id="owner_image"></div>
          <div id="owner_name">Chủ xe : </div>
        </div>
        <div class="reviews"></div>
      </div>
    </div>
    <Loading :showLoading="isLoading" />
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
import Loading from "@/components/common/Loading"

export default {
  components: {
    MglMap,
    MglMarker,
    Loading,
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
      licensePlate: "",
      showInfo: false,
      isLoading: false,
      show_order: false,
    };
  },

  mounted() {
    // this.list_location = this.$CONST.LOCATION_DATA;
    this.createMap();
    this.callApi();
  },
  created() {
  },
  methods: {
    callApi() {
      this.$api.get("parkings").then((response) => {
        console.log(response);
        this.list_location = response;
      for (var item of this.list_location) {
          // Create a DOM element for each marker.
          const el = document.createElement("div");
          el.style.backgroundImage =
            "url(https://i.ibb.co/pQm0f6L/Group-51.png)";
          el.className = "marker";
          el.textContent = item.currentslot;
          el.style.backgroundSize = "100%";
          el.nodeValue = item.name;
          (function (_item,_map) {
            el.addEventListener("click", function () {
              // Fly the map to the location.
            var Flyto = _item.coordinates.split(',');
            _map.flyTo({
              center: [Flyto[0],Flyto[1]-0.003],
              speed: 0.5,
              zoom: 15,
            });
            let styles = `display: block `;
            document.getElementById("infomation").style = styles;
            // document.getElementById("content_image").style = 'background-image: url("'+ _item.image +'");';
            // console.log( _item.image);
            let url = btoa(_item.image.data.reduce((data, byte) => data + String.fromCharCode(byte), ''));
            let base64img = "data:image/jpeg;base64," + url;
            document.querySelector("#content_image").src = base64img;
            document.getElementById("content_name").innerHTML = _item.name;
            document.getElementById("content_address").innerHTML = "Địa chỉ : "+_item.address;
            document.getElementById("content_introduce").innerHTML ="Mô tả : "+ _item.introduce;
            document.getElementById("owner_name").innerHTML ="Chủ sở hữu: "+ _item.ownerName;
            localStorage.setItem("Destination",_item.coordinates);
            let order= {
              id: _item.id,
              slot: _item.currentslot,
              maxslot: _item.maxslot,
            }
            localStorage.setItem("order", JSON.stringify(order));
            // Return the location of the ISS as GeoJSON.ownerName
              // directions.setDestination(_item.coordinates); // can be address
            
            });
          })(item,this.map);
          // Add markers to the map.
          new mapboxgl.Marker(el).setLngLat(item.coordinates.split(',')).addTo(this.map);
        }
      });
        
    },
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

        // document
        //   .getElementById("geocoder")
        //   .appendChild(geocoder.onAdd(this.map));

        const nav = new mapboxgl.NavigationControl();
        this.map.addControl(nav, "top-right");

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
      this.directions.setDestination(localStorage.getItem("Destination").split(','));
      this.map.flyTo({
              center: [localStorage.getItem("longitude"),
                      localStorage.getItem("latitude")],
              speed: 0.5,
              zoom: 15,
            });
      this.close();
    },
    order() {
       let order = JSON.parse(localStorage.getItem("order"));
       let datetime = new Date().toLocaleString();
        if(order.slot > 0 ){
          this.$api.post("parkings/order", {
            orderId: "",
            userId: localStorage.getItem("userId"),
            parkingId: order.id,
            userName: localStorage.getItem("user"),
            licensePlate: this.licensePlate,
            time: datetime,
            status: 0,
          }).then((response) => {
            // console.log(response);
            if (response.success) {
              this.$api.post("parkings/" + order.id, {
                "currentslot": order.slot-1
              }).then((response) => {
                if (response.success) {
                  alert("đặt chỗ thành công");
                  this.direct();
                }else {
                  alert("đặt chỗ thất bại");
                }
              });
            } else {
              alert("đặt chỗ thất bại");
            }
          });
        }else {
          alert("bãi đỗ xe hết chỗ");
        }
    },
    checkLogin() {
      if(localStorage.getItem("userId") == null ){
        this.$router.push("/login");
      }
      else {
        this.show_order = true
      }
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
  height: 75vh;
}
#map {
  height: 75vh;
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
  padding: 30px;
  position: absolute;
  z-index: 2;
  top: 410px;
  background-color: rgb(255, 255, 255);
  display: none;
  border-radius: 5px;
  box-shadow: 0px 1px 20px;
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
.content_info {
  width: 50%;
  display: flex;
    flex-direction: column;
    justify-content: space-between;
}
#content_name {
  font-size: 24px;
    font-variant: all-petite-caps;
}
.order_content input {
    width: 100%;
}
@media screen and (max-width: 600px) {
  .info{
    flex-direction: column;
}
#content_image[data-v-4f07a0cc] {
    width: 100%;
    margin-right: 0;
}
.content_info {
    width: 100%;
}
#infimation {
  top: 350px;
}
}
@media screen and (max-width: 500px) {
  #content_image {
    height: 150px;
  }
  .mapboxgl-ctrl-top-left {
    top: auto;
    left: 0;
    bottom: 0;
}
}

</style>