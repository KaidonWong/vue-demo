<template>
    <div class="right-wrap" @click.stop>
        <icon-vue icon-name="icon-bell" number="5"></icon-vue>
        <icon-vue icon-name="icon-dots"></icon-vue>
    </div>
</template>
<script>
import Icon from "./Icon.vue";

export default {
    components: {
        'icon-vue': Icon,
    }
}
</script>

<style lang="scss" scoped>
.right-wrap {
    // background: rgba($color: #000000, $alpha: 0.3);
    height: 40px;
    width: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>

