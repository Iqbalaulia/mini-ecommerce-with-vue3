/** @format */

import { ApiGetRequest } from "@/settings/api";

const state = {
	data: {
		dataProduct: [],
		perPage: 50,
		page: 1,
		loading: false,
		is_random: false,
		sort: "",
	},
};

const mutations = {
	changeHomepage(state, payload) {
		state.data = Object.assign({}, state.data, payload);
	},
};

const actions = {
	async getDataProduct({ commit, state }, payload) {
		commit("changeHomepage", {
			loading: true,
		});

		const { data } = state;

		if (payload && payload.perPage) data.perPage = payload.perPage;
		if (payload && payload.dataPage) data.page = payload.dataPage;
		if (payload && payload.sort) data.is_random = payload.is_random;

		const params = {
			limit: data.perPage,
		};

		if (payload && payload.q) params["q"] = payload.q;

		const result = await ApiGetRequest("/api/product", params);

		if (result.error)
			if (result.errorList) {
				let errors = [];
				for (const [key, value] of Object.entries(result.errorList)) {
					errors.push({
						message: value[0],
						path: [key],
					});
				}
				commit("changeBank", {
					loadingType: false,
					errordataBank: errors,
					errorInfoType: true,
				});
			}
		if (!result.error)
			commit("changeHomepage", {
				loading: false,
				dataProduct: result.data.data,
			});
	},
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
