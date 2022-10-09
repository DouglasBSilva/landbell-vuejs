import Vue from 'vue'
import Vuex from 'vuex'
import usersModule from './modules/users.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users: usersModule
  }
})
