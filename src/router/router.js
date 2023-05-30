/** @format */

import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/Layout/index.vue";

// routes pages
import { homeRoutes } from "../pages/home/routes/index";

const routes = [
	{
		path: "/",
		component: Layout,
		redirect: { name: "home" },
		children: [
      ...homeRoutes,
    ],
	},
];

const router = createRouter({
	base: process.env.BASE_URL,
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
	history: createWebHistory(),
	routes,
});

// router.beforeEach((to, from, next) => {

// })

export default router;
