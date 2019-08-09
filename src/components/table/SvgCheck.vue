<template>
    <div class="box" :class="toggleChecked">
        <svg xmln="http://www.w3.org/2000/svg" width="0.8em" height="0.8em" viewBox="0 0 20 20">
            <path
                d="m0.26009,9.58726l2.0927,-2.09344l5.73291,5.73217l9.55658,-9.55362l2.09344,2.09196l-11.65002,11.64854"
                fill="#fff"
            ></path>
        </svg>
    </div>
</template>
<script>
export default {
    props: {
        checked: Boolean
    },
    computed: {
        toggleChecked: function() {
            return {
                checked: this.checked
            };
        }
    }
};
</script>
<style lang="scss" scoped>
.box {
    display: inline-block;
    height: 1em;
    width: 1em;
    border: 1px solid #ccc;
    border-radius: 0.3em;
}
.checked {
    background-color: cadetblue;
}
</style>
