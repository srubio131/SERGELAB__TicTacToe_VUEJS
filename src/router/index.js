import Vue from "vue";
import VueRouter from "vue-router";
import THome from "@/views/Home.vue";
import TGame from "@/views/Game.vue";
import TGameContainer from "@/containers/GameContainer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: THome
  },
  {
    path: "/game",
    name: "game",
    component: TGame
  },
  {
    path: "/game-container",
    name: "game-container",
    component: TGameContainer
  },
  {
    path: "*",
    component: THome
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;
