export default {
  addPost: ({ commit }, payload) => {
    commit('appendPost', payload)
  },
  deletePost: ({ commit }, id) => {
    commit('deletePost', id)
  }
}
