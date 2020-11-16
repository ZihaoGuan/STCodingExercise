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
  }
}
</script>
