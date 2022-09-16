import Vue from "vue";
import Vuex from "vuex";

// 将vue引入vue中
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 定义的变量
    count: 0,
  },
  getters: {},
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {},
  modules: {},
});
