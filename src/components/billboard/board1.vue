<template>
    <div class="board">
        <div class="title">{{title}}</div>
        <div class="number">{{numberShow}}</div>
        <span>{{subtitle}}</span>
        <div class="btn">gross</div>
        <div class="svg-container">
            <svg-base>
                <g style="fill:#aaa;fill-opacity:0.2;stroke:#888;stroke-opacity:0.2;">
                    <rect
                        v-for="(item,idx) in barLocation"
                        :key="idx"
                        :width="barWidth"
                        :height="item.height"
                        :x="item.x"
                        :y="50-item.height"
                    />
                </g>
            </svg-base>
        </div>
    </div>
</template>
<script>
import SvgBase from "./SvgBase.vue";
export default {
    components: {
        "svg-base": SvgBase
    },
    data: function() {
        return {
            barLocation: [],
            barWidth: 0,
            numberAni: 0
        };
    },
    props: {
        title: String,
        number: Number,
        subtitle: String,
        chartArr: Array
    },
    computed: {
        arrTransfered: function() {
            let max = this.findMax(this.chartArr);
            let temp = this.chartArr.map(function(val) {
                return (val / max) * 50;
            });
            return temp;
        },
        numberShow: function() {
            let thousand = this.numberAni / 1000;
            thousand = Math.floor(thousand).toFixed(0);

            let hundred = this.numberAni % 1000;
            hundred = hundred.toFixed(0);

            if (thousand == "0") {
                return `${hundred}`;
            } else {
                hundred = new Array(3)
                    .join("0")
                    .concat(hundred)
                    .slice(-3);
                return `${thousand},${hundred}`;
            }
        }
    },
    methods: {
        findMax: function(arr) {
            let max = 0;
            for (let item of arr) {
                if (item > max) {
                    max = item;
                }
            }
            return max;
        }
    },
    created: function() {
        let barsNumber = this.chartArr.length;
        let barGapRatio = 1;
        this.barWidth = 450 / (barsNumber + barGapRatio * (barsNumber + 1));
        let x = 0;
        for (let item of this.arrTransfered) {
            x += barGapRatio * this.barWidth;
            let info = {
                x: x,
                height: item
            };
            x += this.barWidth;
            this.barLocation.push(info);
        }
    },
    mounted: function() {
        let animateTimes = 0;
        const totalTimes = 10;
        const gap = Number.parseInt((this.number / totalTimes).toFixed(0));
        let timer = window.setInterval(() => {
            animateTimes++;
            this.numberAni += gap;
            if (animateTimes >= totalTimes) {
                window.clearInterval(timer);
                this.numberAni = this.number;
            }
        }, 50);
    }
};
</script>
<style lang="scss" scoped>
.board {
    position: relative;
    height: 120px;
    background-color: #fff;
    box-shadow: 0 0 5px #ddd;
    .title {
        padding-top: 15px;
        padding-bottom: 20px;
        margin-left: 17px;
        font-size: 0.8em;
        font-weight: bold;
        color: #777;
    }
    .number {
        display: inline-block;
        margin-left: 15px;
        font-size: 1.5em;
        color: #666;
    }
    span {
        margin-left: 0.5em;
        color: #888;
        font-size: 0.8em;
    }
    .btn {
        position: absolute;
        top: 15px;
        right: 20px;
        border-radius: 2px;
        line-height: 1;
        font-size: 0.8em;
        padding: 0.3em;
        color: #ffffff;
        background-color: #26c6da;
    }
    .svg-container {
        position: absolute;
        // z-index: -1;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        // background-color: #333;
    }
}
</style>
