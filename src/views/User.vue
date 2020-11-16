<template>
  <div class = "container">
    <div class = "row justify-content-center">
      <div class = "col">
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
    },
    goToPath (id) {
      this.$router.push({ name: 'post', params: { id } })
    }
  },
  mounted: function () {
    console.log('user mounted')
  }
}

</script>

<style scoped>
.list-group-item:hover {
  cursor: pointer;
  background-color: lightgreen;
}
</style>
