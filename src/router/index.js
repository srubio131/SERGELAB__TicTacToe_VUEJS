import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Game from "../views/Game.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Game
  },
  {
    path: "/game",
    name: "game",
    component: Game
  }
];

const router = new VueRouter({
  routes
});

export default router;
