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
          import(
            /* webpackChunkName: "projects" */ "@/components/ProjectsComponent.vue"
          ),
      },
      {
        path: "about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/components/AboutMe.vue"),
      },
      {
        path: "work-experience",
        name: "Work Experience",
        component: () =>
          import(
            /* webpackChunkName: "contact" */ "@/components/WorkExperienceComponent"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop,
        behavior: "smooth",
      });
    }
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
