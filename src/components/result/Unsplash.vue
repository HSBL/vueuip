<template>
  <div class="container">
    <div class="unsplash-header">
      <h3>Unsplashed images</h3>
    </div>
    <div class="card-columns">
      <div
        v-for="image in images"
        v-bind:key="image.id"
        class="card card-custom border-0 rounded-lg shadow-sm rounded-lg"
      >
        <div class="card-custom-image">
          <img v-bind:src="image.urls.regular" class="img-fluid" alt>
          <div class="card-body overlay text-center">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["images"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
$vue-color: #42b983;

.unsplash-header {
  margin-top: 20px;
  margin-bottom: 20px;
  h3 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    color: $vue-color;
  }
}

.card-custom {
  background-color: lightgrey;
  .card-custom-image {
    position: relative;
    .overlay {
      position: absolute;
      color: white;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: 0.5s ease;
      background-color: black;
    }
    .overlay:hover {
      opacity: 0.7;
    }
    .card-custom-avatar {
      img {
        border-radius: 50%;
        box-shadow: 0 0 15px white;
      }
    }
  }
}
</style>
