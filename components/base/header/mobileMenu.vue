<template>
    <div class="mobile-menu">
        <div class="m-menu" v-if="isDrawer">

            <menu-list/>

            <search place="Поиск"/>

        </div>
        <div class="m-auth" v-if="isAuthMenu">

            <auth-menu sighUpTitle="Зарегистрироваться"/>

        </div>
    </div>
</template>

<script>
    import MenuList from "~/components/base/header/MenuList.vue";
    import Search from "~/components/base/Search.vue";
    import AuthMenu from "~/components/base/header/AuthMenu.vue";

    export default {
        name: "mobileMenu",
        components: {
            MenuList, Search, AuthMenu
        },
        computed: {
            isAuthMenu() {
                return this.$store.state.header.authNav
            },
            isDrawer() {
                return this.$store.state.header.drawer
            }
        },
        // methods: {
        //     myEventHandler(e) {
        //         console.log(e)
        //     }
        // },
        // created() {
        //     window.addEventListener("resize", this.myEventHandler);
        // },
        // destroyed() {
        //     window.removeEventListener("resize", this.myEventHandler);
        // },
    }
</script>

<style scoped>

</style>
