<template>
    <li :class="collapseStatus?'active':''" @click.stop="onClick($event)" ref="root">
        <i class="iconfont" :class="item.icon"></i>
        <div class="name">{{item.name}}</div>
        <i v-if="hasSubmenu(item)" class="iconfont icon-arrow"></i>
        <ripple-vue :click-position="clickPosition"></ripple-vue>
    </li>
</template>
<script>
import Ripple from "./ripple.vue";
export default {
    components: {
        "ripple-vue": Ripple
    },
    props: {
        item: Object,
        collapseStatus: Boolean
    },
    data: function() {
        return {
            clickPosition: {
                left: "0px",
                top: "0px"
            }
        };
    },
    methods: {
        onClick: function(e) {
            let a = this.$refs.root.getBoundingClientRect();
            
            this.clickPosition = {
                left: `${e.pageX - a.x - 10}px`,
                top: `${e.pageY - a.y - 10}px`
                // left: `${e.offsetX - 10}px`,
                // top: `${e.offsetY - 10}px`
            };
            this.$emit("myevent");
        },
        hasSubmenu: function(val) {
            if (val.submenu == undefined) {
                return false;
            }
            return true;
        }
    }
};
</script>
<style lang="scss" scoped>
li {
    position: relative;
    overflow: hidden;
    padding: 0.7em 1.5em;
    i {
        display: inline;
        vertical-align: middle;
        font-size: 1.2em;
        color: #555;
    }
    .name {
        display: inline;
        padding-left: 1em;
        font-size: 0.8em;
        color: #555;
    }
    .icon-arrow {
        display: block;
        float: right;
        margin-top: 0.5em;
        font-size: 9px;
        color: #999;
        transition: transform 0.1s;
    }
    &:hover {
        background-color: #e0e0e0;
    }
    &.active {
        background-color: #f0f0f0;
        .icon-arrow {
            transform: rotate(90deg);
            transform-origin: 65% 50%;
        }
    }
}
</style>