<template>
    <g style="stroke-width: 0.3;stroke:#999;">
        <!-- <path d="M40 460 L960 460" /> -->
        <text v-for="(item,idx) in xAxisTransfer" :key="idx" :x="item.x" y='485' fill="#666" text-anchor='middle'>
            {{item.name}}
        </text>
        <path v-for="(item,idx) in xAxisTransfer" :key="idx+1000" :d="'M'+item.x+' 20 L'+item.x+' 460'"/>
    </g>
</template>
<script>
export default {
    props: {
        xAxis: Array
    },
    computed: {
        xAxisTransfer: function() {
            let gap = 920/(this.xAxis.length-1);
            let x = 40;
            let arr = new Array();
            for(let [idx,item] of this.xAxis.entries()) {
                let tmp = {
                    x: x,
                    name: item
                };
                x += gap;
                arr.push(tmp);
            }
            return arr;
        }
    }
}
</script>
<style scoped>
text {
    font-size: 0.8em;
}
path{
    shape-rendering: crispEdges;
}
</style>

