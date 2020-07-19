<template>
  <div class="api-client">
    <SearchForm @fetchedData="setResultData" />
    <div v-if="result" class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="result.logo" :alt="result.name" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ result.name }}</p>
            <p class="subtitle is-6">
              <a :href="result.urls.website[0] || ''" target="_blank">
                {{ result.urls.website[0] || '' }}
              </a>
            </p>
          </div>
        </div>
        <div v-html="compiledMarkdown" class="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
import marked from 'marked';

const APIClient = {
  components: { SearchForm },
  data() {
    return { result: null };
  },
  computed: {
    compiledMarkdown() {
      return marked(this.result.description, { sanitize: true });
    },
  },
  methods: {
    setResultData(result) {
      this.result = result;
    },
  },
};

export default APIClient;
</script>
