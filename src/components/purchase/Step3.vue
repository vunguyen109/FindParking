<template>
	<section class="">
		<div class="title">
			<p class="title__step3"> {{ $t('SIM_SERVICE.STEP3_WIFI_SELECTION.TITLE') }} </p>
			<div class="title__desc">
				<p>{{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.DESC') }}</p>
			</div>
		</div>
		<div class="content">
			<div class="content__title">
				<p class="content__title__note">{{ $t('COMMON.ITEM_TYPE.NECESSARY') }}</p>
				<p class="content__title__required">
					*{{ $t('SIM_SERVICE.STEP3_WIFI_SELECTION.REQUIRED1') }} :
				</p>
			</div>
			<div class="content__box">
				<label v-for="(item, index) in wifiPlans" :key="index">
					<div class="content__box__wifi">
						<input type="radio" name="wifi" v-model="checkToNext.step3.questions1_wifiPackage" :value="item"/>
						<label >{{ item.commodityName }}</label>
						<p>{{  $t("COMMON.ITEM_TYPE.PRICE_MONTH", { price: item.price }) }}</p>
					</div>
				</label>
				
			</div>
			<div class="content__title">
				<p class="content__title__note">{{ $t('COMMON.ITEM_TYPE.NECESSARY') }}</p>
				<p class="content__title__required">
					*{{ $t('SIM_SERVICE.STEP3_WIFI_SELECTION.REQUIRED2') }} :
				</p>
			</div>
			<div class="content__calculator">
				<b-form-input id="date" 
				:min="new Date().toISOString().substr(0, 10)" 
				type="date"
				v-model="checkToNext.step3.questions2_dateStart"
				>
				</b-form-input>
			</div>
		</div>
		<div v-show="this.showMask" class="mask3">
			<button class="mask__btn"></button>
		</div>
	</section>
</template>
<script>
import { mapGetters } from 'vuex';


export default {
	name: 'Step3',
	components: {},
	props: {
		wifiPlans: [],
	},
	data() {
		return {
			checkToNext: {
				step3: {
					questions1_wifiPackage: "",
					questions2_dateStart: "",
				},
			},
            showMask: true,
		};
	},
    created() {
        this.init();
    },
	computed: {},
	watch: {
		"checkToNext.step3.questions1_wifiPackage": function() {
		this.checkInput();
		},
		"checkToNext.step3.questions2_dateStart": function() {
		this.checkInput();
		},
	},
	methods: {
        init:function() {
            let response = this.getAnswer();
            if(Object.keys(response).length > 0){
                this.checkToNext.step3 = response.step3;
            }
        },
        ...mapGetters("purchase", ["getAnswer"]),
		checkInput:function () {
			if( this.checkToNext.step3.questions1_wifiPackage == "" ||
				this.checkToNext.step3.questions2_dateStart == "" ) {
                this.showMask = true;
				
			}
			else{
                this.showMask = false;
				this.$emit("step3Answer", this.checkToNext );
			};
		},
	},
};
</script>
<style lang="scss" scoped>
	.mask3 {
		margin-left: auto;
		opacity: 0;
		width: 50%;
		right: 0;
		display: flex;
		position: absolute;
	}
	.mask__btn {
		height: 46px;
		width: 84px;
		margin-top: 50px;
		margin-left: 30px;
		border: none;
	}
.title {
	width: 80%;
	margin: auto;

	&__step3 {
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
	width: 60%;
	margin: auto;
	padding: 50px 0;
	background-color: #f8f1ee;
	border: 1px solid #806c6c;
	border-radius: 3px;

	&__title {
		margin: auto;
		width: 90%;
		display: flex;
		column-gap: 20px;
		text-align: left;
		padding-left: 20px;
		margin-bottom: 20px;
		border-left: 10px solid #f35f0d;
		font-size: 20px;
		color: #f35f0d;

		&__note {
			margin: 0;
		}

		&__required {
			font-size: 20px;
			text-align: left;
			color: #5c765c;
			margin: 0;
		}
	}

	&__box {
		display: flex;
		gap: 5%;
		justify-content: space-between;
		width: 70%;
		margin: auto;
		margin-bottom: 30px;

		&__wifi {
			background-color: #fff;
			border-radius: 3px;
			border: 1px solid #000000;
			padding: 5%;

			input {
				margin-right: 10px;
				margin-bottom: 15px;
				color: #000000;
			}

			p {
				font-size: 20px;
			}

			label {
				font-size: 20px;
			}
		}
	}

	&__calculator {
		display: flex;
		align-items: center;
		width: 70%;
		margin: auto;

		p {
			font-size: 20px;
			color: #5c765c;
		}

		b-form-input {
			padding: 8px 25px;
		}
	}
}



@media screen and (max-width: 768px) {
	.content {
		width: 80%;
	}

	.content__box__wifi {
		padding: 3%;
	}
}

@media screen and (max-width: 650px) {
	.title {
		&__step3 {}

		&__desc p {
			width: 100%;
		}
	}


	.content {
		&__title {
			column-gap: 10px;
			padding-left: 10px;
			&__note {
				margin: 0;
				font-size: 16px;
			}
			&__required {
				font-size: 16px;
			}
		}

		&__box {
			display: block;
			label{
				width: 100%;
			}
			&__wifi {
				margin-bottom: 15px;
				input {}
				p{
					font-size: 16px;
				}
				label {
					font-size: 16px;
					
				}
			}
		}

		&__calculator {
			p {}

			b-form-input {}
		}
	}
}
.form-control {
	width: 170px;
	height: 44px;
}
@media screen and (max-width: 500px) {
  .mask__btn {
	height: 66px;
  }
}
@media screen and (max-width: 400px) {
	.title {
		width: 90%;

		&__step3 {
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
		padding: 30px 0;
		&__title {
			&__note {
			}
			&__required {
			}
		}

		&__box {
			&__wifi {
				input {}

				p {}

				label {
				}
			}
		}

		&__calculator {
			p {}

			b-form-input {}
		}
	}
}
</style>