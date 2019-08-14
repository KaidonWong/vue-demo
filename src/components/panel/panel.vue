<template>
    <div class="panel" :style="styleObj">
        <router-view name="panel"></router-view>
    </div>
</template>
<script>
export default {
    computed: {
        styleObj: function() {
            let status = this.$store.getters['header/getSidebarExpand'];
            if (status == true) {
                return { width: "calc(100% - 460px)" };
            } else {
                return { width: "calc(100% - 240px)" };
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.panel {
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    float: right;
    height: 100%;
    width: calc(100% - 460px);
    padding: 1.5em;
}
</style>