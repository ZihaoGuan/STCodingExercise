<template>
  <div class = "container">
    <div class = "row justify-content-center">
      <div class = "col">
        <ul class = "list-group">
          <li class = "list-group-item"
          v-for="post in postList"
          :key="post.id">
            <router-link :to="`/post/${post.id}`">
              {{post.title}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'User',
  computed: {
    ...mapState([
      'posts'
    ]),
    postList: function () {
      return this.posts.filter(this.checkId).sort((a, b) => (a.id < b.id) ? 1 : -1).slice(0, 10)
    }
  },
  data: function () {
    return {
    }
  },
  methods: {
    checkId (post) {
      return post.userId.toString() === this.$route.params.id
    }
  },
  mounted: function () {
    console.log('user mounted')
  }
}

</script>
