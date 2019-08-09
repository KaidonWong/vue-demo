<template>
    <div>
        <!-- <div class="A">hello world</div>
        <kapian-vue></kapian-vue>
        <cube-vue></cube-vue>-->

        <!-- <icon-base-vue :width="30" :height="30">
            <star-vue></star-vue>
            <star-vue></star-vue>
            <star-vue></star-vue>
        </icon-base-vue>-->
        <!-- <rate-vue width="200" height="40"></rate-vue> -->
        <!-- <table-vue :columns="columns" :data="data" :hasSelect="true"></table-vue>
        <div style="width: 450px;margin:1em;">
            <board-vue
                title="SALES"
                :number="1632"
                subtitle="This week"
                :chartArr="[2,4,5,2,5,1,2,3,4,5,1,2,6,5,15,2,4,5,2,7,2,4,5,2,5]"
            ></board-vue>
        </div>
        <div style="width: 450px;margin:1em;">
            <board2-vue
                title="PAGE VIEWS"
                :number="1632"
                subtitle="This month"
                :chartArr="[2,4,5,2,5,1,2,3,4,5,1,2,6,5,15,2,4,5,2,7,2,4,5,2,5]"
            ></board2-vue>
        </div>
        <div style="width: 450px;margin:1em;">
            <board3-vue title="REPORTS" :number="1632" subtitle="Last week" :percentage="20"></board3-vue>
        </div>-->
        <div style="width: 1000px;height:500px;margin:1em;border:1px solid #000;">
            <chart-vue :xAxis="xAxis" :yAxis="yAxis"></chart-vue>
        </div>
    </div>
</template>
<script>
import Rate from "../svg/rate";
import Table from "../table";
import Board from "../billboard/board1.vue";
import Board2 from "../billboard/board2.vue";
import Board3 from "../billboard/board3.vue";
import Chart from "../chart";

export default {
    components: {
        "rate-vue": Rate,
        "table-vue": Table,
        "board-vue": Board,
        "board2-vue": Board2,
        "board3-vue": Board3,
        "chart-vue": Chart
    },
    data: function() {
        return {
            columns: [
                {
                    name: "col1",
                    width: 10,
                    html: false
                },
                {
                    name: "col2",
                    width: 10,
                    html: false
                },
                {
                    name: "col3",
                    width: 10,
                    html: true
                },
                {
                    name: "col4",
                    width: 10,
                    html: true
                }
            ],
            data: [
                [
                    2,
                    4,
                    "<a href='#'>hello</a>",
                    `<svg class="peity" height="16" width="16"><path d="M 8 0 A 8 8 0 0 1 13.65685424949238 13.65685424949238 L 8 8" fill="#26A69A"></path><path d="M 13.65685424949238 13.65685424949238 A 8 8 0 1 1 7.999999999999998 0 L 8 8" fill="#e0e0e0"></path></svg>`
                ],
                [
                    4,
                    5,
                    "<a>hello</a>",
                    `<svg class="peity" height="16" width="16"><path d="M 8 0 A 8 8 0 0 1 13.65685424949238 13.65685424949238 L 8 8" fill="#26A69A"></path><path d="M 13.65685424949238 13.65685424949238 A 8 8 0 1 1 7.999999999999998 0 L 8 8" fill="#e0e0e0"></path></svg>`
                ]
            ],
            xAxis: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            yAxis: [
                [5,15,10,25,25,35,40],[20,25,40,30,30,40,60],[5,10,6,15,8,9,11]
            ]
        };
    }
};
</script>