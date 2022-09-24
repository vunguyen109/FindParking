<template>
    <div>
        <section>
            <div class="p-form-login">
                <div class="col-003">
                    <input class="p-form-login__input" type="text" :placeholder="this.$t('LOGIN.TYPE_ID')" />
                    <span class="focus-border"></span>
                </div>

                <div class="col-003">
                    <input class="p-form-login__input" type="password" :placeholder="this.$t('LOGIN.PASSWORD')" />
                    <span class="focus-border"></span>
                </div>

                <div class="col-003__code">
                    <div>
                        <p type="text">{{ randomCode }}</p>
                    </div>
                    <div>
                        <input class="p-form-login__input--code" type="text" v-model="inputCode"
                            :placeholder="this.$t('LOGIN.CODE')" />
                    </div>
                </div>
                <div class="col-003__login__error" v-show="showErr">{{ $t("COMMON.ERR.CODE_INPUT") }}</div>
                <div class="col-003__login">
                    <div>
                        <button type="button" @click="login">
                            {{ $t("LOGIN.TITLE") }}
                        </button>
                    </div>
                </div>

                <div class="p-form-login__password">
                    <div class="p-form-login__password__forgetPassword">
                        <a href="">{{ $t("LOGIN.FORGET_PASSWORD") }}</a>
                    </div>

                    <div class="p-form-login__password__recoverPassword">
                        <a href="">{{ $t("LOGIN.RECOVER_PASSWORD") }}</a>
                    </div>
                </div>

                <div class="p-form-login__account">
                    <div class="p-form-login__account__noAccount">
                        <a href="">{{ $t("LOGIN.NO_ACCOUNT") }}</a>
                    </div>

                    <div class="p-form-login__account__newAccount">
                        <a href="/register">{{ $t("LOGIN.NEW_ACCOUNT") }}</a>
                    </div>
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
            randomCode: this.makeCode(4),
            inputCode: "",
            showErr: false,
        };
    },
    methods: {
        makeCode(length) {
            var result = "";
            var characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                );
            }
            return result;
        },
        login() {
            if (this.inputCode === this.randomCode) {
                this.$api.post("login").then((response) => {
                    this.$localStorage.set("token", response.token);
                    this.$router.push("/");
                });
                this.showErr = false;
            } else {
                this.randomCode = this.makeCode(4);
                this.showErr = true;
            }
        },
        goToRegister: function () {
            this.$router.push("/register");
        },
    },
};
</script>
  
<style lang="scss">
.p-form-login {
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    padding-left: 70px;
    width: 600px;
    height: 600px;
    background-color: #f5fbf4;
    background: rgba(245, 251, 244, 0.9);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 34px;

    &__input {
        box-sizing: border-box;
        width: 400px;
        height: 50px;
        left: 90px;
        top: 100px;
        padding-left: 30px;
        font-size: 16px;
        margin: auto;
        background: rgba(245, 251, 244, 0.9);
        border: 1px solid #83a683;
        border-radius: 34px;
    }

    &__input--code {
        box-sizing: border-box;
        width: 250px;
        height: 50px;
        left: 90px;
        top: 100px;
        padding-left: 30px;
        font-size: 16px;
        margin: auto;
        background: rgba(245, 251, 244, 0.9);
        border: 1px solid #83a683;
        border-radius: 34px;
    }

    &__password {
        display: flex;
        margin-top: 50px;
        margin-left: 130px;

        &__forgetPassword {
            text-decoration: none;
            font-family: "ABeeZee";
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;

            a {
                color: #83a683;
            }
        }

        &__recoverPassword {
            text-decoration: none;
            font-family: "ABeeZee";
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;

            a {
                color: #000000;
            }
        }
    }

    &__account {
        display: flex;
        margin-top: 30px;
        margin-left: 130px;

        &__noAccount {
            text-decoration: none;
            font-family: "ABeeZee";
            font-style: normal;
            font-weight: 400;
            font-size: 20px;

            a {
                color: #000000;
            }
        }

        &__newAccount {
            text-decoration: none;
            width: 160px;
            height: 24px;
            left: 1257px;
            top: 1026px;
            font-family: "ABeeZee";
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;

            a {
                color: #83a683;
            }
        }
    }
}

.col-003 {
    flex: 0 0 13%;
    margin-right: 100px;
}

.col-003__code {
    display: flex;
    gap: 46px;
    margin-left: 14px;

    p {
        width: 100px;
        height: 50px;
        // background-color: #83A683;
        border: 1px solid #83a683;
        box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        font-family: "ABeeZee";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        text-align: center;
        color: #83a683;
        padding-top: 9px;
        margin-left: 5px;
    }
}

.col-003__login {
    flex: 0 0 13%;
    margin-right: 100px;

    button {
        margin-top: 15%;
        width: 400px;
        height: 50px;
        background-color: #83a683;
        border: 1px solid #83a683;
        box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.2);
        border-radius: 34px;
        font-family: "ABeeZee";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: rgba(255, 255, 255, 0.79);
    }

    &__error {
        color: #F35F0D;
    }
}

@media screen and (max-width: 1200px) {
    .col-003 {
        flex: 0 0 15%;
    }

    .p-form-login {
        width: 500px;
        height: 560px;
    }

    .col-003__code {
        margin-left: 0;
    }

    .p-form-login__password {
        margin-left: 40px;
    }

    .p-form-login__account {
        margin-left: 40px;
    }
}

@media screen and (max-width: 1024px) {
    .p-login__container {
        gap: 0px;
    }

    .p-form-login {
        width: 400px;
        height: 550px;
        padding-left: 40px;
    }

    .p-form-login__input {
        width: 300px;
    }

    .p-form-login__input--code {
        width: 150px;
    }

    .col-003__login button {
        width: 300px;
    }

    .p-form-login__password {
        margin-left: 0;
    }

    .p-form-login__account {
        margin-left: 0;
    }
}

@media screen and (max-width: 870px) {
    .p-form-login {
        width: 600px;
        height: 550px;
    }

    .p-form-login__input {
        width: 400px;
    }

    .p-form-login__input--code {
        width: 250px;
    }

    .col-003__code {
        margin-left: 80px;
    }

    .col-003 {
        margin: auto;
    }

    .col-003__login {
        margin-right: 0;

        button {
            margin-top: 10%;
        }
    }

    .p-form-login__password {
        margin-left: 25%;
    }

    .p-form-login__account {
        margin-left: 25%;
        padding-bottom: 50px;
    }
}

@media screen and (max-width: 700px) {
    .p-form-login {
        width: 500px;
        height: 550px;
    }

    .p-form-login__input {
        width: 350px;
    }

    .p-form-login__input--code {
        width: 200px;
    }

    .col-003__code {
        margin-left: 50px;
    }

    .p-form-login__password {
        margin-left: 10%;
    }

    .p-form-login__account {
        margin-left: 10%;
    }
}

@media screen and (max-width: 580px) {
    .p-form-login {
        width: 400px;
        height: 550px;
    }

    .p-form-login__input {
        width: 300px;
    }

    .p-form-login__input--code {
        width: 150px;
    }

    .col-003 {
        margin-right: 50px;
    }

    .col-003__code {
        margin-left: 12px;
    }

    .col-003__login {
        margin-right: 25px;
    }

    .p-form-login__password {
        margin-left: 16%;
    }

    .p-form-login__account {
        margin-left: 16%;
    }

    .p-form-login__password__forgetPassword {
        font-size: 14px;
    }

    .p-form-login__password__recoverPassword {
        font-size: 14px;
    }

    .p-form-login__account__noAccount {
        font-size: 14px;
    }

    .p-form-login__account__newAccount {
        font-size: 14px;
    }
}

@media screen and (max-width: 450px) {
    .p-form-login {
        width: 350px;
        height: 550px;
    }

    .p-form-login__input {
        width: 300px;
    }

    .p-form-login__input--code {
        width: 140px;
    }

    .col-003 {
        margin-right: 50px;
    }

    .col-003__code {
        margin-left: 0;

        button {
            width: 80px;
        }
    }

    .col-003__login {
        margin-right: 25px;

        button {
            width: 250px;
        }
    }

    .p-form-login__password {
        margin-left: 5%;
    }

    .p-form-login__account {
        margin-left: 5%;
    }
}

@media screen and (max-width: 400px) {
    .p-form-login {
        width: 300px;
        height: 500px;
        padding-left: 20px;
    }

    .p-form-login__input {
        width: 250px;
    }

    .p-form-login__input--code {
        width: 115px;
    }

    .col-003 {
        margin-right: 50px;
    }

    .col-003__code {
        margin-left: 0;
        display: flex;
        gap: 30px;

        button {
            width: 80px;
        }
    }

    .col-003__login {
        margin-right: 25px;

        button {
            width: 250px;
        }
    }

    .p-form-login__password {
        margin-left: 0;
    }

    .p-form-login__account {
        margin-left: 0;
    }
}

@media screen and (max-width: 330px) {
    .p-form-login {
        width: 260px;
        height: 400px;
        padding-top: 30px;
    }

    .p-form-login__input {
        width: 220px;
    }

    .p-form-login__input--code {
        width: 100px;
    }

    .col-003 {
        margin-right: 50px;
    }

    .col-003__code {
        margin-left: 0;
        display: flex;
        gap: 15px;

        button {
            width: 65px;
            font-size: 14px;
        }
    }

    .col-003__login {
        margin-bottom: 25px;

        button {
            width: 150px;
            font-size: 14px;
        }
    }

    .p-form-login__password {
        margin-top: 0;
    }

    .p-form-login__account {
        margin-top: 0;
    }
}
</style>
  