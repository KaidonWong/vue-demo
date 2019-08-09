import Vue from "vue";
import VueRoot from "../components/root";
import "../assets/css/global.css";
import "../assets/iconfont/iconfont.css";

window.onload = function() {
    let element = document.createElement("div");
    element.appendChild(document.createElement("root-vue"));
	document.body.appendChild(element);

	new Vue({
		el: "div",
        components: {
            "root-vue": VueRoot
        }
	});
};
