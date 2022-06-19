<template>
  <div class="home container mt-5">
    <h1 class="h1">Home</h1>
    <br />

    <div class="row">
      <div class="col">Column</div>
      <div class="col">Column</div>
    </div>

    <div class="row">
      <div class="col">Column</div>
      <div class="col">Column</div>
    </div>

    <!-- Button trigger modal -->
    <div
      class="toast show align-items-center bg-primary text-light border-0 position-fixed top-0 end-0 mt-5"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex">
        <div class="toast-body">Hello, world! This is a toast message.</div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {},
};
</script>
<style>
.home {
  text-align: center;
}
</style>
