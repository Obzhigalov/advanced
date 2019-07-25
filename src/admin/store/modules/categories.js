export default {
  namespaced: true,
  state: {
    categoriesList: []
  },
  mutations: {
    SET_CATEGORIES(state, newCategoriesList) {
      state.categoriesList = newCategoriesList
    }
  },
  actions: {
    async addCategory(store, newCategory) {
      try {
        console.log(newCategory)
        const response = await this.$axios.post('/categories', newCategory)
        console.log(response)
      } catch {
        error.response.data.error || error.response.data.message
      }
    },
    async fetchCategories({commit}) {
      const response = await this.$axios.get('/categories/153')
      // var createCategoryArray = [];
      // // for(var i = 0; i < response.data.length; i++) {
      // //   createCategoryArray.push(response.data[i].category);
      // // }
      commit("SET_CATEGORIES", response)
    }
  },
  getters: {},
}
