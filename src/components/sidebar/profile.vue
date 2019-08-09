<template>
    <div class="profile">
        <img src="./profile-image.png" alt>
        <div class="content">
            <div>David Doe</div>
            <div>
                <i class="iconfont icon-arrowdown-copy"></i>
            </div>
            <div>david@gmail.com</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.profile {
    height: 150px;
    background-image: url(./profile_bg.png);
    background-size: 100% 100%;
    padding: 1.5em;
    img {
        display: block;
        width: 30%;
    }
    .content {
        div:nth-of-type(1) {
            margin-top: 1em;
            margin-bottom: 0.3em;
            font-weight: bold;
            font-size: 0.8em;
        }
        div:nth-of-type(2) {
            float: right;
            i {
                vertical-align: top;
                //font-size: 10px;
                color: #666;
            }
        }
        div:nth-of-type(3) {
            font-size: 0.8em;
            color: #666;
        }
    }
}
</style>

       
