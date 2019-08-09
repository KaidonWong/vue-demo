<template>
    <polyline :points="pathTransfered" style="fill:transparent;stroke:#00acc1;stroke-width:2"/>
</template>
<script>
export default {
    data: function() {
        return {
            path: []
        };
    },
    computed: {
        pathTransfered: function() {
            let arr = new Array();
            this.path.map((val, idx) => {
                arr.push(`${20 + 8.2 * idx},${150 - (20 + 1.1 * val)}`);
            });
            return arr.join(" ");
        }
    },
    created: function() {
        const len = 48;
        this.path = new Array(len);
        this.path.fill(60);
        window.setInterval(() => {
            let ram = (Math.random() - 0.5) * 10;
            let last = this.path[len - 1];
            let update = last + ram;
            if (update > 100||update<0) {
                ram = -ram;
            }
            this.path.shift();
            this.path.push(last + ram);
        }, 1000);
    }
};
</script>
