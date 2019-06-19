<template>
  <nav class="navbar">
    <div class="row">
      <div class="col-3 d-none d-md-block">
        <button class="navbar-brand btn rounded-pill" href="#">{{ title }}</button>
      </div>
      <div class="col-12 col-md-6">
        <form class="input-group rounded-pill border border-secondary">
          <div class="input-group-prepend rounded-pill">
            <button
              v-on:click.prevent="searchEvent"
              type="submit"
              class="btn bg-light rounded-pill"
            >
              <i class="text-dark fas fa-search"></i>
            </button>
          </div>
          <input
            class="border-0 form-control rounded-pill"
            type="text"
            v-model="searchInput"
            placeholder="Search"
            aria-label="Search"
          >
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      title: "Code Challenge",
      searchInput: ""
    };
  },
  methods: {
    searchEvent: function() {
      this.$emit("searchEmit", this.searchInput);
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  background: lightgreen;
}
.row {
  width: 100%;
}
.input-group {
  background-color: white;
}
</style>
