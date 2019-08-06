import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import skills from "./modules/skills";
import categories from "./modules/categories";
import user from "./modules/user";
import feedbacks from "./modules/feedbacks";
import projects from "./modules/projects";

export const store = new Vuex.Store({
  modules: {
    skills,
    categories,
    user,
    feedbacks,
    projects
  }
});