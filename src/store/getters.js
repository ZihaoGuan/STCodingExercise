export default {
  getPostById: (state) => (id) => {
    return state.posts.find(post => post.id.toString() === id)
  }
}
