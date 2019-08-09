<template>
    <div>
        <svg-base-vue>
            <xaxis-vue :xAxis="xAxis"></xaxis-vue>
            <yaxis-vue :yAxis="yAxis" @gap-ratio="gapRatio=$event"></yaxis-vue>
            <line-vue
                v-for="(item,idx) of yAxis"
                :key="idx"
                :gap-ratio="gapRatio"
                :dot-array="item"
                :color="colors[idx]"
            ></line-vue>
        </svg-base-vue>
    </div>
</template>
<script>
import SvgBase from "./SvgBase.vue";
import xAxis from "./xAxis.vue";
import yAxis from "./yAxis.vue";
import Line from "./line.vue";

export default {
    data: function() {
        return {
            gapRatio: 0,
            colors: ["#00acc1", "#BEBEBE",'#FF6347']
        };
    },
    props: {
        xAxis: Array,
        yAxis: Array
    },
    components: {
        "svg-base-vue": SvgBase,
        "xaxis-vue": xAxis,
        "yaxis-vue": yAxis,
        "line-vue": Line
    }
};
</script>
<style lang="scss" scoped>
</style>