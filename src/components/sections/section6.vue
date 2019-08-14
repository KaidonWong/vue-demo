<template>
    <div style="background-color:#fff;padding:2em;">
        <div class="a">
            <menu-vue :menus="menus"></menu-vue>
        </div>
    </div>
</template>
<script>
import Menu from "../sidebar/menus.vue";

export default {
    components: {
        "menu-vue": Menu,
    },
    data: function() {
        return {
            menus: [
                {
                    name: "Dashboard",
                    icon: "icon-icon-",
                    url: ""
                },
                {
                    name: "Apps",
                    icon: "icon-app",
                    url: "",
                    submenu: [
                        {
                            name: "Mailbox",
                            url: ""
                        },
                        {
                            name: "Search",
                            url: ""
                        },
                        {
                            name: "Todo",
                            url: ""
                        }
                    ]
                },
                {
                    name: "Components",
                    icon: "icon-component24",
                    url: ""
                },
                {
                    name: "Plugins",
                    icon: "icon-star",
                    url: "",
                    submenu: [
                        {
                            name: "Mailbox",
                            url: ""
                        },
                        {
                            name: "Mailbox",
                            url: ""
                        }
                    ]
                },
                {
                    name: "Layouts",
                    icon: "icon-cc-screen",
                    url: ""
                },
                {
                    name: "Forms",
                    icon: "icon-pen",
                    url: ""
                },
                {
                    name: "Tables",
                    icon: "icon-table1",
                    url: ""
                },
                {
                    name: "Charts",
                    icon: "icon-chart1",
                    url: ""
                },
                {
                    name: "Maps",
                    icon: "icon-md-locate",
                    url: ""
                },
                {
                    name: "Extra Pages",
                    icon: "icon-smile1",
                    url: ""
                }
            ]
        };
    }
};
</script>
<style scoped>
.a {
    width: 220px;
}
</style>