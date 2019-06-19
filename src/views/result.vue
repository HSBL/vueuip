<template>
  <div class="container" id="app-result">
    <h3>{{ searchInput }} images</h3>
    <div id="nav-result">
      <router-link to="/js/">Photos</router-link> | 
      <router-link to="/js/collections">Collections</router-link> | 
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
$vue-color: #42b983;

#app-result {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: 0.2c3e50;
  h3{
    margin-top: 20px;
    font-size: 2.5rem;
    margin-bottom: 5px;
    font-weight: 500;
    line-height: 1.2;
    color: $vue-color;
  }
}
#nav-result {
  padding: 10px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
