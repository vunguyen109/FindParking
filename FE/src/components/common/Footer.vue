<template>
	<div>
		<section>
			<div class="p-footer">
				<div class="p-footer__container">
					<div class="p-footer__container__list">
						<span class="p-footer__container__list-2"  v-show="login &&(account == 0||account == 1)"  href="" @click="goRouter(4,'/manager')" ><b-icon icon="kanban-fill" font-scale="1"></b-icon> quản lý bãi đỗ</span>
            <span  class="p-footer__container__list-2"  v-show="login"  @click="goRouter(4,'/user')"><b-icon icon="person-lines-fill" font-scale="1"></b-icon> tài khoản</span>
            <span class="p-footer__container__list-2"  v-show="(account == 0)"  @click="goRouter(5,'/userManager')"><b-icon icon="person-lines-fill" font-scale="1"></b-icon> quản lý tài khoản</span>
            <span class="p-footer__container__list-2"  @click="goRouter(1,'/index')"><b-icon icon="camera" font-scale="1"></b-icon> đặt chỗ</span>
            <span class="p-footer__container__list-2"  v-show="login"  @click="logout"><b-icon icon="box-arrow-right" font-scale="1"></b-icon> đăng xuất</span>
            <span class="p-footer__container__list-2"  v-show="!login"  @click="goRouter(3,'/login')"><b-icon icon="box-arrow-in-left" font-scale="1"></b-icon> đăng nhập</span>
            <span class="p-footer__container__list-2"   @click="goRouter(2,'/register')"><b-icon icon="person-plus-fill" font-scale="1"></b-icon> đăng ký</span>
					</div>

					<div class="p-footer__container__icon">
						<a href="#">
							<img src="@/assets/facebook.png" alt="Facebook">
						</a>
						<a href="#">
							<img src="@/assets/whatsapp.png" alt="Whatsapp">
						</a>
						<a href="#">
							<img src="@/assets/snapchat.png" alt="Snapchat">
						</a>
						<a href="#">
							<img src="@/assets/skype.png" alt="Skype">
						</a>
						<a href="#">
							<img src="@/assets/twitter.png" alt="Twitter">
						</a>
					</div>
				</div>


				<div class="p-footer__separation"></div>

				<div class="p-footer__under">
					<div class="p-footer__under-logo">
						<a href="#">
							<h1>VHParking</h1>
						</a>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "app",
	components: {},
}
</script>

<style lang="scss" scoped>
section {
	max-width: 100%;

	.p-footer {
		padding: 45px 0;
		background: #042941;

		&__container {
			display: flex;
			margin: auto;
			width: 80%;
			align-items: flex-end;
			justify-content: space-between;

			&__list {
				display: grid;
				text-align: left;
				padding-left: 40px;
				gap: 30px;

				&-1 {
					text-decoration: none;
					font-family: 'ABeeZee';
					font-style: normal;
					font-weight: 400;
					font-size: 20px;
					line-height: 21px;
					color: #F35F0D;
					flex: none;
					order: 0;
					flex-grow: 0;

					&:hover {
						color: #ffffff
					}
				}

				&-2 {
					font-family: 'ABeeZee';
					font-style: normal;
					font-weight: 400;
					font-size: 20px;
					line-height: 21px;
					color: #FFFFFF;
					text-decoration: none;
					flex: none;
					order: 1;
					flex-grow: 0;

					&:hover {
						color: #F35F0D;
					}
				}
			}

			&__icon {
				display: flex;
				column-gap: 25px;
				row-gap: 20px;
				// padding-left: 39px;
				flex-wrap: wrap;
			}
		}

		&__separation {
			max-width: 100%;
			height: 0px;
			opacity: 0.7;
			border: 0.5px solid #A5A5A5;
			margin-top: 24px;
		}

		&__under {
			display: flex;
			width: 80%;
			margin: auto;

			&-logo {
				text-align: left;
				padding: 24px 0 0 34px;
			}

			&-button {
				padding-top: 10px;
				padding-left: 105px;
			}
		}
	}
}


@media screen and (max-width: 650px) {
	section {
		.p-footer {
			&__container {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: flex-start;

				&__list {
					padding-right: 35px;
				}

				&__icon {
					width: 100%;
					padding-top: 45px;
				}
			}

			&__under {
				width: 100%;
			}
		}
	}
}

@media screen and (max-width: 320px) {
	section {
		.footer__list {
			padding-left: 20px;
		}
	}
}
</style>