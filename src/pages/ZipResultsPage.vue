<template>
  <centered-container>
    <div v-if="!isDataLoading">
      <div class="flex flex-col gap-3">
        <h1 class="text-4xl">Search results:</h1>
        <div><strong>ZIP-code: </strong> {{ data.ZipCode }}</div>
        <div><strong>City: </strong> {{ data.City }}</div>
        <div><strong>State: </strong> {{ data.State }}</div>
        <div v-if="!data.ZipCode" class="text-red-500">
          There are no results
        </div>
        <div v-if="error" class="text-red-500">{{ error }}</div>
      </div>

      <div class="flex flex-col gap-3 mt-4">
        <app-button class="w-[70%]" @click="$router.push('./')"
          >Go to main page</app-button
        >
        <h2 class="text-2xl">Try search by IP:</h2>
        <Form @submit="handleSearch" class="flex flex-col gap-3">
          <app-input
            name="ip"
            maxlength="15"
            :model-value="ipSearchQuery"
            @update:model-value="setSearchQuery"
            placeholder="Enter IP-adress"
            @keypress="isIp($event)"
            :rules="validateIp"
          />
          <ErrorMessage class="text-red-600" name="ip" />
          <app-button
            type="submit"
            :disabled="ipSearchQuery.length < 7"
            class="w-[70%]"
          >
            Search
          </app-button>
        </Form>
      </div>
    </div>
    <div class="justify-self-center self-center" v-else>
      <app-loader />
    </div>
  </centered-container>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { Form, ErrorMessage } from 'vee-validate';
export default {
  components: {
    Form,
    ErrorMessage,
  },

  data() {
    return {};
  },

  methods: {
    ...mapMutations({
      setSearchQuery: 'ip/setSearchQuery',
    }),

    ...mapActions({
      fetchData: 'ip/fetchData',
      resetSearch: 'ip/resetSearch',
    }),

    handleSearch() {
      this.fetchData();
      this.resetSearch();
      this.$router.push('/ip-results');
    },

    isIp(e) {
      if (!/\d/.test(e.key) && e.key !== '.') return e.preventDefault();
    },

    validateIp(value) {
      const regex =
        /(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/gm;

      if (!regex.test(value)) {
        return 'This field must be a valid IP';
      }

      return true;
    },
  },

  computed: {
    ...mapState({
      data: (state) => state.zipcode.data,
      isDataLoading: (state) => state.zipcode.isDataLoading,
      zipcodeSearchQuery: (state) => state.zipcode.searchQuery,
      ipSearchQuery: (state) => state.ip.searchQuery,
      error: (state) => state.zipcode.error,
    }),
  },
};
</script>
<style></style>
