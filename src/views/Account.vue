<template lang="">
  <div>
    <navbar-vue></navbar-vue>
    <div class="container mt-5">
      <h1>Account</h1>
      <hr />

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="(index += 1)">
            <td>{{ index }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button
                type="button"
                class="btn btn-outline-warning btn-sm m-1"
                data-bs-toggle="modal"
                data-bs-target="#updateModal"
                data-bs-whatever="@fat"
                @click="getUserId(user.id)"
              >
                Edit
              </button>
              <div
                class="modal fade"
                id="updateModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Update User
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <label for="recipient-name" class="col-form-label"
                            >Name:</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="recipient-name"
                            v-bind:class="{ 'is-invalid': nameError }"
                            placeholder="Your Name"
                            v-model="findOneUser.name"
                          />
                         
                        </div>
                        <div class="mb-3">
                          <label for="recipient-name" class="col-form-label"
                            >Username:</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="recipient-name"
                            v-bind:class="{ 'is-invalid': nameError }"
                            placeholder="Your Username"
                            v-model="findOneUser.username"
                          />
                         
                        </div>
                        <div class="mb-3">
                          <label for="recipient-name" class="col-form-label"
                            >Email:</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="email"
                            placeholder="Your email"
                            v-model="findOneUser.email"
                          />
                         
                        </div>
                        
                        <div class="mb-3">
                          <label for="recipient-name" class="col-form-label"
                            >Passoword:</label
                          >
                          <input
                            type="password"
                            class="form-control"
                            id="password"
                            placeholder="Your Password"
                            v-model="password"
                          />
                         
                        </div>
                        <div class="mb-3">
                          <label for="recipient-name" class="col-form-label"
                            >Password Confirmation:</label
                          >
                          <input
                            type="password"
                            class="form-control"
                            id="password"
                            placeholder="Your Password COnfirmation"
                            v-model="passwordConfirmation"
                          />
                         
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        class="btn btn-warning"
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
                      <button
                        type="button"
                        class="btn btn-warning"
                        @click="updateUser"
                        v-else
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <toast-success-update-user-vue v-if="toast"></toast-success-update-user-vue>
  </div>
</template>
<script>
import NavbarVue from "./Navbar.vue";
import axios from "@/axios";
import ToastSuccessUpdateUserVue from "./Toast/ToastSuccessUpdateUser.vue";
import $ from "jquery";

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
      findOneUser: [],
      password: '',
      passwordConfirmation: '',
      updateId: ''
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios
        .get(`users/`, {
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

    getUserId(id) {
      axios
        .get("/users/" + id,{
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
          this.findOneUser = res.data;
          this.updateId = id
        })
        .catch((err) => {
          console.log(err);
        });
    },

    updateUser() {
      this.loading = true;
      axios
        .put(
          "users/" + this.updateId,
          {
            name: this.findOneUser.name,
            username: this.findOneUser.username,
            email: this.findOneUser.email,
            password: this.password,
            password_confirmation: this.passwordConfirmation
          },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.toast = true;
          $("[data-bs-dismiss=modal]").trigger({ type: "click" });
          setTimeout(() => (this.toast = false), 3000);
          this.getUser();
        })
        .catch((err) => {
          this.loading = false
          console.log(err);
        });
    },
  },
};
</script>
<style lang=""></style>
