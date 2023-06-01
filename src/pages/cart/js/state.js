/** @format */

import { ApiGetRequest, ApiPostRequest } from "@/settings/api";
import { ElMessage } from 'element-plus'

const state = {
	data: {
		listCart: [],
		loading: false,
		errorData: {},
		formData: {
			product_uuid: "",
			qty: "",
		},
		perPage: 50,
		page: 1,
	},
};

const mutations = {
	changeCart(state, payload) {
		state.data = Object.assign({}, state.data, payload);
	},
};

const actions = {
	async getListCart({ commit, state }, payload) {
		commit("changeCart", {
			loading: true,
		});
		const { data } = state;

		if (payload && payload.perPage) data.perPage = payload.perPage;
		if (payload && payload.dataPage) data.page = payload.dataPage;

		const params = {
			limit: data.perPage,
			page: data.page,
		};

		const result = await ApiGetRequest("/api/cart", params);

		if (result.error)
			if (result.errorList) {
				let errors = [];
				for (const [key, value] of Object.entries(result.errorList)) {
					errors.push({
						message: value[0],
						path: [key],
					});
				}
				commit("changeCart", {
					loading: false,
					errorData: errors,
				});
			}
		if (!result.error)
			commit("changeCart", {
				loading: false,
				listCart: result.data.data,
			});
	},

	async postToCart({ commit, state }, payload) {
		commit("changeCart", {
			loading: true,
		});

		const { data } = state;

		if (payload && payload.product_uuid)
			data.formData.product_uuid = payload.product_uuid;
		if (payload && payload.qty) data.formData.qty = payload.qty;

    let formData = new FormData();
    formData.append('product_uuid', data.formData.product_uuid);
    formData.append('qty', data.formData.qty);

		const result = await ApiPostRequest(`/api/cart`, formData);
		if(result.data){
			ElMessage({
				message: "Produk berhasil ditambahkan kedalam keranjang",
				type: "success",
			});
		}else{
			ElMessage({
				message: "Cek jaringan anda!",
				type: "error",
			});
		}
	},
	
	async updateToCart({ commit, state }, payload) {
		commit("changeCart", {
			loading: true,
		});

		const { data } = state;

		if (payload && payload.product_uuid)
			data.formData.product_uuid = payload.product_uuid;
		if (payload && payload.qty) data.formData.qty = payload.qty;

    let formData = new FormData();
		formData.append("_method", "put");
    formData.append('qty', data.formData.qty);

		const result = await ApiPostRequest(`/api/cart/${data.formData.product_uuid}`, formData);
		if(result.data){
			ElMessage({
				message: "Data produk berhasil diubah",
				type: "success",
			});
		}else{
			ElMessage({
				message: "Cek jaringan anda!",
				type: "error",
			});
		}
	},


	async deleteFromCart({ commit }, payload) {
		commit("changeCart", {
			loading: true,
		});

		
    let formData = new FormData();
		formData.append("_method", "delete");
		await ApiPostRequest(`/api/cart/${payload.uuid}`, formData);
		
		ElMessage({
			message: "Data produk berhasil dihapus",
			type: "success",
		});
	},

};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
