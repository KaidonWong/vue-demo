<template>
    <div class="ripple" @click.stop :style="[stylePos,styleAni]"></div>
</template>
<script>
export default {
    data: function() {
        return {
            stylePos: {
                left: "0px",
                top: "0px"
            },
            styleAni: {
                animation: "none"
            }
        };
    },
    props: {
        clickPosition: Object
    },
    watch: {
        clickPosition: function(val) {
            this.stylePos = val;
            this.styleAni = {
                animation: "ripple-ani 0.3s linear forwards"
            };
            setTimeout(() => {
                this.styleAni = {
                    animation: "none"
                };
            }, 300);
        }
    }
};
</script>
<style lang="scss" scoped>
.ripple {
    position: absolute;
    visibility: hidden;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: #666;
}
</style>
<style>
/* 这是header里的ripple 组建动画 , 这里不能用scoped!!*/
@keyframes ripple-ani {
    0% {
        transform: scale(10);
        opacity: 0.4;
    }
    /* 1% {
        transform: scale(10);
    } */
    100% {
        transform: scale(30);
        opacity: 0;
    }
}
</style>
