import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    {
      path: "/flyer",
      component: () => import("../views/FlyerView.vue"),
    },
    {
      path: "/hardcover",
      component: () => import("../views/HardcoverView.vue"),
    },
    {
      path: "/stempel",
      component: () => import("../views/StempelView.vue"),
    },
    {
      path: "/poster-plakate",
      component: () => import("../views/PosterPlakateView.vue"),
    },
    {
      path: "/t-shirts",
      component: () => import("../views/TShirtsView.vue"),
    },
    {
      path: "/tragetaschen",
      component: () => import("../views/TragetaschenView.vue"),
    },
    {
      path: "/visitenkarten",
      component: () => import("../views/VisitenkartenView.vue"),
    },
    {
      path: "/broschueren-magazine",
      component: () => import("../views/BroschuerenMagazineView.vue"),
    },
    {
      path: "/kontakt",
      component: () => import("../views/KontaktView.vue"),
    },
    // Legacy URL-Weiterleitungen
    { path: "/Flyer%20%26%20Folder.html", redirect: "/flyer" },
    {
      path: "/Hardcover-B%C3%BCcher%20ab%2048%20Seiten.html",
      redirect: "/hardcover",
    },
    { path: "/T-Shirts.html", redirect: "/t-shirts" },
    { path: "/Tragetaschen.html", redirect: "/tragetaschen" },
    { path: "/category.htm", redirect: "/visitenkarten" },
    {
      path: "/Brosch%C3%BCren%20%26%20Magazine.html",
      redirect: "/broschueren-magazine",
    },
    { path: "/kontakt.htm", redirect: "/kontakt" },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
