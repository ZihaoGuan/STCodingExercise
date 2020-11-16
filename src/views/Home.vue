<template>
  <div class = "container">
    <div class = "row justify-content-center">
      <div class = "col-6">
        <ul class = "list-group">
          <li class = "list-group-item text-left"
          v-for="user in users"
          :key="user.id"
          @click.prevent="goToPath(`${user.id}`)">
            {{user.name}}
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
  methods: {
    goToPath (id) {
      this.$router.push({ name: 'user', params: { id } })
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
