<template>
  <div class = "container">
    <div class = "row justify-content-center">
      <div class = "col-6">
        <ul class = "list-group">
          <li class = "list-group-item">1</li>
          <li class = "list-group-item">2</li>
          <li class = "list-group-item">3</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
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
