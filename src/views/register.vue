<template>
    <div>
        <section>
            <div class="p-register__title">アカウント申請</div>
            <div class="p-register__container">
                <div class="p-register__container--img">
                    <img src="../assets/Group 1599.png" alt="">
                </div>
                <div class="p-register__container--form">
                    <Register/>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Register from '@/components/login/register.vue';
export default {
    components: {
    Register,
},
    setup() {
        
    },
}
</script>

<style lang="scss">
.p-register__title {
    font-family: 'ABeeZee';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    color: #144A14;
    margin: auto;
    padding-top: 50px; 
}

.p-register__container {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 100px;
    gap: 100px; 
}
@media screen and (max-width: 1350px) {
    .p-register__title {
        font-size: 32px;
    }
    .p-register__container {
        gap: 20px;
        &--img {
            width: 50%;
            img {
                width: 80%;
                margin-top: 30px;
            }
        }
    }
}

@media screen and (max-width: 950px) {
    .p-register__container {
        gap: 20px;
        &--img {
            width: 50%;
            img {
                width: 95%;
                margin-top: 30px;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .p-register__container--img {
        display: none;
    }
    .p-register__container {
        &--img {
            width: 50%;
            img {
                width: 95%;
                margin-top: 30px;
            }
        }
    }
}
</style>