<template>
	<div>
		<section>
			<div class="p-footer">
				<div class="p-footer__container">
					<div class="p-footer__container__list">
						<a class="p-footer__container__list-1" href="#">{{ $t('MENU.TOP') }}</a>
						<a class="p-footer__container__list-2" href="#">{{ $t("MENU.SIM_SERVICE") }}</a>
						<a class="p-footer__container__list-2" href="#">{{ $t("MENU.CAMPAIGN") }}</a>
						<a class="p-footer__container__list-2" href="#">{{ $t("MENU.RATE_PLAN") }}</a>
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
							<img src="@/assets/logo_footer.png" alt="Logo IF Mobile">
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