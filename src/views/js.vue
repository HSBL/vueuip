<template>
  <div>
    <app-header v-on:searchEmit="initSearch($event)"></app-header>
    <app-unsplash v-if="!searched" v-bind:images="images"></app-unsplash>
    <app-result v-if="searched" v-bind:searchInput="searchInput"></app-result>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Unsplash from "../components/result/Unsplash.vue";
import Result from "./result.vue";

export default {
  components: {
    "app-header": Header,
    "app-unsplash": Unsplash,
    "app-result": Result
  },
  data() {
    return {
      images: [],
      pageCount: 1,
      searchInput: "",
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
    initSearch(searchString) {
      this.searchInput = searchString;
      this.searched = true;
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.getImages();
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

