<template>
	<div>
		<div class="header">
			<div class="header__top">
				<div class="header__top__img">
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
					<!-- // Menu container -->
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
			categories: [
				{
					name: this.$t('MENU.TOP'),
					value: 0,
					url: '/index'
				},
				{
					name: this.$t('MENU.SIM_SERVICE'),
					value: 1,
					url:'/Purchase'
				},
				{
					name: this.$t('MENU.CAMPAIGN'),
					value: 2,
					url:'/'
				},
				{
					name: this.$t('MENU.RATE_PLAN'),
					value: 3,
					url:'/'
				},
			],
			showMobileMenu: false,
			checkdrop: false
		}
	},
	created() {
	},
	computed: {},
	methods: {
		goToLogin: function () {
			const token = localStorage.getItem('token') 
				if ( token == undefined ) {
					this.$router.push('/login');
					
				}else{
					this.$router.push('/mypage');
				}
		}, 

		isActive: function (menuItem) {
			return this.activeItem === menuItem;
		},
		checkDropDown() {
			this.checkdrop = !this.checkdrop;
		},
		goRouter: function (menuItem, url) {
			this.activeItem = menuItem;		this.$router.push({
				path: url,
			});
		},
	},
}
</script>

<style lang="scss" scoped>
.header {
	max-width: 80%;
	margin: auto;

	&__top {
		display: flex;
		height: 70px;
		align-items: center;

		&__img {
			display: flex;
			height: auto;
			width: 30%;

			img {
				width: auto;
				height: auto;
			}
		}

		&__button {
			display: flex;
			width: 15%;
			justify-content: flex-end;

			a {
				text-decoration: none;
				background-color: #F35F0D;
				color: #fff;
				border-radius: 10px;
				width: 100px;
				height: 44px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		.nav-menu {
			display: none;
		}

		&__nav {
			display: flex;
			padding: 0 13px 0 16px;
			justify-content: space-between;
			width: 55%;

			&__items {
				padding: 20px 0;

				a {
					text-decoration: none;
					color: #10517A;
					font-size: 20px;
					font-weight: 400;
					border: none;
					background: #fff;
					padding: 20px 0;
				}

				.active {
					color: #F35F0D;
					border-bottom: 6px solid;
				}
			}

		}
	}

	&__drop {
		display: none;
	}
}

@media(max-width: 960px) {
	.header {
		max-width: 90%;

		&__top {}

		&__nav {
			button {}
		}
	}
}

@media(max-width: 768px) {
	.header {
		max-width: 90%;

		&__top {
			justify-content: space-between;

			&__img {
				width: 60%;
			}

			&__nav {
				display: none;
			}

			&__button {
				width: 20%;
			}

			.nav-menu {
				width: 10%;
				display: flex;
				justify-content: right;
				cursor: pointer;

				img {
					width: 30px;
				}
			}
		}

		&__drop {
			display: block;
			width: 100%;
			background: #FFF;
			position: absolute;
			top: 70px;
			left: 0;
			z-index: 2;

			ul {
				li {
					text-align: left;
					padding: 20px;
					font-size: 20px;

					a {
						color: #10517A;
						text-decoration: none;
					}
				}

				.active {
					color: #F35F0D;
				}
			}
		}
	}
}

@media(max-width: 380px) {
	.header {
		&__top {
			&__img {
				img {
					width: 90%;
				}
			}
		}

		&__nav {
			button {
				font-size: 14px;
			}
		}
	}
}

@media(max-width: 350px) {
	.header {
		&__top {}

		&__nav {
			button {
				font-size: 13px;
			}
		}
	}
}
</style>