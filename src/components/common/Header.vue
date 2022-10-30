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
      <!-- <div class="header__top__img">
					<a href="/index">
						<img src="@/assets/logo.png" alt="Logo IF_MOBILE">
					</a>
				</div>
				<div class="header__top__nav">
					<div class="header__top__nav__items" v-for="(item, index) in categories" :key="index">
						<a href="#" class="button" :class="{ active: isActive(item.value) }"
							@click="goRouter(item.value, item.url)">
							{{ item.name }}
						</a>
					</div>
				</div>
				<div class="header__top__button">
					<a href="" @click="goToLogin()"> {{$t('BUTTON.CREATE')}}</a>
				</div>
				<div class="nav-menu" @click="checkDropDown()">
					<img src="@/assets/icn_open.png" alt="" v-if="!checkdrop">
					<img src="@/assets/icn_close.png" v-else alt="">
				</div>
			</div>
			<div class="header__drop" v-if="checkdrop">
				<ul v-for="(item, index) in categories" :key="index">
					<li>
						<a href="#" :class="{ active: isActive(item.value) }" @click="setActive(item.value)">
							{{ item.name }}
						</a>
					</li>
				</ul>
			</div> -->
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
          name: "Địa điểm",
          value: 0,
          url: "/",
        },
        {
          name: "Điều kiện",
          value: 0,
          url: "/",
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