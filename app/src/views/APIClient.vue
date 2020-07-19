<template>
  <div class="api-client">
    <SearchForm @fetchedResults="setResults" />
    {{ results }}
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';

const APIClient = {
  components: { SearchForm },
  data() {
    return { results: [] };
  },
  methods: {
    setResults(results) {
      this.results = results;
    },
  },
};

export default APIClient;
</script>
