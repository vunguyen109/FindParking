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
					<div v-if="productConfirmation.answer.step1.questions3_KeepNumber.status == 1" type="text" >{{$t('SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_SELECT_TEL_NUMBER.NEW_AGREEMENT')}}</div>
					<div v-else type="text">{{$t('SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_SELECT_TEL_NUMBER.ANOTHER_COMPANY.TITLE')}}</div>
				</div>
				<div class="content__information__item" v-show="productConfirmation.answer.step1.questions3_KeepNumber.status == 2">
					<p>
						* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.SIM_CARD_PURCHASE_DETAILS.PHONE_NUMBER') }} ：
					</p>
					<div type="text" >{{productConfirmation.answer.step1.questions3_KeepNumber.phone}}</div>
				</div>
				<div class="content__information__item">
					<p>
						* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.SIM_CARD_PURCHASE_DETAILS.OPEN_DAY') }} ：
					</p>
					<div type="text" >{{productConfirmation.answer.step1.questions8_dateStart}}</div>
				</div>
				<div class="content__information__item">
					<p>
						* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.SIM_CARD_PURCHASE_DETAILS.PLAN') }} ：
					</p>
					<div type="text" >{{productConfirmation.answer.step1.questions5_RatePlan.commodityName}}</div>
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
								<p>{{$t("SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WITHOUT_TAX", { price: Sim_total_Price })}}</p>
							</td>
						</tr>
						<tr>
							<td class="table">
								<p>{{$t("SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WITH_TAX", { price: tax_included(Sim_total_Price) })}}</p>
							</td>
						</tr>
					</table>

					<table>
						<tr>
							<td class="content__price__item__first">{{productConfirmation.answer.step1.questions6_FlatRateCall.commodityName}}</td>
							<td>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", { price: productConfirmation.answer.step1.questions6_FlatRateCall.price })}}</td>
						</tr>
						
						<tr v-for="(item, index) in productConfirmation.answer.step1.questions7_Option" :key="index">	
							<td class="content__price__item__first">{{item.commodityName}}</td>
							<td>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", {price: item.price })}}</td>
						</tr>
						<tr>
							<td class="content__price__item__first">{{$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.SIM_CARD_PURCHASE_DETAILS.UNIVERSERVE')}}</td>
							<td>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", { price: productConfirmation.result.univerServe })}}</td>
						</tr>
						<tr>
							<td class="content__price__item__first">{{$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.SIM_CARD_PURCHASE_DETAILS.RELAYSERVICE')}}</td>
							<td>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", { price: productConfirmation.result.relayService })}}</td>
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
								<p>{{$t("SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WITHOUT_TAX", { price: Sim_firtTotal_Price })}}</p>
							</td>
						</tr>
						<tr>
							<td class="table">
								<p>{{$t("SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WITHOUT_TAX", { price: tax_included(Sim_firtTotal_Price) })}}</p>
							</td>
						</tr>
					</table>

					<table>
						<tr>
							<th class="content__price__item__first">
								{{$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.COMMISSION')}}
							</th>
							<th>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", { price: productConfirmation.result.commission })}}</th>
						</tr>
						<tr>
							<td class="content__price__item__first">
								{{$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.SIM_CARD_PURCHASE_DETAILS.SIM_DAMAGES')}}
							</td>
							<td>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", { price: productConfirmation.result.simDamages })}}</td>
						</tr>
						<tr>
							<td class="content__price__item__first">{{productConfirmation.answer.step1.questions6_FlatRateCall.commodityName}}</td>
							<td>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", { price: productConfirmation.answer.step1.questions6_FlatRateCall.price })}}</td>
						</tr>
						
						<tr v-for="(item, index) in productConfirmation.answer.step1.questions7_Option" :key="index">	
							<td class="content__price__item__first">{{item.commodityName}}</td>
							<td>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", {price: item.price })}}</td>
						</tr>
						<tr>
							<td class="content__price__item__first">{{$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.SIM_CARD_PURCHASE_DETAILS.UNIVERSERVE')}}</td>
							<td>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", { price: productConfirmation.result.univerServe })}}</td>
						</tr>
						<tr>
							<td class="content__price__item__first">{{$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.SIM_CARD_PURCHASE_DETAILS.RELAYSERVICE')}}</td>
							<td>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", { price: productConfirmation.result.relayService })}}</td>
						</tr>
					</table>
				</div>
			</div>
		</div> 

		<div class="content" v-if="Object.keys(productConfirmation.answer.step2).length > 0">
			<div class="content__title">
				<p>
					{{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.LIGHT_PURCHASE_DETAILS.TITLE') }}
				</p>
			</div>
			<div class="content__information" >
				<div class="content__information__item">
					<p>
						* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.LIGHT_PURCHASE_DETAILS.PLAN') }} ：
					</p>
					<div type="text" >{{productConfirmation.answer.step2.questions1_cablePackage.commodityName}}</div>
				</div>
				<div class="content__information__item">
					<p>
						* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.LIGHT_PURCHASE_DETAILS.OPEN_DAY') }} ：
					</p>
					<div type="text" >{{productConfirmation.answer.step2.questions2_dateStart}}</div>
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
								<p>{{$t("SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WITHOUT_TAX", { price: productConfirmation.answer.step2.questions1_cablePackage.price })}}</p>
							</td>
						</tr>
						<tr>
							<td class="table">
								<p>{{$t("SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WITH_TAX", { price: tax_included(productConfirmation.answer.step2.questions1_cablePackage.price) })}}</p>
							</td>
						</tr>
					</table>

					<table>
						<tr>
							<th class="content__price__item__first">
								{{$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.PACKAGE_FEE')}}
							</th>
							<th>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", { price: productConfirmation.answer.step2.questions1_cablePackage.price })}}</th>
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
								<p>{{$t("SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WITHOUT_TAX", { price: cable_total_Price })}}</p>
							</td>
						</tr>
						<tr>
							<td class="table">
								<p>{{$t("SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WITH_TAX", { price: tax_included(cable_total_Price) })}}</p>
							</td>
						</tr>
					</table>

					<table>
						<tr>
							<th class="content__price__item__first">
								{{$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.PACKAGE_FEE')}}
							</th>
							<th>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", { price: productConfirmation.answer.step3.questions1_wifiPackage.price })}}</th>
						</tr>
						<tr>
							<td class="content__price__item__first">
								{{$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.ANOTHER_COMMISSION')}}
							</td>
							<td>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", { price: productConfirmation.result.optCommission })}}</td>
						</tr>
					</table> 
				</div>
			</div>
		</div>

		<div class="content" v-if="Object.keys(productConfirmation.answer.step3).length > 0">
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
					<div type="text" >{{productConfirmation.answer.step3.questions1_wifiPackage.commodityName}}</div>
				</div>
				<div class="content__information__item">
					<p>
						* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WIFI_PURCHASE_DETAILS.OPEN_DAY') }} :
					</p>
					<div type="text" >{{productConfirmation.answer.step3.questions2_dateStart}}</div>
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
								<p>{{$t("SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WITHOUT_TAX", { price: productConfirmation.answer.step3.questions1_wifiPackage.price })}}</p>
							</td>
						</tr>
						<tr>
							<td class="table">
								<p>{{$t("SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WITH_TAX", { price: tax_included(productConfirmation.answer.step3.questions1_wifiPackage.price) })}}</p>
							</td>
						</tr>
					</table>

					<table>
						<tr>
							<th class="content__price__item__first">
								{{$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.PACKAGE_FEE')}}
							</th>
							<th>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", { price: productConfirmation.answer.step3.questions1_wifiPackage.price })}}</th>
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
								<p>{{$t("SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WITHOUT_TAX", { price: wifi_total_Price })}}</p>
							</td>
						</tr>
						<tr>
							<td class="table">
								<p>{{$t("SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WITH_TAX", { price: tax_included(wifi_total_Price) })}}</p>
							</td>
						</tr>
					</table>

					<table>
						<tr>
							<th class="content__price__item__first">
								{{$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.PACKAGE_FEE')}}
							</th>
							<th>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", { price: productConfirmation.answer.step3.questions1_wifiPackage.price })}}</th>
						</tr>
						<tr>
							<td class="content__price__item__first">
								{{$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.ANOTHER_COMMISSION')}}
							</td>
							<td>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", { price: productConfirmation.result.wifiCommission })}}</td>
						</tr>
						<tr>
							<td class="content__price__item__first">
								{{$t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WIFI_PURCHASE_DETAILS.COD')}}
							</td>
							<td>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", { price: productConfirmation.result.cod })}}</td>
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
					<div v-if="productConfirmation.answer.step4.wayReceive == 1" type="text" >{{$t('SIM_SERVICE.STEP4_RECEIVE.QUESTIONS_RADIO.SELFIE')}}</div>
					<div v-else type="text">{{$t('SIM_SERVICE.STEP4_RECEIVE.QUESTIONS_RADIO.OVERSEAS')}}</div>
				</div>
				<div class="receive__information__item" v-show="productConfirmation.answer.step4.wayReceive == '2'">
					<p>* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.RECEIVE.AREA') }} ：</p>
					<div v-if="productConfirmation.answer.step4.selectArea == 1" type="text">{{ $t('SIM_SERVICE.STEP4_RECEIVE.QUESTIONS_RADIO.IN_JAPAN')}}</div>
					<div v-else type="text">{{$t('SIM_SERVICE.STEP4_RECEIVE.QUESTIONS_RADIO.OUTSIDE_JAPAN')}}</div>
				</div>
				<div class="receive__information__item" v-show="productConfirmation.answer.step4.wayReceive == '2'">
					<p>* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.RECEIVE.MAILING_NAME') }} ：</p>
					<div type="text" >{{productConfirmation.answer.step4.senderName}}</div>
				</div>
				<div class="receive__information__item" v-show="productConfirmation.answer.step4.wayReceive == '2'">
					<p>* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.RECEIVE.MAIL_CONTACT_PHONE') }} ：</p>
					<div type="text" >{{productConfirmation.answer.step4.ZIPCode}}</div>
				</div>
				<div class="receive__information__item" v-show="productConfirmation.answer.step4.wayReceive == '2'">
					<p>* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.RECEIVE.LOCAL_POSTAL_CODE') }} ：</p>
					<div type="text" >{{productConfirmation.answer.step4.Phone}}</div>
				</div>
				<div class="receive__information__item" v-show="productConfirmation.answer.step4.wayReceive == '2'">
					<p>* {{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.RECEIVE.MAILING_DETAILS_ADDRESS') }} ：</p>
					<div type="text" >{{productConfirmation.answer.step4.mailingAddress}}</div>
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
						<th>{{$t("COMMON.ITEM_TYPE.ONLY_PRICE", { price: receiving_place })}}</th>
					</tr>
				</table>
				<table border="1" cellspacing="0" cellpadding="5">
					<tr>
						<td rowspan="2" class="total__price__first">
							<p>
								{{ $t('SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.TOTAL.TOTAL_INITIAL_COST') }}
							</p>
						</td>
						<td>{{$t("SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WITHOUT_TAX", { price: totalPrice })}}</td>
					</tr>
					<tr>
						<td>{{$t("SIM_SERVICE.STEP5_PURCHASE_CONFIRMATION.WITH_TAX", { price: tax_included(totalPrice) })}} </td>
					</tr>
				</table>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		productConfirmation: {
			result: {},
			answer: {},
		}
	},
	data() {
		return {
			Sim_firtTotal_Price: 0,
			Sim_total_Price: 0,
			cable_total_Price: 0,
			wifi_total_Price: 0,
			total_Price: 0,
			temp: 0,
		};
	},
	computed: {
		totalPrice(){
			this.Sim_total_Price = parseInt(this.productConfirmation.answer.step1.questions6_FlatRateCall.price)
				+ parseInt(this.productConfirmation.result.univerServe)
				+ parseInt(this.productConfirmation.result.relayService);
			for(var item in this.productConfirmation.answer.step1.questions7_Option){
				this.Sim_total_Price += parseInt(this.productConfirmation.answer.step1.questions7_Option[item].price);
				
			}
			this.Sim_firtTotal_Price = this.Sim_total_Price
				+ parseInt(this.productConfirmation.result.commission) 
				+ parseInt(this.productConfirmation.result.simDamages);
			if(Object.keys(this.productConfirmation.answer.step2).length > 0){
				this.cable_total_Price =  parseInt(this.productConfirmation.answer.step2.questions1_cablePackage.price) 
				+ parseInt(this.productConfirmation.result.optCommission) 
				+ parseInt(this.productConfirmation.result.cod);
			}
			if(Object.keys(this.productConfirmation.answer.step3).length > 0){
				this.wifi_total_Price = parseInt(this.productConfirmation.answer.step3.questions1_wifiPackage.price) 
				+ parseInt(this.productConfirmation.result.wifiCommission) 
				+ parseInt(this.productConfirmation.result.cod);
			}
			this.total_Price = this.Sim_firtTotal_Price + this.cable_total_Price + this.wifi_total_Price;
			return this.total_Price; 
		}, 
		receiving_place(){
			if(this.productConfirmation.answer.step4.selectArea == 1 ){
				return this.productConfirmation.result.sendJaPrice;
			}
			else{
				return this.productConfirmation.result.sendForeignPrice;
			}
		}
	},
	watch: {
	},
	methods: {
		tax_included: function (value){
			return value + parseInt(this.productConfirmation.result.taxrate);
		}
	},
};

</script>
<style lang="scss" scoped>
.title {
    width: 80%;
    margin: auto;
}
.title__step5 {
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
.content {
    width: 80%;
    margin: auto;
    margin-bottom: 80px;
}
.content__title {
    width: 20vw;
    margin-bottom: 40px;
    padding: 10px 0;
    border-top: 1px solid #5c765c;
    border-bottom: 1px solid #5c765c;
    font-size: 20px;
    color: #816052;
    display: flex;
}
.content__title p {
    margin-bottom: 0;
    display: flex;
}
.content__information {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20%;
    row-gap: 40px;
    margin-bottom: 50px;
}
.content__information__item {
    display: flex;
    align-items: center;
    width: 35%;
}
.content__information__item p {
    width: 40%;
    color: #5c765c;
    font-size: 18px;
    margin-bottom: 0;
    margin-right: 10px;
    font-weight: 600;
    text-align: left;
}
.content__information__item div {
    width: 60%;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
	overflow-wrap: break-word;
}
.content__price {
    display: flex;
    column-gap: 20%;
    row-gap: 40px;
}
.content__price__item {
    display: block;
    width: 35%;
}
.content__price__item__first {
    background-color: #F8F1EE;
}
.content__price__item .table p {
    color: #5c765c;
    font-size: 18px;
    margin-bottom: 0px;
}
.content__price__item th, .content__price__item td {
    width: 50%;
    border: 1px solid #707070;
}
.content__price__item table {
    border: 1px solid #707070;
    border-collapse: collapse;
    height: fit-content;
    width: 100%;
    margin-bottom: 50px;
}
.content__price__item th, .content__price__item td {
    padding: 10px;
	vertical-align:middle;	
}
.receive {
    margin-bottom: 80px;
}
.receive__title {
    background-color: #f5fbf4;
    margin-bottom: 50px;
}
.receive__title p {
    padding: 15px 0;
    width: 80%;
    margin: auto;
    font-size: 24px;
    color: #5c765c;
    text-align: left;
}
.receive__information {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20%;
    row-gap: 40px;
    margin-bottom: 50px;
    width: 80%;
    margin: auto;
}
.receive__information__item {
    display: flex;
    align-items: center;
    width: 35%;
}
.receive__information__item p {
    width: 40%;
    color: #5c765c;
    font-size: 18px;
    margin-bottom: 0;
    margin-right: 10px;
    font-weight: 600;
    text-align: left;
}
.receive__information__item div {
    width: 60%;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
	overflow-wrap: break-word;
}

.total__line {
    background-color: #f5fbf4;
    padding: 5px;
    margin-bottom: 50px;
}
.total__price {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: auto;
}
.total__price__first {
    background-color: #F8F1EE;
    color: #5c765c;
    width: 50%;
}
.total__price__first p {
    color: #5c765c;
    font-size: 18px;
    margin-bottom: 0;
}
.total__price table {
    margin-bottom: 50px;
}
.total__price table, .total__price th, .total__price td {
    border: 1px solid #707070;
    border-collapse: collapse;
}
.total__price th, .total__price td {
    padding: 10px;
	vertical-align: middle;
}
@media screen and (max-width: 650px) {
    .title__desc p {
        width: 100%;
    }
    .content__title {
        width: 50%;
    }
    .content__information {
        flex-direction: column;
    }
    .content__information__item {
        width: 100%;
    }
    .content__price {
        display: block;
    }
    .content__price__item {
        width: 100%;
    }
    .content__price__item table {
        width: 100%;
    }
    .receive__information {
        flex-direction: column;
    }
    .receive__information__item {
        width: 100%;
    }
    .total__price {
        width: 80%;
    }
}
@media screen and (max-width: 400px) {
    .title {
        width: 90%;
    }
    .title__step5 {
        display: flex;
        font-size: 20px;
        align-items: center;
    }
    .title__desc p {
        font-size: 14px;
    }
    .content {
        width: 90%;
    }
    .content__title p {
        font-size: 15px;
    }
    .content__information__item p {
        font-size: 15px;
    }
    .content__price__item .table p {
        font-size: 15px;
    }
    .receive__title p {
        font-size: 18px;
    }
    .receive__information {
        width: 90%;
    }
    .receive__information__item p {
        font-size: 15px;
    }
    .total__price {
        width: 90%;
    }
    .total__price__first p {
        font-size: 15px;
    }
}

</style>