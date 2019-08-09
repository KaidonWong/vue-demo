<template>
    <g>
        <path :d="path" style="stroke-width: 0.3;stroke:#999;"/>
        <text
            v-for="(item,idx) of topArr"
            :key="idx"
            x="7"
            :y="item+5"
            text-anchor="middle"
            fill="#777"
        >{{idx*25}}</text>
        <text
            v-for="(item,idx) of leftArr"
            :key="idx+1000"
            :x="item"
            y="145"
            text-anchor="middle"
            fill="#777"
        >{{idx*10}}</text>
    </g>
</template>
<script>
export default {
    data: function() {
        return {
            path: "",
            topArr: [20, 47.5, 75, 102.5, 130],
            leftArr: [20, 102, 184, 266, 348, 430]
        };
    },
    created: function() {
        let horizonLines = new Array(5);
        let verticalLines = new Array(6);
        for (let [idx, item] of horizonLines.entries()) {
            let top = 20 + idx * 27.5;
            horizonLines[idx] = `M20 ${top} L430 ${top}`;
        }
        for (let [idx, item] of verticalLines.entries()) {
            let left = 20 + idx * 82;
            verticalLines[idx] = `M${left} 20 L${left} 130`;
        }
        this.path = horizonLines.join(" ") + " " + verticalLines.join(" ");
        this.topArr.reverse();
    }
};
</script>
<style>
text {
    font-size: 0.7em;
}
path {
    shape-rendering: crispEdges;
}
</style>

