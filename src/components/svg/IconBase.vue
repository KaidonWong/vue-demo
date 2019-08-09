<template>
    <svg xmln="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 18 18">
        <g :fill="fillColor">
            <slot></slot>
        </g>
    </svg>
</template>
<script>
export default {
    props: {
        width: {
            type: [String,Number],
            default: 18
        },
        height: {
            type: [String,Number],
            default: 18
        },
        fillColor: {
            type: String,
            default: "currentColor"
        }
    }    
}
</script>
<style lang="scss" scoped>
svg {
    display: inline-block;
}
</style>
