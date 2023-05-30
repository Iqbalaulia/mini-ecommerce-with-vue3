import { createStore } from 'vuex'

import stateHomepage from '@/pages/home/js/state.js';
import stateCart from '@/pages/cart/js/state.js';

export default createStore({
  modules:{
    stateHomepage,
    stateCart,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
})