<template>
  <form @submit.prevent="onClick">
    <b-field label="Search for a crypto ticker">
      <b-input
        @input="onChange"
        icon="magnify"
        placeholder="BTC, ETH, DOGE..."
        type="search"
        v-model="searchTerm"
      >
      </b-input>
    </b-field>
    <b-field>
      <p class="control">
        <b-button class="button" @click="onClick">Submit</b-button>
      </p>
    </b-field>
  </form>
</template>

<script>
import Vue from 'vue';
import { Button, Field, Input } from 'buefy';

Vue.use(Button);
Vue.use(Field);
Vue.use(Input);

const SearchForm = {
  data() {
    return { searchTerm: '' };
  },
  methods: {
    onChange(value) {
      this.searchTerm = value;
    },
    async onClick() {
      const response = await fetch(`/.netlify/functions/getCurrencyData?q=${this.searchTerm}`);

      if (!response.ok) {
        return this.$emit('fetchedData', null);
      }
      const { data } = await response.json();

      return this.$emit('fetchedData', data[this.searchTerm]);
    },
  },
};

export default SearchForm;
</script>

<style lang="scss">
$input-focus-border-color: #2c3e50;
$input-focus-box-shadow-size: 0;

form {
  margin-bottom: 1rem;
}
</style>
