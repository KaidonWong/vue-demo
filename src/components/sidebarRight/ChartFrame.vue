<template>
    <g>
        <text
            v-for="(item,idx) of textPosition"
            :key="idx"
            :x="item.x"
            :y="item.y"
            text-anchor="middle"
            fill="#777"
        >{{xAxis[idx]}}</text>
        <g stroke-width="1" stroke="#777" fill="transparent">
            <path :d="calPath(200)"/>
            <path :d="calPath(150)"/>
            <path :d="calPath(100)"/>
            <path :d="calPath(50)"/>
            <path :d="calYPath(200)"/>
        </g>
    </g>
</template>
<script>
export default {
    props: {
        xAxis: Array
    },

    data: function() {
        return {
            // number: this.xAxis.length
        };
    },
    computed: {
        number: function() {
            return this.xAxis.length;
        },
        textPosition: function() {
            return this.calCircle(200);
        }
    },
    methods: {
        calCircle: function(radius) {
            let ret = new Array();
            let unit = (2 * Math.PI) / this.number;
            for (let idx = 0; idx < this.number; idx++) {
                let obj = {
                    x: Math.cos(unit * idx) * radius + 250,
                    y: Math.sin(unit * idx) * radius + 250
                };
                ret.push(obj);
            }
            return ret;
        },
        calPath: function(radius) {
            let posArr = this.calCircle(radius);
            let arr = [];
            arr.push(`M${posArr[0].x} ${posArr[0].y}`);
            for (let item of posArr) {
                arr.push(`L${item.x} ${item.y}`);
            }
            arr.push("z");
            return arr.join(" ");
        },
        calYPath: function(radius) {
            let posArr = this.calCircle(radius);
            let arr = [];
            for (let item of posArr) {
                arr.push("M250 250");
                arr.push(`L${item.x} ${item.y}`);
            }
            return arr.join(" ");
        }
    }
};
</script>
<style lang="scss" scoped>
text {
    font-size: 20px;
}
path {
    shape-rendering: crispEdges;
}
</style>
