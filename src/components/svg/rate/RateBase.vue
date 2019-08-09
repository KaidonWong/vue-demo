<template>
    <svg xmln="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 100 20">
        <rate-vue></rate-vue>
    </svg>
</template>
<script>
import Rate from "./Rate.vue";
export default {
    components: {
        "rate-vue": Rate
    },
    props: {
        width: {
            type: [String, Number],
            default: 100
        },
        height: {
            type: [String, Number],
            default: 20
        }
    }
};
</script>
<style lang="scss" scoped>
svg {
    display: inline-block;
}
</style>
