<template>
    <div class="container">
      <h1>
        {{ post.id }}
      </h1>
      <h1>
        {{ post.title }}
      </h1>
      {{ post.body }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Post',
  computed: {
    ...mapGetters([
      'getPostById'
    ]),
    post: function () {
      return this.getPostById(this.$route.params.id)
    }
  }
}
</script>
