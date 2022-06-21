<template lang="">
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
            <form @submit.prevent="loginForm">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Your Name"
                  v-model="name"
                />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="You Username"
                  v-model="username"
                />
                <label for="floatingInput">Username</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  v-model="email"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="passwordConfirmation"
                />
                <label for="floatingPassword">Password Confirmation</label>
              </div>

              <div class="d-grid">
                <button
                  class="btn btn-primary"
                  type="button"
                  disabled
                  v-if="loading"
                >
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
                <button class="btn btn-primary btn-login" type="submit" v-else>
                  Sign Up
                </button>
                <span class="m-1 float-end text-center">Have an account? <a href="/">Sign In</a></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "@/axios";

export default {
  data() {
    return {
      name: "",
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      loading: false,
    };
  },

  methods: {
    loginForm() {
      this.loading = true;
      axios
        .post("users/", {
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation,
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ path: "/" });
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },
  },
};
</script>
<style></style>
