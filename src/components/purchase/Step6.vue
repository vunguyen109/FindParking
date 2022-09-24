<template>
	<div class="">
		<section class="memberSelection">
			<div class="top">
				<p class="top__title">{{ $t('SIM_SERVICE.STEP6_INFOMATION_CONFIRM.TITLE') }}</p>
				<div class="top__note">
					<div>
						{{  $t('SIM_SERVICE.STEP6_INFOMATION_CONFIRM.DESC')  }}
					</div>
				</div>
			</div>
			<div class="member">
				<div class="member__title">
					<div class="member__title__items"></div>
					<div class="member__title__text">{{ $t('COMMON.ITEM_TYPE.NECESSARY') }}</div>
					<div class="member__title__content">{{  $t('SIM_SERVICE.STEP6_INFOMATION_CONFIRM.QUESTIONS_MEMBER_CONFIRM.TITLE')  }}</div>
				</div>
				<div class="member__content">
					<button>{{  $t('SIM_SERVICE.STEP6_INFOMATION_CONFIRM.QUESTIONS_MEMBER_CONFIRM.MEMBER')  }}</button>
					<button>
						<p>{{  $t('SIM_SERVICE.STEP6_INFOMATION_CONFIRM.QUESTIONS_MEMBER_CONFIRM.NOT_A_MENBER')  }}</p>
						<p>{{  $t('SIM_SERVICE.STEP6_INFOMATION_CONFIRM.QUESTIONS_MEMBER_CONFIRM.SUGGESTIONS')  }}</p>
					</button>
				</div>
			</div>
			<div class="member">
				<div class="member__title">
					<div class="member__title__items"></div>
					<div class="member__title__text">{{  $t('COMMON.ITEM_TYPE.NECESSARY')  }}</div>
					<div class="member__title__content">{{  $t('SIM_SERVICE.STEP6_INFOMATION_CONFIRM.QUESTIONS_REGISTER_INFO.TITLE')  }}</div>
				</div>
				<div class="member__content">
					<button class="member__content__register">{{  $t('SIM_SERVICE.STEP6_INFOMATION_CONFIRM.QUESTIONS_REGISTER_INFO.REGISTER')  }}</button>
				</div>
			</div>
		</section>
	</div>
</template>
<script>

export default {
	name: "Step6",
	components: {
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
.memberSelection .top {
    width: 80%;
    margin: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}
.memberSelection .top__title {
    text-align: left;
    padding-left: 40px;
    border-left: 10px solid #5C765C;
    font-size: 32px;
    color: #5C765C;
    height: 40px;
    margin-bottom: 0;
}
.memberSelection .top__note {
    width: 30vw;
    margin-top: 20px;
    margin-bottom: 50px;
    padding: 10px 0;
    text-align: left;
    border-top: 1px solid #5C765C;
    border-bottom: 1px solid #5C765C;
    font-size: 18px;
    color: #5C765C;
    justify-content: center;
}
.memberSelection .member {
    display: flex;
    margin: 50px 20%;
    flex-direction: column;
}
.memberSelection .member__title {
    display: flex;
    align-items: center;
}
.memberSelection .member__title__items {
    width: 0;
    height: 20px;
    border: 10px solid #f35f0d;
}
.memberSelection .member__title__content {
    margin-left: 50px;
    height: 30px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: .178846px;
    color: #816052;
}
.memberSelection .member__title__text {
    margin-left: 5px;
    width: 50px;
    height: 20px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 18px;
    letter-spacing: .178846px;
    color: #f35f0d;
}
.memberSelection .member__content {
    border: 1px solid #806c6c;
    padding: 40px;
    margin: 20px 0px;
    margin-left: 71px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    column-gap: 5%;
    row-gap: 20px;
    background-color: #f8f1ee;
}
.memberSelection .member__content button {
    background-color: #B4A29B;
    border: none;
    width: 40%;
    min-width: 300px;
    padding: 10px;
    border-radius: 30px;
    color: white;
    font-size: 24px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    cursor: pointer;
    align-items: center;
}
.memberSelection .member__content button p {
    margin: 0;
}
.memberSelection .member__content__register {
    width: 60% !important;
}
@media screen and (max-width: 1060px) {
    .memberSelection {
        margin-top: 50px;
    }
    .memberSelection .top__note {
        width: 100%;
    }
    .memberSelection .member {
        margin: 30px 10%;
    }
}
@media screen and (max-width: 600px) {
    .memberSelection {
        margin-top: 20px;
    }
    .memberSelection .top__title {
        height: auto;
    }
    .memberSelection .member {
        margin: 20px 5%;
    }
    .memberSelection .member__content button {
        min-width: 170px;
    }
}
@media screen and (max-width: 460px) {
    .memberSelection .member__title__content {
        margin-left: 10px;
    }
}

</style>