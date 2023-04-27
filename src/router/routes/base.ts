import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

// const routes: Array<RouteRecordRaw>
export default [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/base/notfound.vue"),
    meta: {
      isHideNav: true,
      title: '404'
    }
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
  },
  {
    path: "/pinia",
    name: "pinia",
    component: () =>
      import(/* webpackChunkName: "pinia" */ "@/views/base/store.vue"),
  },
];
