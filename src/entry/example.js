import Vue from "vue";
import router from "./router";
import store from "./vuex";

import VueRoot from "../components/root/root2.vue";
import "../assets/css/global.css";
import "../assets/iconfont/iconfont.css";


window.onload = function() {
    let element = document.createElement("div");
    element.style.height = "100%";
    element.appendChild(document.createElement("root-vue"));
	document.body.appendChild(element);

	new Vue({
        el: "div",
        router,
        store,
        components: {
            "root-vue": VueRoot
        }
    });
    
};
