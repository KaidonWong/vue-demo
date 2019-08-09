<template>
    <div class="clearfix" :class="hasSelect?'select':''">
        <ul class="header clearfix">
            <li v-for="(item,idx) in tableColumns" :key="idx" :style="widthArr[idx]">{{item.name}}</li>
        </ul>
        <ul class="selectArea" v-if="hasSelect">
            <li v-for="(item,idx) in data" :key="idx" @click='onClick(idx)'>
                <svg-check-vue :checked='checkedArr[idx]'></svg-check-vue>
            </li>
        </ul>
        <div class="contentArea">
            <ul class="dataLine clearfix" v-for="(line,idx) in tableData" :key="idx">
                <li v-for="(item,idx) in line" :key="idx" :style="widthArr[idx]">
                    <td-vue :content="item" :isHtml="columns[idx].html"></td-vue>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Td from "./td.vue";
import SvgCheck from "./SvgCheck.vue";
export default {
    components: {
        "td-vue": Td,
        "svg-check-vue": SvgCheck
    },
    props: {
        columns: Array,
        data: Array,
        hasSelect: {
            type: Boolean,
            default: false
        },
    },
    data: function() {
        return {
            tableColumns: this.columns,
            tableData: this.data,
            widthArr: [],
            checkedArr: []
        };
    },
    methods: {
        calTotalWid: function() {
            let totalWidth = 0;
            for (let item of this.columns) {
                totalWidth += item.width;
            }
            for (let item of this.columns) {
                let width = (item.width / totalWidth) * 100;
                width = width.toFixed(2);
                this.widthArr.push({
                    width: width+"%"
                });
            }
        },
        onClick: function(idx) {
            let status = this.checkedArr[idx];
            status = !status;
            this.checkedArr.splice(idx,1,status);
        },
        callBack: function() {
            console.log("aa");
        }
    },
    created: function() {
        this.calTotalWid();
        this.checkedArr = new Array(this.data.length);
        this.checkedArr.fill(true);
    }
};
</script>
<style lang="scss" scoped>
.header {
    padding: 1em 0;
    border-bottom: 1px solid #e9e9e9;
    li {
        float: left;
        font-weight: bold;
        color: #555;
    }
}

.contentArea {
    .dataLine {
        padding: 1em 0;
        border-bottom: 1px solid #e9e9e9;
        li {
            line-height: 1;
            float: left;
            color: #888;
        }
    }
}
.select {
    .header {
        margin-left: 2em;
    }
    .selectArea {
        float: left;
        width: 2em;
        li {
            padding: 1em 0;
            text-align: center;
            line-height: 1;
        }
    }
    .contentArea {
        float: left;
        width: calc(100% - 2em);
    }
}
</style>
