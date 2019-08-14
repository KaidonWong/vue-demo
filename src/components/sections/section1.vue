<template>
    <div>
        <div class="boards">
            <div @click="onClick">
                <board-vue
                    title="SALES"
                    :number="21568"
                    subtitle="This week"
                    :chartArr="[2,4,15,2,5,1,2,3,4,5,1,2,6,5,15,2,4,5,2,7,2,4,5,2,5]"
                ></board-vue>
            </div>
            <div>
                <board2-vue
                    title="PAGE VIEWS"
                    :number="1632"
                    subtitle="This month"
                    :chartArr="[2,4,5,2,5,1,15,2,3,4,5,1,2,6,5,2,4,5,2,7,2,4,5,2,5]"
                ></board2-vue>
            </div>
            <div>
                <board3-vue title="REPORTS" :number="654" subtitle="Last week" :percentage="20"></board3-vue>
            </div>
        </div>
        <div class="clearfix">
            <div class="visitor">
                <div class="title">
                    <div>VISITOR</div>
                    <i class="iconfont icon-refresh"></i>
                </div>
                <div class="subtitle">Showing stats from the last week</div>
                <div class="chart">
                    <chart-vue :xAxis="xAxis" :yAxis="yAxis"></chart-vue>
                </div>
            </div>
            <div class="load">
                <load-vue></load-vue>
            </div>
        </div>
        <div class="table">
            <div class="title">INVOICES</div>
            <table-vue :columns="columns" :data="data" :hasSelect="false"></table-vue>
        </div>
    </div>
</template>
<script>
import Boards from "../billboard";
import Chart from "../chart";
import Load from "../loadpanel";
import Table from "../table";

export default {
    data: function() {
        return {
            xAxis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            yAxis: [
                [5, 15, 10, 25, 25, 35, 40],
                [20, 25, 40, 30, 30, 40, 60],
                [5, 10, 6, 15, 8, 9, 11]
            ],
            columns: [
                {
                    name: "ID",
                    width: 1,
                    html: false
                },
                {
                    name: "Payment Type",
                    width: 3,
                    html: false
                },
                {
                    name: "Company",
                    width: 3,
                    html: false
                },
                {
                    name: "Date",
                    width: 2,
                    html: false
                },
                {
                    name: "Progress",
                    width: 2,
                    html: true
                },
                {
                    name: "Operation",
                    width: 1,
                    html: true
                }
            ],
            data: [
                [
                    "#202",
                    "PayPal",
                    "Curabitur Libera Corp",
                    "2019.8.1",
                    `<svg class="peity" height="16" width="16"><path d="M 8 0 A 8 8 0 0 1 13.65685424949238 13.65685424949238 L 8 8" fill="#26A69A"></path><path d="M 13.65685424949238 13.65685424949238 A 8 8 0 1 1 7.999999999999998 0 L 8 8" fill="#e0e0e0"></path></svg>`,
                    "<a href='#'>see detail</a>"
                ],
                [
                    "#202",
                    "PayPal",
                    "Curabitur Libera Corp",
                    "2019.8.1",
                    `<svg class="peity" height="16" width="16"><path d="M 8 0 A 8 8 0 1 1 2.3431457505076203 13.65685424949238 L 8 8" fill="#26A69A"></path><path d="M 2.3431457505076203 13.65685424949238 A 8 8 0 0 1 7.999999999999998 0 L 8 8" fill="#e0e0e0"></path></svg>`,
                    "<a href='#'>see detail</a>"
                ],
                [
                    "#202",
                    "PayPal",
                    "Curabitur Libera Corp",
                    "2019.8.1",
                    `<svg class="peity" height="16" width="16"><path d="M 8 0 A 8 8 0 0 1 13.65685424949238 13.65685424949238 L 8 8" fill="#26A69A"></path><path d="M 13.65685424949238 13.65685424949238 A 8 8 0 1 1 7.999999999999998 0 L 8 8" fill="#e0e0e0"></path></svg>`,
                    "<a href='#'>see detail</a>"
                ],
                [
                    "#202",
                    "PayPal",
                    "Curabitur Libera Corp",
                    "2019.8.1",
                    `<svg class="peity" height="16" width="16"><path d="M 8 0 A 8 8 0 1 1 2.3431457505076203 13.65685424949238 L 8 8" fill="#26A69A"></path><path d="M 2.3431457505076203 13.65685424949238 A 8 8 0 0 1 7.999999999999998 0 L 8 8" fill="#e0e0e0"></path></svg>`,
                    "<a href='#'>see detail</a>"
                ],
                [
                    "#202",
                    "PayPal",
                    "Curabitur Libera Corp",
                    "2019.8.1",
                    `<svg class="peity" height="16" width="16"><path d="M 8 0 A 8 8 0 0 1 13.65685424949238 13.65685424949238 L 8 8" fill="#26A69A"></path><path d="M 13.65685424949238 13.65685424949238 A 8 8 0 1 1 7.999999999999998 0 L 8 8" fill="#e0e0e0"></path></svg>`,
                    "<a href='#'>see detail</a>"
                ],
                [
                    "#202",
                    "PayPal",
                    "Curabitur Libera Corp",
                    "2019.8.1",
                    `<svg class="peity" height="16" width="16"><path d="M 8 0 A 8 8 0 0 1 13.65685424949238 13.65685424949238 L 8 8" fill="#26A69A"></path><path d="M 13.65685424949238 13.65685424949238 A 8 8 0 1 1 7.999999999999998 0 L 8 8" fill="#e0e0e0"></path></svg>`,
                    "<a href='#'>see detail</a>"
                ]
            ]
        };
    },
    components: {
        "board-vue": Boards.Board,
        "board2-vue": Boards.Board2,
        "board3-vue": Boards.Board3,
        "chart-vue": Chart,
        "load-vue": Load,
        "table-vue": Table
    },
    methods: {
        onClick: function() {
            let obj = {
                type: 1,
                title: "Warning",
                content:
                    "this is a notice just for demonstration! haha ,now you see me?"
            };
            this.$store.dispatch("notice/addNotice", obj);
        }
    }
};
</script>
<style lang="scss" scoped>
.boards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
        width: 32%;
    }
}
.visitor {
    float: left;
    margin-top: 24px;
    width: 66%;
    background-color: #fff;
    box-shadow: 0 0 5px #ddd;
    .title {
        padding: 20px 20px 0 20px;
        font-size: 0.8em;
        font-weight: bold;
        color: #777;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .subtitle {
        padding: 10px 0 15px 20px;
        font-size: 0.6em;
        color: #aaa;
    }
    .chart {
        padding-left: 10px;
    }
}
.load {
    float: right;
    width: 32%;
    margin-top: 24px;
    background-color: #fff;
    box-shadow: 0 0 5px #ddd;
}
.table {
    padding: 20px;
    margin-top: 24px;
    background-color: #fff;
    box-shadow: 0 0 5px #ddd;
    font-size: 0.9em;
    .title {
        margin-bottom: 20px;
        font-size: 0.8em;
        font-weight: bold;
        color: #777;
    }
}
</style>