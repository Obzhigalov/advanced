export default {
  namespaced: true,
  state: {
    skills: []
  },
  mutations: {
    SET_SKILLS(state, skills) {
      state.skills = skills
    }
  },
  actions: {
    async addSkill(store, newSkill) {
      try {
        console.log(localStorage.token)
        const response = await this.$axios.post('/skills', newSkill)
      } catch(error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    },
    async fetchSkills({commit}) {
      try {
        const {data: skills} = await this.$axios.get('/skills/153');
        console.log(skills);
        commit("SET_SKILLS", skills)
      } catch (error) {

      }
    }

  },
  getters: {}
}

