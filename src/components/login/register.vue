<template>
    <div>
        <section class="p-form">
            <div class="p-form-register">
                <div class="p-form-register_radio">
                    <b-form-radio name="some-radios" @change="checkradio(0)" value="0">{{ $t("REGISTER.INDIVIDUAL") }}
                    </b-form-radio>
                    <b-form-radio name="some-radios" @change="checkradio(1)" value="1">{{ $t("REGISTER.CORPORATION") }}
                    </b-form-radio>
                </div>
                <div class="p-form-register__btn">
                    <input type="text" :placeholder="this.$t('REGISTER.EMAIL_ADDRESS')" />
                    <button type="button" class="p-form-register__btn--verification--code" :disabled="counting"
                        @click="startCountdown">
                        <p v-if="counting" :time="60000" @end="onCountdownEnd">{{timerCount }}</p>
                        <span v-else>{{ $t("REGISTER.SEND_VERIFICATION_CODE") }}</span>
                    </button>
                </div>
                <div>
                    <input class="p-form-register__input" type="password"
                        :placeholder="this.$t('REGISTER.AUTHENTICATION_CODE')" />
                </div>

                <div>
                    <input class="p-form-register__input" id="a" type="text" :placeholder=" radio_click == 0 ? this.$t('REGISTER.QUESTIONS__SPELL.NAME') : this.$t('REGISTER.QUESTIONS__SPELL.NAME1')" />
                    <span class="focus-border"></span>
                </div>

                <div>
                    <input class="p-form-register__input" id="b" type="text" :placeholder=" radio_click == 0 ? this.$t('REGISTER.QUESTIONS__SPELL.SPELL_NAME') : this.$t('REGISTER.QUESTIONS__SPELL.SPELL_NAME1')" />
                    <span class="focus-border"></span>
                </div>

                <div>
                    <input class="p-form-register__input" type="password" :placeholder="this.$t('REGISTER.PASSWORD')" />
                    <span class="focus-border"></span>
                </div>

                <div>
                    <input class="p-form-register__input" type="password"
                        :placeholder="this.$t('REGISTER.CONFIRM_PASSWORD')" />
                    <span class="focus-border"></span>
                </div>

                <div>
                    <button class="p-form-register__buttonRegister">{{ $t("REGISTER.BUTTON_RESGITER") }}</button>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    setup() { },
    data() {
        return {
            counting: false,
            timerCount: 0,
            radio_click: 0
        };
    },
    methods: {
        checkradio(value) {
            this.radio_click = value;
        },
        startCountdown: function () {
            this.counting = true;
            this.timerCount= 60;
        },
        onCountdownEnd: function () {
            this.counting = false;
        },
    },
    watch: {
        timerCount: {
            handler(value) {
                if (value > 0) {
                    setTimeout(() => {
                        this.timerCount--;
                    }, 1000);
                }
                if (value == 0) {
                    this.counting = false;
                }
            },
            immediate: true
        }
    }
};
</script>

<style lang="scss">
.p-form {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.p-form-register_radio {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-bottom: -60px;
}

.custom-control-label {
    margin-left: 20px;
    cursor: pointer;
}

.p-form-register {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 600px;
    height: 670px;
    background-color: #f5fbf4;
    background: rgba(245, 251, 244, 0.9);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 34px;
    align-items: center;

    &__input {
        box-sizing: border-box;
        width: 400px;
        height: 50px;
        margin-top: 20px !important;
        padding-left: 30px;
        font-size: 16px;
        margin: auto;
        background: rgba(245, 251, 244, 0.9);
        border: 1px solid #83a683;
        border-radius: 34px;
    }

    &__buttonRegister {
        box-sizing: border-box;
        color: #fff;
        width: 400px;
        height: 50px;
        font-size: 16px;
        margin-top: 20px;
        margin-bottom: 50px;
        background: #83a683;
        border: 1px solid #83a683;
        border-radius: 34px;
    }

    &__btn {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: flex-end;

        input {
            box-sizing: border-box;
            width: 240px;
            height: 50px;
            margin-top: 100px !important;
            padding-left: 30px;
            font-size: 16px;
            margin: auto;
            background: rgba(245, 251, 244, 0.9);
            border: 1px solid #83a683;
            border-radius: 34px;
        }

        &--verification--code {
            box-sizing: border-box;
            color: #fff;
            width: 140px;
            height: 50px;
            font-size: 16px;
            margin-left: 20px;
            margin-bottom: 0;
            background: #83a683;
            border: 1px solid #83a683;
            border-radius: 34px;

            P {
                margin-top: 10px;
            }
        }
    }
}

@media screen and (max-width: 1350px) {
    .p-form-register {
        width: 500px;
        height: 650px;
    }
}

@media screen and (max-width: 1150px) {
    .p-form-register {
        width: 400px;
        height: 600px;

        &__input {
            width: 300px;
        }

        &__btn {
            input {
                width: 180px;
            }

            &--verification--code {
                width: 100px;
            }
        }

        &__buttonRegister {
            width: 300px;
        }
    }
}

@media screen and (max-width: 950px) {
    .p-form-register {
        width: 350px;
        height: 600px;

        &__input {
            width: 250px;
        }

        &__btn {
            input {
                width: 130px;
            }

            &--verification--code {
                width: 100px;
            }
        }

        &__buttonRegister {
            width: 300px;
        }
    }
}

@media screen and (max-width: 768px) {
    .p-form-register {
        width: 600px;
        height: 600px;

        &__input {
            width: 500px;
        }

        &__btn {
            input {
                width: 300px;
            }

            &--verification--code {
                width: 180px;
            }
        }

        &__buttonRegister {
            width: 500px;
        }
    }
}

@media screen and (max-width: 650px) {
    .p-form-register {
        width: 450px;
        height: 600px;

        &__input {
            width: 350px;
        }

        &__btn {
            input {
                width: 230px;
            }

            &--verification--code {
                width: 100px;
            }
        }

        &__buttonRegister {
            width: 350px;
        }
    }
}

@media screen and (max-width: 500px) {
    .p-form-register {
        width: 400px;
        height: 600px;

        &__input {
            width: 300px;
        }

        &__btn {
            input {
                width: 200px;
            }

            &--verification--code {
                width: 80px;
            }
        }

        &__buttonRegister {
            width: 300px;
        }
    }
}

@media screen and (max-width: 440px) {
    .p-form-register {
        width: 350px;
        height: 600px;

        &__input {
            width: 300px;
        }

        &__btn {
            input {
                width: 180px;
            }

            &--verification--code {
                width: 100px;
            }
        }

        &__buttonRegister {
            width: 300px;
        }
    }
}

@media screen and (max-width: 380px) {
    .p-form-register {
        width: 270px;
        height: 600px;

        &__input {
            width: 220px;
        }

        &__btn {
            input {
                width: 100px;
            }

            &--verification--code {
                width: 100px;
            }
        }

        &__buttonRegister {
            width: 220px;
        }
    }
}
</style>