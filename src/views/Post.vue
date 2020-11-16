<template>
    <div>
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
      console.log('hey')
      return this.getPostById(this.$route.params.id)
    }
  }
}
</script>
