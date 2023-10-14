// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "projects",
        name: "Projects",
        component: () =>
          import(/* webpackChunkName: "projects" */ "@/views/ProjectsView.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
      },
      {
        path: "contact",
        name: "Contact",
        component: () =>
          import(/* webpackChunkName: "contact" */ "@/views/ContactView"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
