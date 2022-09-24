<template>
    <div class="">
        <section class="comfirmForm">
            <div class="form card example-1 scrollbar-ripe-malinka">
                <div class="form__title">
                    {{ $t('SIM_SERVICE.STEP7_CONSENT_SIGN.IMPORTANT_MANUAL.TITLE') }}
                </div>
                <div class="form__content scrollbar-ripe-malinka">
                    <p>{{ $t('SIM_SERVICE.STEP7_CONSENT_SIGN.TEMP_DESC') }}</p>
                    <p>{{ $t('SIM_SERVICE.STEP7_CONSENT_SIGN.TEMP_CONTENT') }}</p>
                </div>
            </div>
            <div class="form card example-1 scrollbar-ripe-malinka">
                <div class="form__title">
                    {{ $t('SIM_SERVICE.STEP7_CONSENT_SIGN.AGREEMENTS.TITLE') }}
                </div>
                <div class="form__content">
                    <p>{{ $t('SIM_SERVICE.STEP7_CONSENT_SIGN.TEMP_DESC') }}</p>
                    <p>{{ $t('SIM_SERVICE.STEP7_CONSENT_SIGN.TEMP_CONTENT') }}</p>
                </div>
            </div>
            <div class="form card example-1 scrollbar-ripe-malinka">
                <div class="form__title">
                    {{ $t('SIM_SERVICE.STEP7_CONSENT_SIGN.AGREEMENTS.TITLE') }}
                </div>
                <div class="form__content">
                    <p>{{ $t('SIM_SERVICE.STEP7_CONSENT_SIGN.TEMP_DESC') }}</p>
                    <p>{{ $t('SIM_SERVICE.STEP7_CONSENT_SIGN.TEMP_CONTENT') }}</p>
                </div>
            </div>
            <div class="check_box">
                <input type="checkbox" @click="checkSignature()" />{{
                $t('SIM_SERVICE.STEP7_CONSENT_SIGN.CHECKBOX')
                }}
            </div>
            <div v-show="check" class="signature" id="which">
                <div class="signature__title">
                    {{ $t('SIM_SERVICE.STEP7_CONSENT_SIGN.SIGN.TITLE') }}
                </div>
                <div class="signature__sign">
                    <VueSignaturePad id="signature" width="100%" height="100%" ref="signaturePad" :options="{ onBegin: () => {$refs.signaturePad.resizeCanva();},
                            onEnd: () => {
                                this.signed = true;
                            }
                    }" />
                </div>
                <div class="signature__comfirm">
                    <button class="button" @click="save" v-show="signed">
                        {{ $t('SIM_SERVICE.STEP7_CONSENT_SIGN.SIGN.ACCEPT') }}
                    </button>
                    <button class="button" @click="undo">
                        {{ $t('SIM_SERVICE.STEP7_CONSENT_SIGN.SIGN.CLEAN') }}
                    </button>
                </div>
            </div>
            <div v-show="this.showMask" class="mask7">
                <button class="mask__btn" @click="scrollToDiv()"></button>
            </div>
            <div class="payment__infor">
                <div class="payment__infor__line">
                    <p>支払情報</p>
                </div>
                <div class="payment__infor__method">
                    <p class="payment__infor__method__note">{{ $t('COMMON.ITEM_TYPE.NECESSARY') }}</p>
                    <p>支払方法：</p>
                    <b-form-select v-model="selected" :options="options"></b-form-select>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import VueSignaturePad from 'vue-signature-pad';
import Vue from 'vue';
Vue.use(VueSignaturePad);

export default {
    name: 'Step7',
    components: {},
    data() {
        return {
            check: false,
            signed: false,
            showMask: true,
            selected: 'e',
            options: [
                { value: null, text: 'Choose a payment method' },
                { value: 'e', text: 'credit：クレジットカード決済' },
                { value: 'a', text: 'alipay：Alipay 国際決済' },
                { value: 'b', text: 'wechatpay：Wechatpay国際決済' },
                { value: { C: '3PO' }, text: 'unionpay：銀聯ネット決済' },
                { value: 'd', text: '来店支払' }
            ]
        };
    },
    computed: {},
    watch: {},
    methods: {
        undo() {
            this.$refs.signaturePad.clearSignature();
            this.signed = false;
        },
        save() {
            const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
            console.log(data);
            this.showMask = false;
        },
        checkSignature() {
            if (this.check == true) {
                this.check = false;
            }
            else {
                this.check = true;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.mask7 {
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

.comfirmForm {
    margin-top: 80px;

    #signature {
        border: double 3px transparent;
        border-radius: 5px;
        background-image: linear-gradient(white, white),
            radial-gradient(circle at top left, #4bc5e8, #9f6274);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }

    .container {
        width: '100%';
        padding: 8px 16px;
    }

    .button {
        font-size: 16px;
        color: #fff;
        border: 1px solid #c1c9d2;
        background-color: #5c765c;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
    }

    .form {
        display: flex;
        margin: 50px 20%;
        flex-direction: column;
        background-color: #f8f1ee;
        border: 1px solid #806c6c;
        padding: 30px;
        min-height: 400px;

        &__title {
            color: #144a14;
            font-size: 36px;
            font-weight: 400;
        }

        &__content {
            color: #816052;
            font-size: 20px;
            font-weight: 400;
            text-align: left;
        }
    }

    .check_box {
        margin: 50px 15%;
        display: flex;
        font-size: 28px;
        font-weight: 400px;

        input[type='checkbox'] {
            margin-right: 10px;
            transform: scale(2);
        }
    }

    .signature {
        margin: 0 10%;

        &__title {
            text-align: left;
            font-size: 36px;
            font-weight: 400;
            color: #144a14;
        }

        &__sign {
            height: 500px;
            margin: auto;
        }

        &__comfirm {
            button {
                background-color: #b4a29b;
                border: none;
                width: 15%;
                min-width: 130px;
                padding: 10px;
                color: white;
                font-size: 24px;
                font-weight: 400;
                margin: 40px 5%;
                cursor: pointer;
            }
        }
    }

    .payment__infor {
        &__line {
            background-color: #f5fbf4;

            p {
                font-size: 28px;
                padding: 15px 0;
                color: #144a14;
                text-align: left;
                width: 80%;
                margin: auto;
            }
        }

        &__method {
            display: flex;
            width: 80%;
            margin: auto;
            padding: 50px 0 0 0;
            gap: 2%;
            align-items: center;
            &__note {
                border-left: 10px solid #f35f0d;
                font-size: 20px;
                color: #f35f0d;
                margin-bottom: 0;
                
            }

            p {
                margin-bottom: 0;
                font-size: 20px;
            }

            select {
                width: 50% !important;
            }
        }
    }
}

.scrollbar-deep-purple::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
}

.thin::-webkit-scrollbar {
    width: 6px;
}

.example-1 {
    position: relative;
    overflow-y: scroll;
    height: 200px;
}

@media screen and (max-width: 1060px) {
    .comfirmForm {
        margin-top: 50px;

        .form {
            margin: 30px 10%;
        }

        .signature {
            &__sign {
                width: 80%;
            }
        }
    }
}

@media screen and (max-width: 600px) {
    .comfirmForm {
        margin-top: 20px;

        .form {
            margin: 20px 5%;
        }

        .signature {
            &__title {
                font-size: 24px;
                margin-bottom: 10px;
            }

            &__sign {
                width: 90%;
                height: 200px;
            }

            &__comfirm {
                button {
                    min-width: 116px;
                    margin: 40px 0px;
                }
            }
        }

        .check_box {
            font-size: 16px;
            margin: 50px 5%;
            row-gap: 10px;

            input[type='checkbox'] {
                transform: scale(1);
            }
        }

        .payment__infor {
        &__line {
            p {
                font-size: 20px;
            }
        }

        &__method {
            padding: 30px 0 0 0;
            &__note {
                font-size: 16px;
            }

            p {
                font-size: 16px;
            }

            select {    
            }
        }
    }
    }
}

@media screen and (max-width: 500px) {
    .mask__btn {
        height: 66px;
    }
}

@media screen and (max-width: 460px) {
    .comfirmForm {
        .form {
            &__title {
                font-size: 24px;
            }

            &__content {
                font-size: 16px;
            }
        }
    }
}
</style>
