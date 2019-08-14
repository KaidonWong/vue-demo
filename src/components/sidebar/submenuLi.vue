<template>
    <li @click="onClick($event)" ref="root">
        {{item.name}}
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
        item: Object
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
            // this.$router.push(`${this.item.url}/hello`);
            this.$router.push({
                path: this.item.url
            });
        }
    }
};
</script>
<style lang="scss" scoped>
li {
    position: relative;
    overflow: hidden;
    padding: 0.8em 0 0.8em 4.6em;
    font-size: 0.8em;
    line-height: 1.5;
    color: #555;
    &:hover {
        background-color: #e0e0e0;
    }
}
</style>