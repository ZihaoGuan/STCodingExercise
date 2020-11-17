<template>
  <div class = "container">
    <div class = "row justify-content-center">
      <div class = "col-6">
        <h2>
          USERS
        </h2>
        <ul class = "list-group">
          <li class = "list-group-item d-flex justify-content-between"
          v-for="user in users"
          :key="user.id"
          @click.prevent="goToPath(`${user.id}`, user)">
            {{user.name}}
            <span class="badge badge-primary badge-pill">
              {{getPostCountByUserId(user.id)}}
            </span>
          </li>
        </ul>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {

  name: 'Home',
  computed: {
    ...mapState([
      'users'
    ]),
    ...mapGetters([
      'getPostCountByUserId'
    ])
  },
  methods: {
    goToPath (id, user) {
      this.$router.push({ name: 'user', params: { id, user } })
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
