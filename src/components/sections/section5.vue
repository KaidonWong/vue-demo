<template>
    <div style="background-color:#fff;padding:2em;">
        <div class="a">
            <div class="chart">
                <div class="title">STATS</div>
                <chart-vue :xAxis="xAxis" :yAxis="yAxis"></chart-vue>
            </div>
        </div>
    </div>
</template>
<script>
import Chart from "../sidebarRight/chart.vue";
export default {
    components: {
        "chart-vue": Chart
    },
    data: function() {
        return {
            xAxis: ["optionA", "optionB", "optionC", "optionD", "optionE"],
            yAxis: [[30, 45, 55, 80, 10], [45, 50, 50, 60, 25]]
        };
    },
};
</script>
<style scoped>
.a {
    width: 500px;
}
</style>