<template>
    <div>
        <section>
            <div class="p-login__title">{{ $t("LOGIN.TITLE") }}</div>
            <div class="p-login__container">
                <div class="p-login__container--img">
                    <img src="../assets/Group 1599.png" alt="">
                </div>
                <div class="p-login__container--form">
                    <Login></Login>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Login from '@/components/login/login.vue'
    export default {
    components: {
        Login
    },
    setup() {
        
    },
    
}
</script>

<style lang="scss" scoped>
.p-login__title {
    font-family: 'ABeeZee';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    color: #144A14;
    margin: auto;
    padding-top: 50px;  
}

.p-login__container {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 100px;   
    gap: 100px; 
}

@media screen and (max-width: 1350px) {
    .p-login__container {
        gap: 20px;
        &--img {
            margin-top: 30px;
            img {
                width: 80%;
            }
        }
    }
}

@media screen and (max-width: 1240px) {
    .p-login__container {
        gap: 0;
        &--img {
            margin-top: 30px;
            img {
                width: 80%;
            }
        }
    }
}

@media screen and (max-width: 1110px) {
    .p-login__container {
        gap: 0;
        &--img {
            width: 45%; 
            margin-top: 30px;
            img {
                width: 70%;
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .p-login__container {
        gap: 0px; 
        &--img {
            width: 50%;
            img {
                max-width: 80%;
            }
        }
    }
}

@media screen and (max-width: 870px) {
    .p-login__container--img {
        display: none;
    }
}
</style>