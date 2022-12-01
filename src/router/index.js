import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
import Foodweb from "../pages/Foodweb.vue"
import Drink from "../pages/Drink.vue"
import Presenter from "../pages/Presenter.vue"

const routes = [{
    path: "/",
    component: Home,
    name: "Home",
},{
    path: "/about",
    component: About,
    name: "About",
},{
  path: "/Foodweb",
  component: Foodweb,
  name: "Foodweb",
},{
  path: "/Drink",
  component: Drink,
  name: "Drink",

},{
  path: "/Presenter",
  component: Presenter,
  name: "Presenter",
}]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth'
        };
      }
      return { x: 0, y: 0 };  // Go to the top of the page if no hash
    },
    routes,
  });
  
  export default router;

  