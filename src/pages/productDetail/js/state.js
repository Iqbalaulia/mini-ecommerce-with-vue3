import { ApiGetRequest } from "@/settings/api";

const state = {
  data:{
    dataDetail: {},
    uuid:'',
    loading: false,
    errorData:{}

  }
}

const mutations = {
  changeProductDetail(state, payload){
    state.data = Object.assign({}, state.data, payload);
  }
}

const actions = {
  async getDataDetailProduct({commit, state}, payload){
    commit("changeProductDetail", {
			loading: true,
		});
    const { data } = state;

    if(payload && payload.uuid) data.uuid = payload.uuid;
    
		const result = await ApiGetRequest(`/api/product/${data.uuid}`);

    if (result.error)
			if (result.errorList) {
				let errors = [];
				for (const [key, value] of Object.entries(result.errorList)) {
					errors.push({
						message: value[0],
						path: [key],
					});
				}
				commit("changeProductDetail", {
					loading: false,
					errorData: errors,
				});
			}
		if (!result.error)
			commit("changeProductDetail", {
				loading: false,
				dataDetail: result.data.data,
			});
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
