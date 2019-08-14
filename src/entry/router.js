import Vue from "vue";
import VueRouter from "vue-router";

import Section from "../components/sections/section1.vue";
import Section2 from "../components/sections/section2.vue";
import Section3 from "../components/sections/section3.vue";
import Section4 from "../components/sections/section4.vue";
import Section5 from "../components/sections/section5.vue";
import Section6 from "../components/sections/section6.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/panel1",
		name: "panel1",
		components: { panel: Section },
		props: { panel: true }
	},
	{
		path: "/panel2",
		name: "panel2",
		components: { panel: Section2 },
		props: { panel: true }
	},
	{
		path: "/panel3",
		name: "panel3",
		components: { panel: Section3 },
		props: { panel: true }
    },
    {
		path: "/panel4",
		name: "panel4",
		components: { panel: Section4 },
		props: { panel: true }
    },
    {
		path: "/panel5",
		name: "panel5",
		components: { panel: Section5 },
		props: { panel: true }
    },
    {
		path: "/panel6",
		name: "panel6",
		components: { panel: Section6 },
		props: { panel: true }
	},
	{ path: "", components: { panel: Section }, props: { panel: true } }
];

const router = new VueRouter({
	routes // (缩写) 相当于 routes: routes
});

export default router;
