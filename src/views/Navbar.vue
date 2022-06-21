<template lang="">
  <div>
    <nav class="navbar navbar-expand-lg shadow navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"> Comment App</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/home" active-link="active" class="nav-link"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/post" active-link="active" class="nav-link"
                >Post</router-link
              >
            </li>

            <li class="nav-item">
              <router-link
                :to="{ name: 'account', params: { id: '1' } }"
                active-link="active"
                class="nav-link"
                >Account</router-link
              >
            </li>
          </ul>
          <div class="d-flex">
            <button
              href=""
              class="text-decoration-none btn btn-link"
              @click="logout"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>

export default {
  data(){
    return {
      username: this.$route.params.username
    }
  },

  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },

   
  },
};
</script>
<style lang=""></style>
