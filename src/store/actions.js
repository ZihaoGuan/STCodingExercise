export default {
  addPost: ({ commit }, payload) => {
    commit('appendPost', payload)
  }
}
