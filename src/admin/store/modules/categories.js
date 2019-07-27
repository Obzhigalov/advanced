export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },
    ADD_CATEGORY(state, category) {
      state.categories.unshift(category)
    },
    DELETE_CATEGORY(state, categoryId) {
      state.categories = state.categories.filter(category => category.id != categoryId);
    }
  },
  actions: {
    async addCategory({commit}, newCategory) {
      try {
        const response = await this.$axios.post('/categories', newCategory)

        commit("ADD_CATEGORY", response.data)
      } catch {
        error.response.data.error || error.response.data.message
      }
    },
    async fetchCategories({commit}) {
      try {
        const response = await this.$axios.get('/categories/153')
      // var createCategoryArray = [];
      // // for(var i = 0; i < response.data.length; i++) {
      // //   createCategoryArray.push(response.data[i].category);
      // // }
      commit("SET_CATEGORIES", response.data)
      } catch {

      }
    },
    async deleteCategory({commit}, categoryId) {
      try {
        const response = await this.$axios.delete(`/categories/${categoryId}`)

        commit("DELETE_CATEGORY", categoryId)
      } catch {

      }
    }
  },
  getters: {},
}
