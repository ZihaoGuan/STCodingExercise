<template>
    <div class="container">
      <div class="jumbotron" v-if="getPost() != undefined && getAuthor() != undefined">
        <h1>
          {{ post.title }}
        </h1>
        <br>
        <h5>
          <router-link :to="`/user/${post.userId}`">
            {{ author.name}}
          </router-link>
        </h5>
        <br>
        <p class = "text-left">
          {{ post.body }}
        </p>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Post',
  data: function () {
    return {
      post: undefined,
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
      if (this.post === undefined) {
        this.post = this.getPostById(this.$route.params.id)
      }
      return this.post
    },
    getAuthor () {
      if (this.author === undefined) {
        this.author = this.getUserById(this.post.userId)
      }
      return this.author
    }
  }
}
</script>
