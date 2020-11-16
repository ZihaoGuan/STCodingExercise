export default {
  getPostById: (state) => (id) => {
    return state.posts.find(post => post.id.toString() === id.toString())
  },
  getPostCountByUserId: (state) => (userId) => {
    const count = state.posts.filter((post) => post.userId.toString() === userId.toString()).length
    return count
  },
  getUserById: (state) => (id) => {
    return state.users.find(user => user.id.toString() === id.toString())
  }
}
