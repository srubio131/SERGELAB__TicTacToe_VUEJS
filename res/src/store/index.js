import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dialog: {
      show: false,
      title: 'Titulo',
      description: 'Descripcion larga'
    }
  },
  mutations: {
    ADD_CONFIG_DIALOG(state, dialogConfig) {
      state.dialog = dialogConfig
    }
  },
  actions: {
    ADD_CONFIG_DIALOG({ commit }, dialogConfig) {
      commit('SHOW_DIALOG', dialogConfig)
    }
  }
});
