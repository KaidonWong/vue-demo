<template>
    <div style="background-color:#fff;padding:2em;">
        <div class="a">
            <chart-vue :xAxis="xAxis" :yAxis="yAxis"></chart-vue>
        </div>
    </div>
</template>
<script>
import Chart from "../chart";
export default {
    components: {
        "chart-vue": Chart
    },
    data: function() {
        return {
            xAxis: [
                "2010",
                "2011",
                "2012",
                "2013",
                "2014",
                "2015",
                "2016",
                "2017",
                "2018",
                "2019"
            ],
            yAxis: [
                [5, 15, 10, 25, 25, 35, 40, 30, 56, 75],
                [20, 25, 40, 30, 30, 40, 60, 12, 36, 75],
                [5, 10, 6, 15, 8, 9, 11, 89, 84, 63]
            ]
        };
    }
};
</script>
<style scoped>
.a {
    width: 1000px;
}
</style>