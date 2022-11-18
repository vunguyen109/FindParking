import Vue from 'vue'
import Vuex from 'vuex'
import purchase from './modules/purchase'

Vue.use(Vuex);


const store = new Vuex.Store({
    modules: {
        purchase,
    }
});
export default store;