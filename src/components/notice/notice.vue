<template>
    <div class="notice-base">
        <transition-group name="notice" tag="ul" mode="out-in">
            <li
                v-for="(item,idx) in noticelist"
                :key="keys[idx]"
                :class="getClassObject(item.type)"
            >
                <div class="clearfix">
                    <i class="iconfont icon-check"></i>
                    <i class="iconfont icon-wrong"></i>
                    <i class="iconfont icon-alertwarn"></i>
                    <div class="title">{{item.title}}</div>
                </div>
                <div class="content">{{item.content}}</div>
            </li>
        </transition-group>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            // noticelist: [
            //     {
            //         type: 0,
            //         title: "Notice",
            //         content:
            //             "this is a notice just for demonstration! haha ,now you see me?"
            //     },
            //     {
            //         type: 1,
            //         title: "Warning",
            //         content:
            //             "this is a notice just for demonstration! haha ,now you see me?"
            //     },
            //     {
            //         type: 2,
            //         title: "Alert",
            //         content:
            //             "this is a notice just for demonstration! haha ,now you see me?"
            //     }
            // ]
            keys: [0,1,2,3,4,5,6,7,8,9]
        };
    },
    computed: {
        noticelist: function() {
            return this.$store.getters["notice/getlist"];
        }
    },
    methods: {
        getClassObject: function(val) {
            let tmp = "notice";
            switch (val) {
                case 0:
                    tmp = "notice";
                    break;
                case 1:
                    tmp = "warning";
                    break;
                case 2:
                    tmp = "alert";
                    break;
            }
            return tmp;
        }
    }
};
</script>
<style lang="scss" scoped>
.notice-enter-active,
.notice-leave-active {
    transition: all 0.3s ease-in-out;
}
.notice-enter,
.notice-leave-to {
    transform: translateX(150px);
    opacity: 0;
}
.notice-base {
    position: absolute;
    right: 10px;
    top: 20px;
    width: 300px;
    ul {
        li {
            margin: 10px;
            padding: 10px;
            background-color: #fff;
            box-shadow: 0 0 5px #ddd;
            border-radius: 5px;
            i {
                display: none;
                float: left;
                padding-right: 5px;
                font-size: 30px;
            }
            .title {
                color: #666;
                line-height: 2.2;
                font-size: 0.9em;
                font-weight: bold;
            }
            .content {
                font-size: 0.9em;
                color: #666;
            }
            &.notice {
                .icon-check {
                    display: block;
                    color: green;
                }
                .title {
                    color: green;
                }
            }
            &.warning {
                .icon-alertwarn {
                    display: block;
                    color: rgba(241, 155, 75, 0.712);
                }
                .title {
                    color: rgba(241, 155, 75, 0.712);
                }
            }
            &.alert {
                .icon-wrong {
                    display: block;
                    color: red;
                }
                .title {
                    color: red;
                }
            }
        }
    }
}
</style>