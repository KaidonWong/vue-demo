<template>
    <div class="right-wrap">
        <div class="message">
            <div class="title">NEW MESSAGES</div>
            <ul>
                <li class="clearfix" v-for="(item,idx) of messages" :key="idx">
                    <img src="./profile-image.png" alt>
                    <div class="content">
                        <div class="name">{{item.name}}</div>
                        <div class="time">{{item.time}}</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="events">
            <div class="title">EVENTS</div>
            <ul>
                <li v-for="(item,idx) of events" :key="idx">
                    <div class="name">{{item.name}}</div>
                    <div class="time">{{item.time}}</div>
                </li>
                <div class="end">No more events scheduled</div>
            </ul>
        </div>
        <div class="chart">
            <div class="title">STATS</div>
            <chart-vue :xAxis="xAxis" :yAxis="yAxis"></chart-vue>
        </div>
    </div>
</template>
<script>
import Chart from "./chart.vue";
export default {
    components: {
        "chart-vue": Chart
    },
    data: function() {
        return {
            xAxis: [
                "Running",
                "Eating",
                "Drinking",
                "Jumping",
                "Driving",
                "Walking"
            ],
            yAxis: [[30, 45, 55, 80, 10, 75], [80, 45, 50, 50, 60, 25]],
            messages: [
                {
                    img: "./profile-image.png",
                    name: "Ned Flanders",
                    time: "3 hours ago"
                },
                {
                    img: "./profile-image-1.png",
                    name: "Peter Griffin",
                    time: "4 hours ago"
                },
                {
                    img: "./profile-image-2.png",
                    name: "Lisa Simpson",
                    time: "2 days ago"
                }
            ],
            events: [
                {
                    name: "Envato meeting",
                    time: "12:00"
                },
                {
                    name: "Google I/O",
                    time: "2:00"
                }
            ]
        };
    }
};
</script>
<style lang="scss" scoped>
.right-wrap {
    overflow: hidden;
    float: right;
    width: 240px;
    height: 100%;
    background-color: #e8e8e8;
    .message {
        .title {
            padding: 30px 20px;
            font-size: 0.8em;
            font-weight: bold;
            color: #888;
        }
        ul {
            li {
                padding-left: 20px;
                padding-bottom: 20px;
                img {
                    display: block;
                    float: left;
                    width: 20%;
                    margin-right: 20px;
                }
                .content {
                    color: #888;
                    // padding-top: 5px;
                    .name {
                        font-weight: bold;
                        font-size: 0.8em;
                        line-height: 2;
                    }
                    .time {
                        font-size: 0.7em;
                    }
                }
            }
        }
    }
    .events {
        .title {
            padding: 30px 20px;
            font-size: 0.8em;
            font-weight: bold;
            color: #888;
        }
        ul {
            li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #ccc;
                margin-left: 20px;
                margin-right: 20px;
                color: #888;
                .name {
                    font-weight: bold;
                    font-size: 0.8em;
                    line-height: 4;
                }
                .time {
                    padding: 0 5px;
                    border-radius: 2px;
                    font-size: 0.7em;
                    line-height: 1.5;
                    color: #fff;
                    background-color: #00acc1;
                }
            }
            .end {
                font-size: 0.8em;
                color: #999;
                line-height: 4;
                text-align: center;
            }
        }
    }
    .chart {
        height: 240px;
        .title {
            padding: 30px 20px;
            font-size: 0.8em;
            font-weight: bold;
            color: #888;
        }
    }
}
</style>
