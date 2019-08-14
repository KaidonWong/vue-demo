const headerModule = {
    namespaced: true,
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
}

export default headerModule;
