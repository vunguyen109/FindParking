<template>
  <section class="SI">
    <div class="login">
      <h1 class="login-heading">Sign in</h1>
      <button class="login-social">
        <i class="fa fa-google login-social-icon"></i>
        <span class="login-social-text">Sign in with Google</span>
      </button>
      <div class="login-or"><span>Or</span></div>
      <form action="#" class="login-form" autocomplete="off">
        <label for="username" class="login-label">User name</label>
        <input type="text" id="usename" class="login-input" placeholder="User name" v-model="username">
        <label for="password" class="login-label">Password</label>
        <input type="text" id="password" class="login-input" placeholder="Password" v-model="password">
        <button class="login-submit" @click = "login">Sign In</button>
      </form>
      <p class="login-already">
        <span>Don't have an account ?</span>
        <a href="/register" class="login-login-link"> Sign Up </a>
      </p>
    </div>
  
</section>
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
                 localStorage.setItem("account", response.result.account);
                 localStorage.setItem("user", response.result.name);
                 localStorage.setItem("userId", response.result.userId);
                 this.$router.push("/index");
                }else {
                    alert("login false");
                }
              });
    }
  }
};
</script>
<style lang="scss" scoped>
.SI{
  background-color: rgb(13, 137, 110);
  height: 900px;
  padding-top: 15px ;
}
* {
  box-sizing: border-box;
}

.login {
  margin: 50px auto;
  margin-top: 50px;
  padding: 20px;
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  border-radius: 30px;
  height: auto;
}
.login-heading {
  font-size: 40px;
  font-weight: bold;
  color: #373941;
  text-align: center;
  margin-bottom: 35px;
}
.login-social {
  padding: 10px;
  border-radius: 20px;
  display: block;
  width: 100%;
  color: white;
  font-size: 16px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  border: 0;
  background-color: #4c6ff4;
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  box-shadow: 0 5px 10px 0 rgba(76, 111, 244, 0.5);
}
.login-social-icon {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4c6ff4;
  font-size: 30px;
}
.login-social-text {
  display: block;
  margin: 0 auto;
}
.login-or {
  text-align: center;
  font-size: 16px;
  color: #999;
  margin: 55px auto;
  position: relative;
}
.login-or span {
  display: inline-block;
  padding: 10px 30px;
  background-color: #fff;
  position: relative;
  z-index: 2;
}
.login-or:after {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #999;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.login-label {
  font-size: 16px;
  color: #63676b;
  font-weight: 500;
  margin-bottom: 10px;
  display: inline-block;
  cursor: pointer;
}
.login-input {
  display: block;
  width: 100%;
  padding: 25px;
  border-radius: 14px;
  background-color: #f2f3f5;
  outline: none;
  border: 0;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  margin-bottom: 30px;
}
.login-input::-webkit-input-placeholder {
  color: #b4bac0;
  font-weight: 500;
}
.login-input::-moz-input-placeholder {
  color: #b4bac0;
  font-weight: 500;
}
.login-submit {
  padding: 25px;
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
.login-already {
  text-align: center;
  font-size: 16px;
  color: #999;
}
.login-login-link {
  color: #2979ff;
  text-decoration: none;
}
</style>
