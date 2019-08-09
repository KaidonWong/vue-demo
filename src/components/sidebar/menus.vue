<template>
    <ul class="menus">
        <template v-for="(item,idx) in menuItems">
            <li-menu-vue :key="idx" :item="item" :collapseStatus="collapseStatus[idx]" @myevent="onClickMenu(item,idx)">
            </li-menu-vue>
            <ul :key="idx+10000" v-if="hasSubmenu(item)" :style="submenuHeight[idx]">
                <template v-for="(item,idx) in item.submenu">
                    <li-submenu-vue :key="idx" :item='item'></li-submenu-vue>
                </template>
            </ul>
        </template>
    </ul>
</template>
<script>
import Ripple from "./ripple.vue";
import SubmenuLi from "./submenuLi.vue";
import MenuLi from "./menuLi.vue";

export default {
    components: {
        "ripple-vue": Ripple,
        "li-menu-vue": MenuLi,
        "li-submenu-vue": SubmenuLi
    },
    data: function() {
        return {
            menuItems: [...this.menus],
            collapseStatus: [],
            submenuHeight: []
        };
    },
    props: {
        menus: Array
    },
    methods: {
        hasSubmenu: function(val) {
            if (val.submenu == undefined) {
                return false;
            }
            return true;
        },
        onClickMenu: function(item, idx) {
            let b = this.hasSubmenu(item);
            if (b == false) {
                //路由跳转
                this.$router.push(item.url);
            } else {
                //has submenu
                if (this.toggleStatus(idx) == "collapse") {
                    //全部折叠
                    this.submenuHeight.fill("height: 0px");
                } else {
                    //展开了一个
                    let height = 40 * item.submenu.length;
                    this.submenuHeight.fill("height: 0px");
                    this.submenuHeight.splice(idx, 1, `height:${height}px`);
                }
            }
        },
        toggleStatus: function(idx) {
            if (this.collapseStatus[idx] == false) {
                this.collapseStatus.fill(false);
                this.collapseStatus.splice(idx, 1, true);
                //有一个展开
                return "active";
            } else {
                this.collapseStatus.splice(idx, 1, false);
                //全部折叠
                return "collapse";
            }
        }
    },
    created: function() {
        //初始化菜单状态
        let len = this.menuItems.length;
        this.collapseStatus = new Array(len).fill(false);

        //初始化子菜单的高度
        this.submenuHeight = new Array(len).fill("height: 0px");
    }
};
</script>
<style lang="scss" scoped>
.menus {
    height: calc(100% - 245px);
    overflow: auto;

    padding-top: 1em;

    > ul {
        height: 0;
        overflow: hidden;
        transition: height 0.2s;

    }
    li.active + ul {
        background-color: #f0f0f0;
    }
}
</style>

