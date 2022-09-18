import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    routes,
  })


  export default router