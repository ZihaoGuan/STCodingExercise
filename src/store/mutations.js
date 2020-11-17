export default {
  appendPost: (state, postData) => {
    const newestPost = state.posts.reduce(function (prev, current) {
      return (prev.id > current.id) ? prev : current
    })
    const id = newestPost.id + 1
    state.posts.push({ ...postData, id })
  },
  deletePost: (state, id) => {
    state.posts = state.posts.filter(post => post.id !== id)
  }
}
