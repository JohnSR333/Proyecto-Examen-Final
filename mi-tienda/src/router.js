import { createRouter, createWebHistory } from "vue-router";
import LoginView from "./views/LoginView.vue";
import ProductsView from "./views/ProductsView.vue";
import UsersView from "./views/UsersView.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: LoginView },
  { path: "/productos", component: ProductsView, meta: { requiresAuth: true } },
  { path: "/usuarios", component: UsersView, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem("token");

  if (to.meta.requiresAuth && !token) {
    next("/login");
  } else {
    next();
  }
});

export default router;
