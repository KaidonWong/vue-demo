<template>
    <div class="root-wrap">
        <header-vue></header-vue>
        <div class="belowHeader">
            <sidebar-right-vue></sidebar-right-vue>
            <panel-vue></panel-vue>
            <sidebar-vue :menus="menus"></sidebar-vue>
        </div>
        <notice-vue></notice-vue>
    </div>
</template>
<script>
import Sidebar from "../sidebar";
import Header from "../header";
import SidebarRight from "../sidebarRight";
import Panel from "../panel/panel.vue";
import Notice from "../notice";

export default {
    components: {
        "header-vue": Header,
        "sidebar-vue": Sidebar,
        "sidebar-right-vue": SidebarRight,
        "panel-vue": Panel,
        "notice-vue": Notice
    },
    data: function() {
        return {
            menus: [
                {
                    name: "Dashboard",
                    icon: "icon-icon-",
                    url: "/panel1"
                },
                {
                    name: "Apps",
                    icon: "icon-app",
                    url: "",
                    submenu: [
                        {
                            name: "Mailbox",
                            url: "/panel2"
                        },
                        {
                            name: "Search",
                            url: "/panel3"
                        },
                        {
                            name: "Todo",
                            url: "/panel4"
                        }
                    ]
                },
                {
                    name: "Components",
                    icon: "icon-component24",
                    url: "/panel5"
                },
                {
                    name: "Plugins",
                    icon: "icon-star",
                    url: "",
                    submenu: [
                        {
                            name: "Mailbox",
                            url: "/panel6"
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
<style lang="scss" scoped>
.root-wrap {
    height: 100%;
    background-color: #f4f4f4;
    .belowHeader {
        height: calc(100% - 60px);
    }
}
</style>

