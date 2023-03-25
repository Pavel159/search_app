import axios from 'axios';

export const zipcodeModule = {
  state: () => ({
    data: [],
    searchedCode: '',
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
        commit('setData', []);
        commit('setLoading', true);
        const response = await axios.get(
          `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/${state.searchQuery}?key=YGLTVGHPVPCOR3JC42PN`
        );
        commit('setData', response.data);
      } catch (e) {
        if (e.response.status === 429) {
          commit('setError', 'Too many requests, try again later');
        } else {
          commit('setError', 'Something went wrong, try another zipcode');
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
