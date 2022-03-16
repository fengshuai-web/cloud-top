import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "formDesign"
    },
    {
      path: "/formDesign",
      name: "formDesign",
      component: () => import("../views/index.vue")
    }
  ]
});
