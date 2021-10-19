import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About Me",
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import(/* webpackChunkName: "portfolio" */ "@/views/Portfolio.vue"),
  },
  {
    path: "/contact",
    name: "Contact Me",
    component: () => import(/* webpackChunkName: "contact" */ "@/views/Contact.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: () => import(/* webpackChunkName: "notfound" */ "@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  const routeIdMap = new Map([
    ["Home", 0],
    ["About Me", 1],
    ["Portfolio", 2],
    ["Contact Me", 3],
    ["Not Found", 4],
  ]);

  const toId = routeIdMap.get(to.name ? to.name.toString() : "Not Found");
  const fromId = routeIdMap.get(from.name ? from.name.toString() : "Not Found");

  to.meta.transitionName =
    (toId as number) > (fromId as number) ? "view-slide-ltr" : "view-slide-rtl";
});

export default router;
