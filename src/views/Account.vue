<template lang="">
  <div>
    <navbar-vue></navbar-vue>
    <div class="container mt-5">
      <h1>Account</h1>

      <form @submit.prevent="updateUser">
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
            v-model="users.name"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputUsername" class="form-label">Username</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputUsername"
            aria-describedby="emailHelp"
            v-model="users.username"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="users.email"
          />
        </div>

        <button
          class="btn btn-primary m-1"
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
        <button type="submit" class="btn btn-primary m-1" v-else>Update</button>
        <button type="reset" class="btn btn-outline-secondary">Reset</button>
      </form>
    </div>

    <toast-success-update-user-vue v-if="toast"></toast-success-update-user-vue>
  </div>
</template>
<script>
import NavbarVue from "./Navbar.vue";
import axios from "@/axios";
import ToastSuccessUpdateUserVue from "./Toast/ToastSuccessUpdateUser.vue";

export default {
  components: {
    NavbarVue,
    ToastSuccessUpdateUserVue,
  },
  data() {
    return {
      users: [],
      toast: false,
      loading: false,
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios
        .get(`users/${this.id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    updateUser() {
      this.loading = true;
      axios
        .put(
          "users/" + this.id,
          {
            name: this.users.name,
            username: this.users.username,
            email: this.users.email,
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          setTimeout(() => (this.loading = false), 3000);
          this.toast = true;
          setTimeout(() => (this.toast = false), 3000);
          this.getUser();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang=""></style>
