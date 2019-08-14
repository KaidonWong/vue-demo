<template>
    <div style="background-color:#fff;padding:2em;">
        <div style="width:450px;margin:2em">
            <board-vue
                title="SALES"
                :number="21568"
                subtitle="This week"
                :chartArr="[5,1,2,6,5,15,2,4,5,2,7,2,4,5,2,5,2,4,15,2,5,1,2,3,4]"
            ></board-vue>
        </div>
        <div style="width:450px;margin:2em">
            <board2-vue
                title="PAGE VIEWS"
                :number="1632"
                subtitle="This month"
                :chartArr="[2,6,5,2,4,5,2,7,2,4,5,2,5,2,4,5,2,5,1,15,2,3,4,5,1]"
            ></board2-vue>
        </div>
        <div style="width:450px;margin:2em">
            <board3-vue title="REPORTS" :number="654" subtitle="Last week" :percentage="20"></board3-vue>
        </div>
    </div>
</template>
<script>
import Boards from "../billboard";
export default {
    components: {
        "board-vue": Boards.Board,
        "board2-vue": Boards.Board2,
        "board3-vue": Boards.Board3
    },
    data: function() {
        return {};
    }
};
</script>
