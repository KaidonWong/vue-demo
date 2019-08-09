import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		sidebarExpand: true
	},
	getters: {
		getSidebarExpand: state => {
			return state.sidebarExpand;
		}
	},
	mutations: {
		toggleSidebar(state) {
			state.sidebarExpand = !state.sidebarExpand;
		}
	},
	actions: {
		toggleSidebar(context) {
			context.commit("toggleSidebar");
		}
	}
});

export default store;