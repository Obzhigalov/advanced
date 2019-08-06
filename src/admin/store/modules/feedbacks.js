export default {
  namespaced: true,
  state: {
    feedbacks: [],
    currentFeedback: {}
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
    EDIT_FEEDBACK(state, editFeedback) {
      state.feedbacks = state.feedbacks.map(feedback => {
        return feedback.id === editFeedback.id ? editFeedback : feedback;
      })
    },
    SET_CURRENT_FEEDBACK(state, currentFeedbackId) {
      state.currentFeedback = state.feedbacks.filter(
        feedback => feedback.id === currentFeedbackId
      )[0];
    }
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
    async editFeedback({commit}, editFeedback) {
      var data = new FormData();
      data.append('photo', editFeedback.photo);
      data.append('author', editFeedback.author);
      data.append('occ', editFeedback.occ);
      data.append('text', editFeedback.text);
      try {
        console.log(editFeedback)
        const response = await this.$axios.post(`/reviews/${editFeedback.id}`, data);
        console.log(response.data.review)
        commit("EDIT_FEEDBACK", response.data.review)
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
    }
  },
  getters: {

  },
}
