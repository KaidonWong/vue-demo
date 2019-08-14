<template>
    <div style="background-color:#fff;padding:2em;">
        <div class="table">
            <div class="title">Title Here</div>
            <table-vue :columns="columns" :data="data" :hasSelect="false"></table-vue>
        </div>
    </div>
</template>
<script>
import Table from "../table";
export default {
    components: {
        "table-vue": Table
    },
    data: function() {
        return {
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
        }
    }
};
</script>
