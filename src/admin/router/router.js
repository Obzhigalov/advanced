import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import about from "../components/about.vue";
import appProjects from '../components/appProjects';
import feedback from '../components/feedback';
import login from '../components/login';

const routes = [
  {
    path: "/",
    component: about
  },
  {
    path: "/projects",
    component: appProjects
  },
  {
    path: "/feedback",
    component: feedback
  },
  {
    path: "/login",
    component: login
  }
];

export default new VueRouter({routes});