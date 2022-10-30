import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Recipe from "../views/Recipe.vue";
import Results from "../views/Results.vue";

const routes = [
  {
    path: "/recipe/:id",
    component: Recipe,
    name: "Recipe",
  },
  {
    path: "/results",
    component: Results,
    name: "Results",
  },
  {
    path: "/",
    component: Home,
    name: "Home",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
