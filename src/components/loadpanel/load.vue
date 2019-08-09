<template>
    <div class="serverload">
        <div class="btn">optimal</div>
        <div class="title">SERVER LOAD</div>
        <ul class="info">
            <li class="usage">
                {{usage}}
                <span>Usage</span>
            </li>
            <li class="space">
                {{space}}
                <span>Space</span>
            </li>
            <li class="cpu">
                {{CPU}}
                <span>CPU</span>
            </li>
        </ul>
        <ul class="browsers">
            <li>
                <span>Google Chrome</span>
                <span>
                    32%
                    <i class="iconfont icon-trending-up"></i>
                </span>
            </li>
            <li class="down">
                <span>Safari</span>
                <span>
                    20%
                    <i class="iconfont icon-trending-down"></i>
                </span>
            </li>
            <li>
                <span>Mozilla Firefox</span>
                <span>
                    50%
                    <i class="iconfont icon-trending-up"></i>
                </span>
            </li>
            <li>
                <span>Edge</span>
                <span>
                    20%
                    <i class="iconfont icon-trending-up"></i>
                </span>
            </li>
        </ul>

        <chart-vue></chart-vue>
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
            usage: "167GB",
            space: "320GB",
            CPU: "57.5%"
        };
    }
};
</script>
<style lang="scss" scoped>
.serverload {
    padding: 20px 20px 0 20px;
    .title {
        font-size: 0.8em;
        font-weight: bold;
        color: #777;
    }
    .btn {
        float: right;
        padding: 2px 5px;
        border-radius: 3px;
        background-color: #777;
        color: #fff;
        font-size: 0.7em;
        font-weight: bold;
    }
    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 40px;
        li {
            color: #666;
            font-weight: bold;
            span {
                display: block;
                color: #999;
                font-size: 0.8em;
                font-weight: normal;
            }
        }
    }
    .browsers {
        padding-top: 20px;
        padding-bottom: 20px;
        li {
            padding: 15px 0;
            span:nth-of-type(1) {
                font-size: 0.9em;
                color: #777;
            }
            span:nth-of-type(2) {
                float: right;
                color: rgb(30, 124, 73);
                font-weight: bold;
            }
            & + li {
                border-top: 1px solid #bbb;
            }
            &.down {
                span:nth-of-type(2) {
                    color: #dc143c;
                }
            }
        }
    }
}
</style>
