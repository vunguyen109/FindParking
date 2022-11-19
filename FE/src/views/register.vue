<template>
  <div>
    <input type="text" placeholder="user name" v-model="username">
    <input type="password" placeholder="password" v-model="password">
    <input type="text" placeholder="email" v-model="email">
    <input type="text" placeholder="phone" v-model="phone">
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
        email: "",
        phone: "",
    };
  },
  methods: {
    login() {
        this.$api.post("users/register", {
                userId: "",
              name: this.username,
              password: this.password,
              email:  this.email,
              phone: this.phone,
            })
              .then((response) => {
                console.log(response);
              });
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
