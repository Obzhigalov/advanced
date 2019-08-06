export default [
  {
    path: "/",
    component: () => import("../components/about.vue"),
    meta: {
      title: "Блок «Обо мне»"
    }
  },
  {
    path: "/projects",
    component: () => import("../components/appProjects.vue"),
    meta: {
      title: "Блок «Работы»"
    }
  },
  {
    path: "/feedback",
    component: () => import("../components/feedback.vue"),
    meta: {
      title: "Блок «Отзывы»"
    }
  },
  {
    path: "/login",
    component: () => import("../components/login.vue"),
    meta: {
      public: true
    }
  }
];