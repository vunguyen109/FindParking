<template>
<section class="SU">
  <div class="signup">
      <h1 class="signup-heading">Sign up</h1>
      <form action="#" class="signup-form" autocomplete="off">
        <div class="radio_option">
      <label >
        <input type="radio"  v-model="account" value="1" name="type">
        chủ bãi đỗ
      </label>
      <label>
        <input type="radio"  v-model="account" value="2" name="type">
        người dùng
      </label>
      </div>
        <label for="username" class="signup-label">User name</label>
        <input type="text" id="username" class="signup-input" placeholder="User Name" v-model="username">
        <label for="password" class="signup-label">Password</label>
        <input type="password" id="password" class="signup-input" placeholder="Password" v-model="password">
        <label for="email" class="signup-label">Email</label>
        <input type="email" id="email" class="signup-input" placeholder="Email" v-model="email">
        <label for="phone" class="signup-label">Phone</label>
        <input type="text" id="phone" class="signup-input" placeholder="Phone" v-model="phone">
        <button class="signup-submit" @click="signup">Sign Up</button>
      </form>
      <p class="signup-already">
        <span>Already have an account ?</span>
        <a href="/login" class="signup-login-link"> Sign in </a>
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
        account: 2,
        email: "",
        phone: "",
    };
  },
  methods: {
    signup() {
        this.$api.post("users/register", {
              userId: "",
              name: this.username,
              password: this.password,
              account: this.account,
              email:  this.email,
              phone: this.phone,
              active: 0,
            })
              .then((response) => {
                console.log(response);
                if(response.success){
                  alert("đăng ký thành công")
                  this.$router.push("/index");
                }
                else {
                  alert("đăng ký không thành công")
                }
              });
    }
  }
};
</script>
<style lang="scss" scoped>

* {
  box-sizing: border-box;
}
.SU{
  background-color: rgb(13, 137, 110);
  height: 1200px;
  padding-top: 15px ;
}
.signup {
  margin: 50px auto;
  margin-top: 50px;
  padding: 20px;
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  border-radius: 30px;
  height: auto;
}
.signup-heading {
  font-size: 40px;
  font-weight: bold;
  color: #373941;
  text-align: center;
  margin-bottom: 35px;
}
.signup-social {
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
.signup-social-icon {
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
.signup-social-text {
  display: block;
  margin: 0 auto;
}
.signup-or {
  text-align: center;
  font-size: 16px;
  color: #999;
  margin: 55px auto;
  position: relative;
}
.signup-or span {
  display: inline-block;
  padding: 10px 30px;
  background-color: #fff;
  position: relative;
  z-index: 2;
}
.signup-or:after {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #999;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.signup-label {
  font-size: 16px;
  color: #63676b;
  font-weight: 500;
  margin-bottom: 10px;
  display: inline-block;
  cursor: pointer;
}
.signup-input {
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
.signup-input::-webkit-input-placeholder {
  color: #b4bac0;
  font-weight: 500;
}
.signup-input::-moz-input-placeholder {
  color: #b4bac0;
  font-weight: 500;
}
.signup-submit {
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
.signup-already {
  text-align: center;
  font-size: 16px;
  color: #999;
}
.signup-login-link {
  color: #2979ff;
  text-decoration: none;
}
.radio_option{
  display: flex;
    justify-content: space-evenly;
}
@media screen and (max-width: 500px) {
  .signup-input {
    padding: 10px 25px;
}
}
</style>
