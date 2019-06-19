<template>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["images"],
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
