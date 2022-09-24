<template>
  <div class="breadcrumbs">
    <ul class="steps" id="navbar">
      <li class="step-done" @click="goStep(1)">
        <a v-bind:class="{ 'step-active': workStep == 1 }">{{
          $t("COMMON.NAVBAR.STEP1")
        }}</a>
      </li>
      <li
        v-bind:class="[
          { 'step-done': doneStep >= 2 },
          { step: this.doneStep < 2 },
        ]"
        @click="goStep(2)"
        v-show="this.checkToNext.setOrder == 1"
      >
        <a v-bind:class="{ 'step-active': workStep == 2 }">{{
          $t("COMMON.NAVBAR.STEP2")
        }}</a>
      </li>
      <li
        v-bind:class="[
          { 'step-done': doneStep >= 3 },
          { step: this.doneStep < 3 },
        ]"
        @click="goStep(3)"
        v-show="this.checkToNext.setOrder == 0"
      >
        <a v-bind:class="{ 'step-active': workStep == 3 }">
          {{ $t("COMMON.NAVBAR.STEP3") }}
        </a>
      </li>
      <li
        v-bind:class="[
          { 'step-done': doneStep >= 4 },
          { step: this.doneStep < 4 },
        ]"
        @click="goStep(4)"
      >
        <a v-bind:class="{ 'step-active': workStep == 4 }">
          {{ $t("COMMON.NAVBAR.STEP4") }}
        </a>
      </li>
      <li
        v-bind:class="[
          { 'step-done': doneStep >= 5 },
          { step: this.doneStep < 5 },
        ]"
        @click="goStep(5)"
      >
        <a v-bind:class="{ 'step-active': workStep == 5 }">
          {{ $t("COMMON.NAVBAR.STEP5") }}
        </a>
      </li>
      <li
        v-bind:class="[
          { 'step-done': doneStep >= 6 },
          { step: this.doneStep < 6 },
        ]"
        @click="goStep(6)"
      >
        <a v-bind:class="{ 'step-active': workStep == 6 }">
          {{ $t("COMMON.NAVBAR.STEP6") }}
        </a>
      </li>
      <li
        v-bind:class="[
          { 'step-done': doneStep >= 7 },
          { step: this.doneStep < 7 },
        ]"
        @click="goStep(7)"
      >
        <a v-bind:class="{ 'step-active': workStep == 7 }">
          {{ $t("COMMON.NAVBAR.STEP7") }}
        </a>
      </li>
    </ul>

    <div>
      <Step1
        :questions="step1Info"
        v-show="this.workStep == 1"
        @step1Answer="selectOrderSet"
      />
      <Step2 v-show="this.workStep == 2" 
        :optPlans="step2Info"
      @step2Answer="selectOrderSet"
      />
      <Step3 v-show="this.workStep == 3" 
        :wifiPlans="step3Info"
        @step3Answer="selectOrderSet"
      />
      <Step4 v-show="this.workStep == 4" 
        :postage="step4Info"
        @step4Answer="selectOrderSet"
      />
      <Step5 v-show="this.workStep == 5" 
        :productConfirmation="step5Info"
      />
      <Step6 v-show="this.workStep == 6" />
      <Step7 v-show="this.workStep == 7" />
    </div>

    <div class="pagination">
      <button
        class="Previous"
        @click="backStep"
        :disabled="this.isDisablePreviousButton"
      >
        {{ $t("BUTTON.PREVIOUS") }}
      </button>
      <button class="Next" v-show="this.isShowNextButton" @click="nextStep">
        {{ $t("BUTTON.NEXT") }}
      </button>
      <button class="Order" v-show="!this.isShowNextButton" @click="order">
        {{ $t("BUTTON.ORDER") }}
      </button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

import Step1 from "@/components/purchase/Step1.vue";
import Step2 from "@/components/purchase/Step2.vue";
import Step3 from "@/components/purchase/Step3.vue";
import Step4 from "@/components/purchase/Step4.vue";
import Step5 from "@/components/purchase/Step5.vue";
import Step6 from "@/components/purchase/Step6.vue";
import Step7 from "@/components/purchase/Step7.vue";
import { validate } from "json-schema";
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "Purchase",
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
  },
  data() {
    return {
      isShowNextButton: true,
      isDisablePreviousButton: true,
      workStep: 1,
      doneStep: 1,
      checkToNext: {
        currentStep: 0,
        setOrder: 2,
        step1: {},
        step2: {},
        step3: {},
        step4: {},

      },
      step1Info: {
        questions4_Set: [],
        questions5_RatePlan: [],
        questions6_FlatRateCall: [],
        questions7_Option: [],
      },
      step2Info: [],
      step3Info: [],
      step4Info: {
        sendForeignPrice: 0,
        sendJaPrice: 0,
    },
      step5Info: {
        result:{},
        answer: {},
      },
    };
  },
  created() {
      let response = this.$CONST.COMMON.API_TEMP.Response;
    // this.$api.post("sysOrder").then((response) => {
      //data step 1
      this.step1Info.questions4_Set = response.result.orderSet;
      this.step1Info.questions5_RatePlan = response.result.amountPlan;
      this.step1Info.questions6_FlatRateCall = response.result.converseQuota;
      this.step1Info.questions7_Option = response.result.ortherOption;
      //data step 2
      this.step2Info = response.result.optPlans;
      //data step 3
      this.step3Info = response.result.wifiPlans;
      //data step 4
      this.step4Info.sendForeignPrice = response.result.sendForeignPrice;
      this.step4Info.sendJaPrice = response.result.sendJaPrice;
      // data step 5
      this.step5Info.result = response.result;
    // });
    this.init();
  },
  computed: {},
  watch: {
    workStep() {
      if (this.workStep > this.doneStep) {
        this.doneStep = this.workStep;
      }
      if (this.workStep == 1) {
        this.isShowNextButton = true;
        this.isDisablePreviousButton = true;
      } else if (this.workStep == 7) {
        this.isShowNextButton = false;
        this.isDisablePreviousButton = false;
      } else {
        this.isShowNextButton = true;
        this.isDisablePreviousButton = false;
      }
    },
  },
  methods: {
    init:function () {
      let response = this.getAnswer();
        if(Object.keys(response).length > 0){
          this.checkToNext= response;
          this.doneStep = response.currentStep;
        }
    },
    order() {
      this.$router.push('/buying')
    },
    selectOrderSet(value) {
      if(value.setOrder != undefined ){
        this.checkToNext.setOrder = value.setOrder;
      }
      if(value.step1 != undefined ){
        this.checkToNext.step1 = value.step1;
      }
      if(value.step2 != undefined ){
        this.checkToNext.step2 = value.step2;
      }
      if(value.step3 != undefined ){
        this.checkToNext.step3 = value.step3;
      }
      if(value.step4 != undefined ){
        this.checkToNext.step4 = value.step4;
      }
      this.step5Info.answer = this.checkToNext;
      this.checkToNext.currentStep = this.doneStep;
      this.setAnswer(this.checkToNext);
    },
    
    ...mapMutations("purchase", ["setAnswer"]),
    ...mapGetters("purchase", ["getAnswer"]),

    goStep: function (stepNumber) {
      if (this.doneStep >= stepNumber) {
        this.workStep = stepNumber;
      }
    },
    nextStep: function () {
      if (this.workStep == 1) {
        if (this.checkToNext.setOrder == 1) {
          this.workStep = 2;
        } else if (this.checkToNext.setOrder == 0) {
          this.workStep = 3;
        } else this.workStep = 4;
      } else if (this.workStep == 2 || this.workStep == 3) {
        this.workStep = 4;
      } else {
        this.workStep += 1;
      }
    },
    backStep: function () {
      if (this.workStep == 4) {
        if (this.checkToNext.setOrder == 0) {
          this.workStep = 3;
        } else if (this.checkToNext.setOrder == 1) {
          this.workStep = 2;
        } else this.workStep = 1;
      } else if (this.workStep == 2 || this.workStep == 3) {
        this.workStep = 1;
      } else {
        this.workStep -= 1;
      }
    },
    validate: function (stepNumber) {
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: pink;
$hover-color: hotpink;

body {
  margin: 0;
  padding: 20px;
  background: white;
  font-size: 16px;
  font-family: sans-serif;
  letter-spacing: 0.05em;
}

.steps {
  list-style: none;
  display: flex;
  background-color: #f5fbf4;
  padding: 40px 0;
  justify-content: center;
  margin-bottom: 50px;
  overflow: hidden;
  .step-active {
    color: white !important;
  }

  .step-done {
    white-space: pre-wrap;
    transition: 0.3s ease-in-out;
    position: relative;
    height: 50px;
    margin-right: 30px;
    padding: 0 20px;
    background: #f35f0d;
    display: flex;
    align-items: center;
    &::after {
      transition: 0s ease-in-out;
      position: absolute;
      top: 0;
      right: -25px;
      border-left: 25px solid #f35f0d;
      border-top: 25px solid transparent;
      border-bottom: 25px solid transparent;
      content: "";
    }

    &::before {
      transition: 0.3s ease-in-out;
      content: "";
      position: absolute;
      top: 0;
      left: -25px;
      border-left: 25px solid transparent;
      border-top: 25px solid #f35f0d;
      border-bottom: 25px solid #f35f0d;
    }

    > a {
      color: inherit;
      text-decoration: none;
    }
  }

  .step {
    white-space: pre-wrap;
    transition: 0.3s ease-in-out;
    background: #5c765c;
    position: relative;
    height: 50px;
    margin-right: 30px;
    padding: 0 20px;
    display: flex;
    align-items: center;

    > a {
      text-decoration: none;
      color: inherit;
    }

    &:last-child {
      margin-right: 0;
    }

    &::before {
      transition: 0.3s ease-in-out;
      content: "";
      position: absolute;
      top: 0;
      left: -25px;
      border-left: 25px solid transparent;
      border-top: 25px solid #5c765c;
      border-bottom: 25px solid #5c765c;
    }

    &:first-child::before {
      display: none;
    }

    &::after {
      transition: 0.3s ease-in-out;
      position: absolute;
      top: 0;
      right: -25px;
      border-left: 25px solid #5c765c;
      border-top: 25px solid transparent;
      border-bottom: 25px solid transparent;
      content: "";
    }
  }
}
@media screen and (max-width: 845px) {
  .steps {
    .step-done {
      padding: 0 5px;
    }
    .step {
      padding: 0 5px;
    }
  }
}
@media screen and (max-width: 690px) {
  .steps {
    display: none;
  }
}
.pagination {
  width: 80%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  column-gap: 60px;
  justify-content: center;
  font-size: 16px;
  .Cancel {
    font-size: 16px;
    color: #4f566b;
    border: none;
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  .Previous {
    font-size: 16px;
    color: #4f566b;
    border: 1px solid #c1c9d2;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    cursor: pointer;

    &:disabled {
      background-color: #c1c9d2 !important;
      cursor: unset !important;
    }
  }

  .Next {
    font-size: 16px;
    color: #fff;
    border: 1px solid #c1c9d2;
    background-color: #5c765c;
    border-radius: 5px;
    padding: 10px 25px;
    cursor: pointer;
  }
  .Order {
    font-size: 16px;
    color: #fff;
    border: 1px solid #c1c9d2;
    background-color: #f35f0d;
    border-radius: 5px;
    padding: 10px 25px;
    cursor: pointer;
  }
}
</style>