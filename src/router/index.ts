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
    component: () => import(/* webpackChunkName: "about" */ "@/views/about/About.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import(/* webpackChunkName: "portfolio" */ "@/views/portfolio/Portfolio.vue"),
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
  scrollBehavior(to, from, savedPosition) {
    let position = { left: 0, top: 0 };

    // Keep scroll position when using browser buttons
    if (savedPosition) {
      position = savedPosition;
    }

    // Workaround for transitions scrolling to the top of the page
    // However, there are still some problems being fixed by the vue team
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(position);
      }, 400);
    });
  },
});

router.afterEach((to, from) => {
  const routeIdMap = new Map([
    ["Home", 0],
    ["About Me", 1],
    ["Portfolio", 2],
    ["Contact Me", 3],
  ]);

  const toId = routeIdMap.get(to.name ? to.name.toString() : "");
  const fromId = routeIdMap.get(from.name ? from.name.toString() : "");

  to.meta.transitionName =
    (toId as number) > (fromId as number)
      ? "view-slide-ltr"
      : (toId as number) < (fromId as number)
      ? "view-slide-rtl"
      : "";
});

export default router;
