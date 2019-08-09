<template>
    <div class="board">
        <div class="title">{{title}}</div>
        <div class="number">{{numberShow}}</div>
        <span>{{subtitle}}</span>
        <div class="icon">
            {{percentage}}%
            <i class="iconfont icon-trending-up"></i>
        </div>
        <div class="bar"></div>
        <div class="bar active" :style="styleObj"></div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            numberAni: 0,
            styleObj: {
                width: this.percentage+'%'
            }
        };
    },
    props: {
        title: String,
        number: Number,
        subtitle: String,
        percentage: Number
    },
    computed: {
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
    created: function() {},
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
        margin-left: 15px;
        font-size: 1.5em;
        color: #666;
    }
    > span {
        margin-left: 0.5em;
        color: #888;
        font-size: 0.8em;
    }
    .bar {
        position: absolute;
        // z-index: -1;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 5px;
        background-color: #b2ebf2;
        &.active {
            //width: 60%;
            background-color: #26c6da;
        }
    }
    .icon {
        position: absolute;
        right: 15px;
        top: 60px;
        font-size: 10px;
        color: green;
        i {
            vertical-align: middle;
            font-size: 16px;
        }
    }
}
</style>
