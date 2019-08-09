<template>
    <div class="search-container clearfix" @click.stop>
        <input type="text" placeholder="Search">
        <i class="iconfont icon-search"></i>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.search-container {
    width: 50%;
    background-color: #2ebbcc;
    i {
        float: left;
        width: 50px;
        color: rgba($color: #fff, $alpha: 0.6);
        font-size: 1em;
        line-height: 3;
        text-align: center;
        transition: color 0.2s;
    }
    input {
        float: right;
        width: calc(100% - 50px);
        font-size: 1em;
        font-weight: bold;
        //line-height: 3;
        padding-top: 1em;
        
        //letter-spacing: 1px;
        color: rgba($color: #fff, $alpha: 0.6);
        transition: color 0.2s;
        &:focus {
            color: rgba($color: #fff, $alpha: 0.9);
            &::placeholder {
                color: rgba($color: #fff, $alpha: 0.9);
            }
            &+i {
                color: rgba($color: #fff, $alpha: 0.9);
            }
        }

        &::placeholder {
            color: rgba($color: #fff, $alpha: 0.6);
            font-weight: bold;
        }
    }
}
</style>