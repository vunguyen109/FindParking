<template>
  <section class="parent">
    <b-overlay :show="isLoading" rounded="sm">
      <viewlist
        v-if="managerData.viewsPage == 1"
        :managerData="managerData"
        @changeView="changeView"
      ></viewlist>
      <addMap
        v-if="managerData.viewsPage == 2"
        @changeView="changeView"
      ></addMap>
    </b-overlay>
  </section>
</template>

<script>
import viewlist from "./components/viewMap.vue";
import addMap from "./components/addMap.vue";

export default {
  name: "parkingManager",
  data() {
    return {
      managerData: {
        viewsPage: 1,
        list_location: {},
        lelect: "",
        render: false,
      },
      isLoading: false,
    };
  },
  components: {
    viewlist,
    addMap,
  },
  created() {
    this.isLoading = true;
    this.init();
  },
  methods: {
    init() {
      this.$api.get("parkings").then((response) => {
        console.log(response);
        this.managerData.list_location = response;
        for (let index = 0;index < this.managerData.list_location.length;index++) {
          let url = btoa(this.managerData.list_location[index].image.data.reduce(
              (data, byte) => data + String.fromCharCode(byte),""
            )
          );
          this.managerData.list_location[index].image ="data:image/jpeg;base64," + url;
        }
        this.managerData.render = true;
        this.isLoading = false;
      });
    },
    changeView(value) {
      this.managerData.viewsPage = value;
    },
  },
};
</script>
<style lang="scss" scoped>
.parent {
}
</style>
