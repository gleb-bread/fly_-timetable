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
    meta: { requiresAuth: true, layout: "page" },
    beforeEnter: LoadingAPI.Flights.__init__,
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
