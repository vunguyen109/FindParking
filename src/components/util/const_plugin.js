import Vue from 'vue';

const ConstPlugin = {
   install(Vue, options) {
      Vue.prototype.$CONST = {
         BUTTON: {
            PREVIOUS: '戻る',
            NEXT: '次へ',
            CREATE: '登録',
            MENU: {
               TOP: "トップ",
               SIM_SERVICE: "SIMサービス",
               CAMPAIGN: "キャンペーン",
               RATE_PLAN: "料金プラン"
            }
         },
         COMMON: {
            LANGUAGE: {
               1: "zh",
               2: "en",
               3: "ja",
               4: "vi"
            },
            API_TEMP: {
               Response: {
                     "code": 0,
                     "message": "",
                     "result": {
                          "amountPlan": [
                             {
                                 "commodityCode": "ap1",
                                 "commodityName": "プランA　1ギガ",
                                 "price": 850
                             },
                             {
                                 "commodityCode": "ap2",
                                 "commodityName": "プランB　2ギガ",
                                 "price": 990
                             },
                             {
                                 "commodityCode": "ap3",
                                 "commodityName": "プランC　3ギガ",
                                 "price": 1500
                             }
                         ],
                         "cod": "7980",
                         "commission": "1234",
                          "converseQuota": [
                             {
                                 "commodityCode": "cq1",
                                 "commodityName": "5分かけ放題",
                                 "price": 500
                             },
                             {
                                 "commodityCode": "cq2",
                                 "commodityName": "10分かけ放題",
                                 "price": 700
                             },
                             {
                                 "commodityCode": "cq3",
                                 "commodityName": "完全かけ放題",
                                 "price": 220
                             },
                             {
                                 "commodityCode": "cq4",
                                 "commodityName": "通話定額は必要ない",
                                 "price": 0
                             }
                         ],
                         "optCommission": "3300",
                         "optPlans": [
                             {
                                 "commodityCode": "oc1",
                                 "commodityName": "マンションタイプ（集合住宅向け）",
                                 "price": 2233
                             },
                              {
                                 "commodityCode": "oc2",
                                 "commodityName": "ファミリータイプ（戸建て向け）",
                                 "price": 1233
                             },
                         ],
                         "orderSet": [
                             {
                                 "id": "os1",
                                 "setDepict": "#NA",
                                 "setName": "SIMカード、WIFIのセットを購入する",
                                 "setPreferential": 0
                             },
                             {
                                 "id": "os2",
                                 "setDepict": "#NA",
                                 "setName": "SIMカード、光のセットを購入する",
                                 "setPreferential": 0
                             },
                             {
                                 "id": "os3",
                                 "setDepict": "#NA",
                                 "setName": "SIMカードだけを購入する",
                                 "setPreferential": 0
                             }
                         ],
                          "ortherOption": [
                             {
                                 "commodityCode": "oo1",
                                 "commodityName": "スマート留守電",
                                 "price": 120
                             },
                             {
                                 "commodityCode": "oo2",
                                 "commodityName": "キャッチフォン",
                                 "price": 120
                             }
                         ],
                         "sendForeignPrice": "9999",
                         "sendJaPrice": "1111",
                         "simDamages": "134",
                         "taxrate": "300",
                         "wifiCommission": "3300",
                         "univerServe": 140,
                        "relayService": 240,
                         "wifiPlans": [
                             {
                                 "commodityCode": "wp1",
                                 "commodityName": "10G　プラン",
                                 "price": 3800
                             },
                         {
                                 "commodityCode": "wp2",
                                 "commodityName": "100G　プラン",
                                 "price": 4800
                             },
                         ]
                     },
                     "success": true,
                     "timestamp": 0
                     }
            },
            NUMBER: {
               ZERO: 0,
               ONE: 1,
               TWO: 2,
               THREE: 3,
               FOUR: 4,
               FIVE: 5,
               TWENTY_FIVE: 25,
               TWENTY_SIX: 26,
               FORTY: 40,
               ONE_HUNDRED: 100
            },
            STRING: {
               IS_BLANK: "",
               IS_NULL: null,
               IS_INVALID: undefined,
               STRIKE_THROUGH: '—'
            }
         },
      };
   },
};

Vue.use(ConstPlugin);
