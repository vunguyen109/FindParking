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
          <td>{{ row.currentslot }}/{{row.maxslot}}</td>
          <td>
            <b-icon class="icon" @click="show(row)" icon="pencil-square" variant="primary" font-scale="2"></b-icon>
            <b-icon class="icon" @click="remove(row.id)" icon="x-square-fill" variant="danger" font-scale="2"></b-icon>
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
        <tbody slot="body" slot-scope="{ displayData }" >
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
            <td>{{ row.currentslot }}/{{row.maxslot}}</td>
          </tr>
          <tr>
            <th>thao tác</th>
            <td>
              <b-icon class="icon" @click="show(row)" icon="pencil-square" variant="primary" font-scale="2"></b-icon>
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
        image: "",
        price: "",
        slot: 0,
        maxslot: 0,
      },
      currentPage: 1,
      totalPages: 0,
      show_popup: false,
      account: 0,
      userId: 0,
    };
  },
  created() {
    this.init();
    this.account = localStorage.getItem("account")
    this.userId = localStorage.getItem("userId")
    console.log(this.account+":"+this.userId);
  },
  computed: {
    rows() {
      return this.managerData.list_location.length;
    },
  },
  methods: {
    init() { },

    remove(id) {
      alert("parkings/" + id);
      this.$api.post("parkings/delete/" + id).then((response) => {
        // console.log(response);
        if (response.success) {
          alert("xóa thành công");
        } else {
          alert("xóa thất bại");
        }
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
      this.select.image = localStorage.getItem("image")
      console.log(this.select);
      this.$api.post("parkings/" + this.select.id, {
        "name": this.select.name,
        "address": this.select.address,
        "introduce": this.select.introduce,
        // "image":this.select.image,
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
    },
    getImage() {
      var preview = document.querySelector('#image');
      var file = document.querySelector('input[type=file]').files[0];
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
    decreaseValue () {
      if(this.select.slot > 0 ) {
        console.log("check");
        this.select.slot --;
      }
    },
    increaseValue () {
      if(this.select.slot < this.select.maxslot ) {
        this.select.slot ++;
      }
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
  display: none;
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
}

.table {
  font-size: 18px;
  text-align: center;
  border: 2px solid #00B661;

  th {
    height: 54px;
    font-weight: 600;
    background-color: #00B661;
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
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
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
    display: none;
  }
  .mobile_view {
    display: block;
  }
}
</style>
