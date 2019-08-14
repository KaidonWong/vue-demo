const noticeModule = {
    namespaced: true,
    state: {
        list: []
    },
    getters: {
        getlist: state => {
            return state.list;
        }
    },
    mutations: {
        addNotice(state,payload) {
            state.list.push(payload);
        },
        deleteNotice(state) {
            state.list.shift();
        }
    },
    actions: {
        // toggleSidebar(context) {
        //     context.commit("toggleSidebar");
        // },
        addNotice({commit},payload) {
            commit("addNotice",payload);
            setTimeout(function() {
                commit("deleteNotice");
            },5000)
        }
    }
}

export default noticeModule;
