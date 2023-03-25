import axios from 'axios';

export const ipModule = {
  state: () => ({
    data: [],
    isDataLoading: false,
    searchQuery: '',
    error: '',
  }),

  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setLoading(state, bool) {
      state.isDataLoading = bool;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setError(state, error) {
      state.error = error;
    },
  },

  actions: {
    async fetchData({ state, commit }) {
      try {
        commit('setLoading', true);
        const response = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_nARhjNebMecEfOZ3OmmFcq232Pe25&ipAddress=${state.searchQuery}`
        );
        commit('setData', response.data);
      } catch (e) {
        if (e.response.status === 429) {
          commit('setError', 'Too many requests, try again later');
        } else {
          commit('setError', 'Something went wrong, try another IP');
        }
      } finally {
        commit('setLoading', false);
      }
    },
    resetSearch({ commit }) {
      commit('setSearchQuery', '');
    },
  },

  namespaced: true,
};
