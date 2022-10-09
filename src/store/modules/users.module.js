import { UsersService } from '@/services/users.service'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const usersService = new UsersService();

export default {
  state: {
    users: {},
    user: {},
    friends: [],
    friendsOfFriends: [],
    suggestions: [],
    cityRecommendations: [] 
  },
  getters: {
    users: ({users}) => users,
    user: ({user}) => user,
    friends: ({friends}) => friends,
    friendsOfFriends: ({friendsOfFriends}) => friendsOfFriends,
    suggestions: ({suggestions}) => suggestions,
    cityRecommendations: ({cityRecommendations}) => cityRecommendations,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setFriends(state, friends) {
      state.friends = friends;
    },
    setFriendsOfFriends(state, friendsOfFriends) {
      state.friendsOfFriends = friendsOfFriends;
    },
    setSuggestions(state, suggestions) {
      state.suggestions = suggestions;
    },
    setCityRecommendations(state, cityRecommendations) {
      state.cityRecommendations = cityRecommendations;
    },
  },
  actions: {
    loadUsers({commit}, {page= 1, per_page= 10}) {
      usersService.index(page, per_page).then(function({data}) {
        commit('setUsers', data);
      });
    },
    loadUser({commit}, id) {
      return usersService.show(id).then(function({data}) {
        commit('setUser', data);
      });
    },
    loadFriends({commit}, id) {
      return usersService.loadFriends(id).then(function({data}) {
        commit('setFriends', data);
      });
    },
    loadFriendsOfFriends({commit}, id) {
      return usersService.loadFriendsOfFriends(id).then(function({data}) {
        commit('setFriendsOfFriends', data);
      });
    },
    loadSuggestions({commit}, id) {
      return usersService.loadSuggestions(id).then(function({data}) {
        commit('setSuggestions', data);
      });
    },
    loadCityRecommendations({commit}, id) {
      return usersService.loadCityRecommendations(id).then(function({data}) {
        commit('setCityRecommendations', data);
      });
    }
  },
  modules: {
  }
}
