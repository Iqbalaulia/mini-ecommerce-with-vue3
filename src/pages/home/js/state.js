const state = {
  data:{

  }
}

const mutations = {
  changeHomepage(state, payload){
    state.data = Object.assign({}, state.data, payload)
  },
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}