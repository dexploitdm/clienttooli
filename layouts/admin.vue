<template>
    <div v-if="this.protected" class="wrapper">
        <sidebar/>
        <div class="main-panel">
            <!-- Navbar -->
            <nav-bar/>
            <!-- End Navbar -->
            <div class="content">
                <nuxt/>
            </div>
            <footer/>
        </div>
    </div>
</template>

<script>
    import Sidebar from './partials/AdminSidebar';
    import NavBar from './partials/AdminNavBar';
    import Footer from './partials/AdminFooter';

    export default {
        name: "admin",
        components: {
            Sidebar, NavBar, Footer
        },
        data() {
            return {
                protected: true
            }
        },
        mounted() {

        },
        created() {
            let isAdmin = this.$auth.user;
            if (isAdmin.is_admin !== 1) {
                this.$router.push({
                    path: '/'
                });
            } else {
                this.protected = true;
            }
            this.initData();
        },
        methods: {
            initData(){
                this.$store.dispatch('data/users/GET_USER')
                this.$store.dispatch('data/category/GET_CATEGORIES')
                this.$store.dispatch('data/services/GET_SERVICES')
            }
        }
    }
</script>

<style lang="scss">
    @import "~assets/scss/admin/app.scss";
</style>
