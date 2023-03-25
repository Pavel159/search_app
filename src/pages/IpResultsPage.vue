<template>
  <centered-container>
    <div v-if="!isDataLoading">
      <div class="flex flex-col gap-3">
        <h1 class="text-4xl">Search results:</h1>
        <div><strong>IP: </strong> {{ data.ip }}</div>
        <div><strong>Provider: </strong> {{ data.isp }}</div>
        <div><strong>City: </strong> {{ data.location.city }}</div>
        <div><strong>Region: </strong> {{ data.location.region }}</div>
        <div><strong>Country: </strong> {{ data.location.country }}</div>
        <div v-if="error" class="text-red-500">{{ error }}</div>
      </div>

      <div class="mt-4 flex flex-col">
        <app-button class="w-[70%] self-center" @click="$router.push('./')"
          >Go to main page</app-button
        >
      </div>
    </div>

    <div v-else class="justify-self-center self-center">
      <app-loader />
    </div>
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
      setSearchQuery: 'ip/setSearchQuery',
    }),
    ...mapActions({
      fetchData: 'ip/fetchData',
    }),
    handleSearch() {
      this.fetchData();
    },
  },

  computed: {
    ...mapState({
      data: (state) => state.ip.data,
      isDataLoading: (state) => state.ip.isDataLoading,
      searchQuery: (state) => state.ip.searchQuery,
      error: (state) => state.ip.error,
    }),
  },
};
</script>
<style></style>
