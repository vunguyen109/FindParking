<template>
  <div>
    <input type="text" v-model="username">
    <input type="password" v-model="password">
    <button @click="login">login</button>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
        username: "",
        password: "",
    };
  },
  methods: {
    login() {
        this.$api.post("users/login", {
              username: this.username,
              password: this.password,
            })
              .then((response) => {
                if(response.success) {
                 localStorage.setItem("login", true);
                 this.$router.push("/index");
                }else {
                    console.log("login false");
                }
              });
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
