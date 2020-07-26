<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/api-client">API Client</router-link>
      <a id="vue-link" target="_blank" href="https://vuejs.org/">
        <img id="vue-logo" alt="Vue logo" src="./assets/logo.png" />
      </a>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import '~bulma';
@import '~buefy/src/scss/buefy';

#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-family: 'Fira Code', monospace;
  margin: auto;
  max-width: 700px;
  padding: 16px;
}
#nav {
  align-items: center;
  display: flex;
  margin-bottom: 42px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#vue-link {
  margin-left: auto;

  img {
    width: 32px;
  }
}
</style>
