import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import axios from "axios";
import {store} from "../store";
import requests from "../requests";

Vue.use(VueRouter);

// const baseUrl = "https://webdev-api.loftschool.com";


const baseUrl = requests.defaults.baseURL;

const guard = axios.create({baseUrl});

const router = new VueRouter({routes});

router.beforeEach(async (to, from, next) => {
    const isPublicRoute = to.matched.some(record => record.meta.public);
    const userIsLogged = store.getters["user/userIsLogged"];

    if (isPublicRoute === false && userIsLogged === false) {
      const token = localStorage.getItem("token");
      console.log(token)
      guard.defaults.headers["Authorization"] = `Bearer ${token}`;

      try {
        console.log('11111111111')
        const response = await guard.get("/user");
        store.commit("user/SET_USER", response.data.user);
        next();
      } catch(error) {
        console.log(error)
        router.push('/login');
        localStorage.removeItem("token");   
      }
    } else {
      next();
    }
  });


export default router;
// import Vue from "vue";
// import VueRouter from "vue-router";

// Vue.use(VueRouter);

// const router = new VueRouter({routes});

// router.beforeEach((to, from, next) => {

//   // next();
// })

// import about from "../components/about.vue";
// import appProjects from '../components/appProjects';
// import feedback from '../components/feedback';
// import login from '../components/login';

// const routes = [
//   {
//     path: "/",
//     component: about
//   },
//   {
//     path: "/projects",
//     component: appProjects
//   },
//   {
//     path: "/feedback",
//     component: feedback
//   },
//   {
//     path: "/login",
//     component: login
//   }
// ];

// export default new VueRouter({routes});