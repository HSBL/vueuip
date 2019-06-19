<template>
  <div id="app-result">
    <h3>Result images</h3>
    <div id="nav-result">
      <router-link to="/js/">Photos</router-link>|
      <router-link to="/js/collections">Collections</router-link>|
      <router-link to="/js/users">Users</router-link>
    </div>
    <router-view v-bind:searchInput="searchInput"></router-view>
  </div>
</template>


<script>
export default {
  props: ["searchInput"],
  data() {
    return {};
  }
};
</script>


<style lang="scss" scoped>
#app-result {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: 0.2c3e50;
}
#nav-result {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
