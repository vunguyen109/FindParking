<template>
  <div class="">
    <section class="p-sim-selection">
      <div class="p-sim-selection__title">
        <p class="p-sim-selection__title__content">
          {{ $t("SIM_SERVICE.STEP1_PLAN_SELECT.TITLE") }}
        </p>
        <div class="p-sim-selection__title__desc">
          <p>{{ $t("SIM_SERVICE.STEP1_PLAN_SELECT.DESC") }}</p>
        </div>
      </div>
      <div class="p-sim-selection__question">
        <div class="p-sim-selection__question__title">
          <div class="p-sim-selection__question__title__item"></div>
          <div class="p-sim-selection__question__title__text">
            {{ $t("COMMON.ITEM_TYPE.NECESSARY") }}
          </div>
          <div class="p-sim-selection__question__title__content">
            {{
              $t(
                "SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_PURCHASE_METHOD.TITLE"
              )
            }}
          </div>
        </div>
        <form class="p-sim-selection__question__container">
          <a href="">{{
            $t(
              "SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_PURCHASE_METHOD.FORM_JURIDICAL_PERSON"
            )
          }}</a>
        </form>
      </div>

      <div class="p-sim-selection__question">
        <div class="p-sim-selection__question__title">
          <div class="p-sim-selection__question__title__item"></div>
          <div class="p-sim-selection__question__title__text">
            <p>{{ $t("COMMON.ITEM_TYPE.NECESSARY") }}</p>
          </div>
          <div class="p-sim-selection__question__title__content">
            {{
              $t(
                "SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_SELECT_TEL_NUMBER.TITLE"
              )
            }}
          </div>
        </div>

        <div id="questions3_KeepNumber" class="p-sim-selection__question__container">
          <div>
            <label>
              <input type="radio" name="group1"  
			  v-model="checkToNext.step1.questions3_KeepNumber.status"
              :value="1"/>
              {{
                $t(
                  "SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_SELECT_TEL_NUMBER.NEW_AGREEMENT"
                )
              }}
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="group1"  
			        v-model="checkToNext.step1.questions3_KeepNumber.status"
              :value="2"/>
              {{
                $t(
                  "SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_SELECT_TEL_NUMBER.ANOTHER_COMPANY.TITLE"
                )
              }}
              <span class="p-sim-selection__question__transferCompany">
                <div
                  class="p-sim-selection__question__transferCompany__rowText"
                >
                  <div class="col-3">
                    <input
                      class="effect-1 effect1-text-number"
                      type="text"
                      v-model="checkToNext.step1.questions3_KeepNumber.contactsPhone"
                      :placeholder="
                        this.$t(
                          'SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_SELECT_TEL_NUMBER.ANOTHER_COMPANY.TEL_PLACE_HOLDER'
                        )
                      "
                    />
                    <span class="focus-border"></span>
                  </div>
                  <div class="col-3">
                    <input
                      class="effect-2 effect1-text-number"
                      type="text"
                      v-model="checkToNext.step1.questions3_KeepNumber.NMPCode"
                      :placeholder="
                        this.$t(
                          'SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_SELECT_TEL_NUMBER.ANOTHER_COMPANY.MNP_PLACE_HOLDER'
                        )
                      "
                    />
                    <span class="focus-border"></span>
                  </div>
                  <div
                    class="p-sim-selection__question__transferCompany__calendar"
                  >
                    <input  id="date"
                      v-model="checkToNext.step1.questions3_KeepNumber.NPMEndDate"
                    :min="new Date().toISOString().substr(0, 10)"
                    placeholder = "sadfsdf+ this.$t('SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_SELECT_TEL_NUMBER.ANOTHER_COMPANY.DATE_PLACE_HOLDER')"
                    type="date" />
                  </div>
                </div>
                <div class="p-sim-selection__question__chooseCompany">
                  <label
                    v-for="(item, index) in $t(
                      'SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_SELECT_TEL_NUMBER.ANOTHER_COMPANY.BANKS'
                    )"
                    :key="index"
                  >
                    <input type="radio" name="group2" v-model="checkToNext.step1.questions3_KeepNumber.SimBrand" :value="index"/>
                    {{ item }}
                  </label>
                </div>
                <div class="p-sim-selection__question__randomNumberCode">
                  <div class="p-sim-selection__question__title__item--arbitrarily"></div>
                  <div class="p-sim-selection__question__title__text--arbitrarily arbitrarily__randomCode">{{ $t("COMMON.ITEM_TYPE.ARBITRARILY") }}</div>
                  <div class="p-sim-selection__question__randomNumberCode__text">
                    <input
                      class="effect-1 effect1-text-number"
                      type="text"
                      id="id"
                      name="id"
                      v-model="checkToNext.step1.questions3_KeepNumber.phone"
                      :placeholder="this.$t('SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_SELECT_TEL_NUMBER.ANOTHER_COMPANY.SIM_PLACE_HOLDER')"
                    />
                    <span class="focus-border"></span>
                  </div>
                  <button
                    class="p-sim-selection__question__randomNumberCode__button"
                    @click="randomNumberCode()"
                    style="font-family: sans-serif"
                  >
                    {{
                      $t(
                        "SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_SELECT_TEL_NUMBER.ANOTHER_COMPANY.RUN"
                      )
                    }}
                  </button>
                </div>
                <p id="showRandom"></p>
              </span>
            </label>
          </div>
        </div>
      </div>
      <div id="questions4_Set" class="p-sim-selection__question">
        <div class="p-sim-selection__question__title">
          <div class="p-sim-selection__question__title__item"></div>
          <div class="p-sim-selection__question__title__text">
            {{ $t("COMMON.ITEM_TYPE.NECESSARY") }}
          </div>
          <!-- セットで一緒にお求めですか？ -->
          <div class="p-sim-selection__question__title__content">
            {{ $t("SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_SET.TITLE") }}
          </div>
        </div>
        <form class="p-sim-selection__question__container">
          <label v-for="(item, index) in questions.questions4_Set" :key="index">
            <input
              type="radio"
              name="group1"
              :value="item"
              v-model="checkToNext.step1.questions4_Set"
              @change="setOrderType(index)"
            />
            {{ item.setName }}
          </label>
        </form>
      </div>

      <div id="questions5_RatePlan" class="p-sim-selection__question">
        <div class="p-sim-selection__question__title">
          <div class="p-sim-selection__question__title__item"></div>
          <div class="p-sim-selection__question__title__text">
            {{ $t("COMMON.ITEM_TYPE.NECESSARY") }}
          </div>
          <!-- 料金プランをお選びください -->
          <div class="p-sim-selection__question__title__content">
            {{ $t("SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_RATE_PLAN.TITLE") }}
          </div>
        </div>
        <form class="p-sim-selection__question__container">
          <label
            v-for="(item, index) in questions.questions5_RatePlan"
            :key="index"
          >
            <input
              type="radio"
              name="group1"
              v-model="checkToNext.step1.questions5_RatePlan"
              :value="item"
            />
            {{ item.commodityName }}&nbsp;&nbsp;&nbsp;{{
              $t("COMMON.ITEM_TYPE.PRICE_MONTH", { price: item.price })
            }}
          </label>
        </form>
      </div>

      <div id="questions6_FlatRateCall" class="p-sim-selection__question">
        <div class="p-sim-selection__question__title">
          <div class="p-sim-selection__question__title__item"></div>
          <div class="p-sim-selection__question__title__text">
            {{ $t("COMMON.ITEM_TYPE.NECESSARY") }}
          </div>
          <!-- 通話定額は何分必要ですか？ -->
          <div class="p-sim-selection__question__title__content">
            {{
              $t("SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_FLAT_RATE_CALL.TITLE")
            }}
          </div>
        </div>
        <form class="p-sim-selection__question__container">
          <label
            v-for="(item, index) in questions.questions6_FlatRateCall"
            :key="index"
          >
            <input
              type="radio"
              name="group1"
              v-model="checkToNext.step1.questions6_FlatRateCall"
              :value="item"
            />
            {{ item.commodityName }}&nbsp;&nbsp;&nbsp;{{
              $t("COMMON.ITEM_TYPE.PRICE_MONTH", { price: item.price })
            }}
          </label>
        </form>
      </div>

      <div class="p-sim-selection__question">
        <div class="p-sim-selection__question__title">
          <div class="p-sim-selection__question__title__item--arbitrarily"></div>
          <div class="p-sim-selection__question__title__text--arbitrarily">{{ $t("COMMON.ITEM_TYPE.ARBITRARILY") }}</div>
          <div class="p-sim-selection__question__title__content">
            {{ $t("SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_OPTION.TITLE") }}
          </div>
        </div>
        <form class="p-sim-selection__question__container">
          <label
            v-for="(item, index) in questions.questions7_Option" :key="index">
            <input
              type="checkbox"
              name="group1"
              v-model="checkToNext.step1.questions7_Option"
              :value="item"
            />
            
            {{ item.commodityName }}&nbsp;&nbsp;&nbsp;
            {{$t("COMMON.ITEM_TYPE.PRICE_MONTH", { price: item.price })}}
            
          </label>
        </form>
      </div>

      <div id="questions8_dateStart" class="p-sim-selection__question">
        <div class="p-sim-selection__question__title">
          <div class="p-sim-selection__question__title__item"></div>
          <div class="p-sim-selection__question__title__text">
            {{ $t("COMMON.ITEM_TYPE.NECESSARY") }}
          </div>
          <div class="p-sim-selection__question__title__content">
            {{
              $t("SIM_SERVICE.STEP1_PLAN_SELECT.QUESTIONS_DESIRED_DATE.TITLE")
            }}
          </div>
        </div>
        <form class="p-sim-selection__question__container">
          <label>
            <b-form-input
              id="date"
              :min="new Date().toISOString().substr(0, 10)"
              type="date"
              v-model="checkToNext.step1.questions8_dateStart"
            >
            </b-form-input>
          </label>
        </form>
      </div>
	 <div v-show="this.showMask" class="mask">
		<button class="mask__btn" @click="scrollToDiv()"></button>
	 </div>
    </section>
  </div>
</template>

<script>
	import $ from 'jquery'
  import { mapGetters } from 'vuex';

export default {
  name: "Step1",
  props: {
    questions: {
      questions4_Set: [],
      questions5_RatePlan: [],
      questions6_FlatRateCall: [],
      questions7_Option: [],
    },
  },
  data() {
    return {
    showMask: true,
		checkToNext: {
			setOrder: 2,
			step1: {
				questions3_KeepNumber: {
          status: 0,
          contactsPhone: "",
          NMPCode: "",
          NPMEndDate: "",
          SimBrand: "",
          phone: "",
        },
				questions4_Set: "",
				questions5_RatePlan: "",
				questions6_FlatRateCall: "",
        questions7_Option: [],
        questions8_dateStart: "",
			},
		}
    };
  },
  created() {
    this.init();
  },
  computed: {},
  watch: {
    'checkToNext.step1.questions3_KeepNumber': function() {
      this.checkInput()
    },
    'checkToNext.step1.questions5_RatePlan': function() {
      this.checkInput()
    },
    'checkToNext.step1.questions6_FlatRateCall': function() {
      this.checkInput()
    },
    'checkToNext.step1.questions7_Option': function() {
      this.checkInput()
    },
    'checkToNext.step1.questions8_dateStart': function() {
      this.checkInput()
    }
  },
  methods: {
    init:function() {
      let response = this.getAnswer();
        if(Object.keys(response).length > 0){
          this.checkToNext.step1 = response.step1;
          this.checkToNext.setOrder = response.setOrder;
        }
    },
    ...mapGetters("purchase", ["getAnswer"]),
    checkInput: function() {
      if (
        this.checkToNext.step1.questions3_KeepNumber == '' ||
        this.checkToNext.step1.questions4_Set.length == 0 ||
        this.checkToNext.step1.questions5_RatePlan.length == 0 ||
        this.checkToNext.step1.questions6_FlatRateCall.length == 0 ||
        this.checkToNext.step1.questions8_dateStart.length == 0
      ) {
        this.showMask = true
      } else {
        this.showMask = false
      }
      this.$emit('step1Answer', this.checkToNext);
    },
    setOrderType:function (value) {
		this.checkToNext.step1.questions4_Set = this.questions.questions4_Set[value];
      this.checkToNext.setOrder = value;
	  this.checkInput();
    },
    // SIMのSerial取得するAPIを呼ぶ
    randomNumberCode: function() {
      this.$api.post('getSerialNumber').then(response => {
        document.getElementById('showRandom').innerText = response.data[0].serial_number
      })
    },
	scrollToDiv: function () {
		for(var item in this.checkToNext.step1){
			if(this.checkToNext.step1[item] == ""){
				$('html, body').animate({
                    scrollTop: $("#"+item).offset().top
                }, 2000);
				break;
			}
		}
	}
  },
};
</script>

<style scoped>
	.mask {
    opacity: 0;
		width: 50%;
		right: 0;
		display: flex;
		position: absolute;
	}
	.mask__btn {
		height: 46px;
		width: 84px;
		margin-left: 30px;
    border: none;
	}
.p-sim-selection__question__container label {
  margin-bottom: 0;
}

.p-sim-selection {
  margin-top: 80px;
}

/* START TITLE */
.p-sim-selection__title {
  width: 80%;
  margin: auto;
}

.p-sim-selection__title p {
  display: flex;
  align-items: center;
}

.p-sim-selection__title__content {
  text-align: left;
  padding-left: 40px;
  border-left: 10px solid #5c765c;
  font-size: 32px;
  color: #5c765c;
  height: 40px;
}

.p-sim-selection__title__desc p {
  width: 50%;
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

/* END TITLE */

/* START CONTENT */
.p-sim-selection__question {
  margin-bottom: 50px;
  margin-left: 20%;
}

.p-sim-selection__question__title {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}

.p-sim-selection__question__title__item {
  width: 0;
  height: 20px;
  border: 10px solid #f35f0d;
}

.p-sim-selection__question__title__text {
  margin-left: 5px;
  width: 60px;
  font-family: ABeeZee;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 18px;
  letter-spacing: 0.178846px;
  color: #f35f0d;
}

.p-sim-selection__question__title__text p {
  width: inherit;
  margin-bottom: 0;
}

.p-sim-selection__question__title__content {
  margin-left: 15px;
  font-family: ABeeZee;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.178846px;
  color: #816052;
}

.p-sim-selection__question__container {
  display: flex;
  margin-left: 100px;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;
}

.p-sim-selection__question__container a {
  text-decoration: none;
  color: #2e2e2e;
}

.p-sim-selection__question__container
  .p-sim-selection__question__transferCompany {
  display: none;
}

.p-sim-selection__question__container > div {
  text-align: left;
}

.p-sim-selection__question__container div input:checked + input,
.p-sim-selection__question__container input:checked + span {
  display: block;
}

.p-sim-selection__question__title__item--arbitrarily {
  width: 0;
  height: 20px;
  border: 10px solid #5c765c;
}

.p-sim-selection__question__title__text--arbitrarily {
  margin-left: 5px;
  width: 60px;
  height: 20px;
  font-family: ABeeZee;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 18px;
  letter-spacing: 0.178846px;
  color: #5c765c;
}

/* Start Transfer from another company */
.p-sim-selection__question__transferCompany__rowText {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
}

.p-sim-selection__question__transferCompany__calendar {
  float: left;
  margin: 10px 5%;
}

.p-sim-selection__question__chooseCompany {
  display: flex;
  gap: 40px;
  margin-top: 20px;
  margin-left: 30px;
}

.p-sim-selection__question__randomNumberCode {
  margin: 10px 0 0 15px;
  display: flex;
  align-items: center;
}

.p-sim-selection__question__randomNumberCode__text {
  float: left;
  width: 50%;
  margin: 10px 3%;
  position: relative;
}

.p-sim-selection__question__randomNumberCode__button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 14px;
  gap: 6px;
  width: 60px;
  height: 32px;
  background: #f35f0d;
  border-color: #f35f0d;
  color: #ffffff;
  font-size: 14px;
  line-height: 18px;
  border-radius: 6px;
  margin-top: 13px;
}

#showRandom {
  box-sizing: border-box;
  max-width: 200px;
  height: 30px;
  margin-left: 20%;
  background: #f8f1ee;
  border: 1px solid #806c6c;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

input[type="text"] {
  font: 15px/24px "Muli", sans-serif;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
}

:focus {
  outline: none;
}

.col-3 {
  float: left;
  margin: 10px 3%;
  position: relative;
  max-width: 65%;
}

input[type="text"] {
  font: 15px/24px "Lato", Arial, sans-serif;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
}

.effect-1,
.effect-2,
.effect-3 {
  border: 0;
  padding: 7px 0;
  border-bottom: 1px solid #ccc;
}

.effect-1 ~ .focus-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #f35f0d;
  transition: 0.4s;
}

.effect-1:focus ~ .focus-border {
  width: 100%;
  transition: 0.4s;
}

.effect-2 ~ .focus-border {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #f35f0d;
  transition: 0.4s;
}

.effect-2:focus ~ .focus-border {
  width: 100%;
  transition: 0.4s;
  left: 0;
}

.effect-3 ~ .focus-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  z-index: 99;
}

.effect-3 ~ .focus-border:before,
.effect-3 ~ .focus-border:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: #f35f0d;
  transition: 0.4s;
}

.effect-3 ~ .focus-border:after {
  left: auto;
  right: 0;
}

.effect-3:focus ~ .focus-border:before,
.effect-3:focus ~ .focus-border:after {
  width: 50%;
  transition: 0.4s;
}

.effect1-text-number {
  padding-left: 10px;
}

/* End Transfer from another company */

/* RESPONSIVE 1000px */
@media screen and (max-width: 1000px) {
  .p-sim-selection__title__desc p {
    width: 60%;
  }

  .p-sim-selection__question__container {
    margin-left: 50px;
    max-width: 80%;
  }

  .p-sim-selection__question__chooseCompany {
    gap: 15px;
  }

  .p-sim-selection__question__transferCompany__rowText {
    width: 100%;
  }

  .col-3 {
    max-width: 115%;
  }

  #showRandom {
    margin-left: 24%;
  }

  .p-sim-selection__question__randomNumberCode__button {
    width: 60px;
  }

  .p-sim-selection__question__randomNumberCode__text {
    width: 60%;
  }
}

/* RESPONSIVE 768px */
@media screen and (max-width: 768px) {
  .p-sim-selection__title {
    width: 80%;
  }

  .p-sim-selection__title p {
    justify-content: center;
  }

  .p-sim-selection__question {
    margin-left: 10%;
  }

  .p-sim-selection__title__desc {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .p-sim-selection__title__desc p {
    width: 70%;
    font-size: 16px;
  }

  .p-sim-selection__title__content {
    border: none;
    padding: 0;
    font-size: 26px;
  }
}

/* RESPONSIVE 650px */
@media screen and (max-width: 680px) {
  .p-sim-selection__question {
    margin-right: 10%;
    margin-bottom: 10%;
    text-align: left;
  }

  .p-sim-selection__title__desc p {
    width: 80%;
  }

  .p-sim-selection__question__title__text {
    font-size: 18px;
  }

  .p-sim-selection__question__title__content {
    font-size: 16px;
    /* line-height: 0; */
    margin-left: 0;
  }

  .p-sim-selection__question__title {
    align-items: flex-start;
  }

  .p-sim-selection__question__container {
    margin-left: 10%;
    max-width: 100%;
  }

  .p-sim-selection__question__chooseCompany {
    display: flex;
    flex-direction: column;
  }

  .p-sim-selection__question__transferCompany__rowText {
    width: 100%;
  }

  .p-sim-selection__question__randomNumberCode__text {
    width: 50%;
  }

  .p-sim-selection__question__container > div {
    width: 100%;
  }

  .p-sim-selection__question__container label {
    width: 100%;
  }

  .p-sim-selection__question__randomNumberCode {
    width: 100%;
  }

  .p-sim-selection__question__randomNumberCode__button[data-v-9284431c] {
    width: 70px;
  }
}

/* RESPONSIVE 500px */
@media screen and (max-width: 500px) {
  .p-sim-selection__question__container {
    margin-left: 5%;
  }
  .mask__btn {
	height: 66px;
  }
}

/* RESPONSIVE 440px */
@media screen and (max-width: 440px) {
  .p-sim-selection__question__randomNumberCode__text {
    margin: 10px 0%;
  }

  .arbitrarily__randomCode {
    width: 35px;
    font-size: 14px;
  }
  
}
@media screen and (max-width: 300px) {
  .mask__btn {
	margin-top: 25px;
  }
}
</style>
