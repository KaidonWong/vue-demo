<template>
    <div class="wrap" @click.stop="onClick">
        <div class="box" :class="hasActive">
            <div class="top"></div>
            <div class="mid"></div>
            <div class="bottom"></div>
        </div>
        <div class="logo">ALPHA</div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            hasActive: {
                active: false
            }
        };
    },
    methods: {
        onClick: function() {
            this.hasActive.active = !this.hasActive.active;
            this.$store.dispatch("header/toggleSidebar");
        }
    }
};
</script>
<style lang="scss" scoped>
.wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    .logo {
        font-weight: bold;
        font-size: 0.9em;
        color: #fff;
    }
    &:hover {
        cursor: pointer;
    }
}
.box {
    width: 14px;
    & > div {
        background-color: #f0f0f0;
        height: 2px;
        transition: transform 0.3s ease;
        & ~ div {
            margin-top: 3px;
        }
    }
    &.active {
        .top {
            transform: translate(5px, 2px) rotate(40deg);
            width: 10px;
        }
        .mid {
            transform: rotate(180deg);
        }
        .bottom {
            transform: translate(5px, -2px) rotate(-40deg);
            width: 10px;
        }
    }
}
</style>