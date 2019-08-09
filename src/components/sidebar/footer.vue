<template>
    <div class="footer-wrap">
        <div>Steelcoders&copy;</div>
        <div>Privacy <span>&amp;</span> Terms</div>
    </div>
</template>
<style lang="scss" scoped>
    .footer-wrap {
        position: absolute;
        bottom: 0;
        width: 220px;
        height: 95px;
        padding: 2em;
        border-top: 1px solid #ccc;
        font-size: 0.8em;
        font-weight: bold;
        div:nth-of-type(1) {
            line-height: 2;
            color: #666;
        }
        div:nth-of-type(2) {
            font-weight: 0.85em;
            color: #2d8ec6;
            span {
                color: #666;
            }
        }
        
    }
</style>
