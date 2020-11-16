<template>
    <div class="container">
      <div class="jumbotron" v-if="post != undefined && getUserById(post.userId)!= undefined">
        <h1>
          {{ post.title }}
        </h1>
        <br>
        <h5>
          <router-link :to="`/user/${post.userId}`">
            {{ getUserById(post.userId).name}}
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
  computed: {
    ...mapGetters([
      'getPostById',
      'getUserById'
    ]),
    post: function () {
      return this.getPostById(this.$route.params.id)
    }
  }
}
</script>
