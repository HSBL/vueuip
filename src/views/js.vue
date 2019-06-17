<template>
  <div>
    <h3>Unsplashed images</h3>
    <div class="card-columns">
      <div
        v-for="image in images"
        v-bind:key="image.id"
        class="card card-custom border-0 rounded-lg shadow-sm rounded-lg"
      >
        <div class="card-custom-image">
          <img v-bind:src="image.urls.regular" class="img-fluid" alt>
          <div v-if="!image.tags" class="card-body overlay text-center">
            <p class="card-text">
              <b>{{ image.user.name }}</b>
            </p>
            <div class="text-center location">
              <p>{{ image.user.location}}</p>
            </div>
            <div class="card-custom-avatar">
              <img v-bind:src="image.user.profile_image.large" alt="profile image">
            </div>
          </div>
          <div v-if="image.tags" class="card-body overlay">
            <p class="card-text text-center description">{{ image.description }}</p>
            <p class="card-text">
              <b>{{ image.user.name }}</b>
            </p>
            <div class="card-custom-avatar">
              <img v-bind:src="image.user.profile_image.large" alt="profile image">
            </div>
          </div>
        </div>
        <div v-if="image.tags" class="text-center tags">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      searchInput: "",
      pageCount: 1,
      searchPage: 1,
      searched: false
    };
  },
  methods: {
    getImages() {
      this.$http
        .get(
          "https://api.unsplash.com/photos?page=" +
            this.pageCount +
            "&per_page=10&client_id=0ed1253bca8dcabbd6e40e6b7a5dee34e5f611e8732fd78dcf162ab7679e687c"
        )
        .then(result => {
          for (let i = 0; i < result.data.length; i++) {
            this.images.push(result.data[i]);
          }
          this.pageCount++;
        });
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          if (this.searched) {
            this.getSearch(this.searchInput);
          } else {
            this.getImages();
          }
        }
      };
    }
  },
  created() {
    this.getImages();
  },
  mounted() {
    this.scroll();
  }
};
</script>

<style lang="scss" scoped>

</style>

