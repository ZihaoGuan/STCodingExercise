<template>
    <div class="container"  v-if="getPost() !== undefined && getAuthor() !== undefined">
      <div class="jumbotron">
        <h1>
          {{ thisPost.title }}
        </h1>
        <br>
        <h5>
          <router-link :to="`/user/${thisPost.userId}`">
            {{ author.name}}
          </router-link>
        </h5>
        <br>
        <p class = "text-left">
          {{ thisPost.body }}
        </p>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Post',
  props: [
    'id',
    'user',
    'post'
  ],
  data: function () {
    return {
      thisPost: undefined,
      aurhor: undefined
    }
  },
  computed: {
    ...mapGetters([
      'getPostById',
      'getUserById'
    ])
  },
  methods: {
    getPost () {
      if (this.thisPost === undefined) {
        this.thisPost = this.getPostById(this.id)
      }
      return this.thisPost
    },
    getAuthor () {
      if (this.author === undefined) {
        this.author = this.getUserById(this.thisPost.userId)
      }
      return this.author
    }
  },
  mounted () {
    this.thisPost = this.post
    this.aurhor = this.user
  }
}
</script>
