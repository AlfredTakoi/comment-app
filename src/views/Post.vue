<template>
  <div class="container mt-5">
    <h1>Post Comments</h1>
    <div
      class="toast show align-items-center bg-success text-light border-0 position-fixed top-0 end-0 mt-5"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      v-if="toast"
    >
      <div class="d-flex">
        <div class="toast-body">Success Create Comment</div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>

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
          <th scope="col">Commenter</th>
          <th scope="col">Body</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in itemsComments" :key="(index += 1)">
          <td>{{ index }}</td>
          <td>{{ item.commenter }}</td>
          <td>{{ item.body }}</td>
          <td>
            <button
              type="button"
              class="btn btn-outline-warning btn-sm"
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
                          >Commenter:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="recipient-name"
                          v-model="findOneComment.commenter"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="message-text" class="col-form-label"
                          >Body:</label
                        >
                        <textarea
                          class="form-control"
                          id="message-text"
                          v-model="findOneComment.body"
                        ></textarea>
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
                  >Commenter:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  v-model="commenter"
                />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">Body:</label>
                <textarea
                  class="form-control"
                  id="message-text"
                  v-model="body"
                ></textarea>
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
              @click="createComment"
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
  </div>
</template>
<script>
import axios from "axios";
import $ from 'jquery'

export default {
  components: {},
  data() {
    return {
      itemsComments: [],
      findOneComment: [],
      body: "",
      commenter: "",
      no: 0,
      deleteId: null,
      updateId: null,
      modalShow: true,
      loading: false,
      toast: false
    };
  },

  mounted() {
    this.getComments();
  },
  methods: {
    createComment() {
      this.loading = true;
      axios
        .post("https://62aece663bbf46a352168744.mockapi.io/posts", {
          commenter: this.commenter,
          body: this.body,
        })
        .then((res) => {
          console.log(res);
          this.loading = false;
          $("[data-bs-dismiss=modal]").trigger({ type: "click" });
          setTimeout(this.toast = true, 5000)

          this.getComments();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getComments() {
      axios
        .get("https://62aece663bbf46a352168744.mockapi.io/posts")
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
        .get("https://62aece663bbf46a352168744.mockapi.io/posts/" + id)
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
      this.loading = true
      axios
        .put(
          "https://62aece663bbf46a352168744.mockapi.io/posts/" + this.updateId,
          {
            commenter: this.findOneComment.commenter,
            body: this.findOneComment.body,
          }
        )
        .then((res) => {
          console.log(res);
          this.loading = false
          $("[data-bs-dismiss=modal]").trigger({ type: "click" });
          this.getComments();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deleteComments() {
      this.loading = true
      axios
        .delete(
          "https://62aece663bbf46a352168744.mockapi.io/posts/" + this.deleteId
        )
        .then((res) => {
          console.log(res);
          this.loading = false
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
