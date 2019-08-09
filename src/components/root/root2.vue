<template>
    <div class="root-wrap">
        <header-vue></header-vue>
        <div class="belowHeader">
            <sidebar-right-vue></sidebar-right-vue>
            <router-view name="panel"></router-view>
            <sidebar-vue :menus="menus"></sidebar-vue>
        </div>
    </div>
</template>
<script>
import Sidebar from "../sidebar";
import Header from "../header";
import SidebarRight from "../sidebarRight";


export default {
    components: {
        "header-vue": Header,
        "sidebar-vue": Sidebar,
        "sidebar-right-vue": SidebarRight,
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
<style lang="scss" scoped>
.root-wrap {
    height: 100%;
    background-color: #f4f4f4;
    .belowHeader {
        height: calc(100% - 60px);
    }
}
</style>

