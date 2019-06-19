<template>
  <div class="card-columns">
    <div
      v-for="image in images"
      v-bind:key="image.id"
      class="card card-custom border-0 rounded-lg shadow-sm rounded-lg"
    >
      <div class="card-custom-image">
        <img v-bind:src="image.profile_image.large" class="img-fluid" alt>
        <div class="card-body overlay">
          <p class="card-text">
            <b>{{ image.name }}</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["searchInput"],
  data() {
    return {
      images: [],
      searchPage: 1
    };
  },
  methods: {
    getUsers(searchString) {
      this.$http
        .get(
          "https://api.unsplash.com/search/users?page=" +
            this.searchPage +
            "&query=" +
            searchString +
            "&per_page=10&client_id=0ed1253bca8dcabbd6e40e6b7a5dee34e5f611e8732fd78dcf162ab7679e687c"
        )
        .then(result => {
          for (let i = 0; i < result.data.results.length; i++) {
            this.images.push(result.data.results[i]);
          }
          this.searchPage++;
        });
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.getUsers(this.searchInput);
        }
      };
    }
  },
  created() {
    this.getUsers(this.searchInput);
  },
  mounted() {
    this.scroll();
  }
};
</script>

<style lang="scss" scoped>
</style>
