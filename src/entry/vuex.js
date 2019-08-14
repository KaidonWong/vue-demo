import Vue from "vue";
import Vuex from "vuex";

import header from "../components/header/vuex.js";
import notice from "../components/notice/vuex.js";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        header,
        notice
    }
});

export default store;