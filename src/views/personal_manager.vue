<template>
    <div>
        <section>
            <div class="p-personalManager__basicInfo">
                <h1>{{ $t("PERSONAL_MANAGER.BASICINFO.BASIC_INFORMATION") }}</h1>
                <div class="p-personalManager__basicInfo__inner sub_content">
                    <div class="p-personalManager__basicInfo__inner__item">
                        <p class="sub_title"> {{ $t("PERSONAL_MANAGER.BASICINFO.GENDER") }}</p>
                        <div>
                            <label>
                                <input type="radio" name="group1" />{{ $t("PERSONAL_MANAGER.BASICINFO.RADIO_MAN")}}
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" name="group1" />{{ $t("PERSONAL_MANAGER.BASICINFO.RADIO_WOMAN")}}
                            </label>
                        </div>
                    </div>
                    <div class="p-personalManager__basicInfo__inner__item">
                        <p class="sub_title">{{ $t("PERSONAL_MANAGER.BASICINFO.DATE_OF_BIRTH") }}</p>
                        <b-form-datepicker id="example-datepicker" class="mb-2"></b-form-datepicker>
                    </div>
                </div>

                <div class="p-personalManager__basicInfo__inner sub_content">
                    <div class="p-personalManager__basicInfo__inner__item sub_form">
                        <p class="sub_title">{{ $t("PERSONAL_MANAGER.BASICINFO.IDENTITY_VERIFICATION_DOCUMENTS") }}</p>
                        <form class="sub_">
                            <div class="multiselect">
                                <div class="selectBox" @click="showIdentityVerification()">
                                    <div class="overSelect"></div>
                                </div>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>{{
                                    $t("PERSONAL_MANAGER.BASICINFO.SELECT_IDENTITY_VERIFICATION_DOCUMENTS.SELEST")
                                    }}</option>
                                    <option value="1">{{
                                    $t("PERSONAL_MANAGER.BASICINFO.SELECT_IDENTITY_VERIFICATION_DOCUMENTS.OPTION_RESIDENCE_CARD.name")
                                    }}</option>
                                    <option value="2">{{
                                    $t("PERSONAL_MANAGER.BASICINFO.SELECT_IDENTITY_VERIFICATION_DOCUMENTS.OPTION_PASSPORT.name")
                                    }}</option>
                                    <option value="3">{{
                                    $t("PERSONAL_MANAGER.BASICINFO.SELECT_IDENTITY_VERIFICATION_DOCUMENTS.OPTION_DRIVER_LICENSE.name")
                                    }}</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="p-personalManager__basicInfo__inner__item">
                        <p class="sub_title">{{ $t("PERSONAL_MANAGER.BASICINFO.COUNTRY_OF_CITIZENSHIP") }}</p>
                        <input class="sub_inputText" type="text">
                    </div>
                </div>

                <div class="p-content">
                    <label class="p-content__text" for="image" :style="{ 'background-image': `url(${url1})` }">
                        <p v-show="!check_text_1">{{ $t("PERSONAL_MANAGER.BASICINFO.CONTENT1.TEXT1") }}</p>
                        <input id="image" type="file" @change="onFileChange($event, 1)" />
                    </label>
                    <label class="p-content__text" for="image2" :style="{ 'background-image': `url(${url2})` }">
                        <p v-show="!check_text_2">{{ $t("PERSONAL_MANAGER.BASICINFO.CONTENT1.TEXT2") }}</p>
                        <input id="image2" type="file" @change="onFileChange($event, 2)" />
                    </label>
                    <label class="p-content__text" for="image3" :style="{ 'background-image': `url(${url3})` }">
                        <p v-show="!check_text_3">{{ $t("PERSONAL_MANAGER.BASICINFO.CONTENT1.TEXT3") }}</p>
                        <input id="image3" type="file" @change="onFileChange($event, 3)" />
                    </label>
                </div>

                <div class="p-personalManager__basicInfo__inner sub_content sub_form">
                    <p class="sub_title">{{ $t("PERSONAL_MANAGER.BASICINFO.SUPPORTING_DOCUMENTS") }}</p>
                    <form>
                        <div class="multiselect">
                            <div class="selectBox" @click="showSupportDocument()">
                                <div class="overSelect"></div>
                            </div>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>
                                    {{ $t("PERSONAL_MANAGER.BASICINFO.SELECT_SUPPORTING_DOCUMENTS.SELECT") }}
                                </option>
                                <option value="1">
                                    {{ $t("PERSONAL_MANAGER.BASICINFO.SELECT_SUPPORTING_DOCUMENTS.OPTION_STUDENT_CARD.name") }}
                                </option>
                                <option value="2">
                                    {{ $t("PERSONAL_MANAGER.BASICINFO.SELECT_SUPPORTING_DOCUMENTS.OPTION_NOTIFICATION.name") }}
                                </option>
                                <option value="3">
                                    {{ $t("PERSONAL_MANAGER.BASICINFO.SELECT_SUPPORTING_DOCUMENTS.OPTION_LANDING_CERTIFICATE.name") }}
                                </option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="p-content">
                    <label class="p-content__text" for="image4" :style="{ 'background-image': `url(${url4})` }">
                        <p v-show="!check_text_4">{{ $t("PERSONAL_MANAGER.BASICINFO.CONTENT2.TEXT1") }}</p>
                        <input id="image4" type="file" @change="onFileChange($event, 4)" />
                    </label>
                    <label class="p-content__text" for="image5" :style="{ 'background-image': `url(${url5})` }">
                        <p v-show="!check_text_5">{{ $t("PERSONAL_MANAGER.BASICINFO.CONTENT2.TEXT2") }}</p>
                        <input id="image5" type="file" @change="onFileChange($event, 5)" />
                    </label>
                </div>
            </div>
        </section>

        <section>
            <div class="p-personalManager__contactInfo">
                <h1>{{ $t("PERSONAL_MANAGER.CONTACTINFO.CONTACT_INFORMATION") }}</h1>
                <div class="p-personalManager__contactInfo__domestic">
                    <div class="p-personalManager__contactInfo__domestic__PhoneCode sub_content">
                        <div class="p-personalManager__contactInfo__domestic__PhoneCode__phoneNumber">
                            <p class="sub_title">
                                {{ $t("PERSONAL_MANAGER.CONTACTINFO.CONTACT_PHONE_NUMBER") }}
                            </p>
                            <input class="sub_inputText" type="text">
                        </div>
                        <div class="p-personalManager__contactInfo__domestic__PhoneCode__postCode">
                            <p class="sub_title">
                                {{ $t("PERSONAL_MANAGER.CONTACTINFO.POST_CODE") }}
                            </p>
                            <input class="sub_inputText" type="text">
                        </div>
                    </div>

                    <div class="p-personalManager__contactInfo__domestic__address sub_content">
                        <p class="sub_title">
                            {{ $t("PERSONAL_MANAGER.CONTACTINFO.ADDRESS") }}
                        </p>
                        <textarea></textarea>
                    </div>
                </div>

                <div class="p-personalManager__contactInfo__foreign">
                    <div class="p-personalManager__contactInfo__foreign__title">
                        <div class="p-personalManager__contactInfo__foreign__title__item"></div>
                        <div class="p-personalManager__contactInfo__foreign__title__text">
                            {{ $t("PERSONAL_MANAGER.CONTACTINFO.REQUIRED") }}
                        </div>
                        <div class="p-personalManager__contactInfo__foreign__title__content">
                            {{ $t("PERSONAL_MANAGER.CONTACTINFO.TITLE_REQUIRED") }}
                        </div>
                    </div>

                    <div class="p-personalManager__contactInfo__foreign__container">
                        <div class="p-personalManager__contactInfo__foreign__container__emergency sub_content">
                            <div class="p-personalManager__contactInfo__foreign__container__emergency__contact">
                                <p class="sub_title">{{ $t("PERSONAL_MANAGER.CONTACTINFO.EMERGENCY_CONTACT") }}</p>
                                <input class="sub_inputText" type="text">
                            </div>

                            <div class="p-personalManager__contactInfo__foreign__container__emergency__phone">
                                <p class="sub_title">{{ $t("PERSONAL_MANAGER.CONTACTINFO.EMERGENCY_CONTACT_PHONE") }}
                                </p>
                                <input class="sub_inputText" type="text">
                            </div>
                        </div>

                        <div class="p-personalManager__contactInfo__foreign__container__emergencyInfo sub_content">
                            <p class="sub_title">{{ $t("PERSONAL_MANAGER.CONTACTINFO.EMERGENCY_CONTACT_INFORMATION") }}
                            </p>
                            <textarea></textarea>
                        </div>

                        <div class="p-personalManager__contactInfo__foreign__container__relationship sub_content">
                            <div class="p-personalManager__contactInfo__foreign__container__relationship__person">
                                <p class="sub_title">{{ $t("PERSONAL_MANAGER.CONTACTINFO.EMERGENCY_CONTACT_PHONE") }}
                                </p>
                                <input class="sub_inputText" type="text">
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="p-personalManager__workschoolInfo">
                <h1>{{ $t("PERSONAL_MANAGER.WORKSCHOOLINFO.TITLE") }}</h1>
                <div class="p-personalManager__workschoolInfo__namephone sub_content">
                    <div class="p-personalManager__workschoolInfo__namephone__name">
                        <p class="sub_title">{{ $t("PERSONAL_MANAGER.WORKSCHOOLINFO.NAMEPHONE__NAME") }}</p>
                        <input class="sub_inputText" type="text">
                    </div>
                    <div class="p-personalManager__workschoolInfo__namephone__numberphone">
                        <p class="sub_title">{{ $t("PERSONAL_MANAGER.WORKSCHOOLINFO.NAMEPHONE__NUMBERPHONE") }}</p>
                        <input class="sub_inputText" type="text">
                    </div>
                </div>
                <div class="p-personalManager__workschoolInfo__address sub_content">
                    <p class="sub_title">{{ $t("PERSONAL_MANAGER.WORKSCHOOLINFO.ADDRESS") }}</p>
                    <textarea></textarea>
                </div>
            </div>
        </section>

        <section>
            <div class="p-personalManager__otherInfo">
                <h1>{{ $t("PERSONAL_MANAGER.OTHERINFO.TITLE") }}</h1>
                <div class="p-personalManager__otherInfo__SNS">
                    <div class="p-personalManager__otherInfo__SNS__SNS-Advertisement">
                        <p>{{ $t("PERSONAL_MANAGER.OTHERINFO.ADVERTISEMENT") }}</p>
                        <!-- Checkbox SNS -->
                        <div class="two-column">
                            <div class="single-col">
                                <div class="styled-input-container styled-input--rounded">
                                    <div class="styled-input-single">
                                        <input type="checkbox" name="fieldset-7" id="checkbox3-example-one" />
                                        <label for="checkbox3-example-one">{{
                                        $t("PERSONAL_MANAGER.OTHERINFO.CHECKBOX__ROUNDED.CHECKBOX_REFER_A_FRIEND.name") }}</label>
                                    </div>
                                    <div class="styled-input-single">
                                        <input type="checkbox" name="fieldset-7" id="checkbox3-example-two" />
                                        <label for="checkbox3-example-two">{{
                                        $t("PERSONAL_MANAGER.OTHERINFO.CHECKBOX__ROUNDED.CHECKBOX_SCHOOL_INTRODUCTION.name") }}</label>
                                    </div>
                                    <div class="styled-input-single">
                                        <input type="checkbox" name="fieldset-7" id="checkbox3-example-three" />
                                        <label for="checkbox3-example-three">{{
                                        $t("PERSONAL_MANAGER.OTHERINFO.CHECKBOX__ROUNDED.CHECKBOX_INTRODUCTION.name") }}</label>
                                    </div>
                                    <div class="styled-input-single input-type">
                                        <input type="checkbox" name="fieldset-7" id="checkbox3-example-four" />
                                        <label for="checkbox3-example-four">{{
                                        $t("PERSONAL_MANAGER.OTHERINFO.CHECKBOX__ROUNDED.CHECKBOX_INTRODUCED_FROM.name") }}</label>
                                        <input class="sub_inputText" type="text">
                                    </div>
                                    <div class="styled-input-single">
                                        <input type="checkbox" name="fieldset-7" id="checkbox3-example-five" />
                                        <label for="checkbox3-example-five">{{
                                        $t("PERSONAL_MANAGER.OTHERINFO.CHECKBOX__ROUNDED.CHECKBOX_FACEBOOK.name") }}</label>
                                    </div>
                                    <div class="styled-input-single">
                                        <input type="checkbox" name="fieldset-7" id="checkbox3-example-six" />
                                        <label for="checkbox3-example-six">{{
                                        $t("PERSONAL_MANAGER.OTHERINFO.CHECKBOX__ROUNDED.CHECKBOX_YOUTUBE.name") }}</label>
                                    </div>
                                    <div class="styled-input-single">
                                        <input type="checkbox" name="fieldset-7" id="checkbox3-example-seven" />
                                        <label for="checkbox3-example-seven">{{
                                        $t("PERSONAL_MANAGER.OTHERINFO.CHECKBOX__ROUNDED.CHECKBOX_GOOGLE.name") }}</label>
                                    </div>
                                    <div class="styled-input-single input-type">
                                        <input type="checkbox" name="fieldset-7" id="checkbox3-example-eight" />
                                        <label for="checkbox3-example-eight">
                                            {{ $t("PERSONAL_MANAGER.OTHERINFO.CHECKBOX__ROUNDED.CHECKBOX_OTHER_ADVERTISEMENTS.name") }}</label>
                                        <input class="sub_inputText" type="text">
                                    </div>
                                    <div class="styled-input-single input-type">
                                        <input type="checkbox" name="fieldset-7" id="checkbox3-example-nine" />
                                        <label for="checkbox3-example-nine">{{
                                        $t("PERSONAL_MANAGER.OTHERINFO.CHECKBOX__ROUNDED.CHECKBOX_OTHERS.name") }}</label>
                                        <input class="sub_inputText" type="text">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-personalManager__otherInfo__SNS__SNS-Use">
                        <p>{{ $t("PERSONAL_MANAGER.OTHERINFO.USE.TITLE") }}</p>
                        <!-- Checkbox SNS -->
                        <div class="two-column">
                            <div class="single-col">
                                <div class="styled-input-container styled-input--rounded">
                                    <div class="styled-input-single">
                                        <input type="checkbox" name="fieldset-7" id="checkbox3-example-ten" />
                                        <label for="checkbox3-example-ten">{{
                                        $t("PERSONAL_MANAGER.OTHERINFO.USE.CHECKBOX_FACEBOOK.name") }}</label>
                                    </div>
                                    <div class="styled-input-single">
                                        <input type="checkbox" name="fieldset-7" id="checkbox3-example-eleven" />
                                        <label for="checkbox3-example-eleven">{{
                                        $t("PERSONAL_MANAGER.OTHERINFO.USE.CHECKBOX_LINE.name") }}</label>
                                    </div>
                                    <div class="styled-input-single">
                                        <input type="checkbox" name="fieldset-7" id="checkbox3-example-12" />
                                        <label for="checkbox3-example-12">{{
                                        $t("PERSONAL_MANAGER.OTHERINFO.USE.CHECKBOX_WECHAT.name") }}</label>
                                    </div>
                                    <div class="styled-input-single">
                                        <input type="checkbox" name="fieldset-7" id="checkbox3-example-13" />
                                        <label for="checkbox3-example-13">{{
                                        $t("PERSONAL_MANAGER.OTHERINFO.USE.CHECKBOX_KAKAO.name") }}</label>
                                    </div>
                                    <div class="styled-input-single">
                                        <input type="checkbox" name="fieldset-7" id="checkbox3-example-14" />
                                        <label for="checkbox3-example-14"></label>
                                        <input for="checkbox3-example-14" type="text" :placeholder="this.$t('PERSONAL_MANAGER.OTHERINFO.USE.CHECKBOX_SNS.name')" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="code">
                <p>紹介コード:</p>
                <input type="text"/>
            </div>
            <div class="p-personalManager__contactInfo__foreign__container__relationship__language sub_form">
                <p class="sub_title">{{ $t("PERSONAL_MANAGER.CONTACTINFO.PREFERRED_LANGUAGE") }}</p>
                <form>
                    <div class="multiselect">
                        <div class="selectBox" @click="showLanguage()">
                            <div class="overSelect"></div>
                        </div>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>
                                {{ $t("PERSONAL_MANAGER.CONTACTINFO.SELECT_PREFERRED_LANGUAGE.SELEST") }}
                            </option>
                            <option value="1">
                                {{ $t("PERSONAL_MANAGER.CONTACTINFO.SELECT_PREFERRED_LANGUAGE.CHECKBOX_JAPANESE.name") }}
                            </option>
                            <option value="2">
                                {{ $t("PERSONAL_MANAGER.CONTACTINFO.SELECT_PREFERRED_LANGUAGE.CHECKBOX_ENGLISH.name") }}
                            </option>
                            <option value="3">
                                {{ $t("PERSONAL_MANAGER.CONTACTINFO.SELECT_PREFERRED_LANGUAGE.CHECKBOX_CHINESE.name") }}
                            </option>
                            <option value="4">{{
                            $t("PERSONAL_MANAGER.CONTACTINFO.SELECT_PREFERRED_LANGUAGE.CHECKBOX_VIETNAMESE.name")
                            }}</option>
                            <option value="5">
                                {{ $t("PERSONAL_MANAGER.CONTACTINFO.SELECT_PREFERRED_LANGUAGE.CHECKBOX_KOREAN.name") }}
                            </option>
                            <option value="6"> 
                                {{ $t("PERSONAL_MANAGER.CONTACTINFO.SELECT_PREFERRED_LANGUAGE.CHECKBOX_SRILANKAN.name") }}
                            </option>
                            <option value="7">
                                {{ $t("PERSONAL_MANAGER.CONTACTINFO.SELECT_PREFERRED_LANGUAGE.CHECKBOX_NEVALA.name") }}
                            </option>
                        </select>
                    </div>
                </form>
            </div>
            <button>保存</button>
        </section>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            url1: null,
            url2: null,
            url3: null,
            url4: null,
            url5: null,
            check_text_1: false,
            check_text_2: false,
            check_text_3: false,
            check_text_4: false,
            check_text_5: false,
        }
    },
    methods: {
        onFileChange(e, num) {
            const file = e.target.files[0];
            if (num == 1) {
                this.check_text_1 = true;
                this.url1 = URL.createObjectURL(file);
            }
            if (num == 2) {
                this.check_text_2 = true;
                this.url2 = URL.createObjectURL(file);
            }
            if (num == 3) {
                this.check_text_3 = true;
                this.url3 = URL.createObjectURL(file);
            }
            if (num == 4) {
                this.check_text_4 = true;
                this.url4 = URL.createObjectURL(file);
            }
            if (num == 5) {
                this.check_text_5 = true;
                this.url5 = URL.createObjectURL(file);
            }
        }
    },

    setup() {

    },
}
</script>

<style scoped lang="scss">
.p-personalManager__basicInfo {
    text-align: left;
    margin: 60px 60px;

    h1 {
        font-family: 'ABeeZee';
        font-style: normal;
        font-weight: 400;
        line-height: 57px;
        color: #144A14;
    }

    &__inner {
        display: flex;
        margin-top: 4%;
        margin-left: 8%;
        align-items: center;

        &__item {
            display: flex;
            gap: 14px;
            width: 50%;
        }
    }

    // &__inner {
    //     display: flex;
    //     flex-direction: row;
    //     margin-top: 3%;
    //     margin-left: 8%;
    //     align-items: center;

    //     &__dropdown {
    //         display: flex;
    //         gap: 14px;
    //         width: 50%;
    //     }

    //     &__text {
    //         display: flex;
    //         gap: 14px;
    //         width: 50%;

    //         input {
    //             height: 35px;
    //             width: 40%;
    //         }
    //     }
    // }

    // &__supportDocument {
    //     width: 50%;
    //     display: flex;
    //     gap: 14px;
    //     margin-top: 3%;
    //     margin-left: 8%;
    // }


}

.p-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    margin-top: 50px;
    margin-bottom: 50px;
    &__text {
        width: 20%;
        max-height: 200px;
        min-height: 200px;
        padding: 5% 10px;
        margin: auto;
        background-color: #f8f1ee;
        border: 1px solid #806c6c;
        border-radius: 3px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        p {
            display: flex;
            text-align: center;
            font-size: 15px;
            color: #5C765C;
        }
        input {
            display: none;
        }
    }
    
}

.test_dateTimeLocal {
    width: 40%;
}

.form-select {
    height: 35px;
    color: #816052;
    padding-left: 12px;
    width: 100%;
}

.p-personalManager__contactInfo {
    text-align: left;
    margin: 60px 60px;

    h1 {
        font-family: 'ABeeZee';
        font-style: normal;
        font-weight: 400;
        line-height: 57px;
        color: #144A14;
    }

    &__domestic {
        display: flex;
        flex-direction: column;
        gap: 40px;

        &__PhoneCode {
            display: flex;
            margin-left: 8%;

            &__phoneNumber {
                display: flex;
                gap: 14px;
                width: 50%;

                input {
                    width: 40%;
                }
            }

            &__postCode {
                display: flex;
                gap: 14px;
                width: 50%;

                input {
                    width: 40%;
                }
            }
        }

        &__address {
            display: flex;
            gap: 14px;
            margin-left: 8%;

            textarea {
                width: 80%;
                height: 70px;
            }
        }
    }

    &__foreign {
        &__title {
            display: flex;
            align-items: center;
            margin: 4% 0 2% 5%;

            &__item {
                width: 0;
                height: 20px;
                border: 10px solid #f35f0d;
            }

            &__text {
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

            &__content {
                margin-left: 15px;
                font-family: ABeeZee;
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                letter-spacing: 0.178846px;
                color: #816052;
            }
        }

        &__container {
            display: flex;
            gap: 40px;
            flex-direction: column;

            &__emergency {
                display: flex;

                &__contact {
                    display: flex;
                    gap: 14px;
                    margin-left: 8%;
                    width: 50%;

                    input {
                        width: 40%;
                    }
                }

                &__phone {
                    display: flex;
                    gap: 14px;
                    width: 50%;

                    input {
                        width: 40%;
                    }
                }
            }

            &__emergencyInfo {
                display: flex;
                gap: 14px;
                margin-left: 8%;

                textarea {
                    width: 80%;
                    height: 70px;
                }
            }

            &__relationship {
                display: flex;
                margin-left: 8%;

                &__person {
                    display: flex;
                    gap: 14px;
                    width: 50%;
                    height: fit-content;

                    input {
                        width: 40%;
                    }
                }

                &__language {
                    display: flex;
                    gap: 14px;
                    width: 50%;
                    margin: 0 0 8% 10%;
                    p {
                        text-align: left;
                        width: 150px;
                    }
                    input {
                        width: 40%;
                    }
                }
            }
        }
    }
}

.p-personalManager__workschoolInfo {
    text-align: left;
    margin: 60px 60px;

    h1 {
        font-family: 'ABeeZee';
        font-style: normal;
        font-weight: 400;
        line-height: 57px;
        color: #144A14;
    }

    display: flex;
    gap: 40px;
    flex-direction: column;
    margin-bottom: 4%;

    &__namephone {
        display: flex;

        &__name {
            display: flex;
            gap: 14px;
            margin-left: 8%;
            width: 50%;

            input {
                width: 40%;
            }
        }

        &__numberphone {
            display: flex;
            gap: 14px;
            width: 50%;

            input {
                width: 40%;
            }
        }
    }

    &__address {
        display: flex;
        gap: 14px;
        margin-left: 8%;

        textarea {
            width: 80%;
            height: 70px;
        }
    }
}

.p-personalManager__otherInfo {
    text-align: left;
    margin: 60px 60px;

    h1 {
        font-family: 'ABeeZee';
        font-style: normal;
        font-weight: 400;
        line-height: 57px;
        color: #144A14;
    }

    &__SNS {
        display: flex;
        justify-content: space-around;
        p {
            color: #F35F0D;
        }
        // &__SNS-Advertisement {}

        // &__SNS-Use {}
    }
}

.code {
    display: flex;
    max-width: 50%;
    gap: 14px;
    margin: 0 0 3% 10%;
    align-items: center;
    p {
        margin-bottom: 0;
        width: 150px;
        text-align: left;
        font-size: 16px;
        color: #5C765C;
    }
    input {
        width: 60%; 
    }
}

button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 7px 14px;
    gap: 6px;
    width: 100px;
    height: 50px;
    background: #f35f0d;
    border-color: #f35f0d;
    color: #ffffff;
    font-size: 20px;
    line-height: 18px;
    border-radius: 6px;
    margin: auto;
    margin-bottom: 50px;
}


.sub_title {
    font-family: 'ABeeZee';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #5C765C;
    margin-bottom: 0;
    width: 200px;
    text-align: right;
}

.sub_inputText {
    width:60% !important;
}

.b-form-btn-label-control.form-control {
    width: 60%;
}

// Selected checkbox 
.multiselect {
    position: relative;
}

.drop-down {
    display: block;
    position: absolute;
    z-index: 100;
    background-color: white;
    width: 100%;
}

.selectBox {
    position: relative;
}

.selectBox select {
    height: 35px;
    font-size: 14px;
    color: #9A9A9A;
}

.overSelect {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

#showIdentityVerification {
    display: none;
    border: 1px #dadada solid;
}

#showIdentityVerification label {
    display: flex;
    gap: 14px;
    padding: 4px 16px;
}

#showIdentityVerification label:hover {
    background-color: #F8F1EE;
}


//  Checkbox Support Documents
#supportDocument {
    display: none;
    border: 1px #dadada solid;
}

#supportDocument label {
    display: flex;
    gap: 14px;
    padding: 4px 16px;
}

#supportDocument label:hover {
    background-color: #F8F1EE;
}

// Checkbox show language
#showLanguage {
    display: none;
    border: 1px #dadada solid;
}

#showLanguage label {
    display: flex;
    gap: 14px;
    padding: 4px 16px;
}

#showLanguage label:hover {
    background-color: #F8F1EE;
}


// Checkbox SNS
.styled-input-single {
    position: relative;
    padding: 20px 0 20px 40px;
    text-align: left;
    display: flex;
    flex-direction: column;

    label {
        cursor: pointer;

        &:before,
        &:after {
            content: '';
            position: absolute;
            top: 50%;
            border-radius: 50%;
        }

        &:before {
            left: 0;
            width: 30px;
            height: 30px;
            margin: -15px 0 0;
            background: #f7f7f7;
            box-shadow: 0 0 1px grey;
        }

        &:after {
            left: 5px;
            width: 20px;
            height: 20px;
            margin: -10px 0 0;
            opacity: 0;
            background: #37b2b2;
            transform: translate3d(-40px, 0, 0) scale(0.5);
            transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
        }
    }

    input {
        margin-left: 10px;
    }

    input[type="radio"],
    input[type="checkbox"] {
        position: absolute;
        top: 0;
        left: -9999px;
        visibility: hidden;

        &:checked+label {
            &:before {}

            &:after {
                transform: translate3d(0, 0, 0);
                opacity: 1;
            }
        }
    }
}

.styled-input--square {
    label {

        &:before,
        &:after {
            border-radius: 0;
        }
    }
}

.styled-input--rounded {
    label {
        &:before {
            border-radius: 10px;
        }

        &:after {
            border-radius: 6px;
        }
    }
}

.input-type {
    label {
        &:before {
            border-radius: 10px;
            margin: -34px 0 0;
        }

        &:after {
            border-radius: 6px;
            margin: -28px 0 0;
        }
    }
}
.sub_form form {
    width: 60%;
}
.styled-input--diamond {
    .styled-input-single {
        padding-left: 45px;
    }

    label {

        &:before,
        &:after {
            border-radius: 0;
        }

        &:before {
            transform: rotate(45deg);
        }
    }

    input[type="radio"],
    input[type="checkbox"] {

        &:checked+label {
            &:after {
                transform: rotate(45deg);
                opacity: 1;
            }
        }
    }
}

$wrapper-max-width: 400px;
$mb-breakpoint: 600px;
$breakpoint: 860px;
$large-breakpoint: 1100px;
$xl-breakpoint: 1920px;

body {
    font-family: sans-serif;
    max-width: 400px;
    margin: 0 auto;
    padding: 30px;
    font-family: 'Maven Pro', sans-serif;
    text-align: center;
}

h1 {
    font-size: 2.0rem;
}

h2 {
    font-size: 2rem;
}

h1,
h2 {
    font-family: 'Yrsa', cursive;
}

p {
    font-size: 1.25rem;
    line-height: 1.75rem;
}

hr {
    margin: 40px auto;
    max-width: 100px;
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    padding: 0;
}

.pen-intro {
    text-align: center;
}

%clearfix {
    &:after {
        content: "";
        display: table;
        clear: both;
    }
}

.two-column {
    @extend %clearfix;
    margin: 0 0 40px;

    .single-col {
        margin: 0 0 40px;
    }
}

@media screen and (max-width: 1024px) {
    .p-personalManager__contactInfo__foreign__title__content {
        font-size: 16px;
    }

    .p-personalManager__basicInfo__inner {
        margin-left: 8%;
    }

    .sub_title {
        text-align: inherit;
    }

    .p-personalManager__basicInfo__inner {
        display: block;
    }

    .p-personalManager__basicInfo__inner__item {
        width: auto;
        margin-bottom: 3%;
    }

    .p-personalManager__contactInfo__domestic__PhoneCode {
        margin-left: 8%;
        display: block;
    }

    .p-personalManager__contactInfo__domestic__PhoneCode__phoneNumber {
        width: auto;
    }

    .p-personalManager__contactInfo__domestic__PhoneCode__postCode {
        width: auto;
        margin-top: 20px;
    }

    .p-personalManager__contactInfo__domestic__address {
        margin-left: 8%;
    }

    .p-personalManager__contactInfo__domestic__address textarea {
        width: 60%;
    }

    .p-personalManager__contactInfo__foreign__container__emergency {
        display: block;
        margin-left: 8%;
    }

    .p-personalManager__contactInfo__domestic {
        gap: 25px;
    }

    .p-personalManager__contactInfo__foreign__container {
        gap: 25px;
    }

    .p-personalManager__contactInfo__foreign__container__emergency__contact {
        width: auto;
        margin-left: 0;
        margin-bottom: 25px;
    }

    .p-personalManager__contactInfo__foreign__container__emergency__phone {
        width: auto;
    }

    .p-personalManager__contactInfo__foreign__container__emergencyInfo textarea {
        width: 60%;
    }


    .p-personalManager__contactInfo__foreign__container__relationship {
        display: block;
    }

    .p-personalManager__contactInfo__foreign__container__relationship__person {
        width: auto;
        margin-bottom: 25px;
    }

    .p-personalManager__contactInfo__foreign__container__relationship__language {
        width: 50%;
    }

    .p-personalManager__workschoolInfo__namephone {
        display: block;
        margin-left: 8%;
    }

    .p-personalManager__workschoolInfo__namephone__name {
        width: auto;
        margin-bottom: 25px;
        margin-left: 0;
    }


    .p-personalManager__workschoolInfo__namephone__numberphone {
        width: auto;
    }

    .p-personalManager__workschoolInfo__address {
        margin-left: 8%;
    }

    .p-personalManager__workschoolInfo__address textarea {
        width: 60%;
    }

    .sub_inputText {
        width: 60% !important;
    }

}

@media screen and (max-width: 768px) {
    .p-personalManager__contactInfo__foreign__title__text {
        width: 100px;
    }

    .p-personalManager__otherInfo__SNS {
        display: block;
    }

    .p-content {
        gap: 40px;
    }
    .p-content__text {
        width: 60%;
        margin-bottom: 40px;
    }

    .p-personalManager__contactInfo__foreign__container__relationship__language {
        width: 80%;
    }

    .sub_form form {
        width: 50%;
    }


    .code  {
        max-width: 80%;
        input {
            width: 50%;
        }
    }
}


@media screen and (max-width: 670px) {
    .sub_title {
        width: 160px;
    }

    .b-form-btn-label-control.form-control {
        width: 60%;
    }

    .sub_inputText {
        width: 60%;
    }

    .p-content {
        flex-direction: column;
    }
}

@media screen and (max-width: 590px) {
    .sub_title {
        width: 100px;
    }

    .p-personalManager__basicInfo {
        margin: 40px 30px;
    }

    .p-personalManager__contactInfo {
        text-align: left;
        margin: 40px 30px;
    }

    .p-personalManager__workschoolInfo {
        margin: 40px 30px;
    }

    .code p {
        width: 100px;
    }

    .p-personalManager__contactInfo__foreign__container__relationship__language p {
        width: 100px;
    }
}

@media screen and (max-width: 414px) {
    .sub_title {
        font-size: 14px;
    }

    .sub_content {
        margin-left: 0;
    }

    // .sub_content input {
    //     width: 200px;
    // }

    .sub_content select {
        // width: 60%;
    }
}
</style>