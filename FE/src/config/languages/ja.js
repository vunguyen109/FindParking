export default {
    BUTTON: {
        PREVIOUS: '戻る',
        NEXT: '次へ',
        CREATE: '登録',
        ORDER: '購入',
    },
    MENU: {
        TOP: "トップ",
        SIM_SERVICE: "SIMサービス",
        CAMPAIGN: "キャンペーン",
        RATE_PLAN: "料金プラン"
    },
    COMMON: {
        STRING: {
            IS_BLANK: "",
            IS_NULL: null,
            IS_INVALID: undefined,
            STRIKE_THROUGH: '—'
        },
        ITEM_TYPE: {
            NECESSARY: "必須",
            ARBITRARILY: "任意",
            PRICE_MONTH: "(月額%{price}円)",
            PRICE: "価格：%{price}　円",
            ONLY_PRICE: "%{price}　円",
        },
        NAVBAR: {
            STEP1: "プラン選択",
            STEP2: "光購入",
            STEP3: "WIFI選択",
            STEP4: "お受取り方法",
            STEP5: "商品確認",
            STEP6: "ユーザー情報確認",
            STEP7: "同意書サイン",
        },
        ERR: {
            CONTENT:
                [
                    "画面遷移中にエラーが発生しました。",
                    "一度ログアウトをし、ブラウザを閉じて、しばらく経ってから再度お試しください。",
                    "また、エラーが解消されない場合はStudyArtsサポートセンターまでお問い合わせください。",
                    "データアクセス中に問題が発生しました。詳細については、StudyArtsチームにお問い合わせください",
                ],
            REVER_ERR: "ホームページへ戻る",
            CODE_INPUT: '認証コードが不一致です!!!'
        }

    },
    SIM_SERVICE: {
        STEP1_PLAN_SELECT: {
            NAVBAR: "プラン選択",
            TITLE: "SIM選択",
            DESC: "以下の選択情報を入力してください",
            QUESTIONS_PURCHASE_METHOD:
            {
                TITLE: "購入方式",
                FORM_JURIDICAL_PERSON: "【办理前需要准备的证件法人 ☞】",
            },
            QUESTIONS_SELECT_TEL_NUMBER: {
                TITLE: "現在の携帯電話の電話番号はそのまま使いますか?",
                NEW_AGREEMENT: "新規契約",
                ANOTHER_COMPANY: {
                    TITLE: "他社から乗り換え（MNP）",
                    TEL_PLACE_HOLDER: "現在までお使い携帯番号を入力ください",
                    MNP_PLACE_HOLDER: "MNP予約番号",
                    DATE_PLACE_HOLDER: "MNP予約番号の有効期限 ",
                    SIM_PLACE_HOLDER: "SIM電話番号を入力してください",
                    BANKS: ["DOCOMO", "SOFTBANK", "AU", "UQ", "Y!M", "その他"],
                    RUN: "実行",
                }
            },
            QUESTIONS_SET: {
                TITLE: "セットで一緒にお求めですか？",
            },
            QUESTIONS_RATE_PLAN: {
                TITLE: "料金プランをお選びください",
            },
            QUESTIONS_FLAT_RATE_CALL:
            {
                TITLE: "通話定額は何分必要ですか？",
            },
            QUESTIONS_OPTION: {
                TITLE: "オプションを選択してください",
            },
            QUESTIONS_DESIRED_DATE: {
                TITLE: "開通希望日",
            },
            INDIVIDUAL: "個人",
            JURIDICAL_PERSON: "法人",
            FORM__INDIVIDUAL: "【办理前需要准备的证件個人 ☞】",
        },
        STEP2_CHOOSE_CABLE: {
            NAVBAR: "光選択",
            TITLE: "光選択",
            DESC: "以下プラン選択情報を入力してください",
            QUESTIONS_CHOOSE_PACKAGE: {
                TITLE: "* 光プランを選択してください :",
            },
            QUESTIONS_START_DAY: {
                TITLE: "* 開通希望日 :",
            },
        },
        STEP3_WIFI_SELECTION: {
            TITLE: "WIFI選択",
            DESC: "以下プラン選択情報を入力してください",
            REQUIRED1: "WIFIプランを選択してください:",
            REQUIRED2: "開通希望日:",
        },
        STEP4_RECEIVE: {
            NAVBAR: "お受取り方法",
            QUESTIONS_RADIO: {
                SELFIE: "自取り",
                OVERSEAS: "郵送",
                IN_JAPAN: "日本国内",
                OUTSIDE_JAPAN: "海外",
            },
            QUESTIONS_TEXTINPUT: {
                MAILING_NAME: "* 郵送名前：",
                POSTAL_CODE: "* 郵便番号：",
                MAILING_CONTACT_PHONE: "* 郵送連絡電話：",
                MAILING_DETAILS_ADDRESS: "* 郵送詳細住所：",
            }

        },
        STEP5_PURCHASE_CONFIRMATION: {
            NAVBAR: "商品確認",
            TITLE: "購入確認",
            DESC: "以下プラン選択情報を入力してください",
            COMMISSION: "登録事務手数料",
            ANOTHER_COMMISSION: "事務手数料",
            PACKAGE_FEE: "プラン料金",
            SEND_PRICE: "郵送代",
            WITHOUT_TAX: "%{price}　円(税抜)",
            WITH_TAX: "%{price}　円(税込)",
            SIM_CARD_PURCHASE_DETAILS: {
                TITLE: "SIMカード購入詳細",
                CONTRACT_TYPE: "契約タイプ",
                PHONE_NUMBER: "電話番号",
                OPEN_DAY: "開通希望日",
                PLAN: "プラン",
                TOTAL_MONTHLY_PAYMENT: "毎月の支払い料金合計",
                TOTAL_INITIAL_COST: "初期費用合計",
                SIM_DAMAGES: "SIM損害金",
                UNIVERSERVE: "ユニバーサービス",
                RELAYSERVICE: "リレーサービス"
            },
            LIGHT_PURCHASE_DETAILS: {
                TITLE: "光購入詳細",
                PLAN: "プラン",
                OPEN_DAY: "開通希望日",
                TOTAL_MONTHLY_PAYMENT: "毎月の支払い料金合計",
                TOTAL_INITIAL_COST: "初期費用合計",
            },
            WIFI_PURCHASE_DETAILS: {
                TITLE: "WIFI購入詳細",
                PLAN: "プラン",
                OPEN_DAY: "開通希望日",
                COD: "COD",
            },
            RECEIVE: {
                TITLE: "受取り方法",
                PRODUCT_ACQUISITION_METHOD: "商品獲得方式",
                AREA: "地域",
                MAILING_NAME: "郵送名前",
                MAIL_CONTACT_PHONE: "郵送連絡電話",
                LOCAL_POSTAL_CODE: "地域郵便番号",
                MAILING_DETAILS_ADDRESS: "郵送詳細住所"
            },
            TOTAL: {
                POSTAGE: "郵送代",
                TOTAL_INITIAL_COST: "全て初期費用合計",
            }

        },
        STEP6_INFOMATION_CONFIRM: {
            NAVBAR: "ユーザー情報確認",
            TITLE: "ユーザー情報確認",
            DESC: "選択内容をご確認ください！",
            QUESTIONS_MEMBER_CONFIRM: {
                TITLE: " 既に会員になったでしょうか？",
                MEMBER: "会員",
                NOT_A_MENBER: "会員ではない",
                SUGGESTIONS: "（新規必要）",
            },
            QUESTIONS_REGISTER_INFO: {
                TITLE: " 会員情報詳細登録",
                REGISTER: "詳細情報登録",
            }
        },
        STEP7_CONSENT_SIGN: {
            NAVBAR: "同意書サイン   ",
            CHECKBOX: "上記の条項と注意事項をご理解の上、同意しております",
            TEMP_DESC: "有关个人信息保护及会员登录同意书",
            TEMP_CONTENT: "1．本契約はお客様とSUMMER SIM の間の直接契約です。使用方法、支払い状況、予約番号の発行、その他のサービスは SUMMER SIM のみに確認できます。",
            IMPORTANT_MANUAL: {
                TITLE: " 重要事項説明書",
                DESC: "有关个人信息保护及会员登录同意书",
            },
            AGREEMENTS: {
                TITLE: " 有关个人信息保护及会员登录同意书",
            },
            SIGN: {
                TITLE: "名前のサイン",
                ACCEPT: "確定",
                CLEAN: "リセット"
            }
        }

    },

    LOGIN: {
        TITLE: "ログイン",
        TYPE_ID: "ID または　ご登録メールアドレス",
        PASSWORD: "パスワード",
        CODE: "認証コード",
        FORGET_PASSWORD: "パスワード忘れ?",
        RECOVER_PASSWORD: "パスワードを取り戻す",
        NO_ACCOUNT: "アカウントなし？",
        NEW_ACCOUNT: "新アカウント申請"
    },

    REGISTER: {
        INDIVIDUAL: "個人",
        CORPORATION: "法人",
        EMAIL_ADDRESS: "メールアドレス",
        SEND_VERIFICATION_CODE: "検証コード送信",
        AUTHENTICATION_CODE: "認証コード",
        PASSWORD: "パスワード",
        CONFIRM_PASSWORD: "パスワード確認",
        BUTTON_RESGITER: "登録",
        QUESTIONS__SPELL:{
            NAME:"名前",
            SPELL_NAME:"名前（カナ)",
            NAME1:"会社名",
            SPELL_NAME1:"会社名（カナ)",
        },
        NAME_COMPANY:"会社名",
        SPELL_NAME_COMPANY:"会社名（カナ)",
    },
    PERSONAL_MANAGER:{
        BASICINFO: {
            BASIC_INFORMATION: "基本情報",
            GENDER: "* 性別 ：",
            RADIO_MAN: "男",
            RADIO_WOMAN: "女",
            DATE_OF_BIRTH: "* 生年月日 ：",
            IDENTITY_VERIFICATION_DOCUMENTS: "* 本人確認書類 ：",
            SELECT_IDENTITY_VERIFICATION_DOCUMENTS:{
                SELEST:"選択肢一つを選択してください", 
                OPTION_RESIDENCE_CARD: {
                    name:"在留カード",
                    value:''
                },
                OPTION_PASSPORT: {
                    name:"パスポート",
                    value:''
                }, 
                OPTION_DRIVER_LICENSE:  {
                    name:"運転免許証",
                    value:''
                }, 
            },
            COUNTRY_OF_CITIZENSHIP: "* 国籍 ：",
            CONTENT1:{
                TEXT1:"本人確認書類表面の写真をアップロードください", 
                TEXT2: "本人確認書類裏面の写真をアップロードください",
                TEXT3: "本人確認書類をお客様本人が手に持って、お顔も含めて撮影した写真をアップロードください",
            },
            SUPPORTING_DOCUMENTS: "補助書類 ：",
            SELECT_SUPPORTING_DOCUMENTS:{
                SELECT:"選択肢一つを選択してください", 
                OPTION_STUDENT_CARD: {
                    name: "学生証",
                    value:''
                }, 
                OPTION_NOTIFICATION: {
                    name: "在留許可通知書",
                    value:''
                },
                OPTION_LANDING_CERTIFICATE: {
                    name: "上陸証明",
                    value:''
                },
            },
            CONTENT2:{
                TEXT1:"補助書類をアップロードする※発行日から6ヶ月以内のものに限る", 
                TEXT2: "補助書類をアップロードする※発行日から6ヶ月以内のものに限る",
            },
        },
        CONTACTINFO: {
            CONTACT_INFORMATION: "連絡情報",
            CONTACT_PHONE_NUMBER: "*連絡先電話番号 ：",
            POST_CODE: "郵便番号：",
            ADDRESS: "* 住所： ",
            REQUIRED: "必須",
            TITLE_REQUIRED: "緊急連絡者 情報は、外国人の方の場合、所在国の連絡者情報を記入してください　→要否は要検討",
            EMERGENCY_CONTACT: "*緊急連絡者 ：",
            EMERGENCY_CONTACT_PHONE: "*緊急連絡者電話 ：",
            EMERGENCY_CONTACT_INFORMATION: "*緊急連絡者連絡先 ：",
            EMERGENCY_CONTACT_PHONE: "*緊急連絡者電話 ：",
            PREFERRED_LANGUAGE: "希望言語 ：",
            SELECT_PREFERRED_LANGUAGE:{
                SELEST:"選択肢一つを選択してください", 
                CHECKBOX_JAPANESE: {
                    name: "日本語",
                    value:''
                },
                CHECKBOX_ENGLISH: {
                    name: "英語",
                    value:''
                },
                CHECKBOX_CHINESE: {
                    name: "中国語",
                    value:''
                },
                CHECKBOX_VIETNAMESE: {
                    name: "ベトナム語",
                    value:''
                },
                CHECKBOX_KOREAN: {
                    name: "韓国語",
                    value:''
                },
                CHECKBOX_SRILANKAN: {
                    name: "スリランカ語",
                    value:''
                },
                CHECKBOX_NEVALA: {
                    name: "ネバル語",
                    value:''
                },
            },
            
        },
        WORKSCHOOLINFO:{
            TITLE: "勤務先／学校情報",
            NAMEPHONE__NAME: "勤務先／学校 ：",
            NAMEPHONE__NUMBERPHONE: "勤務先／学校の電話番号 ：",
            ADDRESS: "勤務先／学校の電話番号 ：",
        },
        OTHERINFO:{
            TITLE: "その他情報",
            ADVERTISEMENT: "*IF　MOBILEをどこで知りましたか？",
            CHECKBOX__ROUNDED:{
                CHECKBOX_REFER_A_FRIEND: {
                    name:"友達紹介",
                    value:''
                }, 
                CHECKBOX_SCHOOL_INTRODUCTION: {
                    name: "学校紹介",
                    value:''
                },
                CHECKBOX_INTRODUCTION: {
                    name: "留学/実習生工一ジェント紹介",
                    value:''
                },
                CHECKBOX_INTRODUCED_FROM: {
                    name:"他のWEBサインから紹介", 
                    value:''
                },
                CHECKBOX_FACEBOOK: {
                    name: "Facebook広告",
                    value:''
                },
                CHECKBOX_YOUTUBE: {
                    name: "Youtube広告",
                    value:''
                },
                CHECKBOX_GOOGLE: {
                    name:"Google広告", 
                    value:''
                },
                CHECKBOX_OTHER_ADVERTISEMENTS: {
                    name: "その他広告",
                    value:''
                },
                CHECKBOX_OTHERS: {
                    name: "その他",
                    value:''
                },
            },
            USE:{
                TITLE: "どのSNSを使っていますか？",
                CHECKBOX_FACEBOOK: {
                    name: "Facebook",
                    value:''
                },
                CHECKBOX_LINE: {
                    name: "LINE",
                    value:''
                },
                CHECKBOX_WECHAT: {
                    name:"WeChat",
                    value:''
                }, 
                CHECKBOX_KAKAO: {
                    name: "Kakao Talk",
                    value:''
                },
                CHECKBOX_SNS: {
                    name: "SNS名を入力して下さい",
                    value:''
                },
            },
        }

    },
    INDEX:{
        TITLE: "IF MOBILEとは",
        CONTENT:"NTTドコモ株式会社のリターンライン活用、Ge'anSIM通信事業。このビジネスははてブランド信じIchibanConfidence堅サービスであり、ギガ金プランガフルシ、プランもプていましたお様がご希望のプラんをてることがですかもしれません。英語、中国語多言語対応、経娓豊福な学门配置をよく、再娓富にあるより、運営が日本語がGANくできなくでもご安心で使用するきます。現在、海外市場開拓が進んでおり、海外市場開拓が可能です。",
        FEATURES: {
            TITLE: "IF MOBILEの特長",
            FEATURE1:"特徴①",
            FEATURE2:"特徴②",
            FEATURE3:"特徴③",
            FEATURE4:"特徴④",
            FEATURE5:"特徴⑤",
            FEATURE6:"特徴⑥",
        },
        PLAN :{
            TITLE: "プラン選択",
            CONTENT1: {
                DESC: "プラン1",
                CAPACITY: "5GB",
                PRICE: "2000円",
            },
            CONTENT2: {
                DESC: "プラン1",
                CAPACITY: "5GB",
                PRICE: "2000円",
            },
            CONTENT3: {
                DESC: "プラン1",
                CAPACITY: "5GB",
                PRICE: "2000円",
            },
            SEE_THE_LIST: "一覧を見る",
        },
        APPLY :{
            APPLICATION_METHOD: "申込方法",
            TITLE: "お申し込みの前にこちらの内容をご確認ください。",
            STEP1:  {
                NAME:"STEP 1",
                CHECK_PAYMENT: "支払い関連情報をご確認ください。",
                A_DOCUMENT_CONFIRMING: "ご本人の確認書類が必要です。",
                SELECT: "ご利用になる「回線」と「プラン」をお選びください。",
            },
            STEP2:  {
                NAME:"STEP 2",
                CHECK_PAYMENT: "本人確認書類のアップロードが必要です。",
                A_DOCUMENT_CONFIRMING: "午後2時までにお申し込み手続き、及びご本人様確認が完了しますと最短で当日に発送いたします。",
            },
            STEP3:  {
                NAME:"STEP 3",
                CHECK_PAYMENT: "お申し込み内容をご確認いただき、問題なければお申し込みは完了です。",
            },
        },
        INTRODUCTION__PHONE:  {
            COMPANY_INTRODUCTION:"会社紹介",
            PHONE__TEXT: "SEIWAOは、持続可能な社会の実現に向けて、解決すべき社会的課題や果たすべき役割についてステークホルダーの皆さまとともに認識を深め、課題解決のための活動に取り組んでまいります。",
            PHONE__BUTTON:"詳しく見る",
            CONTENT__TITLE:"会社紹介",
            CONTENT__TEXT:"SEIWAOは、持続可能な社会の実現に向けて、解決すべき社会的課題や果たすべき役割についてステークホルダーの皆さまとともに認識を深め、課題解決のための活動に取り組んでまいります。",
            PHONE__BUTTON:"詳しく見る",
        },
        QUESTIONS:  {
            TITLE:"よくある質問",
            PART_TEXT: "他社から乗り換えできますか？",
            CONTENT__TEXT: "データSIMカードのデータ容量を使いきった場合はどうなりますか。",
            NEW_SIM_CARD: "新規SIMカード（パッケージ）購入後やオンラインでアカウントチャージ後に返金申請はできますか？",
        },
        
    },

};

