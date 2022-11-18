
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    return: {
      workStep: 1,
    }
  },

  mutations: {
    setSteps(state, payload) {
      state.workStep = payload;
    }
  }
});
