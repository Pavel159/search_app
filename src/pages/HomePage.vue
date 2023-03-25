<template>
  <centered-container>
    <div v-if="referrer" class="break-words">
      <strong>Referrer: </strong>{{ referrer }}
    </div>
    <div v-if="UTM" class="break-words">
      <strong>UTM: </strong>
      {{ UTM }}
    </div>
    <app-input
      name="zipcode"
      maxlength="5"
      v-focus
      placeholder="Enter ZIP-code (5 digits)"
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      @keypress="isNumber($event)"
      ref="zipInput"
    />

    <app-button
      :disabled="searchQuery.length < 5"
      class="w-[70%]"
      @click="handleSearch"
    >
      Search
    </app-button>
  </centered-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  data() {
    return {};
  },

  methods: {
    ...mapMutations({
      setSearchQuery: 'zipcode/setSearchQuery',
    }),
    ...mapActions({
      fetchData: 'zipcode/fetchData',
      resetSearch: 'zipcode/resetSearch',
    }),
    handleSearch() {
      this.fetchData();
      this.resetSearch();
      this.$router.push('/zip-results');
    },
    isNumber(e) {
      if (!/\d/.test(e.key)) return e.preventDefault();
    },
  },

  computed: {
    ...mapState({
      searchQuery: (state) => state.zipcode.searchQuery,
    }),
    referrer() {
      return document.referrer;
    },
    UTM() {
      const { query } = this.$route;

      let res = '';
      let index = 0;

      for (let key in query) {
        if (index > 0) res += `&`;
        res += `${key}=${query[key]}`;
        index++;
      }

      return res;
    },
  },
};
</script>
<style></style>
