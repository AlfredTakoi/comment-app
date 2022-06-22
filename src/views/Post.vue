<template>
  <navbar-vue></navbar-vue>

  <div class="container mt-5">
    <h1>Post Comments</h1>

    <hr />
    <button
      type="button"
      class="btn btn-primary btn-sm float-end"
      data-bs-toggle="modal"
      data-bs-target="#createModal"
    >
      Create Comment
    </button>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Comment</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in itemsComments" :key="(index += 1)">
          <td>{{ index }}</td>
          <td>{{ item.commenter }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.body }}</td>
          <td>
            <button
              type="button"
              class="btn btn-outline-warning btn-sm m-1"
              data-bs-toggle="modal"
              data-bs-target="#updateModal"
              data-bs-whatever="@fat"
              @click="getCommentsId(item.id)"
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
                      Update Comment
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
                <input type="text" class="form-control" id="recipient-name" v-bind:class="{ 'is-invalid': nameError }" v-model="findOneComment.commenter" placeholder="Your Name"/>
                <div class="invalid-feedback" id="feedback-1" v-if="errors[0]">
									{{ errors[0].message }}
								</div>
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label"
                  >Email:</label
                >
                <input type="text" class="form-control" v-bind:class="{ 'is-invalid': emailError }" id="email" placeholder="Your email" v-model="findOneComment.email">
								<div class="invalid-feedback" id="feedback-2" v-if="errors[1]">
									{{ errors[1].message }}
								</div>
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label"
                  >Comment:</label
                >
                <textarea class="form-control" v-bind:class="{ 'is-invalid': commentError }" id="comment" placeholder="Your comment" v-model="findOneComment.body"></textarea>
								<div class="invalid-feedback" id="feedback-3" v-if="errors[2]">
									{{ errors[2].message }}
								</div>
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
                      @click="updateComments"
                      v-else
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              class="btn btn-outline-danger btn-sm ml-1"
              data-bs-toggle="modal"
              data-bs-target="#modelDelete"
              @click="findIdComments(item.id)"
            >
              Delete
            </button>
            <!-- Modal -->
          </td>
        </tr>
      </tbody>
    </table>

    <div
      class="modal fade"
      id="createModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create Comment</h5>
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
                <input type="text" class="form-control" id="recipient-name" v-bind:class="{ 'is-invalid': nameError }" v-model="name" placeholder="Your Name"/>
                <div class="invalid-feedback" id="feedback-1" v-if="errors[0]">
									{{ errors[0].message }}
								</div>
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label"
                  >Email:</label
                >
                <input type="text" class="form-control" v-bind:class="{ 'is-invalid': emailError }" id="email" placeholder="Your email" v-model="email">
								<div class="invalid-feedback" id="feedback-2" v-if="errors[1]">
									{{ errors[1].message }}
								</div>
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label"
                  >Comment:</label
                >
                <textarea class="form-control" v-bind:class="{ 'is-invalid': commentError }" id="comment" placeholder="Your comment" v-model="comment"></textarea>
								<div class="invalid-feedback" id="feedback-3" v-if="errors[2]">
									{{ errors[2].message }}
								</div>
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
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="createComment"
              v-else
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="modelDelete"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      v-if="modalShow"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Please Confirmation
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">Are you sure you delete this data?</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              class="btn btn-danger"
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
              class="btn btn-danger"
              @click="deleteComments"
              v-else
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <toast-success-vue v-if="toastSuccess"></toast-success-vue>
    <toast-success-update-vue v-if="toastSuccessUpdate"></toast-success-update-vue>
    <toast-success-delete-vue v-if="toastSuccessDelete"></toast-success-delete-vue>
  </div>
</template>
<script>
import axios from "@/axios";
import $ from "jquery";
import NavbarVue from "./Navbar.vue";
import ToastSuccessVue from "./Toast/ToastSuccess.vue";
import ToastSuccessUpdateVue from "./Toast/ToastSuccessUpdate.vue";
import ToastSuccessDeleteVue from './Toast/ToastSuccessDelete.vue';

export default {
  components: {
    NavbarVue,
    ToastSuccessVue,
    ToastSuccessUpdateVue,
    ToastSuccessDeleteVue
  },
  data() {
    return {
      itemsComments: [],
      findOneComment: [],
      deleteId: null,
      updateId: null,
      modalShow: true,
      loading: false,
      toastSuccess: false,
      toastSuccessUpdate: false,
      toastSuccessDelete: false,
      commenterError: false,
      bodyError: false,
      name: "",
      email: "",
      comment: "",
      nameError: false,
      emailError: false,
      commentError: false,
      errors: [],
    };
  },

  mounted() {
    this.getComments();
  },
  methods: {
    validate() {
      this.errors = [];
      var len = this.name.length;
      if (len == 0) {
        this.nameError = true;
        this.errors.push({
          message: "Commenter Cannot be Empty",
        });
      }
      if(this.email.length < 10 || this.email.search('@') == -1) {
        this.emailError = true;
        this.errors.push({
          'message': 'Please provide a valid email address.'
        });
      }
      // comment validate
      if (this.comment.length == 0) {
        this.commentError = true;
        this.errors.push({
          field: "comment",
          message: "Body Cannot be Empty",
        });
      }
    },

    createComment() {
      this.loading = true;
      if(this.validate()==true){

        axios
          .post(
            "comments",
            {
              commenter: this.name,
              email: this.email,
              body: this.comment,
            }
          )
          .then((res) => {
            console.log(res);
            this.loading = false
            $("[data-bs-dismiss=modal]").trigger({ type: "click" });
            this.toastSuccess = true;
            this.commenter = null;
            this.body = null;
            setTimeout(() => (this.toastSuccess = false), 3000);
            this.getComments();
          })
          .catch((err) => {
            this.loading = false
            console.log(err);
          });
      } else{
        this.loading = false
      }
    },

    getComments() {
      axios
        .get("comments")
        .then((res) => {
          console.log(res.data);
          this.itemsComments = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    findIdComments(id) {
      this.deleteId = id;
      console.log(this.deleteId);
    },

    getCommentsId(id) {
      axios
        .get("/comments/" + id)
        .then((res) => {
          console.log(res);
          this.findOneComment = res.data;
          this.updateId = id;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    updateComments() {
      this.loading = true;
      axios
        .put(
          "/comments/" + this.updateId,
          {
            commenter: this.findOneComment.commenter,
            email: this.findOneComment.email,
            body: this.findOneComment.body,
          }
        )
        .then((res) => {
          console.log(res);
          this.loading = false;
          $("[data-bs-dismiss=modal]").trigger({ type: "click" });
          this.toastSuccessUpdate = true;
          setTimeout(() => (this.toastSuccessUpdate = false), 3000);
          this.getComments();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deleteComments() {
      this.loading = true;
      axios
        .delete("/comments/" + this.deleteId)
        .then((res) => {
          console.log(res);
          this.loading = false;
          this.toastSuccessDelete = true;
          setTimeout(() => (this.toastSuccessDelete = false), 3000);
          $("[data-bs-dismiss=modal]").trigger({ type: "click" });
          this.getComments();
          this.delete = null;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
