import Vue from "vue";
import VueRouter from "vue-router";
import Panel from "../components/panel";
// import Inner from "../components/panel/inner.vue";

const Inner = () => import('../components/panel/inner.vue')

Vue.use(VueRouter);

const routes = [
	{ path: "/panel1", name:"panel1", components: { panel: Panel.Panel1 } },
	{
        path: "/panel2",
        name: "panel2",
		components: { panel: Panel.Panel2 },
        props: { panel: true },
        children: [
            {
                path: "inner",
                name: "inner",
                components: {
                    innerRouter: Inner
                }
            }
        ]
	},
	{ path: "", components: { panel: Panel.Panel1 } }
];

const router = new VueRouter({
	routes // (缩写) 相当于 routes: routes
});

export default router;
