<template>
    <div class="board">
        <div class="title">{{title}}</div>
        <div class="number">{{numberShow}}</div>
        <span>{{subtitle}}</span>
        <i class="iconfont icon-dots"></i>
        <div class="svg-container">
            <svg-base>
                <polyline
                    :points="locationString"
                    style="fill:transparent;stroke:#ffc062;stroke-width:1"
                />
                <polygon
                    :points="'0,50 '+locationString+' 450,50'"
                    style="fill:#ffe9c9;stroke-width:0"
                />
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
            dotGap: 0,
            numberAni: 0,
            locationString: ""
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
        let dotNum = this.chartArr.length;
        this.dotGap = 450 / (dotNum - 1);
        let x = 0;
        let temp = new Array();
        for (let item of this.arrTransfered) {
            temp.push(`${x},${50 - item}`);
            x += this.dotGap;
        }
        this.locationString = temp.join(" ");
    },
    mounted: function() {
        let animateTimes = 0;
        const totalTimes = 10;
        const gap = Number.parseInt((this.number / totalTimes).toFixed(0));
        let timer = window.setInterval(() => {
            animateTimes++;
            this.numberAni += gap;
            if (animateTimes >= totalTimes) {
                this.numberAni = this.number;
                window.clearInterval(timer);
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
        position: relative;
        z-index: 1;
        margin-left: 15px;
        font-size: 1.5em;
        color: #666;
    }
    span {
        position: relative;
        z-index: 1;
        margin-left: 0.5em;
        color: #888;
        font-size: 0.8em;
    }
    i {
        position: absolute;
        top: 15px;
        right: 20px;
        color: #aaaaaa;
    }
    .svg-container {
        position: absolute;
        z-index: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        // background-color: #333;
    }
}
</style>
