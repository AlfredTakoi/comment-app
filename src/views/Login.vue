<template lang="">
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <div class="alert alert-danger" role="alert" v-if="validate">
              Your Email or Password is wrong
            </div>
            <form @submit.prevent="loginForm">
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
                  Sign In
                </button>
                <span class="m-1 float-end text-center"
                  >Don't have an Account? <a href="/register">Sign Up</a></span
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <toast-success-vue v-if="toast"></toast-success-vue>
</template>
<script>
import axios from "@/axios";
// import ToastSuccessLoginVue from "./Toast/ToastSuccessLogin.vue";
import ToastSuccessVue from "./Toast/ToastSuccess.vue";

export default {
  components: {
    // ToastSuccessLoginVue,
    ToastSuccessVue
  },
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      toast: false,
      validate: false
    };
  },

  methods: {
    loginForm() {
      this.loading = true;
      axios
        .post("auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          this.$router.push({ path: "home" });
           this.toast = true;
          setTimeout(() => (this.toast = false), 3000);
        })
        .catch((error) => {
          this.validate = true  
          this.loading = false;
          console.log(error);
        });
    },
  },
};
</script>
<style></style>
