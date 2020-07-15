<template>
  <form @submit.prevent="onClick">
    <b-input
      @input="onChange"
      icon="magnify"
      placeholder="Search..."
      type="search"
      v-model="searchTerm"
    >
    </b-input>
    <b-button @click="onClick">Submit</b-button>
  </form>
</template>

<script>
import Vue from 'vue';
import { Button, Input } from 'buefy';

Vue.use(Button);
Vue.use(Input);

const SearchForm = {
  data() {
    return { searchTerm: '' };
  },
  methods: {
    onChange(value) {
      this.searchTerm = value;
    },
    onClick() {
      console.log(this.searchTerm);
    },
  },
};

export default SearchForm;
</script>

<style lang="scss">
$input-focus-border-color: #2c3e50;
$input-focus-box-shadow-size: 0;

@import '~bulma';
@import '~buefy/src/scss/buefy';

form {
  display: flex;

  > div {
    width: 100%;
  }
  button {
    margin-left: 16px;
  }
}
</style>
