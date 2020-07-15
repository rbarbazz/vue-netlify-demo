<template>
  <div class="api-client">
    <SearchForm />
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';

const APIClient = {
  components: { SearchForm },
};

export default APIClient;
</script>
