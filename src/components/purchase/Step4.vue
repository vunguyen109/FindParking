<template>
	<section class="">
		<div class="title">
			<p class="title__wifi">
				{{ $t('SIM_SERVICE.STEP4_RECEIVE.NAVBAR') }}
			</p>
		</div>
		<div class="check">
			<label class="check__address">
				<input type="radio" name="check" :value="1" v-model="checkToNext.step4.wayReceive" />
				<p>
					{{ $t('SIM_SERVICE.STEP4_RECEIVE.QUESTIONS_RADIO.SELFIE') }}
				</p>
			</label>
			<label class="check__address">
				<input type="radio" name="check" :value="2" v-model="checkToNext.step4.wayReceive" />
				<p> {{$t('SIM_SERVICE.STEP4_RECEIVE.QUESTIONS_RADIO.OVERSEAS')}} </p>
			</label>
		</div>
		<div v-show="check_radio" class="content" >
			<div class="check">
				<label class="check__address">
					<input type="radio" name="check1" :value="1" v-model="checkToNext.step4.selectArea"/>
					<p>{{ $t('SIM_SERVICE.STEP4_RECEIVE.QUESTIONS_RADIO.IN_JAPAN') }}</p>
				</label>
				<label class="check__address">
					<input type="radio" name="check1" :value="2" v-model="checkToNext.step4.selectArea"/>
					<p>
						{{ $t('SIM_SERVICE.STEP4_RECEIVE.QUESTIONS_RADIO.OUTSIDE_JAPAN') }}
					</p>
				</label>
			</div>
			<div class="content__box">
				<tr class="content__box__text1">
					<p> {{ $t('SIM_SERVICE.STEP4_RECEIVE.QUESTIONS_TEXTINPUT.MAILING_NAME') }} </p>
					<b-form-input id="input-1" v-model="checkToNext.step4.senderName" :state="senderName" trim></b-form-input>
				</tr>
				<tr class="content__box__text1">
					<p>
						{{ $t('SIM_SERVICE.STEP4_RECEIVE.QUESTIONS_TEXTINPUT.POSTAL_CODE') }}
					</p>
					<b-form-input id="input-1" v-model="checkToNext.step4.ZIPCode" :state="ZIPCode" trim></b-form-input>
				</tr>
				<tr class="content__box__text">
					<p>
						{{$t('SIM_SERVICE.STEP4_RECEIVE.QUESTIONS_TEXTINPUT.MAILING_CONTACT_PHONE')}}
					</p>
					<b-form-input id="input-1" v-model="checkToNext.step4.Phone" :state="Phone" trim></b-form-input>
				</tr>
				<tr class="content__box__text2">
					<p>
						{{$t('SIM_SERVICE.STEP4_RECEIVE.QUESTIONS_TEXTINPUT.MAILING_DETAILS_ADDRESS')}}
					</p>
					<b-form-textarea class="multiple-lines" v-model="checkToNext.step4.mailingAddress" :state="mailingAddress" trim></b-form-textarea>
				</tr>
			</div>
		</div>
		<div v-show="this.showMask"  class="mask4">
			<button class="mask__btn"></button>
		</div>
	</section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'Step4',
	components: {},
	data() {
		return {
			checkToNext: {
				step4: {
					wayReceive: 0,
					selectArea: "",
					senderName: "",
					ZIPCode: "",
					Phone: "",
					mailingAddress: "",
				},
			},
			showMask: true,
			check_radio: false
		};
	},
	created() {
		this.init();
	},
	computed: {
		senderName() {
        return this.checkToNext.step4.senderName.length >= 1
		},
		ZIPCode() {
			return this.checkToNext.step4.ZIPCode.length >= 1
		},
		Phone() {
			return this.checkToNext.step4.Phone.length >= 1
		},
		mailingAddress() {
			return this.checkToNext.step4.mailingAddress.length >= 1
		},
	},
	watch: {
		"checkToNext.step4.wayReceive": function() {
		this.checkInput();
		},
		"checkToNext.step4.selectArea": function() {
		this.checkInput();
		},
		"checkToNext.step4.senderName": function() {
		this.checkInput();
		},
		"checkToNext.step4.ZIPCode": function() {
		this.checkInput();
		},
		"checkToNext.step4.Phone": function() {
		this.checkInput();
		},
		"checkToNext.step4.mailingAddress": function() {
		this.checkInput();
		},
	},
	methods: {
		init:function() {
            let response = this.getAnswer();
            if(Object.keys(response).length > 0){
                this.checkToNext.step4 = response.step4;
            }
        },
        ...mapGetters("purchase", ["getAnswer"]),

		checkInput:function () {
			if(this.checkToNext.step4.wayReceive == 1){
				this.check_radio = false;
				this.showMask = false;
				this.$emit("step4Answer", this.checkToNext );
			}
			else {
				this.check_radio = true;
				if( this.checkToNext.step4.selectArea == "" ||
					this.checkToNext.step4.senderName == "" ||
					this.checkToNext.step4.ZIPCode == "" || 
					this.checkToNext.step4.Phone == "" ||
					this.checkToNext.step4.mailingAddress == "" ) {
					this.showMask = true;
					
				}
				else{
					this.$emit("step4Answer", this.checkToNext );
					this.showMask = false;
				};
			}
		},
	},
};
</script>
<style lang="scss" scoped>
section {
	padding-top: 70px;
}
.mask4 {
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
}

.title p {
	display: flex;
	align-items: center;
}

.title__wifi {
	text-align: left;
	padding-left: 40px;
	border-left: 10px solid #5c765c;
	font-size: 32px;
	color: #5c765c;
	height: 40px;
}

.title__desc p {
	width: 30vw;
	margin-top: 20px;
	margin-bottom: 50px;
	padding: 10px 0;
	text-align: left;
	border-top: 1px solid #5c765c;
	border-bottom: 1px solid #5c765c;
	font-size: 18px;
	color: #5c765c;
	justify-content: center;
}

.check {
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	justify-content: space-evenly;
	margin-bottom: 50px;
}

.check p {
	margin-top: 15px;
	margin-left: 15px;
}

.check__address {
	display: flex !important;
	align-items: center !important;
	cursor: pointer;
}
.check__address input{
	cursor: pointer;
}
.content {
	width: 60%;
	margin: auto;
	padding: 50px 0;
	background-color: #f8f1ee;
	border: 1px solid #806c6c;
	border-radius: 3px;
}

.content__box {
	display: flex;
    justify-content: flex-start;
    width: 70%;
    margin: auto;
    margin-bottom: 30px;
    flex-wrap: wrap;
    flex-direction: column;
}

.content__box p {
	font-family: 'ABeeZee';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 28px;
	color: #5c765c;
	text-align: left;
	width: 50%;
}

.content__box input {
	height: 40px;
	width: 70%;
	margin-bottom: 10px;
}

.content__box__text {
	display: flex !important;
	align-items: center !important;
}

.content__box__text1 {
	display: flex !important;
	align-items: center !important;
}

.content__box__text2 {
	display: flex !important;
	align-items: flex-start;
}

.content__box__text1 input {
	// margin-left: 40px;
}

.content__box__text2 input {
	height: 100px !important;
}

.multiple-lines {
    overflow: auto;
    resize: vertical;
    width: 70%;
    height: 80px;
}

@media screen and (max-width: 900px) {
	.content__box p {	
		width: 50%;
	}
	
	.content__box {
		width: 90%;
	}
}

@media screen and (max-width: 768px) {
	.content {
		width: 80%;
	}
	.content__box {
		width: 80%;
		display: flex;
		justify-content: center;
	}

	.content__box p[data-v-00f24d4a] {
		width: 65%;
	}

	.content__box__text1 input {
		margin-left: 1px;
		flex-direction: column;
	}
	.content__box__text {
		flex-direction: column;
		justify-content: center;
		margin: auto;
		width: 100%;
	}
	.content__box__text1 {
		flex-direction: column;
		justify-content: center;
		margin: auto;
		width: 100%;
	}
	.content__box__text2 {
		flex-direction: column;
		align-items: center;
		margin: auto;
		width: 100%;
	}
}

@media screen and (max-width: 650px) {
	.content__box__text {
		flex-direction: column;
		justify-content: center;
		margin: auto;
	}
	.content__box__text1 {
		flex-direction: column;
		justify-content: center;
		margin: auto;
	}
	.content__box__text2 {
		flex-direction: column;
		align-items: center;
		margin: auto;
	}
	.title__desc p {
		width: 100%;
	}
	.content .title {
		column-gap: 10px;
		padding-left: 10px;
	}
	.content .content__box {
		display: block;
	}
	.content .note {
		margin: 0;
		font-size: 16px;
	}
	.content .required {
		font-size: 16px;
	}
}

@media screen and (max-width: 425px) {
	.content__box {
		width: 100%;
}
}
@media screen and (max-width: 300px) {
  .mask__btn {
	height: 66px;
  }
}
</style>
