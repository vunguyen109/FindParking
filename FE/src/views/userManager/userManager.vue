<template>
  <div class="content">
    <h1>Quản lý người dùng</h1>
    <div class="pc_view">
      <v-table :data="list_user" :currentPage.sync="currentPage" :pageSize="5" @totalPagesChanged="totalPages = $event"
        class="table">
        <thead slot="head">
          <th>tên người dùng</th>
          <th>loại tài khoản</th>
          <th>địa chỉ email</th>
          <th>số điện thoại</th>
          <th>thao tác</th>
        </thead>
        <tbody slot="body" slot-scope="{ displayData }">
          <tr v-for="row in displayData" :key="row.guid">
            <td>{{ row.name }}</td>
            <td v-if="row.account == 1">chủ bãi đỗ</td>
            <td v-else>người dùng</td>
            <td>{{ row.email }}</td>
            <td>{{ row.phone }}</td>
            <td>
              <label class="switch">
                    <input type="checkbox" v-model="row.active" @change="change_status(row.userId)">
                    <span class="slider round"></span>
                  </label>
              <b-icon class="icon" @click="remove(row.userId)" icon="x-square-fill" variant="danger"
                font-scale="2"></b-icon></td>
          </tr>
        </tbody>
      </v-table>
      <smart-pagination class="pagination" :currentPage.sync="currentPage" :totalPages="totalPages" />
    </div>
    <div class="mobile_view">
      <v-table :data="list_user" :currentPage.sync="currentPage" :pageSize="5"
        @totalPagesChanged="totalPages = $event" class="table">
        <thead slot="head">
        </thead>
        <tbody class="table-body" slot="body" slot-scope="{ displayData }">
          <label v-for="row in displayData" :key="row.guid">
            <tr>
              <th>list_user</th>
              <td>{{ row.name }}</td>
            </tr>
            <tr>
              <th>loại tài khoản</th>
              <td v-if="row.account == 1">chủ bãi đỗ</td>
              <td v-else>người dùng</td>
            </tr>
            <tr>
              <th>địa chỉ email</th>
              <td>{{ row.email }}</td>
            </tr>
            <tr>
              <th>số điện thoại</th>
              <td>{{ row.phone }} VND</td>
            </tr>
            <tr>
              <th>thao tác</th>
              <td>
                <label class="switch">
                    <input type="checkbox" v-model="row.active" @change="change_status(row.userId)">
                    <span class="slider round"></span>
                  </label>
                <b-icon class="icon" @click="remove(row.userId)" icon="x-square-fill" variant="danger"
                font-scale="2"></b-icon></td>
            </tr>
          </label>

        </tbody>
      </v-table>
      <smart-pagination class="pagination" :currentPage.sync="currentPage" :totalPages="totalPages" />
    </div>
  </div>
</template>

<script>
export default {
  name: "userManager",
  data() {
    return {
      list_user: {},
      currentPage: 1,
      totalPages: 0,
      user_active: false,
    };
  },
  components: {
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$api.get("users/").then((response) => {
        this.list_user = response;
        for (const key in this.list_user) {
          if (Object.hasOwnProperty.call(this.list_user, key)) {
            const element = this.list_user[key];
            if(element.active == 1){
              this.list_user[key].active = true;
            }else{
              this.list_user[key].active = false;
            }
            
          }
        }
      });
    },
    remove(id) {
      this.$api.post("users/delete/" + id).then((response) => {
        if (response.success) {
          alert("xóa thành công");
        } else {
          alert("xóa thất bại");
        }
        location.reload();
      });
    },
    change_status(id) {
      for (const key in this.list_user) {
        if (Object.hasOwnProperty.call(this.list_user, key)) {
          const element = this.list_user[key];
          if(element.userId == id){
            console.log(this.list_user[key].active);
            element.active = this.list_user[key].active?1:0;
            this.user_active  = element.active;
            console.log(this.user_active);
          }
        }
      }
      this.$api.post("users/active/" + id, {
        active: this.user_active,
      }).then((response) => {
        if (response.success) {
          alert("cập nhật thành công");
        } else {
          alert("cập nhật thất bại");
        }
      });
    }
  }
}
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
.pc_view {
  display: block;
}
.mobile_view {
  display: none;
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


.pagination {

  justify-content: center;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px !important;
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


@media screen and (max-width: 1000px) {}

@media screen and (max-width: 850px) {
  .pc_view {
    display: none;
  }

  .mobile_view {
    display: block;
  }
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
</style>