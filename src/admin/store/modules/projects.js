export default {
  namespaced: true,
  state: {
    projects: [],
    currentProject: {}
  },
  mutations: {
    FETCH_PROJECTS(state, projects) {
      state.projects = projects
    },
    ADD_PROJECT(state, project) {
      state.projects.push(project)
    },
    EDIT_PROJECT(state, editedProject) {
      state.projects = state.projects.map(project => {
        return project.id === editedProject.id ? editedProject : project;
      })
    },
    DELETE_PROJECT(state, projectId) {
      state.projects = state.projects.filter(project => project.id != projectId);
    },
    SET_CURRENT_PROJECT(state, currentProjectId) {
      state.currentProject = state.projects.filter(
        project => project.id === currentProjectId
      )[0];
    }
  },
  actions: {
    async addProject({commit}, addProject) {
      try {
        console.log(addProject)
        const response = await this.$axios.post('/works', addProject)
        console.log(response.data)
        commit("ADD_PROJECT", response.data)
      } catch (error) {
        error.response.data.error || error.response.data.message
      }
    },
    async editProject({commit}, editProject) {
      console.log(editProject)
      var data = new FormData();
      data.append('photo', editProject.photo);
      data.append('title', editProject.title);
      data.append('techs', editProject.techs);
      data.append('description', editProject.description);
      data.append('link', editProject.link);
      try {
        const response = await this.$axios.post(`/works/${editProject.id}`, data);
        console.log(response.data)
        commit("EDIT_PROJECT", response.data.work)
      } catch {

      }
    },
    async deleteProject({commit}, projectId) {
      try {
        const response = await this.$axios.delete(`/works/${projectId}`)

        commit("DELETE_PROJECT", projectId)
      } catch {

      }
    },
    async fetchProjects({commit}) {
      try {
        const response = await this.$axios.get('/works/153')
        console.log(response.data)
        commit("FETCH_PROJECTS", response.data)
      } catch (error) {
        error.response.data.error || error.response.data.message
      }
    }
  },
  getters: {

  },
}
