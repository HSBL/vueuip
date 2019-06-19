import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/css",
      name: "css",
      component: () => import("./views/css.vue")
    },
    {
      path: "/js",
      name: "js",
      component: () => import("./views/js.vue"),
      children:[{
        path: "/js/",
        name: "photos",
        component: () => import("./components/result/Photos.vue"),
      },
      {
        path: "/js/collections",
        name: "collections",
        component: () => import("./components/result/Collections.vue")
      },
      {
        path: "/js/users",
        name: "users",
        component: () => import("./components/result/Users.vue")
      }]
    }
  ]
});
