<template>
    <g :style="styleObj">
        <polygon
            :points="'40,460 ' + dotLocation+' 960,460'"
            style="fill-opacity:0.3;stroke-width:0"
        />
        <polyline :points="dotLocation" style="stroke-width:2;fill:transparent" />
        <circle v-for="(item,idx) of circleLocation" :key="idx" :cx="item.x" :cy="item.y" r="4" style="fill:#fff"/>
    </g>
</template>
<script>
export default {
    props: {
        dotArray: Array,
        gapRatio: Number,
        color: String
    },
    data: function() {
        return {
            styleObj: {
                stroke: this.color,
                fill: this.color
            }
        };
    },
    computed: {
        dotLocation: function() {
            let arr = new Array();
            let xgap = 920 / (this.dotArray.length - 1);
            this.dotArray.map((val, idx) => {
                let x = 40 + idx * xgap;
                let y = 460 - (val * this.gapRatio + 20);
                arr.push(`${x},${y}`);
            });
            return arr.join(" ");
        },
        circleLocation: function() {
            let tmp = new Array();
            let arr = this.dotLocation.split(" ");
            for (let item of arr) {
                let arr = item.split(",");
                tmp.push({ x: arr[0], y: arr[1] });
            }
            return tmp;
        }
    }
};
</script>