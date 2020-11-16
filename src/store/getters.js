export default {
  getPostById: (state) => (id) => {
    return state.posts.find(post => post.id.toString() === id)
  },
  getPostCountByUserId: (state) => (userId) => {
    const count = state.posts.filter((post) => post.userId.toString() === userId.toString()).length
    return count
  }
}
