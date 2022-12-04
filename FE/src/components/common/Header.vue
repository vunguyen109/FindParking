<template>
  <div>
    <div class="header">
      <div class="header__content">
        <div class="header__content__item">
          <span :class="{ active: isActive(0) }" @click="goRouter(0,'/index')"><b-icon icon="house-fill" font-scale="1"></b-icon> trang chủ</span>
        </div>
        <div class="header__content__item">
          <span :class="{ active: isActive(1) }" @click="goRouter(1,'/index')"><b-icon icon="camera" font-scale="1"></b-icon> đặt chỗ</span>
        </div>
        <div class="header__content__item mobile">
          <span :class="{ active: isActive(0) }" @click="goRouter(0,'/index')"><b-icon icon="house-fill" font-scale="2"></b-icon></span>
        </div>
        <div class="header__content__item logo">
          VHParking
        </div>
        <div class="header__content__item">
          <span :class="{ active: isActive(2) }" @click="goRouter(2,'/register')"><b-icon icon="person-plus-fill" font-scale="1"></b-icon> đăng ký</span>
        </div>
        <div v-show="!login" class="header__content__item">
          <span :class="{ active: isActive(3) }" @click="goRouter(3,'/login')"><b-icon icon="box-arrow-in-left" font-scale="1"></b-icon> đăng nhập</span>
        </div>
        <div v-show="login" class="header__content__account">
          <b-icon icon="person-circle" font-scale="1"></b-icon> {{user}}
          <div class="hover_menu">
            <div>
            <span href="" @click="goRouter(4,'/manager')" ><b-icon icon="kanban-fill" font-scale="1"></b-icon> quản lý bãi đỗ</span>

            <span href="" @click="goRouter(4,'/user')"><b-icon icon="person-lines-fill" font-scale="1"></b-icon> tài khoản</span>
            <span v-show="(account == 0)"  @click="goRouter(5,'/userManager')"><b-icon icon="person-lines-fill" font-scale="1"></b-icon> quản lý tài khoản</span>
            <span href="" @click="logout"><b-icon icon="box-arrow-right" font-scale="1"></b-icon> đăng xuất</span>
            </div>
          </div>
        </div>
        <div v-show="login" class="header__content__account mobile">
          <b-icon icon="list" font-scale="2"></b-icon>
          <div class="hover_menu fix">
            <div>
              <span>{{user}}</span>
            <span v-show="login"  href="" @click="goRouter(4,'/manager')" ><b-icon icon="kanban-fill" font-scale="1"></b-icon> quản lý bãi đỗ</span>
            <span v-show="login"  @click="goRouter(4,'/user')"><b-icon icon="person-lines-fill" font-scale="1"></b-icon> tài khoản</span>
            <span v-show="(account == 0)"  @click="goRouter(5,'/userManager')"><b-icon icon="person-lines-fill" font-scale="1"></b-icon> quản lý tài khoản</span>
            <span @click="goRouter(1,'/index')"><b-icon icon="camera" font-scale="1"></b-icon> đặt chỗ</span>
            <span v-show="login"  @click="logout"><b-icon icon="box-arrow-right" font-scale="1"></b-icon> đăng xuất</span>
            <span v-show="!login"  @click="goRouter(3,'/login')"><b-icon icon="box-arrow-in-left" font-scale="1"></b-icon> đăng nhập</span>
            <span  @click="goRouter(2,'/register')"><b-icon icon="person-plus-fill" font-scale="1"></b-icon> đăng ký</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      activeItem: 0,
	  login: false,
      showMobileMenu: false,
      user: "",
      account: 99,
    };
  },
  created() {
    this.checkLogin();
  },
  computed: {},
  methods: {
    checkLogin: function () {
      if (this.$localStorage.get("account")) {
        this.login = true;
        this.user = this.$localStorage.get("user");
        this.account = this.$localStorage.get("account");
      } else {
        this.login = false;
      }
    },
    isActive: function (menuItem) {
      return this.activeItem === menuItem;
    },
    goRouter: function (menuItem, url) {
      this.activeItem = menuItem;
      this.$router.push({
        path: url,
      });
    },
    logout () {
      this.$localStorage.remove("account");
      this.$localStorage.remove("user");
      location.reload();
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 3;
  background-color: #00B661;
  width: 100%;
  &__content {
    display: flex;
    height: 80px;
	min-width: 80px;
    column-gap: 5%;
    justify-content: center;
    align-items: center;
	&__item {
		font-size: 20px;
		cursor: pointer;
		color: rgb(255, 255, 255);
    font-weight: 600;
    &:hover {
      color: #000000;
    }
    
  }
  &__account {
		font-size: 20px;
		cursor: pointer;
		color: rgb(255, 255, 255);
    font-weight: 600;
    &:hover {
      color: #000000;
    }
    .hover_menu {
      display: none;
    padding: 20px;
    border-radius: 5px;
    color: #00B661;
    position: absolute;
    background-color: #ffffff;
    z-index: 1;
    flex-direction: column;
      div {
        display: flex;
        flex-direction: column;
        span {
          padding: 0 20px;
          border-radius: 5px;
          &:hover {
            background-color: #00B661;
            color: #ffffff;
          }
        }
      }
    }
    .fix {
      right: 20px;
    }
    &:hover .hover_menu {
    display: block;
    
    }
  }
 
	}
	.logo {
		font-size: 40px;
		font-weight: 600;
	}
  .mobile {
      display: none;
    }
  
}

@media (max-width: 960px) {
  .header__content {
    height: 60px;
  }
  .header__content__item a {
    color: black;
    font-size: 11px;
    text-decoration: none;
}
}

@media (max-width: 850px) {
  .header {
  &__content {
    justify-content: space-around;
	&__item {
    display: none;
  }
  &__account {
    display: none;
  }
  .mobile {
    display: block!important;
  }
  .logo {
    display: block !important;
  }
}
  }
}

@media (max-width: 380px) {
}
</style>