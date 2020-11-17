<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home (USER LIST)</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
export default {
  created: function () {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.$store.state.users = jsonData
      })
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.$store.state.posts = jsonData
      })
  }
}
</script>
