<template>
  <section class="SI">
    <div class="update">
      <h1 class="update-heading">Cập nhật tài khoản</h1>
        <div class="info">
          <label for="username" class="update-label">Username</label>
          <input type="text" id ="username" class ="update-input" v-model="userDetail.name" placeholder="username">
          <label for="password" class="update-label">Password</label>
          <div style="position: relative;" >
            <input id="password" type="password" class="update-input" v-model="userDetail.password" placeholder="password" required>
              <b-icon class="showPass" @click="switchVisibility" icon="eye" font-scale="1.5"></b-icon>
          </div>
          <label for="email" class="update-label">Email</label>
          <input type="text" id="email" class="update-input" v-model="userDetail.email" placeholder="password">
          <label for="phone" class="update-label">Phone</label>
          <input type="text" id="phone" class="update-input" v-model="userDetail.phone" placeholder="email">
         
         <button class="update-submit" @click="update">cập nhật</button>
        </div>
        <div class="pc_view">
          <h3 style="text-align: -webkit-center;">Lịch sử đỗ xe</h3>
          <table class="table">
            <thead slot="head">
              <th>Tên bãi đỗ xe</th>
              <th>Biển số xe</th>
              <th>Thời gian đặt</th>
              <th>Giá tiền</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </thead>
            <tbody >
              <tr v-for="row in order_history" :key="row.orderId" >
                <td>{{ row.name }}</td>
                <td>{{ row.licensePlate }}</td>
                <td>{{ row.time }}</td>
                <td>{{ row.price }}</td>
                <td v-if="(row.status == 0)">chưa đến</td>
                <td v-else>{{ row.price }}</td>
                <td>
              <b-icon class="icon" @click="remove(row.orderId)" icon="x-square-fill" variant="danger"
                font-scale="2"></b-icon></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mobile_view">
          <h3 style="text-align: -webkit-center;">Lịch sử đỗ xe</h3>
        <table class="table">
          <tbody class="table-body">
            <label  v-for="row in order_history" :key="row.orderId">
              <tr>
                <th>Tên bãi đỗ xe</th>
                <td class="child_popup">{{ row.name }}</td>
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
                <th>Trạng thái</th>
                <td v-if="(row.status == 0)">chưa đến</td>
                <td v-else>{{ row.price }}</td>
              </tr>
              <tr>
                <th>thao tác</th>
                <td>
                  <b-icon class="icon" @click="remove(row.orderId)" icon="x-square-fill" variant="danger"
                  font-scale="2"></b-icon>
                </td>
              </tr>
            </label>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "parkingManager",
  data() {
    return {
      userDetail: {},
      order_history: {},
    };
  },
  components: {
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$api.get("users/"+localStorage.getItem("userId")).then((response1) => {
        this.$api.get("users/orderHistory/"+localStorage.getItem("userId")).then((response2) => {
        this.order_history = response2;
      });
        this.userDetail = response1;
      });
    },
    switchVisibility() {
      const passwordField = document.querySelector('#password')
      if (passwordField.getAttribute('type') === 'password') passwordField.setAttribute('type', 'text')
      else passwordField.setAttribute('type', 'password')
    },
    update() {
      console.log(this.userDetail);
      this.$api.post("users/"+this.userDetail.userId,{
        name: this.userDetail.name,
        password: this.userDetail.password,
        email : this.userDetail.email,
        phone: this.userDetail.phone,
      }).then((response) => {
        this.userDetail = response;
            if(response.success) {
              alert("cập nhật thành công");
            }else {
              alert("cập nhật thất bại");
            }
      });
    },
    remove(id) {
      this.$api.post("users/cancel/" + id).then((response) => {
        if (response.success) {
          alert("xóa thành công");
        } else {
          alert("xóa thất bại");
        }
        location.reload();
      });
    }
  }
}
</script>

<style lang="scss" scoped>

@media screen and (max-width: 600px) {
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
  .update-input[data-v-4d26be3a] {
    margin-bottom: 5px;}
}
.info {
  display: flex;
  flex-direction: column;

}
.SI{
  background-color: rgb(13, 137, 110);
 
  padding-top: 15px ;
  padding-bottom: 15px;
}
* {
  box-sizing: border-box;
}

.update {
  margin: 50px auto;
  margin-top: 50px;
  padding: 20px;
  background-color: #fff;
  width: 100%;
  max-width: 800px;
  border-radius: 30px;
  height: auto;
}
.update-heading {
  font-size: 40px;
  font-weight: bold;
  color: #373941;
  text-align: center;
  margin-bottom: 35px;
}

.update-or:after {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #999;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.update-label {
  font-size: 16px;
  color: #63676b;
  font-weight: 500;
  margin-bottom: 10px;
  display: inline-block;
  cursor: pointer;
}
.update-input {
  display: block;
  width: 100%;
  padding:15px ;
  border-radius: 14px;
  background-color: #f2f3f5;
  outline: none;
  border: 0;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  margin-bottom: 30px;
}
.update-input::-webkit-input-placeholder {
  color: #b4bac0;
  font-weight: 500;
}
.update-input::-moz-input-placeholder {
  color: #b4bac0;
  font-weight: 500;
}
.update-submit {
  padding: 15px;
  color: white;
  font-size: 18px;
  text-align: center;
  border: 0;
  outline: none;
  display: inline-block;
  width: 100%;
  border-radius: 14px;
  background-color: rgb(130, 201, 30);
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 5px 10px 0 rgba(130, 201, 30, 0.5);
  margin-top: 25px;
  margin-bottom: 25px;
}
.update-already {
  text-align: center;
  font-size: 16px;
  color: #999;
}
.update-update-link {
  color: #2979ff;
  text-decoration: none;
}
.showPass{
  position: absolute;
    top: 18px;
    right: 23px;
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
.mobile_view {
  display: none ;
}
</style>
