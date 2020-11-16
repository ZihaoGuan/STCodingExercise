<template>
  <div class = "container">
    <div class = "row justify-content-center">
      <div class = "col-6">
        <ul class = "list-group">
          <li class = "list-group-item"
          v-for="user in users"
          :key="user.id">
            <router-link :to="`/user/${user.id}`">
              {{user.name}}
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

  name: 'Home',
  computed: {
    ...mapState([
      'users'
    ])
  },
  mounted: function () {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.$store.state.users = jsonData
        // console.log(this.$store.state.users)
      })
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.$store.state.posts = jsonData
        // console.log(this.$store.state.posts)
      })
  }
}
</script>
