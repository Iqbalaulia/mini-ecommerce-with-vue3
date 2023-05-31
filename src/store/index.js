/** @format */

import { createStore } from "vuex";

import StateHomepage from "@/pages/home/js/state.js";
import StateCart from "@/pages/cart/js/state.js";

export default createStore({
	modules: {
		stateHomepage: StateHomepage,
		stateCart: StateCart,
	},
	state: {},
	mutations: {},
	actions: {},
	getters: {},
});
