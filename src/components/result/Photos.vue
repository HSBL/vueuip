<template>
  <div class="card-columns">
    <div
      v-for="image in images"
      v-bind:key="image.id"
      class="card card-custom border-0 rounded-lg shadow-sm rounded-lg"
    >
      <div class="card-custom-image">
        <img v-bind:src="image.urls.regular" class="img-fluid" alt>
        <div class="card-body overlay">
          <p class="card-text text-center description">{{ image.description }}</p>
          <p class="card-text">
            <b>{{ image.user.name }}</b>
          </p>
          <div class="card-custom-avatar">
            <img v-bind:src="image.user.profile_image.large" alt="profile image">
          </div>
        </div>
      </div>
      <div class="text-center tags">
        <a
          v-for="tag in image.tags.slice(0,3)"
          v-bind:key="tag.index"
          href="#"
          v-on:click.prevent="getSearch(tag.title)"
          class="btn btn-sm btn-secondary"
        >{{ tag.title }}</a>
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
    getPhotos(searchString) {
      this.$http
        .get(
          "https://api.unsplash.com/search/photos?page=" +
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
          this.getPhotos(this.searchInput);
        }
      };
    }
  },
  created() {
    this.getPhotos(this.searchInput);
  },
  mounted() {
    this.scroll();
  }
};
</script>

<style lang="scss" scoped>
</style>
