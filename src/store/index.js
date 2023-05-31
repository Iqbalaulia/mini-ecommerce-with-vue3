/** @format */

import { createStore } from "vuex";

import StateHomepage from "@/pages/home/js/state.js";
import StateCart from "@/pages/cart/js/state.js";
import StateProductDetail from "@/pages/productDetail/js/state.js";

export default createStore({
	modules: {
		stateHomepage: StateHomepage,
		stateCart: StateCart,
		stateProductDetail: StateProductDetail,
	},
	state: {},
	mutations: {},
	actions: {},
	getters: {},
});
