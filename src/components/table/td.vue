<template>
    <div v-if="isHtml" v-html="content"></div>
    <div v-else>{{content}}</div>
</template>
<script>
export default {
    props: {
        isHtml: Boolean,
        content: [String,Number],
    }
}
</script>
<style lang="scss" scoped>

</style>