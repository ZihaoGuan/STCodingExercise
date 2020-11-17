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
        <ul class = "list-group">
          <li class = "list-group-item text-left"
          v-for="post in postList"
          :key="post.id"
          @click.prevent="goToPath(`${post.id}`)">
            {{post.title}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
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
      user: undefined
    }
  },
  methods: {
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
      return this.getUserById(this.userId)
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
