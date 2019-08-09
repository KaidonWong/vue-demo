<template>
    <div class="container" @click="onClick($event)">
        <toggle-vue></toggle-vue>
        <search-vue></search-vue>
        <header-right-vue></header-right-vue>
        <ripple-vue :click-position="clickPosition"></ripple-vue>
    </div>
</template>
<script>
import Toggle from "./toggle.vue";
import Search from "./search.vue";
import HeaderRight from "./headerRight.vue";
import Ripple from "./ripple.vue";

export default {
    data: function() {
        return {
            clickPosition: {
                left: '0px',
                top: "0px"
            }
        };
    },
    components: {
        "toggle-vue": Toggle,
        "search-vue": Search,
        "header-right-vue": HeaderRight,
        "ripple-vue": Ripple
    },
    methods: {
        onClick: function(e) {
            this.clickPosition = {
                left: `${e.offsetX-10}px`,
                top: `${e.offsetY-10}px`
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.container {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 1.4em;
    background-color: #00acc1;
    box-shadow: 0 0 10px #999;
}
</style>
