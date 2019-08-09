<template>
    <div class="wrap">
        <i class="iconfont" :class="iconName"></i>
        <span v-if="hasNum" class="badge">
            <i>{{number}}</i>
        </span>
    </div>
</template>
<script>
export default {
    props: {
        iconName: String,
        number: String
    },
    computed: {
        hasNum: function() {
            if(this.number == undefined) {
                return false;
            }else{
                return true;
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.wrap {
    position: relative;
    > i {
        font-size: 1.3em;
        color: rgba($color: #fff, $alpha: 0.9);
    }
    .badge {
        position: absolute;
        top: -1px;
        left: 0.9em;
        top: -0.2em;
        width: 1em;
        height: 1em;
        background-color: #ff8f00;
        border-radius: 0.5em;
        > i {
            position: relative;
            left: 0.3em;
            bottom: 0.4em;
            font-size: 0.8em;
            font-weight: bold;
            font-style: normal;
            color: rgba($color: #fff, $alpha: 0.9);
        }
    }
}
</style>