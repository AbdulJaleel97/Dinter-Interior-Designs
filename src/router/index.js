import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: "Dinter - Furniture",
    },
  },
  {
    name: "projects",
    path: "/projects",
    component: () => import("@/views/ProjectsView.vue"),
    meta: {
      title: "Dinter - Projects",
    },
  },
  {
    name: "project",
    path: "/projects/:link",
    component: () => import("@/views/DesignDetails.vue"),
    meta: {
      title: "Dinter - Luxury Furniture",
    },
  },
  {
    name: "blogs",
    path: "/blogs",
    component: () => import("@/views/AllBlogsView.vue"),
    meta: {
      title: "Dinter - Blogs",
    },
  },
  {
    name: "blog",
    path: "/blogs/:link",
    component: () => import("@/views/BlogDetails.vue"),
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import("@/views/ContactView.vue"),
    meta: {
      title: "Dinter - Contact",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to) => {
  document.title = to.meta.title;
});

export default router;
