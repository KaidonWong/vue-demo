<template>
    <div class="sidebar-wrapper" :style="styleWidth">
        <profile-vue></profile-vue>
        <menu-vue :menus="menus"></menu-vue>
        <footer-vue></footer-vue>
    </div>
</template>
<script>
import Profile from "./profile.vue";
import Menus from "./menus.vue";
import Footer from "./footer.vue";
export default {
    components: {
        'profile-vue': Profile,
        'menu-vue': Menus,
        'footer-vue': Footer
    },
    props: {
        menus: Array
    },
    computed: {
        styleWidth: function() {
            let status = this.$store.getters.getSidebarExpand;
            if(status == true) {
                return {"display": "block"}
            }else {
                return {"display": "none"}
            }
        }
    }

};
</script>
<style lang="scss" scoped>
.sidebar-wrapper {
    width: 220px;
    height: 100%;
    box-shadow: 0 0 5px #999;
}
</style>
