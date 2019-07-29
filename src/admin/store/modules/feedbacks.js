export default {
  namespaced: true,
  state: {
    feedbacks: []
  },
  mutations: {
    FETCH_FEEDBACKS(state, feedbacks) {
      state.feedbacks = feedbacks
    },
    ADD_FEEDBACK(state, feedback) {
      state.feedbacks.push(feedback)
    },
    DELETE_FEEDBACK(state, feedbackId) {
      state.feedbacks = state.feedbacks.filter(feedback => feedback.id != feedbackId);
    },
  },
  actions: {
    async addFeedback({commit}, feedback) {
      try {
        console.log(feedback)
        const response = await this.$axios.post('/reviews', feedback)

        commit("ADD_FEEDBACK", response.data)
      } catch (error) {
        error.response.data.error || error.response.data.message
      }
    },
    async deleteFeedback({commit}, feedbackId) {
      try {
        const response = await this.$axios.delete(`/reviews/${feedbackId}`)

        commit("DELETE_FEEDBACK", feedbackId)
      } catch {

      }
    },
    async fetchFeedbacks({commit}) {
      try {
        const response = await this.$axios.get('/reviews/153')
        console.log(response.data)
        commit("FETCH_FEEDBACKS", response.data)
      } catch (error) {
        error.response.data.error || error.response.data.message
      }
    },
  },
  getters: {},
}
