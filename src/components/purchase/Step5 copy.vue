<template>
	<section class="">
		<div class="title">
			<p class="title__step5"> {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.TITLE') }} </p>
			<div class="title__desc">
				<p>{{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.DESC') }}</p>
			</div>
		</div>

		<div class="content">
			<div class="content__title">
				<p>{{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.SIM_CARD_PURCHASE_DETAILS.TITLE') }}</p>
			</div>

			<div class="content__information">
				<div class="content__information__item">
					<p>
						* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.SIM_CARD_PURCHASE_DETAILS.CONTRACT_TYPE') }} ：
					</p>
					<input type="text">
				</div>
				<div class="content__information__item">
					<p>
						* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.SIM_CARD_PURCHASE_DETAILS.PHONE_NUMBER') }} ：
					</p>
					<input type="text">
				</div>
				<div class="content__information__item">
					<p>
						* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.SIM_CARD_PURCHASE_DETAILS.OPEN_DAY') }} ：
					</p>
					<input type="text">
				</div>
				<div class="content__information__item">
					<p>
						* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.SIM_CARD_PURCHASE_DETAILS.PLAN') }} ：
					</p>
					<input type="text">
				</div>
			</div>

			<div class="content__price">
				<div class="content__price__item">
					<table border="1" cellspacing="0" cellpadding="5">
						<tr>
							<td rowspan="2" class="content__price__item__first table">
								<p>
									{{
											$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.SIM_CARD_PURCHASE_DETAILS.TOTAL_MONTHLY_PAYMENT')
									}}
								</p>
							</td>
							<td class="table">
								<p>3,123円(税抜)</p>
							</td>
						</tr>
						<tr>
							<td class="table">
								<p>3,435円(税込)</p>
							</td>
						</tr>
					</table>

					<table>
						<tr>
							<th class="content__price__item__first">{{amountPlan.commodityName}}</th>
							<th>{{amountPlan.price}}</th>
						</tr>
						<tr>
							<td class="content__price__item__first">{{converseQuota.commodityName}}</td>
							<td>{{converseQuota.price}}</td>
						</tr>
						<tr>
							<td class="content__price__item__first">James</td>
							<td>William</td>
						</tr>
					</table>
				</div>

				<div class="content__price__item">
					<table border="1" cellspacing="0" cellpadding="5">
						<tr>
							<td rowspan="2" class="content__price__item__first table">
								<p>
									{{
											$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.SIM_CARD_PURCHASE_DETAILS.TOTAL_INITIAL_COST')
									}}
								</p>
							</td>
							<td class="table">
								<p>3,123円(税抜)</p>
							</td>
						</tr>
						<tr>
							<td class="table">
								<p>3,435円(税込)</p>
							</td>
						</tr>
					</table>

					<table>
						<tr>
							<th class="content__price__item__first"></th>
							<th></th>
						</tr>
						<tr>
							<td class="content__price__item__first">Sonoo</td>
							<td>Jaiswal</td>
						</tr>
						<tr>
							<td class="content__price__item__first">James</td>
							<td>William</td>
						</tr>
						<tr>
							<td class="content__price__item__first">Swati</td>
							<td>Sironi</td>
						</tr>
						<tr>
							<td class="content__price__item__first">Chetna</td>
							<td>Singh</td>
						</tr>
					</table>
				</div>
			</div>
		</div>

		<div class="content">
			<div class="content__title">
				<p>
					{{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.LIGHT_PURCHASE_DETAILS.TITLE') }}
				</p>
			</div>
			<div class="content__information">
				<div class="content__information__item">
					<p>
						* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.LIGHT_PURCHASE_DETAILS.PLAN') }} ：
					</p>
					<input type="text">
				</div>
				<div class="content__information__item">
					<p>
						* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.LIGHT_PURCHASE_DETAILS.OPEN_DAY') }} ：
					</p>
					<input type="text">
				</div>
			</div>
			<div class="content__price">
				<div class="content__price__item">
					<table border="1" cellspacing="0" cellpadding="5">
						<tr>
							<td rowspan="2" class="content__price__item__first table">
								<p>
									{{
											$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.LIGHT_PURCHASE_DETAILS.TOTAL_MONTHLY_PAYMENT')
									}}
								</p>
							</td>
							<td class="table">
								<p>3,123円(税抜)</p>
							</td>
						</tr>
						<tr>
							<td class="table">
								<p>3,435円(税込)</p>
							</td>
						</tr>
					</table>

					<table>
						<tr>
							<th class="content__price__item__first">First_Name</th>
							<th>Last_Name</th>
						</tr>
						<tr>
							<td class="content__price__item__first">Sonoo</td>
							<td>Jaiswal</td>
						</tr>
						<tr>
							<td class="content__price__item__first">James</td>
							<td>William</td>
						</tr>
					</table>
				</div>

				<div class="content__price__item">
					<table border="1" cellspacing="0" cellpadding="5">
						<tr>
							<td rowspan="2" class="content__price__item__first table">
								<p>
									{{
											$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.LIGHT_PURCHASE_DETAILS.TOTAL_INITIAL_COST')
									}}
								</p>
							</td>
							<td class="table">
								<p>3,123円(税抜)</p>
							</td>
						</tr>
						<tr>
							<td class="table">
								<p>3,435円(税込)</p>
							</td>
						</tr>
					</table>

					<table>
						<tr>
							<th class="content__price__item__first">First_Name</th>
							<th>Last_Name</th>
						</tr>
						<tr>
							<td class="content__price__item__first">Sonoo</td>
							<td>Jaiswal</td>
						</tr>
						<tr>
							<td class="content__price__item__first">James</td>
							<td>William</td>
						</tr>
						<tr>
							<td class="content__price__item__first">Swati</td>
							<td>Sironi</td>
						</tr>
						<tr>
							<td class="content__price__item__first">Chetna</td>
							<td>Singh</td>
						</tr>
					</table>
				</div>
			</div>
		</div>

		<div class="content">
			<div class="content__title">
				<p>
					{{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WIFI_PURCHASE_DETAILS.TITLE') }}
				</p>
			</div>
			<div class="content__information">
				<div class="content__information__item">
					<p>
						* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WIFI_PURCHASE_DETAILS.PLAN') }} :
					</p>
					<input type="text">
				</div>
				<div class="content__information__item">
					<p>
						* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WIFI_PURCHASE_DETAILS.OPEN_DAY') }} :
					</p>
					<input type="text">
				</div>
			</div>
			<div class="content__price">
				<div class="content__price__item">
					<table border="1" cellspacing="0" cellpadding="5">
						<tr>
							<td rowspan="2" class="content__price__item__first table">
								<p>
									{{
											$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.SIM_CARD_PURCHASE_DETAILS.TOTAL_MONTHLY_PAYMENT')
									}}
								</p>
							</td>
							<td class="table">
								<p>3,123円(税抜)</p>
							</td>
						</tr>
						<tr>
							<td class="table">
								<p>3,435円(税込)</p>
							</td>
						</tr>
					</table>

					<table>
						<tr>
							<th class="content__price__item__first">First_Name</th>
							<th>Last_Name</th>
						</tr>
						<tr>
							<td class="content__price__item__first">Sonoo</td>
							<td>Jaiswal</td>
						</tr>
						<tr>
							<td class="content__price__item__first">James</td>
							<td>William</td>
						</tr>
					</table>
				</div>

				<div class="content__price__item">
					<table border="1" cellspacing="0" cellpadding="5">
						<tr>
							<td rowspan="2" class="content__price__item__first table">
								<p>
									{{
											$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.SIM_CARD_PURCHASE_DETAILS.TOTAL_INITIAL_COST')
									}}
								</p>
							</td>
							<td class="table">
								<p>3,123円(税抜)</p>
							</td>
						</tr>
						<tr>
							<td class="table">
								<p>3,435円(税込)</p>
							</td>
						</tr>
					</table>

					<table>
						<tr>
							<th class="content__price__item__first">First_Name</th>
							<th>Last_Name</th>
						</tr>
						<tr>
							<td class="content__price__item__first">Sonoo</td>
							<td>Jaiswal</td>
						</tr>
						<tr>
							<td class="content__price__item__first">James</td>
							<td>William</td>
						</tr>
						<tr>
							<td class="content__price__item__first">Swati</td>
							<td>Sironi</td>
						</tr>
						<tr>
							<td class="content__price__item__first">Chetna</td>
							<td>Singh</td>
						</tr>
					</table>
				</div>
			</div>
		</div>

		<div class="receive">
			<div class="receive__title">
				<p>
					{{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.RECEIVE.TITLE') }}
				</p>
			</div>
			<div class="receive__information">
				<div class="receive__information__item">
					<p>* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.RECEIVE.PRODUCT_ACQUISITION_METHOD') }} ：</p>
					<input type="text">
				</div>
				<div class="receive__information__item">
					<p>* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.RECEIVE.AREA') }} ：</p>
					<input type="text">
				</div>
				<div class="receive__information__item">
					<p>* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.RECEIVE.MAILING_NAME') }} ：</p>
					<input type="text">
				</div>
				<div class="receive__information__item">
					<p>* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.RECEIVE.MAIL_CONTACT_PHONE') }} ：</p>
					<input type="text">
				</div>
				<div class="receive__information__item">
					<p>* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.RECEIVE.LOCAL_POSTAL_CODE') }} ：</p>
					<input type="text">
				</div>
				<div class="receive__information__item">
					<p>* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.RECEIVE.MAILING_DETAILS_ADDRESS') }} ：</p>
					<input type="text">
				</div>
			</div>
		</div>

		<div class="total">
			<div class="total__line"></div>
			<div class="total__price">
				<table>
					<tr>
						<th class="total__price__first">
							<p>
								{{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.TOTAL.POSTAGE') }}
							</p>
						</th>
						<th>Last_Name</th>
					</tr>
				</table>
				<table border="1" cellspacing="0" cellpadding="5">
					<tr>
						<td rowspan="2" class="total__price__first">
							<p>
								{{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.TOTAL.TOTAL_INITIAL_COST') }}
							</p>
						</td>
						<td>Hàng 1 cột 3</td>
					</tr>
					<tr>
						<td>Hàng 2 cột 2</td>
					</tr>
				</table>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		orderSetType:{
			id : '',
			setDepict: '', 
			setName: '',
			setPreferential: '',
		},
		converseQuota: {
			commodityCode: '',
			commodityName: "",
			price: 0,
		},
		amountPlan: {
			commodityCode: '',
			commodityName: "",
			price: 0,
		}
	},
	data() {
		return {

		};
	},

	computed: {
	},
	watch: {
	},
	methods: {
	},
};

</script>
<style lang="scss" scoped>
.title {
	width: 80%;
	margin: auto;

	&__step5 {
		text-align: left;
		padding-left: 40px;
		border-left: 10px solid #5c765c;
		font-size: 32px;
		color: #5c765c;
		height: 40px;
	}

	&__desc p {
		width: 30vw;
		margin-top: 20px;
		margin-bottom: 60px;
		padding: 10px 0;
		text-align: left;
		border-top: 1px solid #5c765c;
		border-bottom: 1px solid #5c765c;
		font-size: 16px;
		color: #5c765c;
		justify-content: center;
		display: flex;
		align-items: center;
	}
}

.content {
	width: 80%;
	margin: auto;
	margin-bottom: 80px;

	&__title {
		width: 20vw;
		margin-bottom: 40px;
		padding: 10px 0;
		border-top: 1px solid #5c765c;
		border-bottom: 1px solid #5c765c;
		font-size: 20px;
		color: #816052;
		display: flex;

		p {
			margin-bottom: 0;
			display: flex;
		}
	}

	&__information {
		display: flex;
		flex-wrap: wrap;
		column-gap: 20%;
		row-gap: 40px;
		margin-bottom: 50px;

		&__item {
			display: flex;
			align-items: center;
			width: 35%;

			p {
				width: 40%;
				color: #5c765c;
				font-size: 18px;
				margin-bottom: 0;
				margin-right: 10px;
				font-weight: 600;
				text-align: left;
			}

			input {
				width: 60%;
				padding: 5px 10px;
				border-radius: 5px;
				border: 1px solid #ccc;

				&:focus-visible {
					outline: 2px solid #F35F0D;
					border-radius: 3px;
					border: none;
				}
			}
		}
	}

	&__price {
		display: flex;
		column-gap: 20%;
		row-gap: 40px;

		&__item {
			display: block;
			width: 35%;

			&__first {
				background-color: #F8F1EE;
			}

			.table p {
				color: #5c765c;
				font-size: 18px;
				margin-bottom: 0px;
			}

			th,
			td {
				width: 50%;
				border: 1px solid #707070;
			}

			table {
				border: 1px solid #707070;
				border-collapse: collapse;
				height: fit-content;
				width: 100%;
				margin-bottom: 50px;
			}

			th,
			td {
				padding: 10px;
			}
		}
	}
}

.receive {
	margin-bottom: 80px;

	&__title {
		background-color: #f5fbf4;
		margin-bottom: 50px;

		p {
			padding: 15px 0;
			width: 80%;
			margin: auto;
			font-size: 24px;
			color: #5c765c;
			text-align: left;
		}
	}

	&__information {
		display: flex;
		flex-wrap: wrap;
		column-gap: 20%;
		row-gap: 40px;
		margin-bottom: 50px;
		width: 80%;
		margin: auto;

		&__item {
			display: flex;
			align-items: center;
			width: 35%;

			p {
				width: 40%;
				color: #5c765c;
				font-size: 18px;
				margin-bottom: 0;
				margin-right: 10px;
				font-weight: 600;
				text-align: left;
			}

			input {
				width: 60%;
				padding: 5px 10px;
				border-radius: 5px;
				border: 1px solid #ccc;

				&:focus-visible {
					outline: 2px solid #F35F0D;
					border-radius: 3px;
					border: none;
				}
			}
		}
	}
}

.total {
	&__line {
		background-color: #f5fbf4;
		padding: 5px;
		margin-bottom: 50px;
	}

	&__price {
		display: flex;
		flex-direction: column;
		width: 40%;
		margin: auto;

		&__first {
			background-color: #F8F1EE;
			color: #5c765c;
			width: 50%;

			p {
				color: #5c765c;
				font-size: 18px;
				margin-bottom: 0;
			}
		}

		table {
			margin-bottom: 50px;
		}

		table,
		th,
		td {
			border: 1px solid #707070;
			border-collapse: collapse;
		}

		th,
		td {
			padding: 10px;
		}
	}
}

@media screen and (max-width: 650px) {
	.title {

		&__step5 {}

		&__desc p {
			width: 100%;
		}
	}

	.content {
		&__title {
			width: 50%;
		}

		&__information {
			flex-direction: column;

			&__item {
				width: 100%;
			}
		}

		&__price {
			display: block;

			&__item {
				width: 100%;

				table {
					width: 100%;
				}
			}

		}
	}

	.receive {
		&__information {
			flex-direction: column;

			&__item {
				width: 100%;
			}
		}
	}

	.total {
		&__price {
			width: 80%;
		}
	}
}

@media screen and (max-width: 400px) {
	.title {
		width: 90%;

		&__step5 {
			display: flex;
			font-size: 20px;
			align-items: center;
		}

		&__desc p {
			font-size: 14px;
		}
	}

	.content {
		width: 90%;

		&__title {
			p {
				font-size: 15px;
			}
		}

		&__information {
			&__item {
				p {
					font-size: 15px;
				}
			}
		}

		&__price {
			&__item {
				&__first {}

				.table {
					p {
						font-size: 15px;
					}
				}
			}

		}
	}

	.receive {
		&__title {
			p {
				font-size: 18px;
			}
		}

		&__information {
			width: 90%;

			&__item {
				p {
					font-size: 15px;
				}
			}
		}
	}

	.total {
		&__price {
			width: 90%;

			&__first {
				p {
					font-size: 15px;
				}
			}
		}
	}
}
</style>