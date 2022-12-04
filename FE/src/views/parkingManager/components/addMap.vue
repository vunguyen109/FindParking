<template>
  <div class="main">
    <h1>Thêm bãi đỗ xe</h1>
    <div class="flex">
      <!-- Map Display here -->
      <div class="map-holder">
        
    <div id="geocoder" class="geocoder"></div>
        <div class="container_map">
          <div id="map"></div>
        </div>
        <div class="suggestions">
          kéo thả định vị <img src="@/assets/marker.jpg" alt=""> tới vị trí bãi đỗ xe của bạn 
          hặc tìm kiếm trên tranh tìm kiếm. <br>Bấm <img src="@/assets/location.jpg" alt=""> để biết vị trí của bạn (có thể sai lệch trên lap top hặc máy tính để bàn)
        </div>
      </div>
      <div class="info">
        <div class="data">
        <input v-model="select.name" placeholder="name" type="text" />
        <input v-model="select.address" placeholder="address"  type="text" />
        <input v-model="select.introduce" placeholder="introduce"  type="text" />
        <input type="file" @change="getImage" accept="image/*" />
        <img id="image" src="" alt="" />
        <input v-model="select.price" placeholder="price"  type="text" />
        <input v-model="select.maxslot" placeholder="max slot"  type="text" />
        <input v-model="select.currentslot" placeholder="current slot"  type="text" />
        <button @click="add" class="add">thêm</button>
        <button @click="back" class="add" style="background-color: white; color: #00B661;">quay lại</button>
        </div>
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

import "mapbox-gl/dist/mapbox-gl.css"; // Updating node module will keep css up to date.
import "mapbox-gl/dist/mapbox-gl.css";
import Loading from "@/components/common/Loading";
import FormData from 'form-data';

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
      coordinates: [108.2096, 16.059945],
      load: 0,
      select: {
        id: 0,
        name: "",
        address: "",
        coordinates: "",
        introduce: "",
        image: "",
        imageName: "",
        price: "",
        slot: "",
      },
    };
  },

  mounted() {
    // this.list_location = this.$CONST.LOCATION_DATA;
    this.createMap();
  },
  created() {},
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
        this.map.addControl(nav, "top-right");

        const locate = new mapboxgl.GeolocateControl({
          trackUserLocation: true,
          showUserHeading: true,
        });

        this.map.addControl(locate, "bottom-right");
        // add marker

        this.map.on("load", async () => {
          // locate.trigger();
          const marker = new mapboxgl.Marker({
            draggable: true,
            color: "#1A6300",
          })
            .setLngLat(this.center)
            .addTo(this.map);
          marker.on("dragend", () => {
            const lngLat = marker.getLngLat();
            this.select.coordinates = lngLat.lng + "," + lngLat.lat;
            console.log(this.select.coordinates);
          });
        });
        geocoder.on("result", (e) => {
          const marker = new mapboxgl.Marker({
            draggable: false,
            color: "#1A6300",
          })
            .setLngLat(e.result.center)
            .addTo(this.map);
          this.center = e.result.center;
          console.log(e.result.center);
          //   marker.on("dragend", (e) => {//   });
        });
      } catch (err) {
        console.log("map error", err);
      }
    },
    getImage() {
      var preview = document.querySelector("#image");
      var file = document.querySelector("input[type=file]").files[0];
      this.select.imageName = file.name
      var reader = new FileReader();
      reader.onloadend = function () {
        preview.src = reader.result;
        console.log(reader);
        
        localStorage.setItem("image", reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        preview.src = "";
      }

      
    },
    add() {
      this.$api.post("parkings/add", {
          id: "",
          image: {
            data :localStorage.getItem("image"),
            name : this.select.imageName,
          },
          name: this.select.name,
          coordinates: this.select.coordinates,
          address: this.select.address,
          introduce: this.select.introduce,
          price: this.select.price,
          maxslot: this.select.maxslot,
          currentslot: this.select.currentslot,
          owner: localStorage.getItem("userId"),
        })
        .then((response) => {
          if(response.success) {
                  location.reload();
                }else {
                    alert("thêm thất bại ! \n bạn đã kéo thả địa điểm hay điền đủ thông tin chưa ?");
                }
        });
    },
    back () {
      this.$emit("changeView", 1);
    }
  },
};
</script>

<style lang="scss" scoped>

@media screen and (max-width: 600px) {
  .flex {
    flex-direction: column;
  }
  .map-holder {
    width: 100% !important;
  }
  .info {
  width: 100% !important;
  }
  
}
.flex {
  display: flex;
  justify-content: space-around;
}
h1 {
  border-bottom: 4px solid #00B661;
  color: #000;
}
.map-holder {
  width: 60%;
  // height: 444px;
  .geocoder {
    position: absolute;
    width: 55%;
    border-radius: 5px;
    top: 100px;
  }
  .container_map {
    height: 444px;
  }
  #map {
    height: 444px;
  }
  .suggestions {
    color: rgb(0, 0, 0);
    font-size: 20px;
    font-weight: 700;
    margin-top: 40px;
    text-align: center;
    margin-bottom: 20px;
  }
}
.info {
  width: 40%;
  padding: 20px;
  background-color: #00B661;
  .data {
    
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  img {
    max-width: 260px;
    margin: auto;
  }
    input {
    border-radius: 5px;
    height: 40px;
  }
  .add {
    background-color: #000;
  color: #fff;
  padding: 0 20px;
  height: 50px;
  font-weight: 600;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  }
}
}
</style>