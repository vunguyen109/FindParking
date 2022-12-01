<template>
    <div class="content">
        <div class="info">
          <input type="text" v-model="userDetail.name">
          <input id="password" type="password" v-model="userDetail.password">
          <button @click="switchVisibility">switch</button>
        <input type="text" v-model="userDetail.email">
        <input type="text" v-model="userDetail.phone">
        <button @click="update">cập nhật</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "parkingManager",
  data() {
    return {
      userDetail: {},
    };
  },
  components: {
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$api.get("users/"+localStorage.getItem("userId")).then((response) => {
        this.userDetail = response;
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
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;

}
</style>