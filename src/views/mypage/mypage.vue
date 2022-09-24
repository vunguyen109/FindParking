<template>
    <div class="content">
        <Menu class="content__itemMenu"></Menu>
        <Personal_manager class="content__item"></Personal_manager>
    </div>
</template>

<script>
import Menu from "../../views/mypage/modules/menu.vue";
import Personal_manager from "../mypage/modules/personal_manager.vue";
export default {
    components: { Menu, Personal_manager }
}
</script>

<style lang="scss" scoped>
    .content{ 
        display: flex;
        &__itemMenu{
            width: 10%;
        }
    }
</style>