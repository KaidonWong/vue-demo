<template>
    <svg-base-vue>
        <chart-frame-vue :xAxis="xAxis"></chart-frame-vue>
        <line-vue v-for="(item,idx) of yAxis" :key="idx" :yAxis="item" :color="colors[idx]"></line-vue>
    </svg-base-vue>
</template>
<script>
import SvgBase from "./SvgBase.vue";
import ChartFrame from "./ChartFrame.vue";
import Line from "./line.vue";

export default {
    props: {
        xAxis: Array,
        yAxis: Array
    },
    data: function() {
        return {
            colors: ["#00acc1", "#FF6347", "#BEBEBE"]
        };
    },
    components: {
        "svg-base-vue": SvgBase,
        "chart-frame-vue": ChartFrame,
        "line-vue": Line
    }
};
</script>
