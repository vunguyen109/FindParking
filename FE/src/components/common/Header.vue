<template>
  <div>
    <div class="header">
      <div class="header__content">
        <div
          class="header__content__item" :class="{'logo' :item.value == 1 }"
          v-for="(item, index) in categories"
          :key="index"
        >
          <a href="" :class="{ active: isActive(item.value) }" @click="goRouter(item.value, item.url)">{{ item.name }}</a>
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
	  scroll: false,
      categories: [
        {
          name: "Bắt đầu",
          value: 0,
          url: "/index",
        },
        {
          name: "Đặt chỗ",
          value: 0,
          url: "/",
        },
        {
          name: "Logo",
          value: 1,
          url: "/",
        },
        {
          name: "đăng ký",
          value: 0,
          url: "/register",
        },
        {
          name: "Đăng Nhập",
          value: 0,
          url: "/login",
        },
      ],
      showMobileMenu: false,
      checkdrop: false,
    };
  },
  created() {},
  computed: {},
  methods: {

    isActive: function (menuItem) {
      return this.activeItem === menuItem;
    },
    goRouter: function (menuItem, url) {
      this.activeItem = menuItem;
      this.$router.push({
        path: url,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
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
		a {
			
		color: black;
			text-decoration: none;
		}
	}
	.logo {
		font-size: 40px;
		font-weight: 600;
	}
  }
}

@media (max-width: 960px) {
}

@media (max-width: 768px) {
}

@media (max-width: 380px) {
}
</style>