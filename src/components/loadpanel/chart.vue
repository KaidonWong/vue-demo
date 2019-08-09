<template>
    <svg-base-vue>
        <chart-axis-vue></chart-axis-vue>
        <line-vue></line-vue>
    </svg-base-vue>
</template>
<script>
import SvgBase from "./SvgBase.vue";
import ChartAxis from "./chartAxis.vue";
import Line from "./line.vue";

export default {
    data: function() {
        return {};
    },
    components: {
        "svg-base-vue": SvgBase,
        "chart-axis-vue": ChartAxis,
        "line-vue": Line
    }
};
</script>
