<template>
    <g style="stroke-width: 0.3;stroke:#999;">
        <!-- <path d="M40 460 L960 460" /> -->
        <text
            v-for="(item,idx) in yAxisNote"
            :key="idx"
            :x="20"
            :y="25+idx*44"
            fill="#666"
            text-anchor="middle"
        >{{item}}</text>
        <path :d="yAxisTransfer"/>
    </g>
</template>
<script>
const chartHeight = 440;
export default {
    data: function() {
        return {
            max: this.yAxis[0][0],
            min: this.yAxis[0][0],
            range: {
                from: 0,
                to: 0
            },
            yAxisNote: []
        };
    },
    props: {
        yAxis: Array
    },
    computed: {
        yAxisTransfer: function() {
            //固定画十个单元格
            let tmp = "";
            let idx = 0;
            while (idx <= 10) {
                let y = 20 + idx * 44;
                tmp += `M40 ${y} L960 ${y} `;
                idx++;
            }
            return tmp;
        }
    },
    created: function() {
        //获取纵坐标的最大最小值
        for (let item1 of this.yAxis) {
            for (let item2 of item1) {
                if (item2 > this.max) {
                    this.max = item2;
                }
                if (item2 < this.min) {
                    this.min = item2;
                }
            }
        }
        //计算纵坐标范围，头尾都扩大20%
        let range = this.max - this.min;
        this.range.from = this.min - range * 0.2;
        this.range.to = this.max + range * 0.2;

        //计算纵坐标单位格的取值,同时把像素比率返还给父组件
        let { from, to } = this.range;
        this.$emit("gap-ratio", 440/(to - from));
        let gap = (to - from) / 10;

        let idx = 0;
        let arr = new Array();
        while (idx < 11) {
            
            arr.push(from + gap * idx);
            idx++;
        }
        arr.reverse();
        this.yAxisNote = arr.map(val => {
            return val.toFixed(1);
        });
    }
};
</script>
<style scoped>
text {
    font-size: 0.7em;
}
path {
    shape-rendering: crispEdges;
}
</style>

