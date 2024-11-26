import { type RouteRecordRaw } from "vue-router";
import { initPages } from "./pages";
import { RoutersNames } from "./routersNames.enum.d";
import { LoadingAPI } from "./loading";

const Components = initPages();

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: RoutersNames.PAGE,
    component: () => Components.page,
    meta: { requiresAuth: true },
    beforeEnter: LoadingAPI.Flights.__init__,
  },
  {
    path: "/cart",
    name: RoutersNames.CART,
    component: () => Components.cart,
    meta: { requiresAuth: true },
    beforeEnter: LoadingAPI.Cart.__init__,
  },
  {
    path: "/application",
    name: RoutersNames.APPLICATION,
    component: () => Components.application,
    meta: { requiresAuth: true },
    beforeEnter: LoadingAPI.Application.__init__,
  },
  {
    path: "/reg",
    name: RoutersNames.REG,
    component: () => Components.reg,
  },
  {
    path: "/login",
    name: RoutersNames.LOGIN,
    component: () => Components.login,
  },
];
