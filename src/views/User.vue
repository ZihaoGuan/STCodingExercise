<template>
  <div class = "container">
    <div class = "row">
      <div class = "col">
        <div class = "jumbotron text-left" v-if="getUser() != undefined">
          <h2>
            {{user.name}}
          </h2>
          <p class = "">
            <b>ID:</b> {{user.id}}
          </p>
          <p>
            <b>username:</b> {{user.username}}
          </p>
          <p>
            <b>email:</b> {{user.email}}
          </p>
          <p>
            <b>address:</b>
            <br>
            {{user.address.street}}<br>
            {{user.address.suite}}<br>
            {{user.address.city}}<br>
            {{user.address.zipcode}}<br>
          </p>
          <p>
            <b>phone:</b> {{user.phone}}
          </p>
          <p>
            <b>website:</b> {{user.website}}
          </p>
        </div>
        <hr>
        <h1>
          POSTS
        </h1>
        <button @click="toggleForm" class ="btn btn-primary mb-2">Add New Post</button>
        <form @submit.prevent="handleSubmit" v-if="showForm" >
          <div class = "alert alert-danger row" role="alert" v-if="showAlert">
            Please fill in title and content.
          </div>
          <div class="form-group row">
            <label for="posttitle" class="col-sm-2 col-form-label text-left">Title</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="posttitle" placeholder="Title" v-model="formData.title">
            </div>
          </div>
          <div class="form-group row">
            <label for="posttext" class="col-sm-2 col-form-label text-left">Content</label>
            <div class="col-sm-10">
              <textarea class="form-control" id="posttext" rows="3" v-model="formData.body"></textarea>
            </div>
          </div>
          <div class="form-group row">
            <div class="col">
              <button type="submit" class="btn btn-primary">Add</button>
            </div>
          </div>
        </form>
        <ul class = "list-group">
          <li class = "list-group-item text-left"
          v-for="post in postList"
          :key="post.id"
          @click.prevent="goToPath(`${post.id}`)">
            {{post.title}}
          </li>
        </ul>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
export default {
  name: 'User',
  computed: {
    ...mapState([
      'posts',
      'users'
    ]),
    ...mapGetters([
      'getUserById'
    ]),
    postList: function () {
      return this.posts.filter(this.checkId).sort((a, b) => (a.id < b.id) ? 1 : -1).slice(0, 10)
    }
  },
  data: function () {
    return {
      userId: this.$route.params.id,
      user: undefined,
      showForm: false,
      showAlert: false,
      formData: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addPost'
    ]),
    checkId (post) {
      return post.userId.toString() === this.$route.params.id
    },
    goToPath (id) {
      this.$router.push({ name: 'post', params: { id } })
    },
    getUser () {
      if (this.user === undefined) {
        this.user = this.getUserById(this.userId)
      }
      return this.user
    },
    toggleForm () {
      this.showForm = !this.showForm
    },
    handleSubmit () {
      if (this.formData.title === '' || this.formData.body === '') {
        this.showAlert = true
        return
      }
      this.showAlert = false
      this.addPost({ ...this.formData, userId: this.userId })
      this.formData = {
        title: '',
        body: ''
      }
      this.toggleForm()
    }
  }
}

</script>

<style scoped>
.list-group-item:hover {
  cursor: pointer;
  background-color: lightgreen;
}
</style>
