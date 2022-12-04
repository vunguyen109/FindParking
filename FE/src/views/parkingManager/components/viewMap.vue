<template>
  <div class="main_content">
    <h1>Quản lý bãi đỗ xe</h1>
    <div class="pc_view">
      <v-table :data="managerData.list_location" :currentPage.sync="currentPage" :pageSize="5"
        @totalPagesChanged="totalPages = $event" class="table">
        <thead slot="head">
          <th>tên bãi đỗ xe</th>
          <th>địa chỉ</th>
          <th>mô tả</th>
          <th class="image_col">hình ảnh</th>
          <th>giá tiền</th>
          <th>số chỗ</th>
          <th>thao tác</th>
        </thead>
        <tbody slot="body" slot-scope="{ displayData }">
          <tr v-for="row in displayData" :key="row.guid" v-show="account == 0 || account == 1 && row.owner == userId">
            <td>{{ row.name }}</td>
            <td>{{ row.address }}</td>
            <td>{{ row.introduce }}</td>
            <td class="image_col"><img class="image" :src="row.image" alt="" /></td>
            <td>{{ row.price }} VND</td>
            <td>{{ row.currentslot }}/{{ row.maxslot }}</td>
            <td>
              <b-icon class="icon" @click="show_list(row.id)" icon="card-list" variant="primary"
                font-scale="2"></b-icon>
              <b-icon class="icon" @click="show(row)" icon="pencil-square" variant="primary" font-scale="2"></b-icon>
              <b-icon class="icon" @click="remove(row.id)" icon="x-square-fill" variant="danger"
                font-scale="2"></b-icon>
            </td>
          </tr>
        </tbody>
      </v-table>

      <smart-pagination class="pagination" :currentPage.sync="currentPage" :totalPages="totalPages" />
    </div>

    <div class="mobile_view">
      <v-table :data="managerData.list_location" :currentPage.sync="currentPage" :pageSize="5"
        @totalPagesChanged="totalPages = $event" class="table">
        <thead slot="head">
        </thead>
        <tbody class="table-body" slot="body" slot-scope="{ displayData }">
          <label v-for="row in displayData" :key="row.guid">
            <tr>
              <th>tên bãi đỗ xe</th>
              <td>{{ row.name }}</td>
            </tr>
            <tr>
              <th>địa chỉ</th>
              <td>{{ row.address }}</td>
            </tr>
            <tr>
              <th>mô tả</th>
              <td>{{ row.introduce }}</td>
            </tr>
            <tr>
              <th class="image_col">hình ảnh</th>
              <td class="image_col"><img class="image" :src="row.image" alt="" /></td>
            </tr>
            <tr>
              <th>giá tiền</th>
              <td>{{ row.price }} VND</td>
            </tr>
            <tr>
              <th>số chỗ tr</th>
              <td>{{ row.currentslot }}/{{ row.maxslot }}</td>
            </tr>
            <tr>
              <th>thao tác</th>
              <td>
                <b-icon class="icon" @click="show_list(row.id)" icon="card-list" variant="primary"
                  font-scale="2.3"></b-icon>
                <b-icon class="icon" @click="show(row)" icon="pencil-square" variant="primary"
                  font-scale="2.1"></b-icon>
                <b-icon class="icon" @click="remove(row.id)" icon="x-square-fill" variant="danger" font-scale="2">
                </b-icon>
              </td>
            </tr>
          </label>

        </tbody>
      </v-table>

      <smart-pagination class="pagination" :currentPage.sync="currentPage" :totalPages="totalPages" />
    </div>
    <div class="popup" v-show="show_popup">
      <h1>Thông tin bãi đỗ xe</h1>
      <b-icon class="close" @click="show_popup = false" icon="x-lg" font-scale="2"></b-icon>
      <input v-model="select.name" type="text" />
      <input v-model="select.address" type="text" />
      <input v-model="select.introduce" type="text" />
      <input type="file" @change="getImage" accept="image/*">
      <img id="image" src="" alt="" />
      <input v-model="select.price" type="text" />
      <div>
        <b-icon @click="decreaseValue" icon="dash-circle-fill" variant="light" font-scale="2"></b-icon>
        <input v-model="select.slot" type="text" />
        <b-icon @click="increaseValue" icon="plus-circle-fill" variant="light" font-scale="2"></b-icon>
      </div>
      <button @click="update">change</button>
    </div>
    <div class="popup" v-if="show_list_popup">
      <h1>Danh sách đặt chỗ</h1>
      <b-icon class="close" @click="show_list_popup = false" icon="x-lg" font-scale="2"></b-icon>
      <div class="pc_view">
        <table class="table">
          <thead slot="head">
            <th>tên chủ xe</th>
            <th>biển số xe</th>
            <th>thời gian đặt</th>
            <th>xác nhận</th>
          </thead>
          <tbody>
            <tr class="child_popup" v-for="row in list_order" :key="row.orderId">
              <td>{{ row.userName }}</td>
              <td>{{ row.licensePlate }}</td>
              <td>{{ row.time }}</td>
              <td><label class="switch">
                  <input type="checkbox" v-model="order_status" @change="change_status(row.orderId)">
                  <span class="slider round"></span>
                </label>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
      <div class="mobile_view">
        <table class="table">
          <thead slot="head">
          </thead>
          <tbody>
            <label v-for="row in list_order" :key="row.orderId">
              <tr>
                <th>tên chủ xe</th>
                <td class="child_popup">{{ row.userName }}</td>
              </tr>
              <tr>
                <th>biển số xe</th>
                <td class="child_popup">{{ row.licensePlate }}</td>
              </tr>
              <tr>
                <th>thời gian đặt</th>
                <td class="child_popup">{{ row.time }}</td>
              </tr>
              <tr>
                <th>xác nhận</th>
                <td class="child_popup"><label class="switch">
                    <input type="checkbox" v-model="order_status" @change="change_status(row.orderId)">
                    <span class="slider round"></span>
                  </label>
                </td>
              </tr>
            </label>
          </tbody>
        </table>
      </div>
    </div>
    <button class="add" @click="add">thêm bãi đỗ xe</button>

  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  props: {
    managerData: {
      list_location: {},
      render: false,
    },
  },
  data() {
    return {
      select: {
        id: 0,
        name: "",
        address: "",
        introduce: "",
        imageName: "",
        price: "",
        slot: 0,
        maxslot: 0,

      },
      currentPage: 1,
      totalPages: 0,
      show_popup: false,
      show_list_popup: false,
      list_order: {},
      order_status: "",
      account: 0,
      userId: 0,
    };
  },
  created() {
    this.init();
    this.account = localStorage.getItem("account")
    this.userId = localStorage.getItem("userId")
  },
  computed: {
    rows() {
      return this.managerData.list_location.length;
    },
  },
  methods: {
    init() { },

    remove(id) {
      this.$api.post("parkings/delete/" + id).then((response) => {
        // console.log(response);
        if (response.success) {
          alert("xóa thành công");
        } else {
          alert("xóa thất bại");
        }
        location.reload();
      });
    },
    show(item) {
      this.show_popup = true;
      this.select.id = item.id;
      this.select.name = item.name;
      this.select.address = item.address;
      this.select.introduce = item.introduce;
      document.querySelector("#image").src = item.image;
      this.select.price = item.price;
      this.select.slot = item.currentslot;
      this.select.maxslot = item.maxslot;
    },
    update() {
      if (this.select.imageName == "") {
        this.$api.post("parkings/" + this.select.id, {
          "name": this.select.name,
          "address": this.select.address,
          "introduce": this.select.introduce,
          "price": this.select.price,
          "currentslot": this.select.slot
        }).then((response) => {
          // console.log(response);
          if (response.success) {
            alert("cập nhật thành công");
            location.reload();
          } else {
            alert("cập nhật thất bại");
          }
        });
      } else {
        this.$api.post("parkings/" + this.select.id, {
          "name": this.select.name,
          "address": this.select.address,
          "introduce": this.select.introduce,
          "image": {
            data: localStorage.getItem("image"),
            name: this.select.imageName,
          },
          "price": this.select.price,
          "currentslot": this.select.slot
        }).then((response) => {
          // console.log(response);
          if (response.success) {
            alert("cập nhật thành công");
            location.reload();
          } else {
            alert("cập nhật thất bại");
          }
        });
      }
      location.reload();
    },
    getImage() {
      var preview = document.querySelector('#image');
      var file = document.querySelector('input[type=file]').files[0];
      this.select.imageName = file.name;
      var reader = new FileReader();
      reader.onloadend = function () {
        preview.src = reader.result;
        localStorage.setItem("image", reader.result);
      }
      if (file) {
        reader.readAsDataURL(file);
      } else {
        preview.src = "";
      }
    },
    add() {
      this.$emit("changeView", 2);
    },
    decreaseValue() {
      if (this.select.slot > 0) {
        this.select.slot--;
      }
    },
    increaseValue() {
      if (this.select.slot < this.select.maxslot) {
        this.select.slot++;
      }
    },
    show_list(id) {
      this.$api.get("parkings/order/" + id).then((response) => {
        this.list_order = response;
        this.show_list_popup = true;
      });
    },
    change_status(id) {
      this.$api.post("parkings/confirmOrder/" + id, {
        status: this.order_status ? 1 : 0,
      }).then((response) => {
        if (response.success) {
          alert("cập nhật thành công");
        } else {
          alert("cập nhật thất bại");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.main_content {
  display: flex;
  flex-direction: column;

  margin: 50px 5%;

}

h1 {
  border-bottom: 4px solid #00B661;
  color: #000;
}

.mobile_view {
  display: none !important;
}

.image {
  width: 200px;
}

.popup {
  display: flex;
  position: absolute;
  width: 80%;
  max-width: 850px;
  top: 120px;
  right: 10%;
  background-color: #00B661;
  flex-direction: column;
  padding: 45px;
  row-gap: 5px;
  border-radius: 5px;
  z-index: 3;
  box-shadow: 0px 1px 20px;

  div {
    display: flex;
    column-gap: 10px;
    align-items: center;

    .icon {
      cursor: pointer;
    }
  }

  input {
    border-radius: 5px;
    height: 40px;
  }

  .child_popup {
    background-color: #fff;
  }
}

.table {
  font-size: 18px;
  text-align: center;
  border: 2px solid #00B661;

  th {
    height: 54px;
    font-weight: 600;
    background-color: #00B661;
    border: 1px solid #fff;
  }

  tr {
    td {

      border: 1px solid #00B661;
      vertical-align: middle;

      .icon {
        cursor: pointer;
      }
    }
  }
}

.add {
  background-color: #00B661;
  color: #fff;
  padding: 0 20px;
  height: 50px;
  font-weight: 600;
  font-size: 20px;
  border: none;
  border-radius: 5px;
}

.pagination {

  justify-content: center;
}

#image {
  width: 200px;
  margin: auto;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #2196F3;
}

input:focus+.slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

@media screen and (max-width: 1000px) {
  .table {
    .image_col {
      display: none;
    }
  }
}

@media screen and (max-width: 850px) {
  .pc_view {
    display: none !important;
  }

  .mobile_view {
    display: block !important;

    .table-body {
      label {
        width: 100%;

        tr {
          width: 100%;

          th{
            width: 18%;
          }
          td {
            width: 70%;
          }
        }
      }
    }
  }
}
</style>
