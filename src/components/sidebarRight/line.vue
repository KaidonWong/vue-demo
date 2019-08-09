<template>
    <path :d="path" stroke-width="2" :stroke="color" :fill="color" fill-opacity="0.3"/>
</template>
<script>
export default {
    props: {
        yAxis: Array,
        color: String
    },
    data: function() {
        return {
            number: this.yAxis.length,
            path: ""
        };
    },
    methods: {
        calPos: function(radius, idx) {
            let len = (radius / 100) * 200;
            let angle = (2 * Math.PI * idx) / this.number;
            let pos = {
                x: Math.cos(angle) * len + 250,
                y: Math.sin(angle) * len + 250
            };
            return pos;
        },
        calPath: function() {
            let str = "";
            let arr = new Array();
            let firstDot = this.calPos(this.yAxis[0], 0);
            arr.push(`M${firstDot.x} ${firstDot.y}`);
            this.yAxis.map((val, idx) => {
                let dot = this.calPos(val, idx);
                arr.push(`L${dot.x} ${dot.y}`);
            });
            arr.push("z");
            return arr.join(" ");
        }
    },
    created: function() {
        this.path = this.calPath();
    }
};
</script>
