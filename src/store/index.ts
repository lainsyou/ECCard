import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    owner: "",
    name: "",
    code: "",
    message: "",
  },
  mutations: {
    setOwner(state, payload) {
      state.owner = payload.owner;
    },
    setName(state, payload) {
      state.name = payload.name;
    },
    setCode(state, payload) {
      state.code = payload.code;
    },
    setMessage(state, payload) {
      state.message = payload.message;
    },
  },
  actions: {
    setOwner(context, payload) {
      context.commit('setOwner', payload);
    },
    setName(context, payload) {
      context.commit('setName', payload);
    },
    setCode(context, payload) {
      context.commit('setCode', payload);
    },
    setMessage(context, payload) {
      context.commit('setMessage', payload);
    },
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
